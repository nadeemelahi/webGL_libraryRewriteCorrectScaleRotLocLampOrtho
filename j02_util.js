/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 20th 2025
 */
"use strict"

// Names List
// dgd, dtn, evl
// round , d2r , cos , sin
// resizeCanvas
// resizeWebgl
// resizeH
// initWebglCanvas
// not yet used
// copyByIdx
// copyVert3d

function dgd ( idName ) { return document.getElementById( idName ) ; } ;
function dtn ( txt ) { return document.createTextNode ( txt ) ; } ;
function evl ( evt , cb ) { window.addEventListener(evt,cb,false); } ;
function round ( num ) { return ( ( num * 100 ) >> 0 ) / 100 ; }
function d2r ( deg ) { return deg * Math.PI / 180 ; }
function cos ( ang ) { return  Math.cos ( d2r ( ang ) ) ; }
function sin ( ang ) { return Math.sin( d2r ( ang ) ) ; }

function resizeCanvas( ) {
	//console.log("resizeCanvas");
	canvas.style.width = winWidth +"px";
	canvas.width = winWidth ;
	canvas.style.height = winHeight + "px"; 
	canvas.height = winHeight ;
}

function resizeWebgl () {
	//console.log("resizeWebgl");
	webgl.viewport(0, 0, winWidth, winHeight);
}
function resizeH () {
	//console.log("resizeh");
	winWidth = window.innerWidth ;
	winHeight = window.innerHeight ;
	//console.log(winWidth,winHeight) ;

	if ( winHeight > winWidth ) {

		isPortrait = 1;
		//maxWidth = 1 ;
		//maxHeight = round ( winHeight / winWidth ) ;
		// map y, 0->1 to 0->maxHeight
		//
		// ex) y = 0.5 , maxHeight = 1.5
		//
		//     0----0.5----1
		//     0---0.75----1.5
		//
		//     0.5 * 1.5 = 0.75
		//     0.75 / 1.5 = 0.5
		//console.log("isPortrait, maxHeight: " + maxHeight );

	} else {

		isPortrait = 0;
		//maxHeight = 1 ;
		//maxWidth = round ( winWidth / winHeight ) ;
		//console.log("isPortraitNOT, maxWidth: " + maxWidth);
	}

	resizeCanvas () ;
	resizeWebgl () ;
}

function initWebglCanvas () {

	canvas = dgd("fsCanvas") ;
	webgl = canvas.getContext("webgl") ;

	if ( ! webgl ) {
		console.log("webgl is not supported"); 
		return;
	}

	webgl.enable(webgl.DEPTH_TEST)
	//otherwise, latest drawn 
	//will be drawn on top / in front

	evl ( "resize" , resizeH ) ;
	resizeH () ;
}

function copyVert3d ( sdx , src , ddx , dst ) {
	dst [ ddx + 0 ] = src [ sdx + 0 ] ;
	dst [ ddx + 1 ] = src [ sdx + 1 ] ;
	dst [ ddx + 2 ] = src [ sdx + 2 ] ;
}
