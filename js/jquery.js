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
    $('html, body').animate({
      scrollTop: $("#modal4").offset().top
    }, 1000);
  } else if($('#two').is(':checked') || $('#two-2').is(':checked') || $('#two-two').is(':checked')) {
    $('#modal5').slideDown("slow");
    $('.submit-button').prop('disabled', true);
    $('html, body').animate({
      scrollTop: $("#modal5").offset().top
    }, 1000);
  } else if($('#three').is(':checked') || $('#three-3').is(':checked') || $('#three-three').is(':checked')) {
    $('#modal6').slideDown("slow");
    $('.submit-button').prop('disabled', true);
    $('html, body').animate({
      scrollTop: $("#modal6").offset().top
    }, 1000);
  }
}

//previous events submit button functionality
$('#submit-button-2').click(function(){
  //the below expression will check if the textarea is blank or filled only with blank spaces
  if (!$.trim($('.textarea1').val())) {
    $('.error').show();
    $('html, body').animate({
      scrollTop: $(".error").offset().top
    }, 1000);
  } else if ($('.textarea1').val()) {
    $('.error').hide();
    $('#sucks').show();
    $('#submit-button-2').prop('disabled', true);
    $('html, body').animate({
      scrollTop: $("#sucks").offset().top
    }, 1000);
  }
});

//practical reasons submit button functionality
$('#submit-button-3').click(function(){
  //the below expression will check if the textarea is blank or filled only with blank spaces
  if (!$.trim($('.textarea2').val())) {
    $('.error').show();
    $('html, body').animate({
      scrollTop: $(".error").offset().top
    }, 1000);
  } else if ($('.textarea2').val()) {
    $('.error').hide();
    $('#sucks').show();
    $('#submit-button-3').prop('disabled', true);
    $('html, body').animate({
      scrollTop: $("#sucks").offset().top
    }, 1000);
  }
});

/*********
replaced the css("display", "block") function from the radio button section
...and the show() function from the initial section with slideDown()
*********/
