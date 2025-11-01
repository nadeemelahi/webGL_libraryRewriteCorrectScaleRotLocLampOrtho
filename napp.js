/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 20th 2025
 */
"use strict"

// Names List

napp = new function (){

	initWebglCanvas () ;
	if ( ! webgl ) return ;

	evl ( "resize" , resizeRedraw ) ;
	function resizeRedraw() {
		console.log ( "resizeRedraw() , isPortrait: " + isPortrait );
	}

	// prg3 image
	
	selfieLogoPNG  = new Image () ;
	selfieLogoPNG.src = "./selfieLogo.png";

	texImg = [
		//
		// top left     top right
		//  0,0         1,0
		//    +----------+
		//    |          |
		//    |	         |
		//    |          |
		//    +----------+
		//  0,1          1,1
		//  bottom left  bottom right
		//

		// x      y
		0.0 ,  0.0     // top left
		, 0.0 ,  1.0     // bottom left 
		, 1.0 ,  0.0     // top right

		, 1.0 ,  0.0     // top right
		, 0.0 ,  1.0     // bottom left 
		, 1.0 ,  1.0     // bottom right
	] ;

	texImgfl = new Float32Array ( texImg ) ;

	// verts quad map 
	// 0,0 is bottom left
	posImg = [
		// placing it on a square 
		// at the top right quandrant
		//
		// top left     top right
		//  0,1         1,1
		//    +----------+
		//    |          |
		//    |	         |
		//    |          |
		//    +----------+
		//  0,0          1,0
		//  bottom left  bottom right
		//
		// x      y
		0.0 ,  1.0     // top left
		, 0.0 ,  0.0     // bottom left
		, 1.0 ,  1.0     // top right

		, 1.0 ,  1.0     // top right
		, 0.0 ,  0.0     // bottom left
		, 1.0 ,  0.0     // bottom right	
	] ;

	posImgfl = new Float32Array ( posImg ) ;

	prg3 = createProgram ( vs03img01 , fs03img01 ) ;
	//webgl.enable ( webgl.BLEND ) ;
	attr_posImg = webgl.createBuffer () ;
	attr_texImg = webgl.createBuffer () ;
	texture = webgl.createTexture ( ) ;

	function draw_prg3(){
		webgl.useProgram ( prg3 ) ;

		bindBuffer ( prg3 , attr_posImg , attrNm_posImg , 2 ) ;
		loadARRAY_BUFFER ( posImgfl ) ; 

		bindBuffer ( prg3 , attr_texImg , attrNm_texImg , 2 ) ;
		loadARRAY_BUFFER ( texImgfl ) ; 

		bindTexture ( texture ) ; 
		configureTexture () ;
		loadTexture( selfieLogoPNG ) ;

		draw ( 0 , 6 ) ;
	}


	// prg5
	prg5 = createProgram ( vs05 , fs05 ) ;

	var  cr01 = new Circle ( 3 , [ 1, 0, 0 ] ) 
		, cr02 = new Circle ( 4 , [ 0, 1, 0 ] ) 
		, cr03 = new Circle ( 5 , [ 0, 0, 1 ] ) 
		, cr04 = new Circle ( 9 , [ 1, 0, 1 ] ) 

		, cn01 = new Cone ( 3 , [ 1, 0, 0 ] ) 
		, cn02 = new Cone ( 20 , [ 0, 1, 0 ] ) 

		, cn03 = new Cone ( 20 , [ 1, 0, 0 ] ) 
		, cn04 = new Cone ( 20 , [ 0, 1, 0 ] ) 
		, cn05 = new Cone ( 20 , [ 0, 0, 1 ] ) 
	;

	cr01.scale = [ 0.05 , 0.05 , 0.05 ] ; // default 0.2
	cr02.scale = [ 0.05 , 0.05 , 0.05 ] ; 
	cr03.scale = [ 0.05 , 0.05 , 0.05 ] ;
	cr04.scale = [ 0.05 , 0.05 , 0.05 ] ;

	cn01.scale = [ 0.08 , 0.08 , 0.08 ] ;
	cn02.scale = [ 0.08 , 0.08 , 0.08 ] ;
	cn03.scale = [ 0.3 , 0.3 , 0.3 ] ;
	cn04.scale = [ 0.3 , 0.3 , 0.3 ] ;
	cn05.scale = [ 0.3 , 0.3 , 0.3 ] ;

	DrawList.add( cr01 ) ;
	DrawList.add( cr02 ) ;
	DrawList.add( cr03 ) ;
	DrawList.add( cr04 ) ;

	DrawList.add( cn01 ) ;
	DrawList.add( cn02 ) ;
	DrawList.add( cn03 ) ;
	DrawList.add( cn04 ) ;
	DrawList.add( cn05 ) ;

	DrawList.configure () ;

	cr01.setRotateZ_byDegrees( 4 ) ;
	cr02.setRotateZ_byDegrees( 3 ) ;
	cr03.setRotateZ_byDegrees( 2 ) ;
	cr04.setRotateZ_byDegrees( 1 ) ;

	cn01.setRotateY_byDegrees( 2 ) ; 
	cn02.setRotateY_byDegrees( 2 ) ; 

	cn03.setRotateX_byDegrees( 1 ) ; 
	cn04.setRotateY_byDegrees( 1 ) ; 
	cn05.setRotateZ_byDegrees( 1 ) ; 
	
	cr01.loc = [ -0.95 , -0.9 , 0 ] ;
	cr02.loc = [ -0.85 , -0.9 , 0 ] ;
	cr03.loc = [ -0.75 , -0.9 , 0 ] ;
	cr04.loc = [ -0.65 , -0.9 , 0 ] ;

	cn01.loc = [ -0.50 , -0.9  , 0 ] ;
	cn02.loc = [ -0.35 , -0.9  , 0 ] ;

	cn03.loc = [ -0.7  ,  0.0  , 0 ] ;
	cn04.loc = [  0.0  ,  0.0  , 0 ] ;
	cn05.loc = [  0.7  ,  0.0  , 0 ] ;

	cn01.rot = [ 5 , 0 , 0 ] ;
	cn02.rot = [ 5 , 0 , 0 ] ;
	cn03.rot = [ 5 , 0 , 0 ] ;
	cn04.rot = [ 5 , 0 , 0 ] ;
	cn05.rot = [ 5 , 0 , 0 ] ;




	attr_pos012 = webgl.createBuffer () ;
	attr_pos120 = webgl.createBuffer () ;
	attr_pos201 = webgl.createBuffer () ;
	attr_clr = webgl.createBuffer () ;

	var idx , ilim = DrawList.list.length ; 
	function draw_prg5 ( ) {
		webgl.useProgram ( prg5 ) ;

		bindBuffer ( prg5 , attr_pos012 , attrNm_pos012 , attrDim ) ;
		loadARRAY_BUFFER ( DrawList.verts012 ) ; 

		bindBuffer ( prg5 , attr_pos120 , attrNm_pos120 , attrDim ) ;
		loadARRAY_BUFFER ( DrawList.verts120 ) ; 

		bindBuffer ( prg5 , attr_pos201 , attrNm_pos201 , attrDim ) ;
		loadARRAY_BUFFER ( DrawList.verts201 ) ; 

		bindBuffer ( prg5 , attr_clr , attrNm_clr , attrDim ) ;
		loadARRAY_BUFFER ( DrawList.colours ) ; 

		loadUniforms_prg5 ( ) ;

		for ( idx = 0 ; idx < ilim ; idx ++ ) {
			updateDrawObject( DrawList.list[idx] ) ;
		}


	}

	function updateDrawObject ( dro ) {

		dro.updateRotXYZ () ;

		webgl.uniform3f ( uniformRef_rot 
			, dro.rot[0] , dro.rot[1] , dro.rot[2] ) ;

		webgl.uniform3f ( uniformRef_scale 
			, dro.scale[0] , dro.scale[1] , dro.scale[2] ) ;

		webgl.uniform3f ( uniformRef_loc 
			, dro.loc[0] , dro.loc[1] , dro.loc[2] ) ;

		draw( dro.offset , dro.cnt );
	}

	function loadUniforms_prg5 () {


		webgl.uniform1i ( uniformRef_isPortrait 
			, isPortrait ) ;

		webgl.uniform2f ( uniformRef_res 
			, winWidth , winHeight ) ;

		webgl.uniform3f ( uniformRef_lampDir
			, lampDirX , lampDirY , lampDirZ ) ;

		webgl.uniform3f ( uniformRef_lampDir
			, lampDirX , lampDirY , lampDirZ ) ;

		webgl.uniform1f ( uniformRef_lampClamp , lampClamp ) ;

		webgl.uniform1f ( uniformRef_lampAmp , lampAmp ) ;


	}

	var ct = 0 , lt, speed = 50 ;
	this.tick = function ( dt ) {

		ct += dt ; 
		if ( ct < speed ) return;

		ct = 0 ;
		clearCanvas();
		//draw_prg3() ;
		draw_prg5() ;


	} ;
	//loop();

	evl ( "load" , start ) ;
	function start () {
		console.log("start()");
		webgl.clearColor ( 1,1,1 , 1 ) ;
		getUniformReferences_prg5 ( prg5 );
		Timer.add( napp ) ;
	}

} ;


