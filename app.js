Router.route('/createbehavior', {
    template: 'behaviorForm'
});

Router.route('/', {
  template: 'home'
});

Router.route('/showbehaviors', {
  // template: 'showbehaviors'
  template: 'behaviortable'
});

if (Meteor.isClient) {
  // counter starts at 0

Template.body.helpers({

  behaviorclocks: function() {
    return BehaviorClocks.find();
  }

});

Template.video.rendered = function () {
  var popcorn = Popcorn("#vid");
var clip = $("#clip");
popcorn.subtitle({
  start: 1,
  stop: 10,
  text: '#Behavior Tagging in video'
})
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

  Template.behaviorClock.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
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
