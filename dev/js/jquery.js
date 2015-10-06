//function for Restart button
function refresh() {
  location.reload();
}

$('#button1').click(function(){
  $('#modal1').show();
  $('#button2, #button3').prop('disabled', true);
});

$('#button2').click(function(){
  $('#modal2').show();
  $('#button1, #button3').prop('disabled', true);
});

$('#button3').click(function(){
  $('#modal3').show();
  $('#button1, #button2').prop('disabled', true);
});
