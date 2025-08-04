export class Webviewer {
    canvas;
    context;
    adapter = null;
    device = null;
    encoder = null;
    constructor(canvas) {
        this.canvas = canvas;
        const context = canvas.getContext("webgpu");
        if (!context) {
            throw new Error("WebGPU context not available");
        }
        this.context = context;
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
        const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device: this.device,
            format: canvasFormat,
        });
        this.encoder = this.device.createCommandEncoder();
        const renderPassDescriptor = {
            colorAttachments: [{
                    view: this.context.getCurrentTexture().createView(),
                    loadOp: "clear",
                    clearValue: { r: 0, g: 0, b: 0, a: 0 },
                    storeOp: "store",
                }]
        };
        const pass = this.encoder.beginRenderPass(renderPassDescriptor);
        pass.end();
        const commandBuffer = this.encoder.finish();
        this.device.queue.submit([commandBuffer]);
    }
    // Getter methods for accessing WebGPU objects
    getDevice() {
        return this.device;
    }
    getAdapter() {
        return this.adapter;
    }
    getContext() {
        return this.context;
    }
}
//# sourceMappingURL=main.js.map