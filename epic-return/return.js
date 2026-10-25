// Hands the hospital's sign-in result to the app waiting on this computer or phone.
// Epic production accepts only https return addresses, while the app listens on
// http://127.0.0.1; this page bridges the two and does nothing else.
(function () {
  "use strict";
  // Must match DEFAULT_PORT and CALLBACK_PATH in ehi_app/fhir/smart.py.
  var LISTENER = "http://127.0.0.1:8765/callback";
  var FORWARDED = ["code", "state", "error", "error_description"];

  var params = new URLSearchParams(window.location.search);
  // Take the one-time code out of this page's address and the browser history.
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", window.location.pathname);
  }
  var message = document.getElementById("message");
  if (!params.has("state") || !(params.has("code") || params.has("error"))) {
    message.textContent = "There is nothing to hand back. Start the connection again from " +
      "the app.";
    return;
  }
  var forward = new URLSearchParams();
  FORWARDED.forEach(function (name) {
    if (params.has(name)) {
      forward.set(name, params.get(name));
    }
  });
  window.location.replace(LISTENER + "?" + forward.toString());
  window.setTimeout(function () {
    message.textContent = "If nothing happens, check that the app is still open and waiting " +
      "for you to sign in, then start the connection again.";
  }, 4000);
}());
