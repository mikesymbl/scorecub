Template.behaviorForm.events({
  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newBehavior = {
      behaviorname: event.target.behaviorname.value,
      shortcutKey: event.target.shortcutKey.value,
      timerType: event.target.timerType.value,
      category: event.target.category.value,
      clockID: event.target.behaviorname.value + '-id'
    };

    // create the new poll
    BehaviorClocks.insert(newBehavior);
  }

});


// behaviorname: 'Approach',
//         category: 'Behavior tests and codes',
//         shortcutKey: 'a',
//         timerType: 'frequency',
//         clockID: 'approach-timer'
