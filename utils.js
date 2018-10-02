export function ucfirst(str) {
	return str.charAt(0).toUpperCase() + str.substring(1);
}

export function toWords(str) {
	return str.split(/[-_]+|(?=[A-Z])/);
}

