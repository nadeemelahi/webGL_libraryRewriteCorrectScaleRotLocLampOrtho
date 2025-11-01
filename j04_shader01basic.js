/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 20th 2025
 */
"use strict"

vs01 = `
      attribute vec3 posABC ;
      void main() {
	gl_Position = vec4 ( posABC , 1 ) ;
      }
    ` ;

fs01 = `
      precision highp float ;
      void main() {
	gl_FragColor = vec4 ( 1, 0, 0, 1 ) ; 
      }
    ` ;

