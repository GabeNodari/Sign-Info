let descobrirSigno = () => {
  const dataUser = document.getElementById("dataNascimento").value;
  if (!dataUser) {
    alert("Insira uma data válida!");
    return;
  }

  const dataSys = new Date(dataUser);
  const diaSys = dataSys.getDate();
  const mesSys = dataSys.getMonth() + 1;
  let signo = "";
  let descricao = "";

  switch (true) {
    case (mesSys === 3 && diaSys >= 21) || (mesSys === 4 && diaSys <= 19):
      signo = "Áries ♈";
      descricao = "🔥 Determinado, corajoso e impulsivo. Adora desafios e liderança.<br>💞 Combina com: Leão e Sagitário (signos de fogo que compartilham sua energia).";
      break;
    case (mesSys === 4 && diaSys >= 20) || (mesSys === 5 && diaSys <= 20):
      signo = "Touro ♉";
      descricao = "🌱 Paciente, leal e teimoso. Valoriza segurança e conforto.<br>💞 Combina com: Virgem e Capricórnio (ambos práticos e estáveis).";
      break;
    case (mesSys === 5 && diaSys >= 21) || (mesSys === 6 && diaSys <= 20):
      signo = "Gêmeos ♊";
      descricao = "🌪 Comunicativo, curioso e versátil. Ama novidades e mudanças.<br>💞 Combina com: Libra e Aquário (ambos intelectuais e sociáveis).";
      break;
    case (mesSys === 6 && diaSys >= 21) || (mesSys === 7 && diaSys <= 22):
      signo = "Câncer ♋";
      descricao = "🌊 Sensível, protetor e intuitivo. Prioriza o emocional e a família.<br>💞 Combina com: Escorpião e Peixes (ambos profundos e sentimentais).";
      break;
    case (mesSys === 7 && diaSys >= 23) || (mesSys === 8 && diaSys <= 22):
      signo = "Leão ♌";
      descricao = "🔥 Carismático, confiante e generoso. Gosta de ser o centro das atenções.<br>💞 Combina com: Áries e Sagitário (ambos vibrantes e apaixonados).";
      break;
    case (mesSys === 8 && diaSys >= 23) || (mesSys === 9 && diaSys <= 22):
      signo = "Virgem ♍";
      descricao = "🌱 Perfeccionista, organizado e prestativo. Foca nos detalhes e na lógica.<br>💞 Combina com: Touro e Capricórnio (práticos e responsáveis).";
      break;
    case (mesSys === 9 && diaSys >= 23) || (mesSys === 10 && diaSys <= 22):
      signo = "Libra ♎";
      descricao = "🌪 Charmoso, diplomático e sociável. Busca equilíbrio e harmonia.<br>💞 Combina com: Gêmeos e Aquário (ambos divertidos e intelectuais).";
      break;
    case (mesSys === 10 && diaSys >= 23) || (mesSys === 11 && diaSys <= 21):
      signo = "Escorpião ♏";
      descricao = "🌊 Intenso, misterioso e apaixonado. Vive tudo com intensidade.<br>💞 Combina com: Câncer e Peixes (ambos emocionais e intuitivos).";
      break;
    case (mesSys === 11 && diaSys >= 22) || (mesSys === 12 && diaSys <= 21):
      signo = "Sagitário ♐";
      descricao = "🔥 Aventureiro, otimista e espontâneo. Ama liberdade e explorar o mundo.<br>💞 Combina com: Áries e Leão (ambos energéticos e ousados).";
      break;
    case (mesSys === 12 && diaSys >= 22) || (mesSys === 1 && diaSys <= 19):
      signo = "Capricórnio ♑";
      descricao = "🌱 Disciplinado, ambicioso e reservado. Prefere estabilidade e planejamento.<br>💞 Combina com: Touro e Virgem (todos focados e trabalhadores).";
      break;
    case (mesSys === 1 && diaSys >= 20) || (mesSys === 2 && diaSys <= 18):
      signo = "Aquário ♒";
      descricao = "🌪 Independente, criativo e inovador. Gosta de novidades e pensar no futuro.<br>💞 Combina com: Gêmeos e Libra (ambos inteligentes e sociáveis).";
      break;
    case (mesSys === 2 && diaSys >= 19) || (mesSys === 3 && diaSys <= 20):
      signo = "Peixes ♓";
      descricao = "🌊 Sonhador, sensível e empático. Vive no mundo da imaginação.<br>💞 Combina com: Câncer e Escorpião (ambos profundos e emocionais).";
      break;
  }

  const popUp = document.getElementById("popUp");
  popUp.innerHTML = `<h2>Seu signo é: ${signo}!</h2>
  <p>${descricao}</p>`;
  popUp.style.display = "flex";
};