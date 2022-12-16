import Img from "./webpack.svg";

export function view() {
  document.querySelector("#app").innerHTML = `
    <h1>hello world</h1>
    <img src = "${Img}" alt="img" />
  `;
}
