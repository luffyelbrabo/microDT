
class inputs extends HTMLElement{
    constructor () {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        
    
    const containerStyle = `
    color: white;
    height: 68px;
    margin-top:4vh;
    position: ${this.getAttribute("p") || "relative"};
    width: ${this.getAttribute("w") || "90vw"};
    left: ${this.getAttribute("left") || "0px"};
    top: ${this.getAttribute("top") || "0px"};
    
  `;

  const raizStyle = `
    display: flex;
    height: 35px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    gap:4vw;
  `;

  const spanStyle = `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 10%;
    margin-left: 5px;
  `;

  const inputStyle = `
    border: none;
    height: 25px;
    width: 90%;
    background-color: transparent;
    color: white;
  `;

  const textStyle = `
    color: white;
    position: relative;
    background-color: transparent;
    padding: 5px;
  `;
  const iconStyle = `
  height: 25px;
  width: 25px;
  margin-left: 5vw;`

  const w = this.getAttribute("w") || "90%";
  const top = this.getAttribute("top") || "10px";
  const left = this.getAttribute("left") || "0px";

  const container = document.createElement("div");
  container.style.cssText = containerStyle;

  const raiz = document.createElement("div");
  raiz.style.cssText = raizStyle;

  raiz.setAttribute("class", "raiz");

  const span = document.createElement("span");
  span.style.cssText = spanStyle;

  const input = document.createElement("input");
  input.id = this.getAttribute("id");
  input.setAttribute("placeholder", this.getAttribute("exemplo") || "");
  input.style.cssText = inputStyle;
  input.setAttribute("type", this.getAttribute("type") || "text");
  input.setAttribute("class", "input");

  container.addEventListener("click", () => {
    input.focus();
  });

  raiz.addEventListener("click", (event) => {
    if (event.target !== input) {
      input.focus();
    }
  });

  const icon = document.createElement("img");
  icon.style.cssText = iconStyle;
  const text = document.createElement("p");
  text.style.cssText = textStyle;
  text.textContent = this.getAttribute("text");
  icon.setAttribute("src", this.getAttribute("url"));

  span.appendChild(icon);
  raiz.appendChild(span);
  raiz.appendChild(input);
  container.appendChild(text);
  container.appendChild(raiz);

  // Aplica os estilos ao shadow
  shadow.innerHTML = `
    <style>
    .input::placeholder {
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
   
   
      ${containerStyle}
      ${raizStyle}
      ${spanStyle}
      ${inputStyle}
      ${textStyle}
    </style>
  `;
  shadow.appendChild(container);
}
}

customElements.define("input-s", inputs);




