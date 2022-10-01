function sumarLento(nuemero) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve (numero + 1);

        }, 800 );
    });
}
