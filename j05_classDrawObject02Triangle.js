/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 28th 2025
 */
"use strict"

class Triangle extends DrawObject {
	constructor ( colour ) {
		super () ;

		var tWidth = 1 , tHeight = 1 

			, xRight = tWidth / 2
			, xLeft = -1 * xRight

			, yTop = tHeight / 2
			, yBottom = -1 * yTop
		;

		// top left - x
		this.verts [ 0 ] = xLeft ;
		// top left - y
		this.verts [ 1 ] = yTop ;
		// z
		this.verts [ 2] = 0 ;

		// bottom left - x 
		this.verts [ 3 ] = xLeft ;
		// bottom left - y 
		this.verts [ 4 ] = yBottom ;
		// z
		this.verts [ 5] = 0 ;

		// bottom right
		this.verts [ 6 ] = xRight;
		this.verts [ 7 ] = yBottom;
		this.verts [ 8 ] = 0 ;

		this.len = 9 ;
		this.cnt = 3 ;

		this.mkColourArray ( colour ) ;

	}

}
