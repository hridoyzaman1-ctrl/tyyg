import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js?external=three';

interface ThreeDViewerProps {
  color?: string;
}

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ color = '#3B82F6' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background for integration

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 4;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;
    controls.maxDistance = 10;
    controls.minDistance = 2;

    // Premium Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(color, 2); // Brand color rim light
    pointLight2.position.set(-5, 0, -5);
    scene.add(pointLight2);

    const rectLight = new THREE.RectAreaLight( 0xffffff, 1, 10, 10 );
    rectLight.position.set( 5, 5, 0 );
    rectLight.lookAt( 0, 0, 0 );
    scene.add( rectLight );

    // Object: Abstract Logo Shape (Combination of geometries)
    const group = new THREE.Group();

    // Central core
    const geometry = new THREE.IcosahedronGeometry(1.5, 0);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0xffffff, 
      roughness: 0.2,
      metalness: 0.9,
      flatShading: true
    });
    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    // Outer ring
    const torusGeo = new THREE.TorusGeometry(2.2, 0.05, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.5 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 2;
    group.add(torus);
    
    // Wireframe Overlay
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe);
    (line.material as THREE.LineBasicMaterial).color.setHex(0xaaaaaa);
    (line.material as THREE.LineBasicMaterial).depthTest = false;
    (line.material as THREE.LineBasicMaterial).opacity = 0.3;
    (line.material as THREE.LineBasicMaterial).transparent = true;
    mesh.add(line);

    scene.add(group);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      // Subtle float animation
      group.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      // Secondary rotation
      torus.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      torusGeo.dispose();
      renderer.dispose();
    };
  }, [color]);

  return (
    <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" title="Interactive 3D Preview"></div>
  );
};

export default ThreeDViewer;
