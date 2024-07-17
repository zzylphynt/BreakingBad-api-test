import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { BreakingBadApp } from "./src/breakingbad/breakingbad-app";

document.querySelector("#app").innerHTML = `
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">

    </div>

  </div>

`;

const element = document.querySelector(".card")
BreakingBadApp(element)