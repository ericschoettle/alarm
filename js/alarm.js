//
// As a user of your alarm clock, I would like to be able to view the current time.
// I would also like to be able to enter a time into a form to set an alarm.
// The alarm should turn on at the specified alarm time.
// As a user, when the alarm turns on I want it to either show me something on the screen (like a picture/animation) or make a sound, or both.
//
// Bonus goals are below! These are optional - come back to them if you have extra time after working on the weather app.
//
// As a user I would like to be able to hit a snooze button, which makes the alarm turn off and then be activated again five minutes later.
// I'd like the ability to change the amount of snooze time if I would actually prefer another ten minutes of sleep, instead of five.
// As a user I would like to be able to set multiple alarms because mornings are hard.

function Alarm(alarmTime) {
  this.time = alarmTime;
  this.hour = parseInt(this.time.split(':')[0]);
  this.minute = parseInt(this.time.split(':')[1]);
  this.checkAlarm = function(moment) {
    var currentHour = parseInt(moment.split(':')[0]);
    var currentMinute = parseInt(moment.split(':')[1]);
    return ((currentHour >= this.hour) && (currentMinute >= this.minute))
  }
}

exports.alarmModule = Alarm;
