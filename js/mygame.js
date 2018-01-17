// import myCamera from './gamemain.js'

class MyGame{
	constructor() {
		const NUM_OF_LIGHT = 15;
		this.frame = 0;
		this.petal = new Petal();
		this.blossoms = [];
		this.lights = [];
		for (var i = 0; i < NUM_OF_LIGHT; i++) {
			this.lights.push(new FireFly());
		}
		this.reflecs = [];
		for (var i = 0; i < 4; i++) {
			this.reflecs.push(new ReflecCube(Math.PI / 2 * i));
		}
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
		this.lights.forEach(function(light) {
			light.update();
		});
		this.reflecs.forEach(function(reflec) {
			reflec.update();
		});
	}
}
