<?php
$submitButton = "<button class=\"submit-button\" onclick=\"response()\">submit</button>";
$characters = "250 characters max.";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Liberty</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">

  <div class="spacer"></div>

  <h1>A Simple Test of Liberty</h1><button class="refresh-button" onclick="refresh()">Restart</button>
  <p id="intro">Please click <strong>one</strong> of the buttons below:</p>

  <div class="button-group">
    <button id="button1">button 1</button>
    <button id="button2">button 2</button>
    <button id="button3">button 3</button>
  </div>

  <div id="modal1">
    <p>You've selected button 1. Why did you do this?</p>
    <form>
      <input type="radio" id="one" name="choice" value="practical">I was compelled by practical reasons </input><br>
      <input type="radio" id="two" name="choice" value="events">I was compelled by previous events</input><br>
      <input type="radio" id="three" name="choice" value="free">I made a free choice</input>
    </form>
    <?php echo $submitButton; ?>
  </div>

  <div id="modal2">
    <p>You've selected button 2. Why did you do this?</p>
    <form>
      <input type="radio" id="one-1" name="choice" value="practical">I was compelled by practical reasons</input><br>
      <input type="radio" id="two-2" name="choice" value="events">I was compelled by previous events</input><br>
      <input type="radio" id="three-3" name="choice" value="free">I made a free choice</input>
    </form>
    <?php echo $submitButton; ?>
  </div>

  <div id="modal3">
    <p>You've selected button 3. Why did you do this?</p>
    <form>
      <input type="radio" id="one-one" name="choice" value="practical">I was compelled by practical reasons</input><br>
      <input type="radio" id="two-two" name="choice" value="events">I was compelled by previous events</input><br>
      <input type="radio" id="three-three" name="choice" value="free">I made a free choice</input>
    </form>
    <?php echo $submitButton; ?>
  </div>

  <div id="modal4" class="clearfix">
    <p>So you must believe that practical reasons (considerations having to do with the rational attainment of a future goal) have the ability to compel you to act. But why should we think that perceiving one line of action to be superior to another <em>necessitates</em> the corresponding action? And why not just classify these "reasons" for action as being <em>explanations</em> rather than causal elements?</p>
    <p>If it is suggested that an individual can choose no color besides his favorite color unless he experiences another inclination strong enough to override the original, then it looks like we're left with a mere re-wording of the thesis of determinism. What we need, of course, is <em>justification</em> of this outlook.</p>
    <p>In a few sentences, please attempt to justify the thesis of determinism:</p>
    <textarea class="textarea2" rows="8" placeholder="<?php echo $characters; ?>" autofocus></textarea>
    <button id="submit-button-3">submit</button>
    <p id="error3">Please provide an explanation before submitting!!</p>
  </div>

  <div id="modal5" class="clearfix">
    <p>So you must believe that organisms (complex creatures with nervous systems that harbor the capacity to perceive, imagine, abstract, and predict) must follow the strict, deterministic rules governing decaying vegetable matter, falling objects, and computer programs.</p>
    <p>Please explain yourself below:</p>
    <textarea class="textarea1" rows="8" placeholder="<?php echo $characters; ?>" autofocus></textarea>
    <button id="submit-button-2">submit</button>
    <p id="error2">Please provide an explanation before submitting!!</p>
  </div>

  <div id="sucks">
    <h2>FALSE!</h2>
  </div>

  <div id="modal6">
    <p>Your answer is correct!!</p>
    <p>That is, unless someone was standing behind you shouting orders, or there was some kind of technological malfunction.</p>
  </div>

</div>
<!-- <script src="js/script.js"></script> -->
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/jquery.js"></script>
</body>
</html>
