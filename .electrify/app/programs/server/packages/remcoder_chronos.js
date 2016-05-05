(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var Chronos;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/remcoder_chronos/packages/remcoder_chronos.js                                             //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/remcoder:chronos/remcoder:chronos.js                                                //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _timers = {};                                                                               // 1
                                                                                                // 2
function Timer(interval) {                                                                      // 3
  this.interval = interval || 1000;                                                             // 4
  this.time = new ReactiveVar(0);                                                               // 5
}                                                                                               // 6
                                                                                                // 7
Timer.prototype.start = function() {                                                            // 8
  if (this._timer) throw new Error('Trying to start Chronos.Timer but it is already running.'); // 9
  this.time.set(new Date());                                                                    // 10
                                                                                                // 11
                                                                                                // 12
  this._timer = setInterval(Meteor.bindEnvironment(function() {                                 // 13
    //console.log('tick', this._timer);                                                         // 14
    this.time.set(new Date());                                                                  // 15
                                                                                                // 16
  }.bind(this)), this.interval);                                                                // 17
};                                                                                              // 18
                                                                                                // 19
Timer.prototype.stop = function() {                                                             // 20
  //console.log('stopping timer');                                                              // 21
  clearInterval(this._timer);                                                                   // 22
  this._timer = null;                                                                           // 23
};                                                                                              // 24
                                                                                                // 25
function liveUpdate(interval) {                                                                 // 26
  // get current reactive context                                                               // 27
  var comp = Tracker.currentComputation;                                                        // 28
  if (!comp)                                                                                    // 29
    return; // no nothing when used outsite a reactive context                                  // 30
                                                                                                // 31
  // only create one timer per reactive context to prevent stacking of timers                   // 32
  var cid =  comp && comp._id;                                                                  // 33
  if (!_timers[cid]) {                                                                          // 34
    var timer = new Timer(interval);                                                            // 35
    _timers[cid] = timer;                                                                       // 36
                                                                                                // 37
    // add destroy method that stops the timer and removes itself from the list                 // 38
    timer.destroy = function() {                                                                // 39
      timer.stop();                                                                             // 40
      delete _timers[cid];                                                                      // 41
    };                                                                                          // 42
                                                                                                // 43
    timer.start();                                                                              // 44
  }                                                                                             // 45
                                                                                                // 46
  // make sure to stop and delete the attached timer when the computation is stopped            // 47
  comp.onInvalidate(function() {                                                                // 48
    //console.log('onInvalidated',comp);                                                        // 49
    if (comp.stopped && _timers[cid]) {                                                         // 50
      //console.log('computation stopped');                                                     // 51
      _timers[cid].destroy();                                                                   // 52
    }                                                                                           // 53
  });                                                                                           // 54
                                                                                                // 55
  _timers[cid].time.dep.depend(comp); // make dependent on time                                 // 56
                                                                                                // 57
  //console.log(_timers);                                                                       // 58
  return _timers[cid];                                                                          // 59
}                                                                                               // 60
                                                                                                // 61
// wrapper for moment.js                                                                        // 62
function liveMoment(/* arguments */) {                                                          // 63
  // only reactively re-run liveMoment when moment is available                                 // 64
  if (!moment) return;                                                                          // 65
                                                                                                // 66
  liveUpdate();                                                                                 // 67
  return moment.apply(null, arguments);                                                         // 68
}                                                                                               // 69
                                                                                                // 70
function currentTime(interval) {                                                                // 71
  liveUpdate(interval);                                                                         // 72
  return new Date();                                                                            // 73
}                                                                                               // 74
                                                                                                // 75
// export global                                                                                // 76
Chronos = {                                                                                     // 77
                                                                                                // 78
  // a simple reactive timer                                                                    // 79
  // usage: var timer = new Timer();                                                            // 80
  // get current time: timer.time.get();                                                        // 81
  Timer : Timer,                                                                                // 82
                                                                                                // 83
  // handy util func for making reactive contexts live updating in time                         // 84
  // usage: simply call Chronos.liveUpdate() in your helper to make it execute                  // 85
  // every interval                                                                             // 86
  liveUpdate : liveUpdate,                                                                      // 87
                                                                                                // 88
  // wrapper for moment.js                                                                      // 89
  // example usage: Chronos.liveMoment(someTimestamp).fromNow();                                // 90
  liveMoment: liveMoment,                                                                       // 91
                                                                                                // 92
  // get the current time, reactively                                                           // 93
  currentTime: currentTime,                                                                     // 94
                                                                                                // 95
  // for debugging and testing                                                                  // 96
  _timers : _timers                                                                             // 97
};                                                                                              // 98
                                                                                                // 99
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['remcoder:chronos'] = {}, {
  Chronos: Chronos
});

})();

//# sourceMappingURL=remcoder_chronos.js.map
