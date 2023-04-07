var exibeMensaje = function() { 
    var mensajeFueraDelIf = 'Caelum'; 
    if(true) { 
        var mensajeDentroDelIf = 'Alura'; 
        console.log(mensajeDentroDelIf)// Alura ;
    } 
    console.log(mensajeFueraDelIf); // Caelum 

    console.log(mensajeDentroDelIf); // Alura 
}