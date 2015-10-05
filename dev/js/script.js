//three functions for each of the initial selections
function reveal1() {
  document.getElementById('modal1').style.display = 'block';
  document.getElementById("button2").disabled = true;
  document.getElementById("button3").disabled = true;
}

function reveal2() {
  document.getElementById('modal2').style.display = 'block';
  document.getElementById("button1").disabled = true;
  document.getElementById("button3").disabled = true;
}

function reveal3() {
  document.getElementById('modal3').style.display = 'block';
  document.getElementById("button1").disabled = true;
  document.getElementById("button2").disabled = true;
}

//function for Restart button
function refresh() {
  location.reload();
}

//conditional based on whether a radio button is "checked"
function response() {
  if(document.getElementById('one').checked === true) {
    document.getElementById('modal4').style.display = 'block';
  } else if(document.getElementById('two').checked === true) {
    document.getElementById('modal5').style.display = 'block';
  } else if(document.getElementById('three').checked === true) {
    document.getElementById('modal6').style.display = 'block';
  }
}

document.getElementById("button1").addEventListener("click", reveal1);
document.getElementById("button2").addEventListener("click", reveal2);
document.getElementById("button3").addEventListener("click", reveal3);
