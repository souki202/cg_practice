class MyScene {
	constructor() {
		//キャンバスフレームDOM要素の取得
		this.canvasFrame = document.getElementById('canvas-frame');
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		if (!this.renderer) alert('Three.js の初期化に失敗しました');
		this.renderer.setSize(this.canvasFrame.clientWidth, this.canvasFrame.clientHeight);
		this.canvasFrame.appendChild(this.renderer.domElement);
		this.renderer.setClearColor(0, 1.0);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.shadowMapEnabled = true;

		this.scene = new THREE.Scene();

		//カメラオブジェクトの生成
		this.camera = new THREE.PerspectiveCamera(45, this.canvasFrame.clientWidth / this.canvasFrame.clientHeight, 1, 10000);
		//カメラの位置の設定
		this.camera.position.set(500, 100, 100);
		//カメラの上ベクトルの設定
		this.camera.up.set(0, 1, 0);
		//カメラの中心位置ベクトルの設定
		this.camera.lookAt({ x: 0, y: 10, z: 0 }); //

		//トラックボールオブジェクトの宣言
		this.controls = new THREE.OrbitControls(this.camera, this.canvasFrame);
		this.controls.target.set( 0, 100, 0 );
		this.controls.update();
	}

	update() {

	}

	draw() {
		this.controls.update();
		this.renderer.render(this.scene, this.camera);
	}

	adjastWindow(){
		if(this.renderer != null){
			this.camera.aspect = this.canvasFrame.innerWidth / this.canvasFrame.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( this.canvasFrame.innerWidth, this.canvasFrame.innerHeight );
		}
	}
}
var myScene = null;


var onProgress = function( xhr ) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
	}
};
var onError = function( xhr ) {
	console.error( xhr );
};

// シングルトンうまくいかないんだけど?
// const userStoreInstance = new MyScene();
// export default userStoreInstance;
