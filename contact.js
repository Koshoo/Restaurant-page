const createContact = () => {
	const contactDiv = document.createElement("div");
	const contact = document.createElement("p");
	contact.innerHTML = "Phone number - 5555555555 <br/><br/>Adress - 22 SomeSt. Country";
	
	contactDiv.appendChild(contact);

	return contactDiv;
}

export {
	createContact
}