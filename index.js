console.log('Inizio');

let number=parseInt(prompt('Insersci un numero da 1 a 7'));
switch(number) {
    case 1:
        console.log('Lunedì');
        break;
    case 2:
        console.log('Martedì');
        break;
    case 3:
        console.log('Mercoledì');
        break;
    case 4:
        console.log('Giovedì');
        break;
    case 5:
        console.log('Venerdì');
        break;
    case 6:
        console.log('Sabato');
        break;
    case 7:
        console.log('Domenica');
        break;
    default:
        console.log('Errore! Giorno della settimana non trovato!');
        break;
}

console.log('Fine');