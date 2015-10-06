//function for Restart button
function refresh() {
  location.reload();
}

//action for initial button click
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

//conditional based on whether a radio button is "checked"
function response() {
  if($('#one').is(':checked') || $('#one-1').is(':checked') || $('#one-one').is(':checked')) {
    $('#modal4').css("display", "block");
  } else if($('#two').is(':checked') || $('#two-2').is(':checked') || $('#two-two').is(':checked')) {
    $('#modal5').css("display", "block");
  } else if($('#three').is(':checked') || $('#three-3').is(':checked') || $('#three-three').is(':checked')) {
    $('#modal6').css("display", "block");
  }
}
