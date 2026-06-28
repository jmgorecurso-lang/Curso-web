let i;
onmessage = function (event) {
	i = event.data;
};
setInterval(generaSecuencia, 300);
function generaSecuencia() {
	if (i) {
		i *= 2;
		if (i > 1000) {
			close();
		} else {
			postMessage(i);
		}
	}
}
