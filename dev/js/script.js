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
function refresh() {
  location.reload();
}

// function response(){
//   var x = document.getElementById("one").value;
//   var y = document.getElementById("two").value;
//   var z = document.getElementById("three").value;
//
//   if (x === )
// }

document.getElementById("button1").addEventListener("click", reveal1);
document.getElementById("button2").addEventListener("click", reveal2);
document.getElementById("button3").addEventListener("click", reveal3);
