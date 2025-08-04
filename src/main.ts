export class Webviewer {
    private canvas: HTMLCanvasElement;
    private context: GPUCanvasContext;
    private adapter: GPUAdapter | null = null;
    private device: GPUDevice | null = null;
    private encoder: GPUCommandEncoder | null = null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const context = this.canvas.getContext("webgpu");
        if (!context) {
            throw new Error("WebGPU context not available");
        }
        this.context = context;
    }

    async init(): Promise<void> {
        if (!navigator.gpu) {
            throw new Error("WebGPU not supported on this browser.");
        }

        this.adapter = await navigator.gpu.requestAdapter();
        if (!this.adapter) {
            throw new Error("No appropriate GPUAdapter found.");
        }

        this.device = await this.adapter.requestDevice();

        const canvasFormat: GPUTextureFormat = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device: this.device,
            format: canvasFormat,
        });

        this.encoder = this.device.createCommandEncoder();
        
        const renderPassDescriptor: GPURenderPassDescriptor = {
            colorAttachments: [{
                view: this.context.getCurrentTexture().createView(),
                loadOp: "clear",
                clearValue: { r: 0, g: 0, b: 0, a: 0 },
                storeOp: "store",
            }]
        };

        const pass: GPURenderPassEncoder = this.encoder.beginRenderPass(renderPassDescriptor);
        pass.end();
        
        const commandBuffer: GPUCommandBuffer = this.encoder.finish();
        this.device.queue.submit([commandBuffer]);

        this.canvas.addEventListener("pointerdown", (event) => {
            console.log("Pointer down", event);
        });
    }

    // Getter methods for accessing WebGPU objects
    public getDevice(): GPUDevice | null {
        return this.device;
    }

    public getAdapter(): GPUAdapter | null {
        return this.adapter;
    }

    public getContext(): GPUCanvasContext {
        return this.context;
    }
}