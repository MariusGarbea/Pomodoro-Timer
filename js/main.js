$(document).ready(function() {

  var t,
    defaultMin = 25,
    defaultSec = 0,
    seconds = defaultSec,
    minutes = defaultMin,
    time = 0,
    start = false,
    breakTime = false;

  displayTime();

  function countDown() {
    if (seconds == -1) {
      seconds = 59;
      minutes--;
    }
    time = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' + (seconds > 9 ? seconds : '0' + seconds);
    $('#timer').html(time);
    seconds--;
    timer();
  }

  function timer() {
    t = setTimeout(countDown, 1000);
    if (minutes == 0 && seconds == -1 && breakTime == false) {
      $('#timer').html('Break!');
      clearTimeout(t);
    }
    if (minutes == 0 && seconds == -1 && breakTime == true) {
      $('#timer').html('Finished!');
      clearTimeout(t);
    }
  }
  
  $('#play').click(function() {
    if (start == false) {
      $('#timer').html('Go!');
      timer();
      start = true;
    }
  });

  $('#pause').click(function() {
    clearTimeout(t);
    start = false;
  });

  $('#reset').click(function() {
    reset();
  });
  
  $("#break").click(function(){
    minutes = 5;
    seconds = 0;
    breakTime = true;
    timer();
    start = true;
  });

  function reset() {
    start = false;
    $('#timer').html(defaultMin + ':' + defaultSec + '0');
    minutes = defaultMin;
    seconds = defaultSec;
    clearTimeout(t);
  }

  function displayTime() {
    time = defaultMin + ':' + defaultSec + '0';
    $('#timer').html(time);
  }
});
