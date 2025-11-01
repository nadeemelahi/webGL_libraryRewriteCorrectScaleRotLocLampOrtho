/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 20th 2025
 */
"use strict"

// global names list
//
// j01_names.js
// j02_dom.js
var  dgd 		// document.getElementById
	, dtn		// document.createTextNode
	, evl		// window.addEventListener
	, round		// 1000th place
	, d2r		// degrees to radians
	, cos		// cos in degrees
	, sin		// sin in degrees

	, canvas
	, webgl
	, isPortrait = 1 
	, winWidth
	, winHeight
	//, maxWidth = 1
	//, maxHeight = 1

	, resizeCanvas
	, resizeWebgl
	, resizeH
	, initWebglCanvas
// not yet used
	, copyVert3d

	// j03_webgl.create.link.js
	, createProgram
	, createShader
	, createVS
	, createFS

	, bindBuffer  
	, configureBuffer

	, loadARRAY_BUFFER

	, bindTexture
	, configureTexture
	, loadTexture

	, clearCanvas
	, draw

	// j04_shader01basic.js
	, vs01 , fs01
	// j04_shader02fragments.js
	, vs02 , fs02
	// j04_shader03img01.js
	, vs03img01 , fs03img01
	// j04_shader04scaleRotLoc.js
	, vs04 , fs04
	// j04_shader05scaleRotLocLamp.js
	, vs05 , fs05


	// j05_classDrawObject01.js
	// j05_classDrawObject02Triangle.js
	// j05_classDrawObject03Quad.js


	// napp.js
	, napp
	, attrDim = 3

	, prg1 

	, attr_posABC
	, attrNm_posABC = "posABC"

	, posABC , posABCfl

	, prg2 

	, attr_posBCA
	, attrNm_posBCA = "posBCA"
	, posBCA , posBCAfl

	, attr_clrBCA
	, attrNm_clrBCA = "clrBCA"
	, clrBCA , clrBCAfl

	, prg3 

	, selfieLogoPNG
	, texture

	, attr_posImg
	, attrNm_posImg = "posImg"
	 
	, attr_texImg
	, attrNm_texImg = "texImg"

	, texImg , texImgfl
	, posImg , posImgfl

	, prg4 , prg5 

	, attr_pos012
	, attrNm_pos012 = "pos012"
	//, pos012 , pos012fl // not needed for prg5, just prg4

	, attr_clr
	, attrNm_clr = "clr"

	, uniformNm_scale = "scale"
	, uniformRef_scale
	, sclx , scly , sclz

	, uniformNm_rot = "rot"
	, uniformRef_rot
	, rotx , roty , rotz

	, uniformNm_loc = "loc"
	, uniformRef_loc
	, locx , locy , locz

	, uniformNm_isPortrait = "isPortrait"
	, uniformRef_isPortrait
	// , isPortrait // j02_dom.js

	, uniformNm_res = "res"
	, uniformRef_res
	// , winWidth , winHeight // j02_dom.js

	// additional for prg5
	, attr_pos120
	, attrNm_pos120 = "pos120"

	, attr_pos201
	, attrNm_pos201 = "pos201"

	, uniformNm_lampDir = "lampDir"
	, uniformRef_lampDir
	, lampDirX = 0 , lampDirY = 0 , lampDirZ = 1

	, uniformNm_lampClamp = "lampClamp"
	, uniformRef_lampClamp
	, lampClamp = 0.1

	, uniformNm_lampAmp = "lampAmp"
	, uniformRef_lampAmp
	, lampAmp = 2.0 // max ~2 before it kills it
;

