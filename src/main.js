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
                storeOp: "store",
            }]
        });
        pass.end();
        const commandBuffer = this.encoder.finish();
        this.device.queue.submit([commandBuffer]);
    }
}