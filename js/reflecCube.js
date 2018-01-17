class ReflecCube {
  constructor(posRadian) {
    this.frame = 0;
    var posRadius = 300;
    this.pos = {x:posRadius * Math.sin(posRadian), y:100, z:posRadius * Math.cos(posRadian)};

    this.cubeCamera = [];
    for (var i = 0; i < 1; i++) {
      this.cubeCamera.push(new THREE.CubeCamera( 10, 2560, 512 ));
      this.cubeCamera[i].position.set(this.pos.x, this.pos.y, this.pos.z);
      this.cubeCamera[i].renderTarget.mapping = THREE.CubeRefractionMapping;
      this.cubeCamera[i].renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
      myScene.scene.add(this.cubeCamera[i]);
    }

    this.rad = 0;
    this.rotateSpeed = 0.01;
    this.geometry = new THREE.BoxGeometry(200, 200, 200);
    //this.geometry =  new THREE.SphereGeometry( 80, 64, 32 );
    this.material = new THREE.MeshPhongMaterial({
      emissive: 0xffffff,
      color:0xffdddd,
      envMap: this.cubeCamera[0].renderTarget,
  		refractionRatio: 0.90,
    });
    this.material2 = new THREE.MeshPhongMaterial({
      emissive: 0xffffff,
      color:0xffdddd,
      envMap: this.cubeCamera[0].renderTarget.texture,
  		reflectivity : 1,
      opacity: 0.35,
      transparent: true
    });

    this.cube = [];
    for (var i = 0; i < 2; i++) {
      switch (i) {
        case 0:
          this.cube.push(new THREE.Mesh(this.geometry, this.material));
          break;
        case 1:
          this.cube.push(new THREE.Mesh(this.geometry, this.material2));
        break;
        default:
      }
      this.cube[i].position.set(this.pos.x, this.pos.y, this.pos.z);
      myScene.scene.add(this.cube[i]);
    }

    this.hasRemoved = false;
  }

  update() {
    this.frame++;
    this.rad += this.rotateSpeed;
    for (var i = 0; i < 2; i++) {
      this.cube[i].position.set(this.pos.x, this.pos.y, this.pos.z);
      this.cube[i].rotation.set(Math.PI / 4, this.rad, this.rad);
    }
    for (var i = 0; i < 2; i++) {
      this.cube[i].visible = false;
    }
    this.cubeCamera[0].update(myScene.renderer, myScene.scene);
    for (var i = 0; i < 2; i++) {
      this.cube[i].visible = true;
    }
  }
}
