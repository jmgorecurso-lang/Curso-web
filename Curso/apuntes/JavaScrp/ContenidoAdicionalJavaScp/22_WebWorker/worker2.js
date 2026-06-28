let i;
onmessage = function (event) {
	i = event.data;
};
setInterval(generaSecuencia, 300);
function generaSecuencia() {
	if (i) {
		i *= 2;
		postMessage(i);
	}
}
