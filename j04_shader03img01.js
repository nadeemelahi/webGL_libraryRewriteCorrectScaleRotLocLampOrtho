/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Oct 20th 2025
 */
"use strict"

vs03img01 = `
      attribute vec2 posImg ;
      attribute vec2 texImg ;
      varying vec2 vtexImg;
      void main() {
	gl_Position = vec4 ( posImg , 0 , 1 ) ;
	vtexImg = texImg;
      }
    ` ;

fs03img01 = `
      precision mediump float ;
      varying vec2 vtexImg;
      uniform sampler2D img ; 
      void main() {
	gl_FragColor = texture2D( img , vtexImg ) ; 
      }
    ` ;

