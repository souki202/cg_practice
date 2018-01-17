class Sky {
  constructor() {
    // var ambientLight = new THREE.AmbientLight(0xffeeee, 0);
    // myScene.scene.add(ambientLight);

    // テクスチャ読み込み
    var texture = new THREE.TextureLoader().load("obj/sky.jpg");
    texture.anisotropy = myScene.renderer.getMaxAnisotropy();
    texture.mapping = THREE.UVMapping;

    // 背景用
    var geometry = new THREE.SphereGeometry(1024, 32, 32);
    geometry.scale(-1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      map: texture,
      fog: false,
    });
    var bgMesh = new THREE.Mesh(geometry, material);
    myScene.scene.add(bgMesh);
  }
}
