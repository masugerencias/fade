window.addEventListener('scroll',function(){
/* El tipo de evento que el meto es de tipo
SCROLL es palabra reservada. 
Y el segundo parametro es la FUNCION que se ejecutará cundo llegue al punto SCROLL.*/

/* console.log('funcion ejecutada por scroll');*/

/* NEcestimos caputar valores para que se ejecute la funcion, empezaremos con la altura de la ventana */
const altura = window.innerHeight/1.3;

/* console.log('la altura de la pantalla es: '+altura);
 */

/* ahora queremos tener el valor de la distancia de la parte superior del elemento con la de la ventana.
PAra cuando llegue a ese punto de la ventana se ejecute la funcion. */

var imagen = document.getElementById('casa1')


   

var distancia = imagen.getBoundingClientRect().top;
/* Este creo que es para medir desde el topo de la imagen hasta la pantalla, NO?? SI!
QUE PASADA DE FUNCION! */

console.log(distancia);

/* Vamos a añadir a la imagen esta clase cuando se ejecute la funcion claro */
imagen.classList.add('transform_down')



       

/* la variable altura conviene dividirla entre 3 por ej, porque asi se asoma la img y vemos el efecto 1.3 */

/* CREAR CONDICION:
cuando coincide el 1/3 que he puesto con lo que tengo en la pantalla, que se ejecute el cambio de clases... */


        if(distancia <= altura){
            imagen.classList.add('aparece') 
        }else{
            imagen.classList.remove('aparece') 
        }


                                    

    })
        /* MUY IMPORTANTE ESE remove! */
