Router.route('/createbehavior', {
    template: 'behaviorForm'
});

Router.route('/', {
  template: 'home'
});

Router.route('/showbehaviors', {
  // template: 'showbehaviors'
  template: 'behaviorclocksDataTable'
});
Router.route('/results', {
  // template: 'showbehaviors'
  template: 'containsTheDataTable'
});
// Route.route('/table', {
//   template: 'containsTheDataTable'
// });


if (Meteor.isClient) {
  // counter starts at 0
// Template.registerHelper('TabularTables', {
//   behaviorclocks: TabularTables.behaviorclocks
// });

dataTableData = function () {
    return BehaviorEvents.find().fetch(); // or .map()
};
var optionsObject = {
    columns: [
      {
          title: 'Test Name',
          data: 'testName', // note: access nested data like this
          className: 'nameColumn'
      },
    {
        title: 'Behavior',
        data: 'behaviorname', // note: access nested data like this
        className: 'nameColumn'
    },
    {
      title: 'Time Occurred',
      data: 'time',
      className: 'nameColumn'
    },
    {
      title: 'Clock Type',
      data: 'clockType',
      className: 'nameColumn'
    }

    ]
    // ... see jquery.dataTables docs for more
}

Template.containsTheDataTable.helpers({
    reactiveDataFunction: function () {
        return dataTableData;
    },
    optionsObject: optionsObject // see below
});

////////////////////////////////////////////////////////////////////////////////
//                       DATATABLE FOR BEHAVIOR CLOCKS                        //
////////////////////////////////////////////////////////////////////////////////

behaviorclocksDataTableData = function () {
    return BehaviorClocks.find({"category":$("#activeTest").val()}).fetch(); // or .map()
};
var behaviorClocksOptionsObject = {
    columns: [{
        title: 'Shortcut Key',
        data: 'shortcutKey', // note: access nested data like this
        className: 'nameColumn'
    },
    {
      title: 'Behavior',
      data: 'behaviorname',
      className: 'nameColumn'
    },
    {
      title: 'Test Type',
      data: 'category',
      className: 'nameColumn'
    }

    ]
    // ... see jquery.dataTables docs for more
}

Template.behaviorclocksDataTable.helpers({
    reactiveDataFunction: function () {
        return behaviorclocksDataTableData;
    },
    optionsObject: behaviorClocksOptionsObject // see below
});
////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------------------------------------//
////////////////////////////////////////////////////////////////////////////////










// function renderPhoto(cellData, renderType, currentRow) {
//     // You can return html strings, change sort order etc. here
//     // Again, see jquery.dataTables docs
//     var img = "<img src='" + cellData + "' title='" + currentRow.profile.realname + "'>"
//     return img;
// }



Template.body.helpers({

  behaviorclocks: function() {
    return BehaviorClocks.find();
  },

  behaviorevents: function() {
    return BehaviorEvents.find();
  }



});




Template.mouseTrapImplementation.rendered = function() {
  Mousetrap.bind('4', function() {
     var delta = $("#a-timer").currentTime;
     console.log("***DELTA"+delta);
     console.log('4');
  });
  Mousetrap.bind("?", function() { console.log('show shortcuts!'); });
  Mousetrap.bind('esc', function() { console.log('escape'); }, 'keyup');

  // combinations
  Mousetrap.bind('command+shift+k', function() { console.log('command shift k'); });

  // map multiple combinations to the same callback
  Mousetrap.bind(['command+k', 'ctrl+k'], function() {
      console.log('command k or control k');

      // return false to prevent default browser behavior
      // and stop event from bubbling
      return false;
  });

  // gmail style sequences
  Mousetrap.bind('g i', function() { console.log('go to inbox'); });
  Mousetrap.bind('* a', function() { console.log('select all'); });

  // konami code!
  Mousetrap.bind('up up down down left right left right b a enter', function() {
      console.log('konami code');
  });

}


Template.video.rendered = function () {
  var popcorn = Popcorn("#vid");
  var clip = $("#clip");
    popcorn.subtitle({
      start: 1,
      stop: 10,
      text: '#Behavior Tagging in video'
    });
    popcorn.exec(1, function() {
        clip.text('The Current Model Of Higher Education Is Broken!');
    });

    popcorn.exec(8, function() {
        clip.text('The Model Does Not Scale!');
    });

    popcorn.exec(22, function() {
        clip.text('Keep Learning For Rest Of Our Lives!');
    });

    popcorn.exec(37, function() {
        clip.text('Cost Too High!');
    });

    popcorn.exec(47, function() {
        clip.text('P2PU Recognition of Learning');
    });

    popcorn.exec(50, function() {
        clip.text('Lots Of Demand!');
    });

    popcorn.exec(65, function() {
        clip.text('Enter P2PU!');
    });

    popcorn.exec(80, function() {
        clip.text('Yada, Yada, Yada!');
    });


}

Template.showbehaviors.helpers({

  behaviorclocks: function() {
    return BehaviorClocks.find();
  }

});


// Template.behaviortable.helpers({

//   behaviorclocks: function() {
//     return BehaviorClocks.find();
//   }

// });
// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});


}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    // UploadServer.init({
    //   tmpDir: process.env.PWD + '/.uploads/tmp',
    //   uploadDir: process.env.PWD + '/.uploads/',
    //   checkCreateDirectories: true //create the directories for you
    // });
  });
}
