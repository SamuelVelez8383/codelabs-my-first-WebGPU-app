export class Webviewer {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("webgpu");
    }

    async init() {
        if (!navigator.gpu) {
            throw new Error("WebGPU not supported on this browser.");
        }
        this.adapter = await navigator.gpu.requestAdapter();
        if (!this.adapter) {
            throw new Error("No appropriate GPUAdapter found.");
        }
        this.device = await this.adapter.requestDevice();

        const context = this.canvas.getContext("webgpu");
        const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
        context.configure({
            device: this.device,
            format: canvasFormat,
        });
        this.encoder = this.device.createCommandEncoder();
        const pass = this.encoder.beginRenderPass({
            colorAttachments: [{
                view: context.getCurrentTexture().createView(),
                loadOp: "clear",
                clearValue: { r: 0, g: 0, b: 0, a: 0 },
                storeOp: "store",
            }]
        });
        pass.end();
        this.device.queue.submit([this.encoder.finish()]);
    }
}