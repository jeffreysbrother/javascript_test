//function for Restart button
function refresh() {
  location.reload();
}

//action for initial button click
$('#button1').click(function(){
  $('#modal1').slideDown("slow");
  $('#button2, #button3').prop('disabled', true);
});

$('#button2').click(function(){
  $('#modal2').slideDown("slow");
  $('#button1, #button3').prop('disabled', true);
});

$('#button3').click(function(){
  $('#modal3').slideDown("slow");
  $('#button1, #button2').prop('disabled', true);
});

//conditional based on whether a radio button is "checked"
function response() {
  if($('#one').is(':checked') || $('#one-1').is(':checked') || $('#one-one').is(':checked')) {
    $('#modal4').slideDown("slow");
    $('.submit-button').prop('disabled', true);
  } else if($('#two').is(':checked') || $('#two-2').is(':checked') || $('#two-two').is(':checked')) {
    $('#modal5').slideDown("slow");
    $('.submit-button').prop('disabled', true);
  } else if($('#three').is(':checked') || $('#three-3').is(':checked') || $('#three-three').is(':checked')) {
    $('#modal6').slideDown("slow");
    $('.submit-button').prop('disabled', true);
  }
}
