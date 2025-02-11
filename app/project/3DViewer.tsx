import { useEffect, useRef} from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader, GLTF } from 'three/addons/loaders/GLTFLoader.js';
// import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ThreeDViewerProps {
  modelPath: string;
  width?: number;
  height?: number;
  title?: string;
}

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({
  modelPath,
  width = 800,
  height = 600,
  title = 'Root Assembly',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = mountRef.current; // ✅ Store in a variable
    if (!currentRef) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Add grid helper
    const size = 10;
    const divisions = 10;
    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Center the renderer's canvas
    renderer.domElement.style.margin = 'auto';
    renderer.domElement.style.display = 'block';

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Model loading
    let gltf: GLTF;
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (loadedGltf) => {
        gltf = loadedGltf;
        // Center the model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);
        
        scene.add(gltf.scene);
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100, '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Always rotate when model is loaded
      if (gltf?.scene) {
        gltf.scene.rotation.y += 0.005;
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [modelPath, width, height]);

  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      position: 'relative',
      borderRadius: '16px',
      padding: '0 0 32px 0',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div 
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '8px 16px',
          borderRadius: '20px',
          color: 'white'
        }}
      >
        <span>{title}</span>
      </div>
      <div 
        ref={mountRef}
        style={{
          width: width,
          height: height,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
    </div>
  );
};

export default ThreeDViewer;
