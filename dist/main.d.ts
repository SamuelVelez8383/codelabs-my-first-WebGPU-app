import { GPUCanvasContext, GPUAdapter, GPUDevice } from "@webgpu/types";
export declare class Webviewer {
    private canvas;
    private context;
    private adapter;
    private device;
    private encoder;
    constructor(canvas: HTMLCanvasElement);
    init(): Promise<void>;
    getDevice(): GPUDevice | null;
    getAdapter(): GPUAdapter | null;
    getContext(): GPUCanvasContext;
}
//# sourceMappingURL=main.d.ts.map