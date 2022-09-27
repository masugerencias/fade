window.addEventListener('scroll',function(){
/* El tipo de evento que el meto es de tipo
SCROLL es palabra reservada. 
Y el segundo parametro es la FUNCION que se ejecutará cundo llegue al punto SCROLL.*/

/* console.log('funcion ejecutada por scroll');*/

/* NEcestimos caputar valores para que se ejecute la funcion, empezaremos con la altura de la ventana */
const altura = window.innerHeight;

/* console.log('la altura de la pantalla es: '+altura);
 */

/* ahora queremos tener el valor de la distancia de la parte superior del elemento con la de la ventana.
PAra cuando llegue a ese punto de la ventana se ejecute la funcion. */

var imagen = document.getElementById('casa1')
   

var distancia = imagen.getBoundingClientRect().top;
/* Este creo que es para medir desde el topo de la imagen hasta la pantalla, NO?? SI! */

console.log(distancia);




})
