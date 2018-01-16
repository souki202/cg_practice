class Petal {
  constructor() {
    var mtlLoader = new THREE.MTLLoader();
    this.obj = null;

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    mtlLoader.setPath("obj/");
    mtlLoader.load("petal.mtl", function (mat) {
      mat.preload();
      var objLoader = new THREE.OBJLoader();
      objLoader.setMaterials(mat);
      objLoader.setPath("obj/");

      objLoader.load('petal.obj', function (object) {
        this.obj = object;
        myScene.scene.add(this.obj);
      }.bind(this), onProgress, onError);
    }.bind(this), onProgress, onError);


  }
}
