const inputs = document.querySelectorAll(".controls input");

//NOTE - function expression não tem acesso a "this" key word... so we have to use function declaration
function handleUpdate() {
	//NOTE - empty string becouse we dont need "px" to be appended on hexcode for the colors
	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
