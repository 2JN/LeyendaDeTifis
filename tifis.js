var tablero, direccion;

var teclas = {
	izq: 37,
	arriba: 38,
	der: 39,
	abj: 40
};

var fondo = {
	imagenURL: "sprites/fondo.png",
	imagenOK: false
};

var tifis = {
	x: 100,
	y: 100,
	frenteURL: "sprites/diana-frente.png",
	frenteOK: false,
	atrasURL: "sprites/diana-atras.png",
	atrasOK: false,
	izqURL: "sprites/diana-izq.png",
	izqOK: false,
	derURL: "sprites/diana-der.png",
	derOK: false,
	movimiento: 25
};

var liz = {
	lizURL: "sprites/liz.png",
	lizOK: false,
	x: 400,
	y: 200,
};

function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");
	
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = fondo.imagenOK = true;;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = tifis.frenteOK = true;;
	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = tifis.atrasOK = true;;
	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = tifis.izqOK = true;;
	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = tifis.derOK = true;
	
	liz.frente = new Image();
	liz.frente.src = liz.lizURL;
	liz.frente.onload = liz.frenteOK = true;
	
	document.addEventListener("keydown", teclado);
	
	dibujar();
}

function teclado(datos)
{
	//cual fue la tecla oprimida
	var codigo = datos.keyCode;
	direccion = codigo;
	
	if(codigo == teclas.arriba && tifis.y >= 25)
	{
		if(tifis.x <= 125 && tifis.y == 225)
			/*no mover*/;
		else if((tifis.x >= 175 && tifis.x <= 225) && tifis.y == 225)
			/*no mover*/;
		else if(tifis.x >= 125 && tifis.y == 375)
			/*no mover*/;
		else
			tifis.y -= tifis.movimiento;
	}

	if(codigo == teclas.abj && tifis.y < 450)
	{
		if(tifis.x <= 125 && tifis.y == 150)
			/*no mover*/;
		else if(tifis.x >= 125 && tifis.y == 300)
			/*no mover*/;
		else
			tifis.y += tifis.movimiento;
	}
		
	if(codigo == teclas.izq && tifis.x >= 25)
	{
		if(tifis.x == 150 && (tifis.y == 175 || tifis.y == 200))
			/*no mover*/;
		else if(tifis.x == 250 && tifis.y <= 200)
			/*no mover*/;
		else
			tifis.x -= tifis.movimiento;
	}
		
	if(codigo == teclas.der && tifis.x < 450)
	{
		if(tifis.x == 150 && tifis.y <= 200)
			/*no mover*/;
		else if(tifis.x == 100 && (tifis.y == 325 || tifis.y == 350))
			/*no mover*/;
		else
			tifis.x += tifis.movimiento;
	}
	
	dibujar();
}

function dibujar()
{
	if(fondo.imagenOK)
		tablero.drawImage(fondo.imagen, 0, 0);

	var tifisDibujo = tifis.frente;
	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
	{
		if(direccion == teclas.arriba)
			tifisDibujo = tifis.atras;
			
		if(direccion == teclas.abj)
			tifisDibujo = tifis.frente;
			
		if(direccion == teclas.izq)
			tifisDibujo = tifis.izq;
			
		if(direccion == teclas.der)
			tifisDibujo = tifis.der;
			
		tablero.drawImage(tifisDibujo, tifis.x, tifis.y);
	}
	
	if(liz.frenteOK)
		tablero.drawImage(liz.frente, liz.x, liz.y);
}
