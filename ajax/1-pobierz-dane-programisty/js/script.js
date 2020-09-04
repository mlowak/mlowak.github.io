// document.querySelector('button').addEventListener('click', function(){
//     fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);

//         json.forEach(function(user){
//             let dane = document.createElement('h2');
//             dane.setAttribute('id', 'dane-programisty');
//             dane.innerText = user.imie;

//             document.body.appendChild(dane);
//         })
//     })
// });

// PARSOWAĆ 

$(document).ready(function() {
    $('#get-data').click(function() {
        // link do API
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {

                let pImie = $('<p></p>').text(`Imię: ${data.imie}`);
                let pNazwisko = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                let pZawod = $('<p></p>').text(`Zawód: ${data.zawod}`);
                let pFirma = $('<p></p>').text(`Firma: ${data.firma}`);
                let hr = $('<hr />');

                let jqBody = $('#dane-programisty');

                jqBody.append(pImie);
                jqBody.append(pNazwisko);
                jqBody.append(pZawod);
                jqBody.append(pFirma);
                jqBody.append(hr);

                console.log(data);
            })
            .fail(function(error) {
                console.error(error);
            });

    });
});