// JQuery plugin! For combos!
// $target.minako(['m','y','c','o','m','b','o'], function(){
//   console.log("This is triggered when your combo is typed!");
// });

// Set up function
$.fn.minako = function(combo, callback) {
  // Your history of keypresses on the target
  var history = [];
  // On a keypress
  this.keypress(function(e){
    // add the key to the history.
    history.push(e.key);
    // Check if the combo has been done correctly.
    if(function(){
      for(var i = 0; i<combo.length; i++)
        // If an error was made, return false.
        if((!history[i]) || (history[i] !== combo[i])) return false;
      // When the loop completes without returning false, the only other possibility must be that it's true.
      return true;
      // So trigger the callback!
      }()) callback();
    // If the history is too long, let's chop off the older presses.
    if(history.length >= combo.length) history.shift();
  });
}
