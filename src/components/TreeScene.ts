import * as THREE from 'three';
import { gsap } from 'gsap';

export class TreeScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private trees: THREE.Group[] = [];
  private mousePosition = new THREE.Vector2();
  private targetRotation = new THREE.Vector2();
  private currentRotation = new THREE.Vector2();

  constructor(container: HTMLElement) {
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x93c5fd, 0.05);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    container.appendChild(this.renderer.domElement);

    // Camera position
    this.camera.position.z = 8;
    this.camera.position.y = 3;
    this.camera.lookAt(0, 0, 0);

    // Lighting
    this.setupLighting();

    // Ground
    this.createGround();

    // Create trees
    this.createTreesGrid();

    // Event listeners
    this.setupEventListeners();

    // Animation
    this.animate();
  }

  private setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);

    // Add hemisphere light for better color variation
    const hemisphereLight = new THREE.HemisphereLight(0x93c5fd, 0x48a169, 0.5);
    this.scene.add(hemisphereLight);
  }

  private createGround() {
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x48a169,
      roughness: 0.8,
      metalness: 0.2
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    this.scene.add(ground);
  }

  private createDetailedTree(): THREE.Group {
    const tree = new THREE.Group();

    // Create more detailed trunk with texture-like segments
    const trunkGeometry = new THREE.CylinderGeometry(0.1, 0.15, 1, 8);
    const trunkMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x4a3728,
      shininess: 5,
      bumpScale: 0.1
    });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 0.5;
    tree.add(trunk);

    // Create multiple layers of leaves for fuller appearance
    const createLeafLayer = (y: number, scale: number) => {
      const leafGeometry = new THREE.ConeGeometry(0.5 * scale, 1 * scale, 8);
      const leafMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x2d5a27,
        shininess: 10,
        flatShading: true
      });
      const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
      leaf.position.y = y;
      return leaf;
    };

    // Add multiple leaf layers
    tree.add(createLeafLayer(1.75, 1));
    tree.add(createLeafLayer(1.25, 0.8));
    tree.add(createLeafLayer(2.25, 0.6));

    return tree;
  }

  private createTreesGrid() {
    const gridSize = 7;
    const spacing = 2;

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        const tree = this.createDetailedTree();
        
        // Position with slight randomization
        tree.position.x = x * spacing + (Math.random() - 0.5) * 0.5;
        tree.position.z = z * spacing + (Math.random() - 0.5) * 0.5;
        
        // Random scale variation
        const scale = 0.8 + Math.random() * 0.4;
        tree.scale.set(scale, scale, scale);
        
        // Random rotation
        tree.rotation.y = Math.random() * Math.PI * 2;
        
        this.trees.push(tree);
        this.scene.add(tree);

        // Animate tree growth with varying delays
        gsap.from(tree.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1.5,
          delay: (Math.abs(x) + Math.abs(z)) * 0.1,
          ease: "elastic.out(1, 0.5)"
        });
      }
    }
  }

  private setupEventListeners() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleTouchMove);
  }

  private handleMouseMove = (event: MouseEvent) => {
    this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.updateTargetRotation();
  };

  private handleTouchMove = (event: TouchEvent) => {
    if (event.touches.length > 0) {
      this.mousePosition.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
      this.mousePosition.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
      this.updateTargetRotation();
    }
  };

  private updateTargetRotation() {
    this.targetRotation.x = this.mousePosition.y * 0.5;
    this.targetRotation.y = this.mousePosition.x * 0.5;
  }

  private handleResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  private animate = () => {
    requestAnimationFrame(this.animate);

    // Smooth camera rotation
    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.05;
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.05;
    
    this.camera.position.x = Math.sin(this.currentRotation.y) * 8;
    this.camera.position.z = Math.cos(this.currentRotation.y) * 8;
    this.camera.position.y = 3 + this.currentRotation.x * 2;
    this.camera.lookAt(0, 0, 0);

    // Animate trees swaying
    const time = Date.now() * 0.001;
    this.trees.forEach((tree, i) => {
      const offset = i * 0.1;
      tree.rotation.x = Math.sin(time + offset) * 0.03;
      tree.rotation.z = Math.cos(time + offset) * 0.03;
    });

    this.renderer.render(this.scene, this.camera);
  };

  public dispose() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('touchmove', this.handleTouchMove);
    this.renderer.dispose();
  }
}