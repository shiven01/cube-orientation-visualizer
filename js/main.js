// Global variables for Three.js components
let scene, camera, renderer;
let cube;

// Initialize the Three.js environment
function init() {
    // Create a scene - the container for all 3D objects, lights, and cameras
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    // Create a camera - defines what we'll see in the renderer
    // Parameters: field of view (degrees), aspect ratio, near clipping plane, far clipping plane
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // Position the camera 5 units back from the origin
    
    // Create a WebGL renderer - renders the scene with the camera view
    renderer = new THREE.WebGLRenderer({ antialias: true });
    // Set the size of the renderer to fill the container
    renderer.setSize(
        document.getElementById('canvas-container').clientWidth,
        window.innerHeight
    );
    
    // Add the renderer's canvas element to our page
    document.getElementById('canvas-container').appendChild(renderer.domElement);
    
    // Create cube geometry and material
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    // Create materials for each face of the cube with different colors
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red (right)
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green (left)
        new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue (top)
        new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow (bottom)
        new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta (front)
        new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cyan (back)
    ];
    
    // Create the cube mesh by combining geometry and materials
    cube = new THREE.Mesh(geometry, materials);
    
    // Add the cube to the scene
    scene.add(cube);
    
    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Add window resize handler
    window.addEventListener('resize', onWindowResize, false);
    
    // Set up the UI controls
    setupControls();
    
    // Start the animation loop
    animate();
}

// Update renderer and camera when window is resized
function onWindowResize() {
    camera.aspect = document.getElementById('canvas-container').clientWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(
        document.getElementById('canvas-container').clientWidth,
        window.innerHeight
    );
}

// Animation loop - continuously renders the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Set up quaternion control UI
function setupControls() {
    // Get UI elements
    const qxSlider = document.getElementById('qx');
    const qySlider = document.getElementById('qy');
    const qzSlider = document.getElementById('qz');
    const qwSlider = document.getElementById('qw');
    
    const qxValue = document.getElementById('qx-value');
    const qyValue = document.getElementById('qy-value');
    const qzValue = document.getElementById('qz-value');
    const qwValue = document.getElementById('qw-value');
    
    const resetButton = document.getElementById('reset');
    
    // Function to update cube's quaternion from slider values
    function updateQuaternion() {
        // Get values from sliders
        const x = parseFloat(qxSlider.value);
        const y = parseFloat(qySlider.value);
        const z = parseFloat(qzSlider.value);
        const w = parseFloat(qwSlider.value);
        
        // Update display values
        qxValue.textContent = x.toFixed(2);
        qyValue.textContent = y.toFixed(2);
        qzValue.textContent = z.toFixed(2);
        qwValue.textContent = w.toFixed(2);
        
        // Create a new quaternion
        const quaternion = new THREE.Quaternion(x, y, z, w);
        
        // Normalize the quaternion (very important!)
        // This ensures it represents a valid rotation
        quaternion.normalize();
        
        // Apply the quaternion to the cube
        cube.quaternion.copy(quaternion);
        
        // Update slider values to match the normalized quaternion
        qxSlider.value = quaternion.x;
        qySlider.value = quaternion.y;
        qzSlider.value = quaternion.z;
        qwSlider.value = quaternion.w;
        
        // Update display values with normalized values
        qxValue.textContent = quaternion.x.toFixed(2);
        qyValue.textContent = quaternion.y.toFixed(2);
        qzValue.textContent = quaternion.z.toFixed(2);
        qwValue.textContent = quaternion.w.toFixed(2);
    }
    
    // Add event listeners to sliders
    qxSlider.addEventListener('input', updateQuaternion);
    qySlider.addEventListener('input', updateQuaternion);
    qzSlider.addEventListener('input', updateQuaternion);
    qwSlider.addEventListener('input', updateQuaternion);
    
    // Reset button functionality
    resetButton.addEventListener('click', function() {
        qxSlider.value = 0;
        qySlider.value = 0;
        qzSlider.value = 0;
        qwSlider.value = 1;
        updateQuaternion();
    });
    
    // Initialize with default quaternion values
    updateQuaternion();
}

// Start the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);