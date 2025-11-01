/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 28th 2025
 */
"use strict"

class Cone extends DrawObject {
	constructor ( res , colour ) {
		super () ;

		if ( res < 3 ) res = 3 ;
		var angleDiv = 360 / res 
			// ex) res = 3, 360/3 = 120, 0,120,240,360/0
			, cAngle // current angle`
			, nAngle // next angle
			, dim = 3 // x,y,z
			, vertsPerFace = 3 // 012
			, facesPerLoop = 2 // 2 faces(base & side) per for loop
			, step = dim * vertsPerFace * facesPerLoop // = 18 
			, idx   
			, ilim = res  
			, cdx // idx offset per loop
			, vertTip = [ 0 , 0.5 , 0 ]
			, vertBaseCentre = [ 0 , -0.5 , 0 ]
			;

		this.verts = [] ;
		this.colours = [] ;

		function radial2cartesian ( idx , angle , vert ) {
			// xz plane, y = -0.5 ;

			vert [ idx + 0 ] = cos ( angle ) ;
			vert [ idx + 1 ] = -0.5 ;
			vert [ idx + 2 ] = sin ( angle ) ;
			// darn it it is spinning wrong way,
			// setting z = -sin ( angle )  fixes it 
			// but kills the lamp 
		}

	

		for ( idx = 0 ; idx < ilim ; idx ++ ) {

			cAngle = idx * angleDiv ;
			nAngle = ( idx + 1 ) * angleDiv ;
			//console.log(cAngle,nAngle);

			// verts idx offset for each loop step,
			// 2 faces per loop so dim*vertsPerFace*facesPerLoop
			// = 3 * 3 * 2 = 18
			// 0 , 3 , 6 , 9 , 12 , 15
			// 18 , 21 , ...
			cdx = idx * step ;

			// base face
			// go clock wise since depicted from inside faces of base
			// 021 instead of 012
			copyVert3d ( 0 , vertBaseCentre , cdx , this.verts ) ;

			cdx += 3;
			radial2cartesian ( cdx , nAngle , this.verts ) ;

			cdx += 3;
			radial2cartesian ( cdx , cAngle , this.verts ) ;

			// base edge to tip
			// go counter clock wise 
			cdx += 3;
			radial2cartesian ( cdx , cAngle , this.verts ) ;

			cdx += 3;
			radial2cartesian ( cdx , nAngle , this.verts ) ;

			cdx += 3;
			copyVert3d ( 0 , vertTip , cdx , this.verts ) ;
		}
		
		this.len = this.verts.length ; 
		this.cnt = this.len / dim ;
		console.log(this.cnt);

		//this.fillColourArray ( colour ) ;
		this.paintFace = function (idx , clr ) {
			this.clr [ idx + 0 ] = clr [ 0 ] ;
			this.clr [ idx + 1 ] = clr [ 1 ] ;
			this.clr [ idx + 2 ] = clr [ 2 ] ;

			this.clr [ idx + 3 ] = clr [ 0 ] ;
			this.clr [ idx + 4 ] = clr [ 1 ] ;
			this.clr [ idx + 5 ] = clr [ 2 ] ;

			this.clr [ idx + 6 ] = clr [ 0 ] ;
			this.clr [ idx + 7 ] = clr [ 1 ] ;
			this.clr [ idx + 8 ] = clr [ 2 ] ;
		}

		this.fillColourArray ( colour ) ;
	}
}
