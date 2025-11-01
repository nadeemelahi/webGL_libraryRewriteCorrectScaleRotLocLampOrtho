/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 28th 2025
 */
"use strict"

class Circle extends DrawObject {
	constructor ( res , colour ) {
		super () ;

		if ( res < 3 ) res = 3 ;
		var angleDiv = 360 / res 
			, cAngle // current angle`
			, nAngle // next angle
			, dim = 3 // x,y,z
			, vertsPerFace = 3 // 012
			, step = dim * vertsPerFace  // 9
			, idx   
			, ilim = res 
			, cdx // current idx
			, vertBaseCentre = [ 0 , 0 , 0 ]
			;

		this.verts = [] ;
		this.colours = [] ;

		function radial2cartesian ( idx , angle , vert ) {
			// xy plane, z = 0 ;

			vert [ idx ] = cos ( angle ) ;
			vert [ idx + 1 ] = sin ( angle ) ;
			vert [ idx + 2 ] = 0 ;
		}

		for ( idx = 0 ; idx < ilim ; idx ++ ) {

			cdx = idx * step ;
			// center // 012
			copyVert3d ( 0 , vertBaseCentre , cdx , this.verts ) ;

			cAngle = idx * angleDiv ;
			nAngle = ( idx + 1 ) * angleDiv ;
			
			// 345
			radial2cartesian ( ( cdx + 3 ) , cAngle , this.verts ) ;

			// 678
			radial2cartesian ( ( cdx + 6 ) , nAngle , this.verts ) ;
		}
		
		this.len = this.verts.length ; 
		this.cnt = this.len / dim ;

		this.fillColourArray ( colour ) ;
	}
}
