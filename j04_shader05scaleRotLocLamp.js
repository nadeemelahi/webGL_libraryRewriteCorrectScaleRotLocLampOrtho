/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 30th 2025
 */
"use strict"

vs05 = `
      attribute vec3 clr ;
      varying vec3 vclr ;

      attribute vec3 pos012 , pos120 , pos201 ;
      vec3 pos , rp012 , rp120 , rp201 ; 
      varying vec3 vrp012 , vrp120 , vrp201 ; 

      uniform vec3 lampDir ; 
      varying vec3 vlampDir ; 
      
      uniform float lampClamp , lampAmp ; 
      varying float vlampClamp , vlampAmp ; 

      uniform vec3 scale , rot , loc ;

      uniform bool isPortrait ;
      uniform vec2 res ; 
      
      float cx , cy , cz ;
      float sx , sy , sz ;
      float ax , ay , az ;
      mat3 mrot , mrotx , mroty , mrotz ;

      float winWidth , winHeight ;
      float stretchWidth , stretchHeight ;

      void main() {

	ax = radians ( rot.x ) ;
	ay = radians ( rot.y ) ;
	az = radians ( rot.z ) ; 

	cx = cos ( ax ) ; sx = sin ( ax ) ;
	cy = cos ( ay ) ; sy = sin ( ay ) ;
	cz = cos ( az ) ; sz = sin ( az ) ; 

	// https://en.wikipedia.org/wiki/Rotation_matrix	
	// https://math.libretexts.org/Bookshelves/Applied_Mathematics/Mathematics_for_Game_Developers_(Burzynski)/04%3A_Matrices/4.06%3A_Rotation_Matrices_in_3-Dimensions
	
	mrotx = mat3 (
		  1.0 	, 0.0 	, 0.0 	
		, 0.0 	,  cx 	, -sx 	
		, 0.0 	,  sx 	,  cx 	
		) ;

	mroty = mat3 (
		   cy 	, 0.0 	,  sy 	
		, 0.0 	, 1.0 	, 0.0 	
		, -sy 	, 0.0 	,  cy 	
		) ;

	mrotz = mat3 (
		   cz 	, -sz 	, 0.0 	
		,  sz 	,  cz 	, 0.0 	
		, 0.0 	, 0.0 	, 1.0 	
		) ;
	
	mrot = mrotx * mroty * mrotz ;

	rp012 = mrot * pos012 ;
	rp120 = mrot * pos120 ;
	rp201 = mrot * pos201 ;

	pos = mrot * ( scale * pos012 ) ;
	pos += loc ;

      	winWidth = res.x ;
	winHeight = res.y ;

	if ( isPortrait ) {
		stretchHeight = winHeight / winWidth ;
		pos.y /= stretchHeight ;
	} else {
		stretchWidth = winWidth / winHeight ;
		pos.x /= stretchWidth ;
		pos.z /= stretchWidth ;
	}

	gl_Position = vec4 ( pos , 1 ) ;

	vclr = clr ;

        vrp012 = rp012 ;
        vrp120 = rp120 ; 
        vrp201 = rp201 ; 
	vlampDir = lampDir ;
	vlampClamp = lampClamp ;
	vlampAmp = lampAmp ;
      }
    ` ;

fs05 = `
      precision highp float ;

      varying vec3 vrp012 , vrp120 , vrp201 ; 
      varying vec3  vlampDir ; 
      varying float vlampClamp , vlampAmp ;

      vec3 lineA , lineB , normAB ;
      float lampEff ;

      varying vec3 vclr ;

      float red , grn , blu ;

      void main() {
      
	lineA = vrp120 - vrp012 ;
	lineB = vrp120 - vrp201 ;
	normAB = normalize ( cross ( lineA , lineB ) ) ;
	lampEff = dot ( vlampDir , normAB ) ;
	lampEff *= vlampAmp ;

	if ( lampEff < 0.0 ) { 
		lampEff *= -1.0 ;
	}

	if ( lampEff < vlampClamp ) { 
		lampEff = vlampClamp ;
	}

	red = vclr.r * lampEff ; 
	grn = vclr.g * lampEff ; 
	blu = vclr.b * lampEff ; 

	gl_FragColor = vec4 ( red , grn , blu , 1 ) ; 
      }
    ` ;

function getUniformReferences_prg5 ( prg ) {
	uniformRef_scale = webgl.getUniformLocation ( prg
		, uniformNm_scale ) ; 

	uniformRef_rot = webgl.getUniformLocation ( prg
		, uniformNm_rot ) ; 

	uniformRef_loc = webgl.getUniformLocation ( prg 
		, uniformNm_loc ) ; 

	uniformRef_isPortrait = webgl.getUniformLocation ( prg 
		, uniformNm_isPortrait ) ; 

	uniformRef_res = webgl.getUniformLocation ( prg
		, uniformNm_res ) ; 

	uniformRef_lampDir = webgl.getUniformLocation ( prg
		, uniformNm_lampDir ) ; 

	uniformRef_lampClamp = webgl.getUniformLocation ( prg
		, uniformNm_lampClamp ) ; 

	uniformRef_lampAmp = webgl.getUniformLocation ( prg
		, uniformNm_lampAmp ) ; 

}

