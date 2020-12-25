function main() {


//alert("I'm Javascript");

var WWinput = document.getElementById("IngevoerdWW")

document.getElementById("verzendknop1").onclick = function WWsubmitten () {
  if (WWinput.value==="redesaikeektiko") {if(confirm("Goed gepuzzeld! Benieuwd wat hierachter zit? Klik op OK")){document.getElementById("video1").style.display="block"};
  }
  else if (WWinput.value==="Verdorie") {if(confirm("Hey, zeg! Niet vloeken, he!?")){document.getElementById("video1").style.display="block"}
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
