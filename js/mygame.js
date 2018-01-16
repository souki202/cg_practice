// import myCamera from './gamemain.js'

class MyGame{
	constructor(){
		this.frame = 0;
		this.petal = new Petal();
		this.blossoms = [];
		this.light = new FireFly();
	}

	update() {
		this.frame++;

		if (this.frame % 24 == 0) {
			this.blossoms.push(new CherryBlossoms());
		}
		this.blossoms.forEach(function(blossom) {
			blossom.update();
		});
		this.blossoms.some(function(blossom, index) {
			if (blossom.getHasRemoved()) this.blossoms.splice(index, 1);
		}.bind(this));
	}
}
