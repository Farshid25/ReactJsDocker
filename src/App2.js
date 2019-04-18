import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function farshid() {
  console.log("farhsid");
}

// var webdriver = require("selenium-webdriver");

// var browser = new webdriver.Builder()
//   .withCapabilities(webdriver.Capabilities.firefox())
//   .Build();

// browser.get("http://www.google.com");

// var promise = browser.getTitle();

// promise.then(function(title) {
//   Console.log(title);
// });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

module.exports = function() {
  console.log("ann");
};
