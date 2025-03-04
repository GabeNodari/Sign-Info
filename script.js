//Função: data -> HTML
let descobrirSigno = () => {
  const DATA_USER = document.getElementById("dataNascimento").value;
  if (!DATA_USER) {
    alert("Insira uma data válida!");
    return;
  }

//Declarações
  const DATA = new Date(DATA_USER);
  const DIA = DATA.getDate();
  const MES = DATA.getMonth() + 1;
  let signo = "";
  let descricao = "";

//Switch-case: signos
  switch (true) {
    case (MES === 3 && DIA >= 21) || (MES === 4 && DIA <= 19):
      signo = "Áries ♈";
      descricao = "🔥 Determinado, corajoso e impulsivo. Adora desafios e liderança.<br>💞 Combina com: Leão e Sagitário (signos de fogo que compartilham sua energia).";
      break;
    case (MES === 4 && DIA >= 20) || (MES === 5 && DIA <= 20):
      signo = "Touro ♉";
      descricao = "🌱 Paciente, leal e teimoso. Valoriza segurança e conforto.<br>💞 Combina com: Virgem e Capricórnio (ambos práticos e estáveis).";
      break;
    case (MES === 5 && DIA >= 21) || (MES === 6 && DIA <= 20):
      signo = "Gêmeos ♊";
      descricao = "🌪 Comunicativo, curioso e versátil. Ama novidades e mudanças.<br>💞 Combina com: Libra e Aquário (ambos intelectuais e sociáveis).";
      break;
    case (MES === 6 && DIA >= 21) || (MES === 7 && DIA <= 22):
      signo = "Câncer ♋";
      descricao = "🌊 Sensível, protetor e intuitivo. Prioriza o emocional e a família.<br>💞 Combina com: Escorpião e Peixes (ambos profundos e sentimentais).";
      break;
    case (MES === 7 && DIA >= 23) || (MES === 8 && DIA <= 22):
      signo = "Leão ♌";
      descricao = "🔥 Carismático, confiante e generoso. Gosta de ser o centro das atenções.<br>💞 Combina com: Áries e Sagitário (ambos vibrantes e apaixonados).";
      break;
    case (MES === 8 && DIA >= 23) || (MES === 9 && DIA <= 22):
      signo = "Virgem ♍";
      descricao = "🌱 Perfeccionista, organizado e prestativo. Foca nos detalhes e na lógica.<br>💞 Combina com: Touro e Capricórnio (práticos e responsáveis).";
      break;
    case (MES === 9 && DIA >= 23) || (MES === 10 && DIA <= 22):
      signo = "Libra ♎";
      descricao = "🌪 Charmoso, diplomático e sociável. Busca equilíbrio e harmonia.<br>💞 Combina com: Gêmeos e Aquário (ambos divertidos e intelectuais).";
      break;
    case (MES === 10 && DIA >= 23) || (MES === 11 && DIA <= 21):
      signo = "Escorpião ♏";
      descricao = "🌊 Intenso, misterioso e apaixonado. Vive tudo com intensidade.<br>💞 Combina com: Câncer e Peixes (ambos emocionais e intuitivos).";
      break;
    case (MES === 11 && DIA >= 22) || (MES === 12 && DIA <= 21):
      signo = "Sagitário ♐";
      descricao = "🔥 Aventureiro, otimista e espontâneo. Ama liberdade e explorar o mundo.<br>💞 Combina com: Áries e Leão (ambos energéticos e ousados).";
      break;
    case (MES === 12 && DIA >= 22) || (MES === 1 && DIA <= 19):
      signo = "Capricórnio ♑";
      descricao = "🌱 Disciplinado, ambicioso e reservado. Prefere estabilidade e planejamento.<br>💞 Combina com: Touro e Virgem (todos focados e trabalhadores).";
      break;
    case (MES === 1 && DIA >= 20) || (MES === 2 && DIA <= 18):
      signo = "Aquário ♒";
      descricao = "🌪 Independente, criativo e inovador. Gosta de novidades e pensar no futuro.<br>💞 Combina com: Gêmeos e Libra (ambos inteligentes e sociáveis).";
      break;
    case (MES === 2 && DIA >= 19) || (MES === 3 && DIA <= 20):
      signo = "Peixes ♓";
      descricao = "🌊 Sonhador, sensível e empático. Vive no mundo da imaginação.<br>💞 Combina com: Câncer e Escorpião (ambos profundos e emocionais).";
      break;
  }

//Pop-up: resultado
  const POP_UP = document.getElementById("popUp");
  POP_UP.innerHTML = `<h2>Seu signo é: ${signo}!</h2>
  <p>${descricao}</p>`;
  POP_UP.style.display = "flex";
};
