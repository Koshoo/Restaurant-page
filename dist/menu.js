const createMenu = () => {
	const menuDiv = document.createElement("div");
	menuDiv.id = "menu"
	const menu = document.createElement("ul");
	const garlicBread = document.createElement("li");
	garlicBread.textContent="Garlic Bread.........................................5$"
	const cesarSalad = document.createElement("li");
	cesarSalad.textContent = "Cesar Salad..........................................8$"
	const pizza = document.createElement("li");
	pizza.textContent = "Pizza Margherita................................11$";
	const pasta = document.createElement("li");
	pasta.textContent = "Pasta Pomodoro.................................12$";

	menu.appendChild(garlicBread);
	menu.appendChild(cesarSalad);
	menu.appendChild(pizza);
	menu.appendChild(pasta);

	menuDiv.appendChild(menu);

	return menuDiv;
}

export {
	createMenu
}