/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 28th 2025
 */
"use strict"

var DrawList = {
	list : [] 
	, verts012 : []
	, verts120 : []
	, verts201 : []
	, colours : []

	, add : function ( drawObj ) {
		this.list.push ( drawObj ) ;
		this.listLen = this.list.length ;
	}
	
	, configure : function () {
		
		var idx , ilen 
			, offset = 0 
			, tmpVerts = []
			, tmpColours = []
		;

		tmpVerts = [].concat( this.list[ 0 ].verts ) ;
		tmpColours = [].concat( this.list[ 0 ].clr ) ;

		ilen = this.list.length ;

		// skip first one, it's offset is correct at default 0
		for ( idx = 1 ; idx < ilen ; idx ++ ) {

			offset += this.list [ idx - 1 ].cnt ;
			this.list [ idx ].offset = offset ;

			tmpVerts = tmpVerts.concat ( this.list [ idx ].verts ) ;
			tmpColours = tmpColours.concat ( this.list [ idx ].clr ) ;

		}

		this.verts012 = new Float32Array ( tmpVerts ) ;
		this.colours = new Float32Array ( tmpColours ) ;

		ilen = this.verts012.length ;

		this.verts120 = new Float32Array ( ilen ) ;
		this.verts201 = new Float32Array ( ilen ) ;

		function copy3verts ( sdx , src , ddx , dst ) {

			dst [ ddx + 0 ] = src [ sdx + 0 ] ;
			dst [ ddx + 1 ] = src [ sdx + 1 ] ;
			dst [ ddx + 2 ] = src [ sdx + 2 ] ;

		}
		for ( idx = 0 ; idx < ilen ; idx += 9 ) {

			//                             012 -> 120 
			//                   0             ->                1
			copy3verts ( ( idx + 0*3 ) , this.verts012 , ( idx + 1*3 ) , this.verts120 ) ;
			//                   1             ->                2
			copy3verts ( ( idx + 1*3 ) , this.verts012 , ( idx + 2*3 ) , this.verts120 ) ;
			//                   2             ->                0
			copy3verts ( ( idx + 2*3 ) , this.verts012 , ( idx + 0*3 ) , this.verts120 ) ;
	
			//                             012 -> 201 
			//                   0             ->                2
			copy3verts ( ( idx + 0*3 ) , this.verts012 , ( idx + 2*3 ) , this.verts201 ) ;
			//                   1             ->                0
			copy3verts ( ( idx + 1*3 ) , this.verts012 , ( idx + 0*3 ) , this.verts201 ) ;
			//                   2             ->                1
			copy3verts ( ( idx + 2*3 ) , this.verts012 , ( idx + 1*3 ) , this.verts201 ) ;
			
		}

	}
};
