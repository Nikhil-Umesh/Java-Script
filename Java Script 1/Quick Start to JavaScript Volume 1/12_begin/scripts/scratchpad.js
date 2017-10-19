/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
alert("It is the zombie apcolypse. You are in a store and suddenly a zombie enters");
var weapon=prompt("What do you choose? A bow and arrow,an axe,a gun ");
var randomNumber=Math.round(Math.random());
alert("you attack the zombie with"+" "+weapon);
if(randomNumber===0)
  {
    alert("the zombie bites you");
  }
else if(randomNumber===1)
  {
    alert("you killthe zombie with"+" "+weapon);
  }
