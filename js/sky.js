class Sky {
  constructor() {
    var ambientLight = new THREE.AmbientLight(0xffeeee, 0.4);
    myScene.scene.add(ambientLight);

    // var spotLight = new THREE.SpotLight(0xffeeee, 0.5);
    // spotLight.position.set(500, 1000, 500);
    // spotLight.castShadow = true;
    // spotLight.shadowMapWidth = 4192;
    // spotLight.shadowMapHeight = 4192;
    // spotLight.shadowCameraNear = 1;
    // spotLight.shadowCameraFar = 2000;
    // spotLight.shadowCameraFov = 45;
    // spotLight.shadowCameraVisible = true;
    // spotLight.distance = 10000;
    // myScene.scene.add(spotLight);
  }
}
