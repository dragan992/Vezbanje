//Recap kod Srkija 5.6.2022

function vocke(arrTemplateArgument) {
    arrTemplateArgument();
  }
  
  function maloSimple(br) {
    console.log(br);
  }
  // vocke();
  let cvarak = 'cvarak';
  maloSimple(cvarak);
  
  let arr = (prviArgument) => {
    console.log(prviArgument)
  }
  
  
  vocke(arr);
  
  console.log(arr);
  arr('hej')
  
  // {
  //   let re = 'baba'
  // }
  // console.log(re);
  
  const pederAray = [];

  pederAray.push
  console.log(pederAray);
  
  peder = "Gacha";
  
  console.log({name: 'pera'} == {name: 'pera'}); 

  //Stvari iz Weird parts of JS

  function pozdrav () {
    console.log("Cao");
  }

  pozdrav.josJedan = "Idemo odma";

  console.log(pozdrav); //Ispisace celu f-ju u konzoli kako je zapisana
  console.log(pozdrav.josJedan); //Ispisace Idemo odma
  pozdrav(); //Ispisace Cao


  //Function expressions are NOT HOISTED - primer:

//   anonymusGreet();

//  var anonymusGreet = function() {
//   console.log('Hi');
//  } 

/*OVO NE RADI JER VIDI DA JE var anon...-undefined pa tek posle 
kad dodje do linije koda 55 vidi da je dodeljena vr. function() {cons.log 'Hi'}

Dok na ovaj nacin sa Function DECLARATIONS ARE HOISTED: */

pozdravcina();

function pozdravcina() {
  console.log("Poyy");
}

//OVO RADI BEZ PROBLEMA!!!

function nekaTamo(ime) {
  var parada = "Petar Kresoja ";
  console.log(parada + ime);
}

nekaTamo("pedercina");

function init() {
  var namera = "Mozilla";

function displayName() {
  console.log(namera);  
  }
  displayName();

}
init();

var x = 1;
function f () {
  console.log(x);
  var x = 2;
};
f();

var pop = 11;
function neki () {
  console.log(pop);
  var pop = 2;
 };
neki();

function changeStuff ( arg1, arg2 ){
  arg1.item = "bar";
  arg2 = {item: "bar"};
}

var obj1 = { item: "foo" },
    obj2 = { item: "foo" };

changeStuff(obj1, obj2);

console.log(obj1.item); //#1
console.log(obj2.item); //#2

var hero = {
  _name: 'John Doe',
  getName: function() {
    return this._name;
  }
};

var getHeroName = hero.getName;

console.log(getHeroName());
console.log(hero.getName());  


var lova = 7;
var lova = "nema love";

console.log(lova);
