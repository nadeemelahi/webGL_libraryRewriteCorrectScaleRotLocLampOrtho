/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 20th 2025
 */
"use strict"

vs02 = `
      attribute vec3 posBCA ;
      attribute vec3 clrBCA ;
      varying vec3 vclr ;
      void main() {
	gl_Position = vec4 ( posBCA , 1 ) ;
	vclr = clrBCA ;
      }
    ` ;

fs02 = `
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

