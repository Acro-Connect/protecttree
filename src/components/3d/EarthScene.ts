import * as THREE from 'three';
import { gsap } from 'gsap';

export class EarthScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private earth: THREE.Mesh;
  private clouds: THREE.Mesh;
  private atmosphere: THREE.Mesh;
  private stars: THREE.Points;

  constructor(container: HTMLElement) {
    // Scene setup
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    // Camera position
    this.camera.position.z = 5;

    // Lighting
    this.setupLighting();

    // Load textures and create Earth
    this.setupEarth();

    // Create atmosphere
    this.createAtmosphere();

    // Create stars
    this.createStars();

    // Animation
    this.animate();

    // Responsive handling
    window.addEventListener('resize', this.handleResize);
  }

  private setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(5, 3, 5);
    this.scene.add(sunLight);
  }

  private setupEarth() {
    const textureLoader = new THREE.TextureLoader();

    // Earth
    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: textureLoader.load('https://unpkg.com/three-globe/example/img/earth-day.jpg'),
      bumpMap: textureLoader.load('https://unpkg.com/three-globe/example/img/earth-topology.png'),
      bumpScale: 0.05,
      specularMap: textureLoader.load('https://unpkg.com/three-globe/example/img/earth-water.png'),
      specular: new THREE.Color('grey'),
      shininess: 10
    });
    this.earth = new THREE.Mesh(earthGeometry, earthMaterial);
    this.scene.add(this.earth);

    // Clouds
    const cloudGeometry = new THREE.SphereGeometry(1.01, 64, 64);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: textureLoader.load('https://unpkg.com/three-globe/example/img/earth-clouds.png'),
      transparent: true,
      opacity: 0.4
    });
    this.clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    this.scene.add(this.clouds);
  }

  private createAtmosphere() {
    const atmosphereGeometry = new THREE.SphereGeometry(1.1, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    this.atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    this.scene.add(this.atmosphere);
  }

  private createStars() {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    this.stars = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(this.stars);
  }

  private handleResize = () => {
    const container = this.renderer.domElement.parentElement;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  private animate = () => {
    requestAnimationFrame(this.animate);

    // Rotate Earth and clouds
    this.earth.rotation.y += 0.0005;
    this.clouds.rotation.y += 0.0007;
    this.atmosphere.rotation.y += 0.0005;

    // Gentle floating motion
    const time = Date.now() * 0.0001;
    this.earth.position.y = Math.sin(time) * 0.1;
    this.clouds.position.y = Math.sin(time) * 0.1;
    this.atmosphere.position.y = Math.sin(time) * 0.1;

    this.renderer.render(this.scene, this.camera);
  };

  public dispose() {
    window.removeEventListener('resize', this.handleResize);
    this.renderer.dispose();
  }
}