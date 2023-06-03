const Game = new Square.Game({width:640, height:480});


class Player extends Game.Object {
	constructor(){
		super();
		this.transform(40,200,20,20);
		this.gravity = 1;
	}

	update(){

		// Movimientos 

		let axisX = 0;
		let speed = 5;

		if (Game.input.iskeydown('ArrowRight')) {

			axisX = 1;
		} else if (Game.input.iskeydown('ArrowLeft')) {

			axisX = -1;
		}

		this.velx = axisX * speed;

		// Salto

		if (Game.input.iskeypress('Space')) {
			this.y += -1;
			this.vely = -10;	
		}

		// Colisiones

		let ground = this.collisionrect(this.x + 4,this.y + this. h,this.w -4,this.h + 4, Ground);

		if (!ground) {
			this.gravity = 1;
		} else {
			this.gravity = 0;
			this.vely = 0;
			this.y = ground.y - this.h;
		}
	}
}

class Ground extends Game.Object {
	constructor(x,y,w,h){
		super();
		this.transform(x,y,w,h);
	}
}


Game.load = ()=>{
	Game.scene.elements = [
		new Player,
		new Ground(20,300,200,20),
		new Ground(200,260,200,20),
		new Ground(400,320,200,20),
	];
}


Game._init();