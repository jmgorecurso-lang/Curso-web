let i = 1;
setInterval(multiplica, 300);
function multiplica() {
	i *= 2;
	postMessage(i);
}