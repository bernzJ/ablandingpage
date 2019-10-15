import React from "react"
import ReactDOM from "react-dom"
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css"
import WOW from "wowjs"
import App from "./components/App"
import * as serviceWorker from "./serviceWorker"
import "./assets/font.css"
import "animate.css/animate.min.css"
import "./assets/js/top-button"

window.$ = $;
const wow = new WOW.WOW({
    live: false
});
wow.init();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
