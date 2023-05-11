let li = document.querySelector(".sum");
let yourArray = ["hello world", 42, true, null, "world", 52, false];
for (let index = 0; index < yourArray.length; index++) {
	li.textContent += yourArray[index] + " ";
}
console.log(yourArray);
