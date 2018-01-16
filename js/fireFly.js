class FireFly {
  constructor() {
    this.floatSpeed = 1;
    var r = Math.random() * 80;
    var rad = Math.random() * Math.PI * 2;
    this.pos = {x:r * Math.sin(rad), y:Math.random() * 1000, z:r * Math.cos(rad)};
    this.rad = [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2];
    this.deltaRad = this.calcDeltaRadian();

    this.moveSpeed = 0.5;
    this.remainCurveFrame = 15 + Math.random() * 60;

    this.geometry = new THREE.SphereGeometry(5, 16, 16);
    this.material = new THREE.MeshBasicMaterial({color:0xffeeee});
    //this.material =  new THREE.MeshPhongMaterial({color: 0xffeeee, opacity:0.75, transparent:true})
    this.sphere = new THREE.Mesh(this.geometry, this.material);
    this.sphere.position.set(this.pos.x, this.pos.y, this.pos.z);
    myScene.scene.add(this.sphere);

    this.spotLight = new THREE.PointLight(0xff4444, 10.0, 700, 10);
    this.spotLight.castShadow = true;
    this.spotLight.shadowCameraNear = 1;
    this.spotLight.shadowCameraFar = 5000;
    this.spotLight.shadowCameraFov = 45;
    this.spotLight.shadowCameraVisible = true;
    this.spotLight.position.set(this.pos.x, this.pos.y, this.pos.z);
    myScene.scene.add(this.spotLight);

    this.hasRemoved = false;
  }

  update() {
    this.remainCurveFrame--;
    for (var i = 0; i < 2; i++) {
      this.rad[i] += this.deltaRad[i];
    }
    this.pos.x += this.moveSpeed * Math.sin(this.rad[0]) * Math.cos(this.rad[1]);
    this.pos.y += this.moveSpeed * Math.sin(this.rad[0]) * Math.sin(this.rad[1]);
    this.pos.z += this.moveSpeed * Math.cos(this.rad[0]);

    this.pos.x = Math.min(Math.max(-200, this.pos.x), 200);
    this.pos.y = Math.min(Math.max(0, this.pos.y), 1000);
    this.pos.z = Math.min(Math.max(-200, this.pos.z), 200);

    if (this.remainCurveFrame <= 0) {
      this.remainCurveFrame = 15 + Math.random() * 60;
      this.deltaRad = this.calcDeltaRadian();
    }

    this.sphere.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.spotLight.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  getHasRemoved() {
    return this.hasRemoved;
  }

  calcDeltaRadian() {
    return [(Math.random() - 0.5) * Math.PI / 100, (Math.random() - 0.5)* Math.PI / 100];
  }
}
