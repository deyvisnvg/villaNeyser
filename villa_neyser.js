var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var vn = document.getElementById('canvas');
var papel = vn.getContext('2d');

document.addEventListener('keydown', movimiento);
vn.addEventListener('click', moverMouse);

var fondo = {
	url: "tile.png",
	cargaOK: false
};
var vaca = {
	url: "vaca.png",
	cargaOK: false
};
var vx = new Array();
var vy = new Array();

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};
var cx = new Array();
var cy = new Array();

var pollo = {
	url: "pollo.png",
	cargaOK: false
};
var px = new Array();
var py = new Array();

var loboi = {
	url: "loboi.png",
	cargaOK: false
}
var lobo = {
	url: "lobo.png",
	cargaOK: false
}
var lx = 30;
var ly = 164;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargaFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargaVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargaPollo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargaLobo);

loboi.imagen = new Image();
loboi.imagen.src = loboi.url;
loboi.imagen.addEventListener("load", cargaLoboi);

var cantidad_v = Aleatorio(9, 12);
var cantidad_c = Aleatorio(5, 8);
var cantidad_p = Aleatorio(5, 10);
var posicion = 0;

function cargaFondo() {
	// body...
	fondo.cargaOK = true;
	dibujar();
}
function cargaVaca() {
	// body...
	vaca.cargaOK = true;
	mantenerPosicion();
}
function cargaCerdo() {
	// body...
	cerdo.cargaOK = true;
	mantenerPosicion();
}
function cargaPollo() {
	// body...
	pollo.cargaOK = true;
	mantenerPosicion();
}
function cargaLobo() {
	// body...
	lobo.cargaOK = true;
	dibujar();
}
function cargaLoboi() {
	// body...
	loboi.cargaOK = true;
	dibujar();
}

function movimiento(evento) {
	// body...
	console.log(evento);
	var mover = 5;

	if (evento.keyCode == teclas.UP) {
		if(ly > 0){
	 		lx = lx;
			ly = ly - mover;
			dibujar();
		}
	}
	if (evento.keyCode == teclas.DOWN) {
		if(ly < 430){
			lx = lx;
			ly = ly + mover;
			dibujar();
		}
	}
	if (evento.keyCode == teclas.LEFT) {
		if (lx > 0) {
			lx = lx - mover;
			ly = ly;
			posicion = 1;
			dibujar();
		}
		
	}
	if (evento.keyCode == teclas.RIGHT) {
		if (lx < 430) {
			lx = lx + mover;
			ly = ly;
			posicion = 2;
			dibujar();
		}
	}
}

function moverMouse(evento2) {
	// body...
	var mover = 10;
		console.log("x: " + evento2.offsetX);
		console.log("y: " + evento2.offsetY);
		console.log(evento2);
	if (evento2.offsetX > lx + 60) {
		if(evento2.offsetY > ly && evento2.offsetY < ly + 80){
			lx = lx + mover;
			ly = ly;
			posicion = 2;
			dibujar();
		}
	}
	if (evento2.offsetX < lx) {
		if(evento2.offsetY > ly && evento2.offsetY < ly + 80){
			lx = lx - mover;
			ly = ly;
			posicion = 1;
			dibujar();
		}
	}
	if (evento2.offsetY > ly + 70) {
		if(evento2.offsetX > lx && evento2.offsetX < lx + 80){
			lx = lx;
			ly = ly + mover;
			dibujar();
		}
	}
	if (evento2.offsetY < ly + 20) {
		if(evento2.offsetX > lx && evento2.offsetX < lx + 80){
			lx = lx;
			ly = ly - mover;
			dibujar();
		}
	}
}

function mantenerPosicion() {
	// body...
	if(vaca.cargaOK){
		for (var i = 0; i < cantidad_v; i++) {
			var v_x = Aleatorio(3, 6);
			var v_y = Aleatorio(2, 6);
			vx[i] = v_x * 70;
			vy[i] = v_y * 70;
			//document.write(v_x+", ");
		}

	}
	if(cerdo.cargaOK){
		for (var i = 0; i < cantidad_c; i++) {
			var c_x = Aleatorio(1, 3);
			var c_y = Aleatorio(1, 3);
			cx[i] = c_x * 50;
			cy[i] = c_y * 50;
		}
	}
	if (pollo.cargaOK) {
		for (var i = 0; i < cantidad_p; i++) {
			var p_x = Aleatorio(1, 3);
			var p_y = Aleatorio(3, 6);
			px[i] = p_x * 20;
			py[i] = p_y * 84;
		}
	}
	dibujar();
}

function dibujar() {
	// body...
	if(fondo.cargaOK){
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargaOK){
		for (var i = 0; i < cantidad_v; i++) {
			papel.drawImage(vaca.imagen, vx[i], vy[i]);
		}
	}
	if (cerdo.cargaOK) {
		for (var i = 0; i < cantidad_c; i++) {
			papel.drawImage(cerdo.imagen, cx[i], cy[i]);
		}
	}
	if (pollo.cargaOK) {
		for (var i = 0; i < cantidad_p; i++) {
			papel.drawImage(pollo.imagen, px[i], py[i]);
		}
	}
	if (lobo.cargaOK && loboi.cargaOK) {
		if (posicion == 1) {
			papel.drawImage(loboi.imagen, lx, ly);
		} else {
			papel.drawImage(lobo.imagen, lx, ly);
		} 
	}
}

function Aleatorio(min, max) {
	// body...
	var resultado = Math.floor(Math.random() * (max - min + 1)) + min;

	return resultado;
}