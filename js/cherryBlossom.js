class CherryBlossoms {
  constructor() {
    this.floatSpeed = 1;
    var r = Math.random() * 80;
    var rad = Math.random() * Math.PI * 2;
    this.pos = {x:r * Math.sin(rad), y:0, z:r * Math.cos(rad)};
    this.scale = {x:5, y:5, z:5};
    this.rad = 0;
    this.rotateSpeed = 0.01;

    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshLambertMaterial({color:0xffaaaa, opacity:0.75, transparent:true});
    //this.material =  new THREE.MeshPhongMaterial({color: 0xffeeee, opacity:0.75, transparent:true})
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.cube.castShadow = true;
    this.cube.receiveShadow = true;
    this.cube.position.set(this.pos.x, this.pos.y, this.pos.z);
    myScene.scene.add(this.cube);

    this.hasRemoved = false;
  }

  update() {
    this.rad += this.rotateSpeed;

    if (this.scale.y < 100) {
      this.scale.y += this.floatSpeed;
      this.cube.scale.set(this.scale.x, this.scale.y, this.scale.z);
      this.pos.y += this.floatSpeed * 0.5;
    }
    else this.pos.y += this.floatSpeed;
    
    this.cube.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.cube.rotation.set(0, this.rad, 0);

    if (this.pos.y > 800) {
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
