// import * from './gamemain.js'

//canvas.height canvas.width
function adjastWindow(){
	myScene.adjastWindow();
}

$(function(){
	myScene = new MyScene();
	$(window).on('load resize', function(){
		adjastWindow();
	});

	//ゲームの基本クラスのロード
	var f = new Form();

	setInterval(
		function(){
			f.updateCanvas();
		}, 1000/60);
})
/*
ゲームのもっとも基本的なクラス
*/
class Form {
	constructor(){
		this.sky = new Sky();
		this.game = new MyGame();
	}

	updateCanvas(){
		this.game.update();
		myScene.update();
		myScene.draw();
	}
}
