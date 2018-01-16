class FireFly {
  constructor() {
    this.floatSpeed = 1;
    var r = Math.random() * 80;
    var rad = Math.random() * Math.PI * 2;
    this.pos = {x:r * Math.sin(rad), y:200, z:r * Math.cos(rad)};
    this.rad = 0;
    this.rotateSpeed = 0.01;

    this.geometry = new THREE.SphereGeometry(5, 16, 16);
    this.material = new THREE.MeshBasicMaterial({color:0xffeeee});
    //this.material =  new THREE.MeshPhongMaterial({color: 0xffeeee, opacity:0.75, transparent:true})
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.cube.position.set(this.pos.x, this.pos.y, this.pos.z);
    myScene.scene.add(this.cube);

    var spotLight = new THREE.PointLight(0xffeeee, 2.0, 150, 0.4);
    spotLight.castShadow = true;
    spotLight.shadowCameraNear = 1;
    spotLight.shadowCameraFar = 2000;
    spotLight.shadowCameraFov = 45;
    spotLight.shadowCameraVisible = true;
    spotLight.position.set(this.pos.x, this.pos.y, this.pos.z);
    myScene.scene.add(spotLight);

    this.hasRemoved = false;
  }

  update() {
    this.cube.position.set(this.pos.x, this.pos.y, this.pos.z);

    if (this.pos.y > 2000) {
      myScene.scene.remove(this.cube);
      this.geometry.dispose();
      this.material.dispose();
      this.hasRemoved = true;
    }
  }

  getHasRemoved() {
    return this.hasRemoved;
  }
}
