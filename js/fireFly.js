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

    //形状オブジェクトの宣言と生成
		this.geometry = [
			[new THREE.IcosahedronGeometry(30, 4), 60], //正20面体　分割数4
			[new THREE.IcosahedronGeometry(30, 3), 90],//正20面体　分割数3
			[new THREE.IcosahedronGeometry(30, 2), 120],//正20面体　分割数2
			[new THREE.IcosahedronGeometry(30, 1), 150],//正20面体　分割数1
			[new THREE.IcosahedronGeometry(30, 0), 180]//正20面体
		];
    this.lod = new THREE.LOD();
    this.material = new THREE.MeshBasicMaterial({color:0xffeeee, wireframe:true});
		for (var i = 0; i < this.geometry.length; i++) {
			var mesh = new THREE.Mesh(this.geometry[i][0], this.material);
			this.lod.addLevel(mesh, this.geometry[i][1]);
		}
    this.lod.position.set(this.pos.x, this.pos.y, this.pos.z);
    myScene.scene.add(this.lod);

    this.spotLight = new THREE.PointLight(0xff4444, 15.0, 900, 10);
    this.spotLight.castShadow = true;
    this.spotLight.shadow.camera.near = 1;
    this.spotLight.shadow.camera.far = 5000;
    this.spotLight.shadow.camera.fov = 45;
    this.spotLight.shadowCameraVisible = true;
    this.spotLight.position.set(this.pos.x, this.pos.y, this.pos.z);
    myScene.scene.add(this.spotLight);

    this.hasRemoved = false;
  }

  update() {
    this.remainCurveFrame--;
    this.lod.update(myScene.camera);
    for (var i = 0; i < 2; i++) {
      this.rad[i] += this.deltaRad[i];
    }
    this.pos.x += this.moveSpeed * Math.sin(this.rad[0]) * Math.cos(this.rad[1]);
    this.pos.y += this.moveSpeed * Math.sin(this.rad[0]) * Math.sin(this.rad[1]);
    this.pos.z += this.moveSpeed * Math.cos(this.rad[0]);

    this.pos.x = Math.min(Math.max(-200, this.pos.x), 200);
    this.pos.y = Math.min(Math.max(0, this.pos.y), 750);
    this.pos.z = Math.min(Math.max(-200, this.pos.z), 200);

    if (this.remainCurveFrame <= 0) {
      this.remainCurveFrame = 15 + Math.random() * 60;
      this.deltaRad = this.calcDeltaRadian();
    }

    this.lod.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.spotLight.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  getHasRemoved() {
    return this.hasRemoved;
  }

  calcDeltaRadian() {
    return [(Math.random() - 0.5) * Math.PI / 100, (Math.random() - 0.5)* Math.PI / 100];
  }
}
