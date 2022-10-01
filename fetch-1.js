var resquest = new XMLHttpRequest();

resquest.open('GET', 'https://reqres.in/api/users', true);
resquest.send(null);

resquest.onreadystatechange = function( state ) {
    if( resquest.readyState === 4 ) {
        var resp = resquest.response;
        var respObj = JSON.parse( resp);

        console.log( respObj);
    }
}