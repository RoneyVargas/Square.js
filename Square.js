const Square = {
}

Square.Game = class Game {
	constructor(config){

		this.Object = class Object {
			constructor(x,y,w,h,sprite){
				this.transform(x,y,w,h);
				this.vel(0,0);
				this.sprite = sprite;
				this._index_ = that.scene.elements.length;
				this.gravity = 0;
			}

			_update(){
				this.update();
				this._move();
				this._draw();
			}

			_move(){
				this.x += this.velx;
				this.y += this.vely;
				this.vely += this.gravity;
			}

			_draw(){
				ctx.fillRect(this.x,this.y,this.w,this.h);

				/*if (this.sprite.constructor.name == 'Sprite') {
					this.sprite._animate();
					ctx.drawImage(this.sprite.images[this.sprite.index],this.x,this.y,this.w,this.h);
				}*/
			}

			load(){
			}

			update(){
			}

			transform(x,y,w,h){
				this.x = x;
				this.y = y;
				this.w = w;
				this.h = h;
			}

			vel(x,y){
				this.velx = x;
				this.vely = y;
			}

			instance(){
				that.scene.elements[this._index_] = this;			
			}

			destroi(){
				that.scene.elements[this._index_] = undefined;
			}

			placefree(x,y){
				for (var i=0; i<that.scene.elements.length ; i++) {

					if (that.scene.elements[i] != undefined &&
						that.scene.elements[i] != this ) {
						
						let a = {'x':x ,'y':y}
						let b = that.scene.elements[i];
						
						if (a.x <= b.x+b.w && a.x+a.w >= b.x &&
							a.y <= b.y+b.h && a.y+a.h >= b.y ) {
							
							return b;
						} else {
							
							return false
						}
					}
				}
			}

			collision(obj){
				let a = this;
				let b = obj;

				return that.iscollision(a,b);
			}

			collision_with_class(cls){
				for (var i=0; i<that.scene.elements.length ; i++) {

					if (that.scene.elements[i] != undefined &&
						that.scene.elements[i] != this &&
						that.scene.elements[i].__proto__ == cls.prototype) {
						
						if (this.collision(that.scene.elements[i])) {

							return that.scene.elements[i];
						}
					}
				}				
			}

			collisionrect(x,y,w,h,cls){
				for (var i=0; i<that.scene.elements.length ; i++) {

					if (that.scene.elements[i] != undefined &&
						that.scene.elements[i] != this &&
						that.scene.elements[i].__proto__ == cls.prototype) {
							
						let a = {'x':x, 'y':y, 'w':w,'h':h};
						let b = that.scene.elements[i];

						if (that.iscollision(a, b)) {

							return that.scene.elements[i];
						}
					}
				}				
			}			
		}

		this.Sprite = class Sprite {
			constructor(images,frames){
				this.images = images || [];
				this.frames = frames || 1;
				this.index 	= 0; 
				this._clock = 0;
			}

			_animate(){
				this._clock += 1;

				if (this._clock	== this.frames) {
					this._clock = 0; 
					this.index += 1;

					if (this.index == this.images.length) {
						this.index = 0;
					}
				}
			}
		}

		this.Scene = class Scene {
			constructor(scene){
				this.elements = scene || [];
			}

			_update(){
				for (var i=0; i<this.elements.length; i++) {
					if (this.elements[i] != undefined) {
						this.elements[i]._update();
					}
				}
			}
		}

		this.scene = new this.Scene();

		this.width = config.width;
		this.height = config.height;

		this.canvas = document.createElement('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		let ctx = this.canvas.getContext('2d');
		let that = this;

		this._loop = ()=>{
			ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
			this.update();
			this.scene._update();
			requestAnimationFrame(this._loop);
		}

		this.input = {
		}

		this.input.keyboard = {
			'ArrowLeft': {'isup':false, 'isdown':false, 'ispress':false},
			'ArrowRight': {'isup':false, 'isdown':false, 'ispress':false},
			'ArrowDown': {'isup':false, 'isdown':false, 'ispress':false},
			'ArrowUp': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyA': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyB': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyC': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyD': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyE': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyF': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyG': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyH': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyI': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyJ': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyK': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyL': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyM': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyN': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyO': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyP': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyQ': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyR': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyR': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyS': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyT': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyU': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyV': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyW': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyX': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyY': {'isup':false, 'isdown':false, 'ispress':false},
			'KeyZ': {'isup':false, 'isdown':false, 'ispress':false},
			'Space': {'isup':false, 'isdown':false, 'ispress':false},
			'Shift': {'isup':false, 'isdown':false, 'ispress':false},
			'Control': {'isup':false, 'isdown':false, 'ispress':false},
		}

		let _convertkey_ = (code)=>{
			if (code == 'ShiftLeft' || code == 'ShiftRight') {
				return('Shift');
			}
			else if (code == 'ControlLeft' || code == 'ControlRight') {
				return('Control');
			}
			else{
				return(code);
			}
		}

		this.input.iskeydown = (code)=>{
			if (this.input.keyboard[code] != undefined) {
				return this.input.keyboard[code].isdown;
			}
		}

		this.input.iskeyup = (code)=>{
			if (this.input.keyboard[code] != undefined) {
				return this.input.keyboard[code].isup;
			}
		}

		this.input.iskeypress = (code)=>{
			if (this.input.keyboard[code] != undefined) {
				return this.input.keyboard[code].ispress;
			}
		}

		window.addEventListener('keydown', (e)=>{
			let code = _convertkey_(e.code);

			if (this.input.keyboard[code] != undefined) {
				this.input.keyboard[code].isdown = true;
			}
		})

		window.addEventListener('keyup', (e)=>{
			let code = _convertkey_(e.code);

			if (this.input.keyboard[code] != undefined) {
				this.input.keyboard[code].isup = true;
				this.input.keyboard[code].isdown = false;
				requestAnimationFrame(()=>{this.input.keyboard[code].isup = false});
			}
		})

		window.addEventListener('keypress', (e)=>{
			let code = _convertkey_(e.code);

			if (this.input.keyboard[code] != undefined) {
				this.input.keyboard[code].ispress = true;
				requestAnimationFrame(()=>{this.input.keyboard[code].ispress = false});
			}
		})

		this.input.mouse = {
			'x': 0,
			'y': 0,
		}

		window.addEventListener('mousemove', (e)=>{
			let bcr = this.canvas.getBoundingClientRect();
			this.input.mouse.x = e.clientX - bcr.x;
			this.input.mouse.y = e.clientY - bcr.y;
		})
	}

	_init(){
		this.load();
		this._loop();
		document.body.appendChild(this.canvas);
	}

	load(){
	}

	update(){
	}

	iscollision(a,b){
		if (a.x <= b.x+b.w && a.x+a.w >= b.x &&
			a.y <= b.y+b.h && a.y+a.h >= b.y ) {
			
			return b;
		} else {

			return false
		}
	}
}

Square.Image = function(src){
	let img = new Image();
	img.src = src;
	return img;
}
