let body = document.body;
let yourArray = ["hello world", 42, true, null, "world", 52, false];
for (let index = 0; index < yourArray.length; index++) {
	let li = document.createElement("li");
	li.textContent = yourArray[index];
	body.append(li);
}
