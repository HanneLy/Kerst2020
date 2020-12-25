function main() {


//alert("I'm Javascript");

document.onload = setTimeout(function () { if(confirm('Hulp nodig?')){alert("Goed blijven verder typen is de beste strategie!")}; }, 10000);
document.onload = setTimeout(function () { if(confirm('Nog steeds bezig?')){alert("Hup hup!")}; }, 25000);
document.onload = setTimeout(function () { if(confirm('Bijna klaar?')){alert("Nu had ik toch gedacht je al klaar zou zijn...")}; }, 35000);
document.onload = setTimeout(function () { if(confirm('Dat kan sneller?')){alert("Toch?")}; }, 50000);
document.onload = setTimeout(function () { {alert("En sneller!")}; }, 55000);
document.onload = setTimeout(function () { {alert("Nog sneller!")}; }, 60000);
document.onload = setTimeout(function () { {alert("En sneller!")}; }, 65000);
document.onload = setTimeout(function () { {alert("En sneller!")}; }, 70000);
document.onload = setTimeout(function () { {alert("En sneller!")}; }, 74000);
document.onload = setTimeout(function () { {alert("En sneller!")}; }, 78000);
document.onload = setTimeout(function () { {alert("En sneller!")}; }, 81000);
document.onload = setTimeout(function () { {alert("En sneller!")}; }, 83000);
document.onload = setTimeout(function () { {alert("En sneller!")}; }, 85000);
document.onload = setTimeout(function () { {alert("En sneller!")}; }, 87000);
document.onload = setTimeout(function () { if(confirm('Need a way out?')){alert("Typ:'Ik geef op'en klik op 'go'. Vertrouw je ons?")}; }, 90000);


var WWinput = document.getElementById("IngevoerdWW")

document.getElementById("verzendknop1").onclick = function WWsubmitten () {
  if (WWinput.value==="Hoi") {if(confirm("Het is jullie gelukt! Deze video bevat gevoelige content. Zijn jullie zeker dat jullie willen verdergaan?")){document.getElementById("video1").style.display="block"};
  }
  else if (WWinput.value==="Ik geef op") {if(confirm("Wel, nu hadden we toch verwacht dat jullie niet voor de makkelijkste optie gingen gaan :-) Maar bij deze onderstaande verrassing!")){document.getElementById("video1").style.display="block"}
  }
  else if (WWinput.value==="Verdorie") {if(confirm("Hey, zeg! Niet vloeken, he!?")){document.getElementById("video1").style.display="block"}
  }
  else if (WWinput.value==="Verdorie") {if(confirm("Hey, zeg! Niet vloeken, he!?")){document.getElementById("video1").style.display="block"}
  }
  else if (WWinput.value==="Verdorie") {if(confirm("Hey, zeg! Niet vloeken, he!?")){document.getElementById("video1").style.display="block"}
  }
  else {alert("Mispoes!")}
}

}

window.onload=function() {main()}
