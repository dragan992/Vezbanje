// let imeJunaka = prompt("Koji si junak?");

// if (imeJunaka == null || imeJunaka == "") {
//   Text = "Nema imena";
// } else {
//   Text = "Zdrav bio " + imeJunaka + "!";
// }
// alert(Text);

function myFunction() {
    var x,y,z,oper;
    x=prompt("Type first number");
    y=prompt("Type second number");
    oper=prompt("Type an operator");
    
    if(oper=="+"){
      z=Number(x)+Number(y);
    }
    else if(oper=!null){
      z="Error"
    }
    else if(x=!null){
      z="Error"
    }
    else if(y=!null){
      z="Error"
    }
    else if(oper=="/"){
      z=Number(x)/Number(y);
    }
    else if(oper=="*"){
      z=Number(x)*Number(y);
    }
    else if(oper=="-"){
      z=Number(x)-Number(y);
    }
    
    return z;
  
      }
  
    console.log(myFunction);