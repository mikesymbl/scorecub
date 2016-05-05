var require = meteorInstall({"collections":{"Polls.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/Polls.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Polls = new Mongo.Collection('polls');                                                                                 // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"behaviorclocks.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/behaviorclocks.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
BehaviorClocks = new Mongo.Collection('behaviorclocks');                                                               // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"behaviorevents.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/behaviorevents.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
BehaviorEvents = new Mongo.Collection('behaviorevents');                                                               // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"bootstraptimers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/bootstraptimers.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// run this when the meteor app is started                                                                             //
Meteor.startup(function () {                                                                                           // 2
                                                                                                                       //
  // if there are no polls available create sample data                                                                //
  if (Polls.find().count() === 0) {                                                                                    // 5
                                                                                                                       //
    // create sample polls                                                                                             //
    var samplePolls = [{                                                                                               // 8
      question: 'Is Meteor awesome?',                                                                                  // 10
      choices: [{ text: 'Of course!', votes: 0 }, { text: 'Eh', votes: 0 }, { text: 'No. I like plain JS', votes: 0 }]
    }, {                                                                                                               //
      question: 'Is CSS3 Flexbox the greatest thing since array_slice(bread)?',                                        // 18
      choices: [{ text: '100% yes', votes: 0 }, { text: '200% yes', votes: 0 }, { text: '300% yes', votes: 0 }]        // 19
    }];                                                                                                                //
                                                                                                                       //
    // loop over each sample poll and insert into database                                                             //
    _.each(samplePolls, function (poll) {                                                                              // 5
      Polls.insert(poll);                                                                                              // 29
    });                                                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/init.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//file:/server/init.js                                                                                                 //
Meteor.startup(function () {                                                                                           // 2
  UploadServer.init({                                                                                                  // 3
    tmpDir: process.env.PWD + '/.uploads/tmp',                                                                         // 4
    uploadDir: process.env.PWD + '/.uploads/',                                                                         // 5
    checkCreateDirectories: true //create the directories for you                                                      // 6
  });                                                                                                                  // 3
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _meteor = require('meteor/meteor');                                                                                // 1
                                                                                                                       //
_meteor.Meteor.startup(function () {                                                                                   // 3
  // code to run on server at startup                                                                                  //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"app.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app.js                                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Router.route('/createbehavior', {                                                                                   //
//     template: 'behaviorForm'                                                                                        //
// });                                                                                                                 //
//                                                                                                                     //
// Router.route('/', function () {                                                                                     //
//   this.render('containsTheDataTable');                                                                              //
// });                                                                                                                 //
// // Router.route('/', {                                                                                              //
// //   template: 'home'                                                                                               //
// // });                                                                                                              //
//                                                                                                                     //
// Router.route('/showbehaviors', {                                                                                    //
//   // template: 'showbehaviors'                                                                                      //
//   template: 'behaviorclocksDataTable'                                                                               //
// });                                                                                                                 //
// Router.route('/results', {                                                                                          //
//   // template: 'showbehaviors'                                                                                      //
//   template: 'containsTheDataTable'                                                                                  //
// });                                                                                                                 //
// Route.route('/table', {                                                                                             //
//   template: 'containsTheDataTable'                                                                                  //
// });                                                                                                                 //
FlowRouter.route('/results', {                                                                                         // 23
  name: 'Results.show',                                                                                                // 24
  action: function () {                                                                                                // 25
    function action() {                                                                                                //
      BlazeLayout.render('containsTheDataTable', { main: 'Results_show_page' });                                       // 26
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
FlowRouter.route('/', {                                                                                                // 30
  name: 'home',                                                                                                        // 31
  action: function () {                                                                                                // 32
    function action() {                                                                                                //
      BlazeLayout.render('home', { main: 'Home_show_page' });                                                          // 33
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
FlowRouter.route('/showtests', {                                                                                       // 37
  name: 'Tests.show',                                                                                                  // 38
  action: function () {                                                                                                // 39
    function action() {                                                                                                //
      BlazeLayout.render('behaviorclocksDataTable', { main: 'Tests_show_page' });                                      // 40
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
FlowRouter.route('/createtests', {                                                                                     // 44
  name: 'Tests.create',                                                                                                // 45
  action: function () {                                                                                                // 46
    function action() {                                                                                                //
      BlazeLayout.render('behaviorForm', { main: 'Tests_create_page' });                                               // 47
    }                                                                                                                  //
                                                                                                                       //
    return action;                                                                                                     //
  }()                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 52
  // counter starts at 0                                                                                               //
  // Template.registerHelper('TabularTables', {                                                                        //
  //   behaviorclocks: TabularTables.behaviorclocks                                                                    //
  // });                                                                                                               //
                                                                                                                       //
  testHasName = false; // this is a very important global variable and controls a lot of user interactions             // 58
  currentTestCategory = "";                                                                                            // 52
  currentTestName = "";                                                                                                // 60
  globalClockValue = 0; // 5 minutes -> goes to stopwatch.js                                                           // 61
  shouldResetClockOnStart = false;                                                                                     // 52
                                                                                                                       //
  updateCountdownTimer = function () {                                                                                 // 64
    function updateCountdownTimer() {                                                                                  // 64
      switch (currentTestCategory) {                                                                                   // 65
        case "Behavioral tests and codes":                                                                             // 66
          //Statements executed when the result of expression matches value1                                           //
          globalClockValue = 5 * 60 * 1000; // 5 min * 60 seconds * 1000 millisconds  = 5 min                          // 68
          $("#a-timer span").text(globalClockValue / 1000);                                                            // 66
          break;                                                                                                       // 70
        case "Pairing Test":                                                                                           // 65
          //Statements executed when the result of expression matches value2                                           //
          globalClockValue = 5 * 60 * 1000; // 300 seconds                                                             // 73
          $("#a-timer span").text(globalClockValue / 1000);                                                            // 71
          break;                                                                                                       // 75
                                                                                                                       //
        case "Pairing Test II":                                                                                        // 65
          //Statements executed when the result of expression matches valueN                                           //
          globalClockValue = 10 * 60 * 1000; // 300 seconds                                                            // 79
          $("#a-timer span").text(globalClockValue / 1000);                                                            // 77
          break;                                                                                                       // 81
        case "Pairing Test III":                                                                                       // 65
          //Statements executed when the result of expression matches valueN                                           //
          globalClockValue = 10 * 60 * 1000; // 300 seconds                                                            // 84
          $("#a-timer span").text(globalClockValue / 1000);                                                            // 82
          break;                                                                                                       // 86
        case "Intrasexual Aggression":                                                                                 // 65
          globalClockValue = 5 * 60 * 1000; // 300 seconds                                                             // 88
          $("#a-timer span").text(globalClockValue / 1000);                                                            // 87
          break;                                                                                                       // 90
                                                                                                                       //
        case "Pup Retrieval":                                                                                          // 65
          globalClockValue = 3 * 60 * 1000; // 300 seconds                                                             // 93
          $("#a-timer span").text(globalClockValue / 1000);                                                            // 92
          break;                                                                                                       // 95
                                                                                                                       //
        case "Pup Retrieval II":                                                                                       // 65
          globalClockValue = 5 * 60 * 1000; // 300 seconds                                                             // 98
          $("#a-timer span").text(globalClockValue / 1000);                                                            // 97
          break;                                                                                                       // 100
                                                                                                                       //
        case "Partner Preference":                                                                                     // 65
          globalClockValue = 3 * 60 * 1000; // 300 seconds                                                             // 103
          $("#a-timer span").text(globalClockValue / 1000);                                                            // 102
          break;                                                                                                       // 105
                                                                                                                       //
        default:                                                                                                       // 65
          //Statements executed when none of the values match the value of the expression                              //
          globalClockValue = 300 * 1000; // 300 seconds                                                                // 110
          $("#a-timer span").text(globalClockValue / 1000);                                                            // 108
          break;                                                                                                       // 112
      }                                                                                                                // 65
    }                                                                                                                  //
                                                                                                                       //
    return updateCountdownTimer;                                                                                       //
  }();                                                                                                                 //
                                                                                                                       //
  triggerNewTestDialog = function () {                                                                                 // 118
    function triggerNewTestDialog() {                                                                                  // 118
      $("#dialog-new-test").dialog({                                                                                   // 119
        resizable: true,                                                                                               // 120
        height: 500,                                                                                                   // 121
        position: ['center', 'top'],                                                                                   // 122
        width: 400,                                                                                                    // 123
        modal: true,                                                                                                   // 124
        buttons: {                                                                                                     // 125
          "Ok": {                                                                                                      // 126
            style: "background-color: #007AFF; font-weight: bold; color: white; border: 1px solid #003AFF",            // 127
            text: "Start new test",                                                                                    // 128
            click: function () {                                                                                       // 129
              function click() {                                                                                       // 129
                                                                                                                       //
                if ($("#zeTestDialog").val() == "") {                                                                  // 131
                  testHasName = false;                                                                                 // 132
                } else if ($("#zeTestDialog").val() != "") {                                                           //
                  testHasName = true;                                                                                  // 136
                }                                                                                                      //
                                                                                                                       //
                currentTestCategory = $("#activeTest").val();                                                          // 139
                if (testHasName) {                                                                                     // 140
                  shouldResetClockOnStart = true;                                                                      // 141
                                                                                                                       //
                  updateCountdownTimer();                                                                              // 143
                  $(this).dialog("close");                                                                             // 144
                } else if (!testHasName) {                                                                             //
                  alert("You must enter a name for the test before you can continue");                                 // 147
                }                                                                                                      //
                                                                                                                       //
                // if input is not blank on submit then test has name = true                                           //
                // reset the clock to designated time based off of test type                                           //
                // updateCountdownTimer                                                                                //
              }                                                                                                        // 129
                                                                                                                       //
              return click;                                                                                            //
            }()                                                                                                        //
          },                                                                                                           //
          "Cancel": function () {                                                                                      // 155
            function Cancel() {                                                                                        // 155
              $(this).dialog("close");                                                                                 // 156
            }                                                                                                          //
                                                                                                                       //
            return Cancel;                                                                                             //
          }()                                                                                                          //
          // Cancel: function() {                                                                                      //
          //   $( this ).dialog( "close" );                                                                            //
          // }                                                                                                         //
        }                                                                                                              // 125
      });                                                                                                              //
    }                                                                                                                  //
                                                                                                                       //
    return triggerNewTestDialog;                                                                                       //
  }();                                                                                                                 //
                                                                                                                       //
  dataTableData = function dataTableData() {                                                                           // 165
    return BehaviorEvents.find({}).fetch(); // or .map()                                                               // 166
  };                                                                                                                   // 165
  var optionsObject = {                                                                                                // 168
    columns: [{                                                                                                        // 169
      title: 'Test Name',                                                                                              // 171
      data: 'testName', // note: access nested data like this                                                          // 172
      className: 'nameColumn'                                                                                          // 173
    }, {                                                                                                               //
      title: 'Behavior',                                                                                               // 176
      data: 'behaviorname', // note: access nested data like this                                                      // 177
      className: 'nameColumn'                                                                                          // 178
    }, {                                                                                                               //
      title: 'Time Occurred',                                                                                          // 181
      data: 'time',                                                                                                    // 182
      className: 'nameColumn'                                                                                          // 183
    }, {                                                                                                               //
      title: 'Clock Type',                                                                                             // 186
      data: 'clockType',                                                                                               // 187
      className: 'nameColumn'                                                                                          // 188
    }]                                                                                                                 //
    // ... see jquery.dataTables docs for more                                                                         //
  };                                                                                                                   // 168
                                                                                                                       //
  Template.containsTheDataTable.helpers({                                                                              // 195
    reactiveDataFunction: function () {                                                                                // 196
      function reactiveDataFunction() {                                                                                // 196
        return dataTableData;                                                                                          // 197
      }                                                                                                                //
                                                                                                                       //
      return reactiveDataFunction;                                                                                     //
    }(),                                                                                                               //
    optionsObject: optionsObject // see below                                                                          // 199
  });                                                                                                                  // 195
                                                                                                                       //
  ////////////////////////////////////////////////////////////////////////////////                                     //
  //                       DATATABLE FOR BEHAVIOR CLOCKS                        //                                     //
  ////////////////////////////////////////////////////////////////////////////////                                     //
                                                                                                                       //
  behaviorclocksDataTableData = function behaviorclocksDataTableData() {                                               // 52
    // return BehaviorClocks.find({"category":$("#activeTest").val()}).fetch();                                        //
    return BehaviorClocks.find({}).fetch(); // or .map()                                                               // 208
  };                                                                                                                   // 206
  var behaviorClocksOptionsObject = {                                                                                  // 210
    columns: [{                                                                                                        // 211
      title: 'Shortcut Key',                                                                                           // 212
      data: 'shortcutKey', // note: access nested data like this                                                       // 213
      className: 'nameColumn'                                                                                          // 214
    }, {                                                                                                               //
      title: 'Behavior',                                                                                               // 217
      data: 'behaviorname',                                                                                            // 218
      className: 'nameColumn'                                                                                          // 219
    }, {                                                                                                               //
      title: 'Test Type',                                                                                              // 222
      data: 'category',                                                                                                // 223
      className: 'nameColumn'                                                                                          // 224
    }]                                                                                                                 //
    // ... see jquery.dataTables docs for more                                                                         //
  };                                                                                                                   // 210
                                                                                                                       //
  Template.behaviorclocksDataTable.helpers({                                                                           // 231
    reactiveDataFunction: function () {                                                                                // 232
      function reactiveDataFunction() {                                                                                // 232
        return behaviorclocksDataTableData;                                                                            // 233
      }                                                                                                                //
                                                                                                                       //
      return reactiveDataFunction;                                                                                     //
    }(),                                                                                                               //
    optionsObject: behaviorClocksOptionsObject // see below                                                            // 235
  });                                                                                                                  // 231
  ////////////////////////////////////////////////////////////////////////////////                                     //
  //----------------------------------------------------------------------------//                                     //
  ////////////////////////////////////////////////////////////////////////////////                                     //
                                                                                                                       //
  // function renderPhoto(cellData, renderType, currentRow) {                                                          //
  //     // You can return html strings, change sort order etc. here                                                   //
  //     // Again, see jquery.dataTables docs                                                                          //
  //     var img = "<img src='" + cellData + "' title='" + currentRow.profile.realname + "'>"                          //
  //     return img;                                                                                                   //
  // }                                                                                                                 //
                                                                                                                       //
  Template.body.helpers({                                                                                              // 52
                                                                                                                       //
    behaviorclocks: function () {                                                                                      // 253
      function behaviorclocks() {                                                                                      // 253
        return BehaviorClocks.find();                                                                                  // 254
      }                                                                                                                //
                                                                                                                       //
      return behaviorclocks;                                                                                           //
    }(),                                                                                                               //
                                                                                                                       //
    behaviorevents: function () {                                                                                      // 257
      function behaviorevents() {                                                                                      // 257
        return BehaviorEvents.find();                                                                                  // 258
      }                                                                                                                //
                                                                                                                       //
      return behaviorevents;                                                                                           //
    }()                                                                                                                //
                                                                                                                       //
  });                                                                                                                  //
                                                                                                                       //
  Template.mouseTrapImplementation.rendered = function () {                                                            // 266
    Mousetrap.bind('4', function () {                                                                                  // 267
      var delta = $("#a-timer").currentTime;                                                                           // 268
      console.log("***DELTA" + delta);                                                                                 // 269
      console.log('4');                                                                                                // 270
    });                                                                                                                //
    Mousetrap.bind("?", function () {                                                                                  // 272
      console.log('show shortcuts!');                                                                                  // 272
    });                                                                                                                //
    Mousetrap.bind('esc', function () {                                                                                // 273
      console.log('escape');                                                                                           // 273
    }, 'keyup');                                                                                                       //
                                                                                                                       //
    // combinations                                                                                                    //
    Mousetrap.bind('command+shift+k', function () {                                                                    // 266
      console.log('command shift k');                                                                                  // 276
    });                                                                                                                //
                                                                                                                       //
    // map multiple combinations to the same callback                                                                  //
    Mousetrap.bind(['command+k', 'ctrl+k'], function () {                                                              // 266
      console.log('command k or control k');                                                                           // 280
                                                                                                                       //
      // return false to prevent default browser behavior                                                              //
      // and stop event from bubbling                                                                                  //
      return false;                                                                                                    // 279
    });                                                                                                                //
                                                                                                                       //
    // gmail style sequences                                                                                           //
    Mousetrap.bind('g i', function () {                                                                                // 266
      console.log('go to inbox');                                                                                      // 288
    });                                                                                                                //
    Mousetrap.bind('* a', function () {                                                                                // 289
      console.log('select all');                                                                                       // 289
    });                                                                                                                //
                                                                                                                       //
    // konami code!                                                                                                    //
    Mousetrap.bind('up up down down left right left right b a enter', function () {                                    // 266
      console.log('konami code');                                                                                      // 293
    });                                                                                                                //
  };                                                                                                                   //
                                                                                                                       //
  Template.video.rendered = function () {                                                                              // 299
    var popcorn = Popcorn("#vid");                                                                                     // 300
    var clip = $("#clip");                                                                                             // 301
    popcorn.subtitle({                                                                                                 // 302
      start: 1,                                                                                                        // 303
      stop: 10,                                                                                                        // 304
      text: '#Behavior Tagging in video'                                                                               // 305
    });                                                                                                                //
    popcorn.exec(1, function () {                                                                                      // 307
      clip.text('The Current Model Of Higher Education Is Broken!');                                                   // 308
    });                                                                                                                //
                                                                                                                       //
    popcorn.exec(8, function () {                                                                                      // 311
      clip.text('The Model Does Not Scale!');                                                                          // 312
    });                                                                                                                //
                                                                                                                       //
    popcorn.exec(22, function () {                                                                                     // 315
      clip.text('Keep Learning For Rest Of Our Lives!');                                                               // 316
    });                                                                                                                //
                                                                                                                       //
    popcorn.exec(37, function () {                                                                                     // 319
      clip.text('Cost Too High!');                                                                                     // 320
    });                                                                                                                //
                                                                                                                       //
    popcorn.exec(47, function () {                                                                                     // 323
      clip.text('P2PU Recognition of Learning');                                                                       // 324
    });                                                                                                                //
                                                                                                                       //
    popcorn.exec(50, function () {                                                                                     // 327
      clip.text('Lots Of Demand!');                                                                                    // 328
    });                                                                                                                //
                                                                                                                       //
    popcorn.exec(65, function () {                                                                                     // 331
      clip.text('Enter P2PU!');                                                                                        // 332
    });                                                                                                                //
                                                                                                                       //
    popcorn.exec(80, function () {                                                                                     // 335
      clip.text('Yada, Yada, Yada!');                                                                                  // 336
    });                                                                                                                //
  };                                                                                                                   //
                                                                                                                       //
  Template.showbehaviors.helpers({                                                                                     // 342
                                                                                                                       //
    behaviorclocks: function () {                                                                                      // 344
      function behaviorclocks() {                                                                                      // 344
        return BehaviorClocks.find();                                                                                  // 345
      }                                                                                                                //
                                                                                                                       //
      return behaviorclocks;                                                                                           //
    }()                                                                                                                //
                                                                                                                       //
  });                                                                                                                  //
                                                                                                                       //
  // Template.behaviortable.helpers({                                                                                  //
                                                                                                                       //
  //   behaviorclocks: function() {                                                                                    //
  //     return BehaviorClocks.find();                                                                                 //
  //   }                                                                                                               //
                                                                                                                       //
  // });                                                                                                               //
  // adds index to each item                                                                                           //
  UI.registerHelper('indexedArray', function (context, options) {                                                      // 52
    if (context) {                                                                                                     // 360
      return context.map(function (item, index) {                                                                      // 361
        item._index = index;                                                                                           // 362
        return item;                                                                                                   // 363
      });                                                                                                              //
    }                                                                                                                  //
  });                                                                                                                  //
}                                                                                                                      //
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 373
  Meteor.startup(function () {                                                                                         // 374
    // code to run on server at startup                                                                                //
    // UploadServer.init({                                                                                             //
    //   tmpDir: process.env.PWD + '/.uploads/tmp',                                                                    //
    //   uploadDir: process.env.PWD + '/.uploads/',                                                                    //
    //   checkCreateDirectories: true //create the directories for you                                                 //
    // });                                                                                                             //
  });                                                                                                                  //
}                                                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{"extensions":[".js",".json"]});
require("./collections/Polls.js");
require("./collections/behaviorclocks.js");
require("./collections/behaviorevents.js");
require("./server/bootstraptimers.js");
require("./server/init.js");
require("./app.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
