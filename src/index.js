import {
	createMenu
} from "../dist/menu"

import {
	createContact
} from "../dist/contact"

const content = document.getElementById("content");
const title = document.createElement("h1");
title.id = "title";
title.textContent = "Al Dente"
const buttons = document.createElement("div");
buttons.id = "buttons";

const aboutBtn = document.createElement("button");
aboutBtn.id = "about-btn";
aboutBtn.textContent = "About us";
aboutBtn.className = "button";
const menuBtn = document.createElement("button");
menuBtn.id = "menu-btn";
menuBtn.textContent = "Menu";
menuBtn.className = "button";
const contactBtn = document.createElement("button");
contactBtn.id = "contact-btn";
contactBtn.textContent = "Contact Us";
contactBtn.className = "button";

buttons.appendChild(aboutBtn);
buttons.appendChild(menuBtn);
buttons.appendChild(contactBtn);

const aboutUsDiv = document.createElement("div");
const aboutUs = document.createElement("p");
const italyFlag = document.createElement("img");

const menuDiv = createMenu();
const contactDiv = createContact();

aboutUsDiv.appendChild(aboutUs);
aboutUsDiv.appendChild(italyFlag);
italyFlag.src = "italy-flag.png"
aboutUsDiv.className = "tab";
aboutUsDiv.id = "about-us"
aboutUs.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


const render = () => {
	content.appendChild(title);
	content.appendChild(buttons);
}

const clearTab = () => {
	if (aboutUsDiv.parentNode == content) {
		content.removeChild(aboutUsDiv);
	}
	if(menuDiv.parentNode == content){
		content.removeChild(menuDiv);
	}
	if(contactDiv.parentNode == content){
		content.removeChild(contactDiv);
	}
}

render();

content.appendChild(aboutUsDiv);
aboutBtn.addEventListener("click", (e) => {
	clearTab();
	content.appendChild(aboutUsDiv);
});

menuBtn.addEventListener("click", (e) => {
	clearTab();
	content.appendChild(menuDiv);
});

contactBtn.addEventListener("click", (e) => {
	clearTab();
	content.appendChild(contactDiv);
});