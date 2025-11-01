/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 28th 2025
 */
"use strict"

class DrawObject {
	constructor ( ) {
		this.offset = 0 ;

		this.scale = [ 0.2 , 0.2 , 0.2 ] ;
		this.loc = [ 0 , 0 , 0 ] ;
		this.rot = [ 0 , 0 , 0 ] ;

		this.rotStep = [ 0 , 0 , 0 ] ;
		this.rotLim = [ 359 , 359 , 359 ] ; 
		/* 360 - this.rotStep[0] 
			, 360 - this.rotStep[1]  
			, 360 - this.rotStep[2] */
		/*
		 * ROTATION LEFT HAND RULE -NOT RIGHT! 
		 * +ve Z direction is far
		 * -ve Z direction is near
		 */

		this.cnt = 0 ;
		this.len = 0 ;
		this.verts = [ ] ;
		this.clr = [ ] ;
	}
	
	updateRot ( idx ) { 
		this.rot[idx] += this.rotStep[idx] ;
		if ( this.rot[idx] > this.rotLim[idx] ) this.rot[idx] = 0 ;
	}

	updateRotX () { this.updateRot ( 0 ) ; }
	updateRotY () { this.updateRot ( 1 ) ; }
	updateRotZ () { this.updateRot ( 2 ) ; }

	updateRotXYZ ( ) {
		this.updateRotX ( ) ; 
		this.updateRotY ( ) ;
		this.updateRotZ ( ) ;
	}

	setRotate_byDegrees ( idx , deg ) {

		this.rotStep [ idx ] = deg ;
		this.rotLim [ idx ] = 360 - deg ;
	}

	setRotateX_byDegrees ( deg ) {
		this.setRotate_byDegrees ( 0 , deg ) ;
	}

	setRotateY_byDegrees ( deg ) {
		this.setRotate_byDegrees ( 1 , deg ) ;
	}

	setRotateZ_byDegrees ( deg ) {
		this.setRotate_byDegrees ( 2 , deg ) ;
	}

	fillColourArray ( colour ) {
		var idx , jdx ;
		for ( idx = 0 ; idx < this.cnt ; idx ++ ) {
			for ( jdx = 0 ; jdx < 3 ; jdx ++ ) {
				this.clr.push ( colour[ jdx ] ) ;
			}
		}
	}
}
