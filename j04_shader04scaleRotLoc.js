/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 24th 2025
 */
"use strict"

vs04 = `
      attribute vec3 clr ;
      varying vec3 vclr ;

      attribute vec3 pos012 ;
      uniform vec3 scale ;
      uniform vec3 rot;
      uniform vec3 loc ;

      vec3 pos ;

      float cx , cy , cz ;
      float sx , sy , sz ;
      float ax , ay , az ;
      mat3 mrot , mrotx , mroty , mrotz ;

      uniform bool isPortrait ;
      uniform vec2 res ; 
      float winWidth , winHeight ;
      float stretchWidth , stretchHeight ;

      void main() {

	ax = radians ( rot.x ) ;
	ay = radians ( rot.y ) ;
	az = radians ( rot.z ) ;

	cx = cos ( ax ) ; sx = sin ( ax ) ;
	cy = cos ( ay ) ; sy = sin ( ay ) ;
	cz = cos ( az ) ; sz = sin ( az ) ;

	mrotx = mat3 (
		  1.0 	, 0.0 	, 0.0 	
		, 0.0 	,  cx 	,  sx 	
		, 0.0 	, -sx 	,  cx 	
		) ;

	mroty = mat3 (
		   cy 	, 0.0 	,  sy 	
		, 0.0 	, 1.0 	, 0.0 	
		, -sy 	, 0.0 	,  cy 	
		) ;

	mrotz = mat3 (
		   cz 	,  sz 	, 0.0 	
		, -sz 	,  cz 	, 0.0 	
		, 0.0 	, 0.0 	, 1.0 	
		) ;

	mrot = mrotx * mroty * mrotz ;
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
      }
    ` ;

fs04 = `
      precision highp float ;
      varying vec3 vclr ;
      float red , grn , blu ;
      void main() {
	red = vclr.r ; 
	grn = vclr.g ; 
	blu = vclr.b ; 
	gl_FragColor = vec4 ( red , grn , blu , 1 ) ; 
      }
    ` ;

