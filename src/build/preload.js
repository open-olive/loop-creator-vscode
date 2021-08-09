var appReady = false;

const verifyAppReady = function (fn) {
  var i = 0;
  var appReadyInterval = setInterval(() => {
    try {
      i += 1;

      if (i === 20) {
        clearInterval(appReadyInterval);
      }

      if (appReady) {
        fn();

        clearInterval(appReadyInterval);
      }
    } catch (error) {
      console.log("error", error);
      clearInterval(appReadyInterval);
    }
  }, 100);
};

var oliveHelps = {
  clipboard: {
    listen: (callback) =>
      verifyAppReady(() => {
        callback(null, "some kind of text from the clipboard");
      }),
    includeOliveHelpsEvents: () => {},
  },
  whisper: {
    create: (content) => {
      const eventBody = {
        detail: {
          name: "newWhisper",
          payload: {
            content: content,
            createdAt: new Date().toISOString(),
            loopId: "loop-" + Date.now(),
            type: "universal",
            whisperId: "whisper-" + Date.now(),
          },
        },
      };

      const event = new CustomEvent("send-window-message", eventBody);

      window.dispatchEvent(event);
    },
  },
};

var require = (key) => {
  const stub = {
    electron: {
      remote: {
        globalShortcut: {
          isRegistered: () => false,
          register: () => true,
          unregister: () => {},
          unregisterAll: () => {},
        },
      },
    },
  };

  return stub[key];
};

const messages = {};
const messagesWithNoResponse = [
  "globalSearchWindowToggle",
  "keyboardLock",
  "openLoopLibrary",
  "pause",
  "search",
  "sidenoteCreateNote",
  "trackEvent",
  "whisperInteraction",
  "sendLog",
];

const sendMessage = (message, callback = () => {}) => {
  if (messagesWithNoResponse.includes(message.name)) {
    return callback({});
  }
  if (!messages[message.name]) {
    throw new Error(`unsupported sendMessage "${message.name}".`);
  }

  return callback(messages[message.name]);
};

const onMessage = (callback) => {
  const onEvent = (e) => callback(e.detail);
  window.addEventListener("send-window-message", onEvent, false);
};

var astilectron = {
  onMessage,
  sendMessage,
};

var i = 0;

const appReadyInterval = setInterval(() => {
  try {
    i += 1;

    if (i === 20) {
      clearInterval(appReadyInterval);
    }
    if (document.getElementById("app").children.length > 0) {
      const event = new CustomEvent("astilectron-ready");
      document.dispatchEvent(event);

      setTimeout(() => {
        appReady = true;
      }, 100);

      clearInterval(appReadyInterval);
    }
  } catch (error) {
    console.log("error", error);
    clearInterval(appReadyInterval);
  }
}, 100);
