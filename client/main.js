import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.body.helpers({
 tasks: [
   { text: 'This is task 1' },
   { text: 'This is task 2' },
   { text: 'This is task 3' },
 ],
});
