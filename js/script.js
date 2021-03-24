

function init() {
  // creare oggetto palla caratterizzato da nome, peso e colore
  // e loggare l'intera struttura

  // var palla = {
  //   'nome': 'oronzo',
  //   'peso': '12g',
  //   'colore': 'giallo'
  // };

  // var colorUser = prompt('inserire un colore per la palla');
  // palla['colore'] = colorUser;

  // palla['colore'] = prompt('inserire un colore per la palla');
  //
  // console.log(palla);

//   for (var value in palla) {
//     var temp = "palla" + "." + value + " = " + palla[value];
//     console.log(temp);
//   }




// richiedere all'utente base e altezza di un triangolo rettangolo
// valorizzare un oggetto con le dimensioni del triangolo
// loggare triangolo e relativa area

var triangolo = {

  'base': parseInt(prompt('inserisci la base: ')),
  'altezza': parseInt(prompt("inserisci l'altezza: ")),

}

var area = (triangolo.base * triangolo.altezza) / 2;

console.log(triangolo, 'area = ' + area + 'centimetri quadrati');


}

$(document).ready(init);
