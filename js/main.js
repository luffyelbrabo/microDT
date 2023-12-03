class Status {
  constructor() {
  }

  createCircle(style) {
    const circle = document.createElement("div");
    circle.style.cssText = style;
    return circle;
  }

  company(id, etapa) {
    const container = document.querySelector(id);
    const circleStyleOn = `
          height: 15px;
          width: 15px;
          background-color: white;
          border-radius: 50%;
      `;

    const circleStyleOff = `
          height: 15px;
          width: 15px;
          background-color: #777;
          border-radius: 50%;
      `;
    container.innerHTML = '';

    for (let i = 0; i < etapa; i++) {
      container.appendChild(this.createCircle(circleStyleOn));
    }

    const remainingCircles = 4 - etapa;
    for (let i = 0; i < remainingCircles; i++) {
      container.appendChild(this.createCircle(circleStyleOff));
    }
  }

  Client(id, etapa) {
    const container = document.querySelector(id);
    const circleStyleOn = `
        height: 15px;
        width: 15px;
        background-color: white;
        border-radius: 50%;
    `;

    const circleStyleOff = `
        height: 15px;
        width: 15px;
        background-color: #777;
        border-radius: 50%;
    `;
    container.innerHTML = '';

    for (let i = 0; i < etapa; i++) {
      container.appendChild(this.createCircle(circleStyleOn));
    }

    const remainingCircles = 2 - etapa;
    for (let i = 0; i < remainingCircles; i++) {
      container.appendChild(this.createCircle(circleStyleOff));
    }
  }



  name(id, name) {
    const container = document.querySelector(id);
    const text = document.createElement("p");
    text.style.cssText = `
    color: white;
    font-size: 29px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    `;
    text.textContent = name;
    container.appendChild(text);
  }
  description(id, description) {
    const container = document.querySelector(id);
    const text = document.createElement("p");
    text.style.cssText = `
    color: white;
    font-size: 18px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    `;
    text.textContent = description;
    container.appendChild(text);
  }
  Next(next, back, pageBack, pageNext) {
    const btnNext = document.querySelector(next);
    const btnBack = document.querySelector(back);
    btnNext.addEventListener("click", () => {
      window.location.href = pageNext;
    });
    btnBack.addEventListener("click", () => {
      window.location.href = pageBack;
    });
  }
  GerenciarPopup(id, visualizacao, fecharPopup) {
    const selectdate = document.querySelector(id);
    const visualizarData = document.querySelector(visualizacao);
    const fecharBotao = document.querySelector(fecharPopup);

    visualizarData.addEventListener("click", () => {
      const PopUp = document.querySelector(".PopUp");
      PopUp.style.display = "flex";
    });

    selectdate.addEventListener("input", function () {
      const data = new Date(selectdate.value);
      const dia = data.getDate();
      const mes = data.getMonth() + 1;
      const ano = data.getFullYear();
      const dataFormatada = `${dia}/${mes}/${ano}`;
      visualizarData.innerHTML = dataFormatada;
    });

    fecharBotao.addEventListener("click", () => {
      const PopUp = document.querySelector(".PopUp");
      PopUp.style.display = "none";
    });
  }

}


class Home {
  constructor(cardNumber) {
      const mainContainer = document.querySelector(".mainContainer");

      const card = document.createElement('div');
      card.classList.add(`card${cardNumber}`, 'mainCard');

      card.innerHTML = `
      <div class="mainCardImg">
          <img src="./css/imgs/logo502.png" alt="">
      </div>
      <div class="mainCardEndereco">
          <div class="mainCardEnderecoTitle">
              <h1>Endereço</h1>
          </div>
          <div class="mainCardEnderecoText">
              <p>Rua: Generoso...</p>
              <p>Número: 288</p>
              <p>Bairro: São Bento</p>
              <p>Cidade: Sidrolândia</p>
              <p>Estado: MS</p>
          </div>
      </div>
      <div class="mainCardCashBack">
          <div class="p">17%</div>
      </div>`;

      mainContainer.appendChild(card);
  }
  Cards (value) {
    return value
  }
  activePerfil(selector) {
    const element = document.querySelector(selector);
    element.addEventListener('click', () => {
      const perfil = document.querySelector('.perfil');
      const fundo = document.querySelector('.fundo');
      perfil.style.display = 'flex';
      fundo.style.display = 'flex';
      fundo.addEventListener('click', () => {
        perfil.style.display = 'none';
        fundo.style.display = 'none';
      });
    });
  }
}