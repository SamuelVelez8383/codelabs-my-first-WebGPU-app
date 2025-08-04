# WebGPU Learning Journey - Project Command Center

## 📚 Tutorial Progress
**Source:** [Your First WebGPU App - Google Codelabs](https://codelabs.developers.google.com/your-first-webgpu-app#2)

### Completed Sections
- [x] **Step 1:** What you'll build
- [x] **Step 2:** What you'll learn 
- [x] **Step 3:** What you'll need
- [x] **Step 4:** Set up your development environment
- [x] **Step 5:** Initialize the project
- [ ] **Step 6:** Draw your first triangle
- [ ] **Step 7:** Create the compute shader
- [ ] **Step 8:** Create the render pipeline
- [ ] **Step 9:** Create the compute pipeline
- [ ] **Step 10:** Render the simulation

### Extended Learning Steps
- [ ] **Step 11:** Transition to 3D Rendering
- [ ] **Step 12:** Implement 3D Camera System
- [ ] **Step 13:** Add Keyboard & Mouse Controls (OrbitControls-style)
- [ ] **Step 14:** Advanced 3D Scene Management

---

## 🧠 Key Learnings & Concepts

### WebGPU Fundamentals
- **What is WebGPU?**
  - A graphics API for the web that allows the browser to access the GPU. Uses either Vulkan, Direct3D 12, or Metal as it's underlying powering system.
  - Main graphics web standard intended to supersede WebGL.
  - Seems to be part of the navigator API (?). Not very sure about this.
  - API Access: WebGPU is accessed through navigator.gpu - this is the entry point to all WebGPU functionality. Always check if (navigator.gpu) for feature detection
  - 

- **WebGPU vs WebGL**
  - " One big difference in how WebGPU works compared to WebGL is that because canvas configuration is separate from device creation you can have any number of canvases that are all being rendered by a single device! This will make certain use cases, like multi-pane 3D editors, much easier to develop."

### Core WebGPU Concepts
- **GPU Adapter & Device**
  - The adapter seems to be a representation of a specific part of GPU hardware
  - Important to consider that sometimes an adapter might not be found. "If no appropriate adapters can be found, the returned adapter value might be null, so you want to handle that possibility. It might happen if the user's browser supports WebGPU but their GPU hardware doesn't have all the features necessary to use WebGPU. Most of the time it's OK to simply let the browser pick a default adapter, as you do here, but for more advanced needs there are arguments that can be passed to requestAdapter() that specify whether you want to use low-power or high-performance hardware on devices with multiple GPUs (like some laptops)."
  - The GPUDevice is the main interface through which most of the interaction with the GPU happens.
  - When requesting both the adapter and device, there is an option to pass in options to enable specific features or request higher limits. Not exploring them for now to focus on the essentials. 
  - To render something, the context of the canvas and the device have to be connected. The canvas has to be configured to be used with the device. 
  - Textures are the objects that WebGPU uses to store image data. 
  - Each texture has a format. This allows the GPU to know how the data is laid out in memory.
  - To use the something with WebGPU, an encoder needs to be created so to provide commands to the GPU.
  - The encoder is used to perform rendering actions in the GPU.


  
  

- **Buffers & Memory Management**
  - The format selected for the canvas affects how efficiently it can draw the images from the textures.
  - Important to use the device's preferred format. There could be exceptions (?)


- **Shaders (Vertex, Fragment, Compute)**
  - Notes: *...*

- **Render Pipelines**
  - Texture saves the data/image that the render pass draws.
  - The render pass is the drawing session, the action on the GPU, and stores the output on the texture.
  - Calling the `encoder.beginRenderPass` and `renderPass.end` methods doesn't do anything on the GPU but records steps that will be executed later on. 
  - The `GPUCommandBuffer` is an opaque handler to the recorded commands.
  - So to finish recording GPU actions (render passes), the command buffer has to be created by `encoder.finish()`.
  - And to submit those actions, `device.queue.submit([commandBuffer]);`
  - A command buffer can only be used once. There's no point on holding on to it.


- **Compute Pipelines**
  - Notes: *...*

### 3D Graphics & Camera Systems
- **3D Coordinate Systems & Matrices**
  - Model, View, Projection matrices
  - World space vs screen space transformations
  - Notes: *...*

- **Camera Controls & Navigation**
  - Orbit controls (mouse rotation around target)
  - Pan controls (mouse drag to move camera)
  - Zoom controls (mouse wheel)
  - Keyboard movement (WASD/arrow keys)
  - Notes: *...*

- **3D Scene Management**
  - Depth testing and Z-buffer
  - 3D object positioning and orientation
  - Multiple object rendering
  - Notes: *...*

---

## 💻 Code Snippets & Examples

### Setup & Initialization
```javascript
// WebGPU setup code will go here
```

### Shaders
```wgsl
// WGSL shader code examples
```

### Render Pipeline
```javascript
// Render pipeline configuration
```

### Compute Shader
```javascript
// Compute shader setup
```

### 3D Graphics & Camera
```javascript
// Camera matrix calculations
// Model-View-Projection matrix setup
```

### Camera Controls
```javascript
// Orbit controls implementation
// Mouse and keyboard input handling
```

### 3D Vertex Data
```javascript
// 3D mesh data structures
// Buffer management for 3D objects
```

---

## ✅ To-Do List

### Immediate Tasks
- [x] Read through tutorial overview
- [x] Set up basic HTML structure
- [ ] Initialize WebGPU context
- [ ] Create first triangle

### Learning Goals
- [ ] Understand WebGPU fundamentals
- [ ] Learn WGSL shader language
- [ ] Master buffer management
- [ ] Implement compute shaders
- [ ] Build a complete graphics application

### Future Explorations
- [ ] Compare performance with WebGL
- [ ] Explore advanced WebGPU features
- [ ] Integrate with existing Three.js knowledge
- [ ] Build more complex projects

### 3D Graphics & Camera Control Tasks
- [ ] Implement basic 3D coordinate system
- [ ] Create camera matrix calculations
- [ ] Add mouse orbit controls (rotate around target)
- [ ] Implement mouse pan controls (drag to move)
- [ ] Add zoom controls (mouse wheel)
- [ ] Create keyboard movement (WASD/arrows)
- [ ] Implement depth testing
- [ ] Build 3D scene with multiple objects
- [ ] Create camera animation system

---

## 🔗 Resources & References

### Primary Resources
- [WebGPU Specification](https://www.w3.org/TR/webgpu/)
- [WGSL Specification](https://www.w3.org/TR/WGSL/)
- [Google Codelabs Tutorial](https://codelabs.developers.google.com/your-first-webgpu-app)

### Additional Learning Materials
- [WebGPU Fundamentals](https://webgpufundamentals.org/)
- [Mozilla WebGPU Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)
- [Chrome WebGPU Samples](https://austin-eng.com/webgpu-samples/)

### Coming from WebGL/Three.js
- Key differences to note
- Migration patterns
- Performance considerations

### 3D Graphics & Camera Controls
- [gl-matrix](https://glmatrix.net/) - JavaScript matrix and vector library
- [Three.js OrbitControls Source](https://github.com/mrdoob/three.js/blob/dev/examples/jsm/controls/OrbitControls.js) - Reference implementation
- [WebGL Fundamentals - 3D Cameras](https://webglfundamentals.org/webgl/lessons/webgl-3d-camera.html)
- [Real-Time Rendering Resources](http://www.realtimerendering.com/) - Advanced 3D graphics concepts
- [Learn OpenGL - Camera](https://learnopengl.com/Getting-started/Camera) - Camera mathematics explained
- [3D Math Primer for Graphics](http://gamemath.com/) - Comprehensive 3D math resource
- [WebGPU Cameras Tutorial](https://carmencincotti.com/2022-11-01/webgpu-camera/) - WebGPU-specific camera implementation
- [Brandon Jones WebGPU Samples](https://toji.github.io/webgpu-test/) - Advanced WebGPU examples with camera controls

### Math Libraries & Tools
- [wgpu-matrix](https://github.com/greggman/wgpu-matrix) - WebGPU-focused math library
- [MuJoCo.js](https://github.com/deepmind/mujoco/tree/main/javascript) - For physics and complex 3D scenes
- [Regl](https://github.com/regl-project/regl) - Functional WebGL (good for understanding concepts)

---

## 🛠 Development Environment

### Current Setup
- **Project Structure:** Single HTML file approach
- **Browser:** Chrome/Edge with WebGPU support
- **Editor:** VS Code (assumed)
- **Testing:** Local development server needed

### Required Tools
- [ ] Modern browser with WebGPU support
- [ ] Local development server
- [ ] Code editor with WGSL syntax highlighting

---

## 🐛 Troubleshooting & Issues

### Common Issues
- Not all browsers could have support for WebGPU as is the case with WebGL, even though it has been around for a while. It is important to check for support before starting the application. 

### Browser Compatibility
- *Notes on WebGPU support across browsers...*

### Performance Notes
- *Observations about performance compared to WebGL...*

---

## 📝 Session Notes

### Session 1 - Project Setup
**Date:** 08/04/2025
- Created project structure
- Set up command center (this file)
- Started tutorial
- Read through tutorial overview
- Started with Step 4 - Set up development environment
- Began implementing the basic WebGPU setup

---

## 🎯 Current Focus

**Next Steps:**


**Learning Priority:**
- Understanding the fundamental differences between WebGPU and WebGL
- Getting comfortable with WGSL syntax
- Mastering the WebGPU initialization process

**Future Learning Path:**
- After completing the basic tutorial, transition to 3D graphics
- Implement camera controls similar to Three.js OrbitControls
- Build a complete 3D scene with navigation

---

*Last Updated: 08/04/2025*