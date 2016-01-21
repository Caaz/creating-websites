// Custom JQuery function for fancy typing! I wrote this myself! It's recursive as fuck.
$.fn.typeText = function(text,callback) {
  if((typeof text) == 'string') { text = text.split(''); this.text(''); }
  this.text(this.text() + text.shift());
  var $self = this;
  if(text.length) setTimeout(function(){ $self.typeText(text, callback); }, 50);
  else if(callback) callback();
  return this;
}
// Another one for erasing things! Also recursive as fuck! I love recursions!
$.fn.eraseText = function(callback) {
  var hasMore = false;
  this.each(function(e,t){
    var text = t.textContent;
    t.textContent = t.textContent.substr(0,text.length-1);
    if(t.textContent.length) hasMore = true;
  });
  if(hasMore) { var $self = this; setTimeout(function() { $self.eraseText(callback); }, 100); }
  else { if(callback) callback(); }
  return this;
}
// A less complicated recursion utilizing both of those recursive functions!
function newMe($target, list) {
  $target.typeText(
    list[Math.floor(Math.random()*list.length)],
    function(){ setTimeout(function(){ $target.eraseText(function(){ newMe($target,list) }); }, 5000); }
  );
}

// Note how I don't comment the most complicated bit of code. That's because I'm lazy.
// This is supposed to be a page supporting me.
// It's not laziness.
// It's uh, proprietary information.
// Yeah.

// Alright here we actually execute page shit.
$(function(){
  // Start this which is basically a loop.
  newMe(
    // Where we're actually placing the what I am text.
    $('#iAmA'),
    // List of things I am. (Self proclaimed, of course) Maybe I'll move this to some ajax call or something.
    ['Web Developer','Slacker','Hacker','Perl Pro','Programmer','Wizard','Level 70 Mohawk Night Elf','Pokemon Trainer','Professional?','Hobbyist','Psuedo-RNG Empathizer','Procrastinator','Electro-Swing Fan', 'Bonefide Badass']
  );

  // Fancy header shit.
  var $name = $('header > h1');
  $name.children().text('');
  $name.hover(function(){
    var children = $(this).children();
    $(children[0]).typeText('v',function() { $(children[1]).typeText('os'); });
  },function(){ $(this).children().eraseText(); });
});
