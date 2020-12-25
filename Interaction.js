function main() {

var WWinput = document.getElementById("IngevoerdWW")

document.getElementById("verzendknop1").onclick = function WWsubmitten () {
  if (WWinput.value==="Hoi") {if(confirm("Ben je zeker dat je wil verdergaan?")){document.getElementById("video1").style.display="block"};
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
