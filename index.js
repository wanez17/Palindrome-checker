var i = 0;
var txt = "A palindrome is a word or sentence that can be spelt backwards and will look exactly the same as when it is spelt from the front. Some examples are: 'Hannah', 'racecar', etc."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function explain() {
  if (i < txt.length) {
    document.getElementById("explanation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(explain, speed);
  }

}


function check() {
  let inputValue = document.getElementById("typeHere").value;
  let input = document.getElementById("typeHere");
  let remarks = document.getElementById("palindrome-remarks");
  let cleanString = inputValue.replace(/[_(\\)-\/\s,\.]/g, "");
  let newCopy = cleanString.slice("")
  newCopy = newCopy.split("")
  let lowercaseWords = newCopy.map(word => word.toLowerCase());
  let joined = lowercaseWords.join("")

  let reversed = lowercaseWords.slice("")
  reversed.reverse()
  const lowercaseReverse = reversed.map(word => word.toLowerCase());
  let joinedReverse = lowercaseReverse.join("")

for (let i = 0; i < inputValue.length; i++){
  if (joinedReverse === joined){
    document.getElementById("palindrome-remarks").innerHTML = "Yes! it's a palindrome";
    remarks.style.color="green";
  }
  else{
    document.getElementById("palindrome-remarks").innerHTML = "This is not a palindrome";
    remarks.style.color="red";
  }
}
}
