
Template.stopwatch.rendered = function() {


   if (!this.rendered){

  var Stopwatch = function(elem, options) {

    var timer       = createTimer(),
        startButton = createButton("start", start),
        stopButton  = createButton("pause", stop),
        resetButton = createButton("reset", reset),
        offset,
        clock = globalClockValue,
        interval;

    // default options
    options = options || {};
    options.delay = options.delay || 1;

    // append elements
    elem.appendChild(timer);
    elem.appendChild(startButton);
    elem.appendChild(stopButton);
    elem.appendChild(resetButton);

    // initialize
    reset();

    // private functions
    function createTimer() {
      return document.createElement("span");
    }

    function createButton(action, handler) {
      var a = document.createElement("a");
      a.href = "#" + action;
      a.id = action;
      a.innerHTML = action;
      a.addEventListener("click", function(event) {
        handler();
        event.preventDefault();
      });
      return a;
    }

    function start() {
      if(shouldResetClockOnStart) {
          reset();
          shouldResetClockOnStart = false;
      }

      if (!interval) {
        offset   = Date.now();
        interval = setInterval(update, options.delay);
      }
    }

    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }

    function reset() {

      updateCountdownTimer();
      clock = globalClockValue;
      render(globalClockValue);
    }


    function setCountdownTime(time)  {
      clock = time;
      render(time);
    }



    function update() {
      if(clock >= 0) {
        clock -= delta();
        render();
      }
      if(clock <= 0 || clock == '0') {
        clock = 0;
        render();
        zeeVideo[0].pause();
        $( "#dialog-confirm" ).dialog({
              resizable: true,
              height:200,
              position: ['center', 'top'],
              width: 500,
              modal: true,
              buttons: {
                "Start New Test":  {
                  style: "background-color: #007AFF; font-weight: bold; color: white; border: 1px solid #003AFF",
                  text: "Start new test",
                  click: function() {
                    $( this ).dialog( "close" );
                    triggerNewTestDialog();
                    reset();
                  }
                },
                "Download Results": function() {
                  $(this).dialog("close");
                }
                // Cancel: function() {
                //   $( this ).dialog( "close" );
                // }
              }
            });
        // reset();
        stop();
      }
    }


    function render() {
      timer.innerHTML = clock/1000;
    }

    function delta() {
      var now = Date.now(),
          d   = now - offset;

      offset = now;
      return d;
    }

    // public API
    this.start  = start;
    this.stop   = stop;
    this.reset  = reset;
  };


  // ** my collection code
  // var stopwatchCollection = document.getElementsByClassName("basicStopwatch");
  // for (var i=0, size=stopwatchCollection.length; i<size; i++) {
  //   new Stopwatch(stopwatchCollection[i]);
  // }


  // programmatic examples
  var a = document.getElementById("a-timer");
  aTimer = new Stopwatch(a);
  // aTimer.start();
  //up
  // var b = document.getElementById("b-timer");
  // bTimer = new Stopwatch(b, {delay: 100});
  // bTimer.start();

  var c = document.getElementById("c-timer");
  cTimer = new Stopwatch(c, {delay: 100});
  var cTimerStarted = false;
  // cTimer.start();
  //
  // var d = document.getElementById("d-timer");
  // dTimer = new Stopwatch(d, {delay: 1000});
  // dTimer.start();



// my collection code





  // contextHotkeys =  new Hotkeys({
  //     autoLoad : false
  // });

  // contextHotkeys.add({
  //     combo : "a",
  //     callback : function(){
  //         alert("You pressed ctrl+4 in the new Context");
  //     }
  //     cTimer.start();
  // })




  // run my code
    this.rendered = true;
  }




}
