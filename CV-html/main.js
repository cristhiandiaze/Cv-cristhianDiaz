var imagenes = ['./imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador2.jpg','./imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador3.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador4.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador5.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador6.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador7.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador8.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador9.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador10.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador11.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador12.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador13.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador14.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador15.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador16.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador17.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador18.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador19.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador20.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador21.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador22.jpg', './imagenes/Proyecto1/Proyecto1 Cristhian Diaz Comunicador Programador23.jpg', ]
    cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener ('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if(tgt == atras){       
            if (cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1 ];
                cont = imagenes.length -1;
            }

        } else if(tgt == adelante){
            if (cont < imagenes.length - 1 ){
                img.src = imagenes[cont + 1];
                cont ++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedorimagenes');

    carrousel(contenedor);
});


var imagenes2 = ['./imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru.jpg', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru2.jpg', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru3.png', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru5.png', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru6.png', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru7.png', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru8.png', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru9.png', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru10.png', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru11.png', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru12.jpg', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru13.jpg', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru14.jpg', './imagenes/Proyecto2/Cristhian Diaz Comunicador Programador en Peru15.jpg', ]
    cont = 0;

function carrousel2(contenedor){
    contenedor.addEventListener ('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if(tgt == atras){       
            if (cont > 0){
                img.src = imagenes2[cont - 1];
                cont--;
            } else {
                img.src = imagenes2[imagenes2.length - 1 ];
                cont = imagenes2.length -1;
            }

        } else if(tgt == adelante){
            if (cont < imagenes2.length - 1 ){
                img.src = imagenes2[cont + 1];
                cont ++;
            } else {
                img.src = imagenes2[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedorimagenes2');

    carrousel2(contenedor);
});


var imagenes3 = ['./imagenes/Proyecto3/Cristhian Diaz Comunicador Programador en Peru.jpg', './imagenes/Proyecto3/Cristhian Diaz Comunicador Programador en Peru2.jpg', './imagenes/Proyecto3/Cristhian Diaz Comunicador Programador en Peru3.jpg', './imagenes/Proyecto3/Cristhian Diaz Comunicador Programador en Peru4.png', './imagenes/Proyecto3/Cristhian Diaz Comunicador Programador en Peru5.png', './imagenes/Proyecto3/Cristhian Diaz Comunicador Programador en Peru6.jpg', './imagenes/Proyecto3/Cristhian Diaz Comunicador Programador en Peru7.png', './imagenes/Proyecto3/Cristhian Diaz Comunicador Programador en Peru8.png', './imagenes/Proyecto3/Cristhian Diaz Comunicador Programador en Peru9.png', ]
    cont = 0;

function carrousel3(contenedor){
    contenedor.addEventListener ('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if(tgt == atras){       
            if (cont > 0){
                img.src = imagenes3[cont - 1];
                cont--;
            } else {
                img.src = imagenes3[imagenes3.length - 1 ];
                cont = imagenes3.length -1;
            }

        } else if(tgt == adelante){
            if (cont < imagenes3.length - 1 ){
                img.src = imagenes3[cont + 1];
                cont ++;
            } else {
                img.src = imagenes3[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedorimagenes3');

    carrousel3(contenedor);
});


var imagenes4 = ['./imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru2.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru3.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru4.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru5.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru6.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru7.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru8.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru9.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru10.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru11.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru12.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru13.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru14.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru15.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru16.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru17.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru18.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru19.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru20.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru21.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru22.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru23.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru24.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru25.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru26.png', './imagenes/Proyeto4/Cristhian Diaz Comunicador Programador en Peru27.png', ]
    cont = 0;

function carrousel4(contenedor){
    contenedor.addEventListener ('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if(tgt == atras){       
            if (cont > 0){
                img.src = imagenes4[cont - 1];
                cont--;
            } else {
                img.src = imagenes4[imagenes4.length - 1 ];
                cont = imagenes3.length -1;
            }

        } else if(tgt == adelante){
            if (cont < imagenes4.length - 1 ){
                img.src = imagenes4[cont + 1];
                cont ++;
            } else {
                img.src = imagenes4[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedorimagenes4');

    carrousel4(contenedor);
});