Router.route('/createbehavior', {
    template: 'behaviorForm'
});

Router.route('/', {
  template: 'home'
});

Router.route('/showbehaviors', {
  // template: 'showbehaviors'
  template: 'showbehaviors'
});



if (Meteor.isClient) {
  // counter starts at 0
// Template.registerHelper('TabularTables', {
//   behaviorclocks: TabularTables.behaviorclocks
// });

Template.body.helpers({


  behaviorclocks: function() {
    return BehaviorClocks.find();
  }



});




Template.mouseTrapImplementation.rendered = function() {
  Mousetrap.bind('4', function() {

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


Template.behaviortable.helpers({

  behaviorclocks: function() {
    return BehaviorClocks.find();
  }

});
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


TabularTables = {};

TabularTables.BehaviorClocks = new Tabular.Table({
  name: "BehaviorClocks",
  collection: BehaviorClocks,
  columns: [
     {data: "behaviorname", title: "Title"}
    // {data: "author", title: "Author"},
    // {data: "copies", title: "Copies Available"},
    // {
    //   data: "lastCheckedOut",
    //   title: "Last Checkout",
    //   render: function (val, type, doc) {
    //     if (val instanceof Date) {
    //       return moment(val).calendar();
    //     } else {
    //       return "Never";
    //     }
    //   }
    // },
    // {data: "summary", title: "Summary"},
    // {
    //   tmpl: Meteor.isClient && Template.bookCheckOutCell
    // }
  ]
});

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
