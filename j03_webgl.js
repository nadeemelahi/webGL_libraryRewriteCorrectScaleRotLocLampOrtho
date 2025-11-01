/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 20th 2025
 */
"use strict"

// Names List
// createProgram
// createShader
// createFS/VS
//
// bindBuffer
// configureBuffer
// loadARRAY_BUFFER
//
// bindTexture
// configureTexture 
// loadTexture

function createProgram( vsText , fsText ) {
	var vsOut = createVS ( vsText )
		, fsOut = createFS ( fsText ) 
		, program = webgl.createProgram()
	;
	webgl.attachShader(program, vsOut);
	webgl.attachShader(program, fsOut );
	webgl.linkProgram(program);
	var success = webgl.getProgramParameter(program, webgl.LINK_STATUS);
	if (success) {
		return program;
	}

	console.log(webgl.getProgramInfoLog(program));
	webgl.deleteProgram(program);
}

function createShader( type , source ) {
	var shader = webgl.createShader( type ); // vertex or fragment
	webgl.shaderSource(shader, source);
	webgl.compileShader(shader);
	var success = webgl.getShaderParameter(shader, webgl.COMPILE_STATUS);
	if (success) {
		return shader;
	}
	console.log(webgl.getShaderInfoLog(shader));
	webgl.deleteShader(shader);
}

function createVS ( source){
	return createShader ( 
		webgl.VERTEX_SHADER , source 
	);
}

function createFS ( source ){
	return createShader ( 
		webgl.FRAGMENT_SHADER , source 
	);
}

function bindBuffer ( prog , attr , name , dim ) {
	webgl.bindBuffer (
		webgl.ARRAY_BUFFER
		, attr
	);
	configureBuffer ( prog , name , dim ) ;
}
function configureBuffer ( prog , name , dim ) {
	var loc = webgl.getAttribLocation ( 
		prog
		, name	) ;
	webgl.enableVertexAttribArray ( loc ) ;
	webgl.vertexAttribPointer ( loc 
		, dim
		, webgl.FLOAT
		, false // normalize
		, 0 , 0 // stride , offset
	) ;
	// stride = 0 // move forward size * sizeof(type) each iteration to get the next position
	// offset = 0        // start at the beginning of the buffer
}

function loadARRAY_BUFFER ( array32 ) {

	webgl.bufferData(
		webgl.ARRAY_BUFFER
		, array32
		, webgl.STATIC_DRAW
	);
}


function bindTexture ( texture ) {
	webgl.bindTexture ( webgl.TEXTURE_2D , texture ) ;
}

function configureTexture () {

	  // Set the parameters so we can render any size image.
	webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_S, webgl.CLAMP_TO_EDGE);
	webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_T, webgl.CLAMP_TO_EDGE);
	webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, webgl.NEAREST);
	webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MAG_FILTER, webgl.NEAREST);
}

function loadTexture ( img ) {
	webgl.texImage2D ( webgl.TEXTURE_2D 
		, 0 , webgl.RGBA , webgl.RGBA
		, webgl.UNSIGNED_BYTE 
		, img 
	) ;
}


function clearCanvas ( ) {
	webgl.clear ( webgl.COLOR_BUFFER_BIT ) ;
}

function draw (  idx , cnt ) {
	webgl.drawArrays( 
		webgl.TRIANGLES
		, idx  
		, cnt 
	);	
}


