let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(contador > 20 ) {
        contador = 1;
    }
}, 10000 );
