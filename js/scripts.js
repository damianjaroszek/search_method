var files = [
    "picture-thumb-150x150.jpg",
    "beach-thumb-150x150.jpg",
    "monako-thumb-150x150.jpg",
    "sportcar-thumb-300x300.jpg"
];

var regex = /-thumb-\d{1,4}x\d{1,4}/;

//var search = files[0].search(regex); --> 7

files.forEach(function(file, i) {

    var index = file.search(regex); //picture-thumb-150x150.jpg --> zwróci na którym znaku zaczyna się ciąg -thumb-od_1_do_4_cyfr_ x _od_1_do_4_cyfr
    //picture to 7 znaków i to zwróci file.search

    if (index > -1) { // jeżeli dany string nie będzie spełniał warunku regexp czyli -thumb-od_1_do_4_cyfr_ x _od_1_do_4_cyfr zostanie pominięty przy nadpisywaniu tablicy

        files[i] = file.substring(0, index); //sprawdza string i wydziela od 0 do index (7) znaków czyli picture zostawi a -thumb-150x150.jpg zostanie usunięte i przypisuje do tablicy files nadpisując zmodyfikowanymi stringami

    }

});

// działanie forEach + wyjaśnienie parametrów:
// array.forEach(function(currentValue, index, arr), thisValue)
// currentValue - wymagany, wartość bieżącego elementu
// index - opcjonalny, wartość bieżącego indexu,
// arr - opcjonalny, pokaże wszystkie elementy jako tablicę


// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(function(currentValue, index, arr) {
//    console.log("aktualna wartość: " + currentValue + " aktualny index: " + index + " tablica: " + arr);
// });

// aktualna wartość: apple aktualny index: 0 tablica: apple,orange,cherry
// aktualna wartość: orange aktualny index: 1 tablica: apple,orange,cherry
// aktualna wartość: cherry aktualny index: 2 tablica: apple,orange,cherry

function stringContains(string, pattern) { // string - "eduweb.pl", pattern "web"   -- funkcja sprawdzi czy w podanym stringu znajduje się "web"

    var regex = new RegExp(pattern), // RegExp na podstawie otrzymanego stringa stworzy sobie wyrażnie regularne
        index = string.search(regex); // w stringu szykamy wyrażenia --> czy w eduweb.pl znajduje się web
    console.log(index);

    return index > -1; // jeżeli tak to zwróci nam true, jeżeli nie zwróci false

}