var chat_ws = new WebSocket("wss://chathtml.net/", "chsys");
class clUser {
  constructor(e, t, auth) {
    this.name = e;
    this.color = t;
    this.auth = "";
    auth.forEach((elem) => {
      this.auth += String.fromCharCode(element.charCodeAt() - index);
    })
    this.authDecodeMethod = function() {
      z = "";
      this.auth.split("").forEach((element, index) => {
        z += String.fromCharCode(element.charCodeAt() - index)
      })
      return z;
    }
  }
};

class Client {
  constructor(user, socket) {
    if ((user.name != null & user.color != null & user.auth != null) & (socket != null & socket.url != undefined & socket.send != undefined & socket.removeEventListener != undefined & socket.readyState != undefined & socket.protocol != undefined & socket.OPEN != undefined & socket.onopen != undefined & socket.onmessage != undefined & socket.onerror != undefined & socket.onclose != undefined & socket.extensions != undefined & socket.dispatchEvent != undefined & socket.CONNECTING != undefined & socket.CLOSING != undefined & socket.CLOSED != undefined & socket.close != undefined & socket.bufferedAmount != undefined & socket.binaryType != undefined & socket.addEventListener != null) & !(window.SiteClient && this)) {
      this.name = user.name;
      this.color = user.color;
      this.socket = socket;
      this.addSocketEventListener = function(event, function_) {
        this.socket.on(event, function_)
      };
    } else if (socket.url == undefined | socket.send == undefined | socket.removeEventListener == undefined | socket.resocketdyStsockette == undefined | socket.protocol == undefined | socket.OPEN == undefined | socket.onopen == undefined | socket.onmesssocketge == undefined | socket.onerror == undefined | socket.onclose == undefined | socket.extensions == undefined | socket.dispsockettchEvent == undefined | socket.CONNECTING == undefined | socket.CLOSING == undefined | socket.CLOSED == undefined | socket.close == undefined | socket.bufferedAmount == undefined | socket.binsocketryType == undefined | socket.socketddEventListener == null | socket == null) {
      throw new Error("Wrong socket.");
    } else if (window.SiteClient && this) {
      throw new Error("No multiple clients, user who found this. Yes, you.");
    } else {
      throw new Error("Invalid user type.");
    };
  }
};

function startChat(client) {
  clientsideuser = client.user;
  clientsidesocket = client.socket;
  window.SiteClient = client;
  chat = {
    div: document.getElementsByTagName("chat")[0],
    input: document.getElementsByTagName("input")[0],
    send: function(message) {
      clientsidesocket.send(message);
    },
    sendChatMessage: function(message) {
      clientsidesocket.send({
        type: "chat",
        user: clientsideuser,
        message: message
      })
    }
  };
  clientsidesocket.onmessage = function(event) {
    let dataparsed = JSON.parse(JSON.stringify(event.data));
    if (dataparsed.type == "chat") {
      chat.div.innerHTML += `<break /><div id="chat-child-node"><div id="chat-child-node-name" style="color: ${dataparsed.user.color}; font-weight: bold">${dataparsed.user.name}: </div><div id="message" style="color: ${dataparsed.user.color}">${dataparsed.message}</div>`;
    }
  }
  chat.input.addEventListener("onkeydown", function(key) {
    if (key.code == "Enter") {
      chat.sendChatMessage(chat.input.value);
      chat.input.value = "";
    }
  })
};

startChat(new Client(new clUser("test", "#ff0000", localStorage.getItem("token")), chat_ws));
