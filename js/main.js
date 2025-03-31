// Main application code
document.addEventListener('DOMContentLoaded', () => {
    // Check if quaternion data is available
    if (!quaternionData || quaternionData.length === 0) {
        console.error('No quaternion data available');
        return;
    }

    // Initialize the visualization
    const app = new QuaternionVisualizer();
    app.init();
    app.animate();
});

class QuaternionVisualizer {
    constructor() {
        // Scene elements
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.cube = null;
        
        // Animation control
        this.isPlaying = false;
        this.startTime = 0;
        this.currentIndex = 0;
        this.playbackSpeed = 1.0;
        
        // DOM elements
        this.playPauseBtn = document.getElementById('play-pause');
        this.resetBtn = document.getElementById('reset');
        this.speedSlider = document.getElementById('speed');
        this.speedValue = document.getElementById('speed-value');
        this.timestampElement = document.getElementById('timestamp');
        this.quatWElement = document.getElementById('quat-w');
        this.quatXElement = document.getElementById('quat-x');
        this.quatYElement = document.getElementById('quat-y');
        this.quatZElement = document.getElementById('quat-z');
    }
    
    init() {
        this.initScene();
        this.createCube();
        this.setupEventListeners();
        
        // Set initial state
        this.resetAnimation();
        this.updateQuaternionDisplay();
    }
    
    initScene() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x222222);
        
        // Create camera
        const aspectRatio = window.innerWidth / window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
        this.camera.position.z = 5;
        
        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        
        // Add renderer to the page
        document.getElementById('scene-container').appendChild(this.renderer.domElement);
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
        
        // Add coordinate axes for reference
        const axesHelper = new THREE.AxesHelper(3);
        this.scene.add(axesHelper);
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
    
    createCube() {
        // Create cube geometry
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        
        // Create materials for each face with different colors
        const materials = [
            new THREE.MeshStandardMaterial({ color: 0xff0000 }), // Right - Red
            new THREE.MeshStandardMaterial({ color: 0x00ff00 }), // Left - Green
            new THREE.MeshStandardMaterial({ color: 0x0000ff }), // Top - Blue
            new THREE.MeshStandardMaterial({ color: 0xffff00 }), // Bottom - Yellow
            new THREE.MeshStandardMaterial({ color: 0xff00ff }), // Front - Magenta
            new THREE.MeshStandardMaterial({ color: 0x00ffff })  // Back - Cyan
        ];
        
        // Create cube with geometry and materials
        this.cube = new THREE.Mesh(geometry, materials);
        
        // Add arrows to indicate orientation
        const arrowX = new THREE.ArrowHelper(
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(0, 0, 0),
            1.5,
            0xff0000
        );
        const arrowY = new THREE.ArrowHelper(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(0, 0, 0),
            1.5,
            0x00ff00
        );
        const arrowZ = new THREE.ArrowHelper(
            new THREE.Vector3(0, 0, 1),
            new THREE.Vector3(0, 0, 0),
            1.5,
            0x0000ff
        );
        
        this.cube.add(arrowX);
        this.cube.add(arrowY);
        this.cube.add(arrowZ);
        
        // Add cube to scene
        this.scene.add(this.cube);
    }
    
    setupEventListeners() {
        // Play/Pause button
        this.playPauseBtn.addEventListener('click', () => {
            this.togglePlayPause();
        });
        
        // Reset button
        this.resetBtn.addEventListener('click', () => {
            this.resetAnimation();
        });
        
        // Speed slider
        this.speedSlider.addEventListener('input', () => {
            this.playbackSpeed = parseFloat(this.speedSlider.value);
            this.speedValue.textContent = `${this.playbackSpeed.toFixed(1)}x`;
        });
    }
    
    togglePlayPause() {
        this.isPlaying = !this.isPlaying;
        this.playPauseBtn.textContent = this.isPlaying ? 'Pause' : 'Play';
        
        if (this.isPlaying && this.currentIndex >= quaternionData.length - 1) {
            // If we're at the end, start over
            this.currentIndex = 0;
        }
        
        this.startTime = performance.now();
    }
    
    resetAnimation() {
        this.isPlaying = false;
        this.playPauseBtn.textContent = 'Play';
        this.currentIndex = 0;
        this.updateCubeOrientation();
    }
    
    updateCubeOrientation() {
        if (this.currentIndex < 0 || this.currentIndex >= quaternionData.length) {
            return;
        }
        
        // Get current quaternion
        const { quaternion } = quaternionData[this.currentIndex];
        
        // IMPORTANT: THREE.js quaternion is (x,y,z,w) but our data is (w,x,y,z)
        // We need to reorder the components correctly
        this.cube.quaternion.set(
            quaternion.x,
            quaternion.y,
            quaternion.z,
            quaternion.w
        );
        
        // Update the quaternion display
        this.updateQuaternionDisplay();
    }
    
    updateQuaternionDisplay() {
        if (this.currentIndex < 0 || this.currentIndex >= quaternionData.length) {
            return;
        }
        
        const data = quaternionData[this.currentIndex];
        
        // Update text display
        this.timestampElement.textContent = data.timestamp;
        this.quatWElement.textContent = data.quaternion.w.toFixed(4);
        this.quatXElement.textContent = data.quaternion.x.toFixed(4);
        this.quatYElement.textContent = data.quaternion.y.toFixed(4);
        this.quatZElement.textContent = data.quaternion.z.toFixed(4);
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (this.isPlaying) {
            // Calculate elapsed time since animation started
            const currentTime = performance.now();
            const elapsedTime = (currentTime - this.startTime) * this.playbackSpeed;
            
            // Use elapsed time to determine current frame
            // Assuming each frame is separated by 16.67ms (60fps)
            const targetIndex = Math.floor(elapsedTime / 16.67) + this.currentIndex;
            
            if (targetIndex < quaternionData.length) {
                this.currentIndex = targetIndex;
                this.updateCubeOrientation();
            } else {
                // Reached the end of data
                this.currentIndex = quaternionData.length - 1;
                this.isPlaying = false;
                this.playPauseBtn.textContent = 'Play';
            }
        }
        
        // Render the scene
        this.renderer.render(this.scene, this.camera);
    }
}