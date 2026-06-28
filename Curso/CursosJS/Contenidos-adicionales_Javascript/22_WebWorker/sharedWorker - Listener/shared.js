let connessioni = 0;
let messaggio = '';
onconnect = function (event) {
  connessioni += 1;
  const port = event.ports[0];
  port.onmessage = function (e) {
    messaggio = messaggio + ' ' + e.data;
    port.postMessage(messaggio + '<br> num connessini attive: ' + connessioni);
  };
};
