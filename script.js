function getFormvalue() {
    //Write your code here
	const inputRef= document.getElementsByTagName("input");
	let firstName=inputRef[0].value
	let lastName=inputRef[1].value
	let fullName=firstName+lastName;
    alert(fullName);
}
