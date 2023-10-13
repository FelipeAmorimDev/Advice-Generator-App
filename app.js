const adviceElement = document.querySelector(".advice__text");
const adviceTitle = document.querySelector(".advice__card h1");
const generatorBtn = document.querySelector(".advice__generator");

const fetchAdvice = async (url) => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (response.status === 200) {
      const { slip } = await response.json();

      adviceElement.textContent = slip.advice;
      adviceTitle.textContent = `ADVICE #${slip.id}`;

      return;
    }
    throw new Error("Não foi possivel obter uma resposta.");
  } catch (err) {
    console.log(err);
  }
};

const generateAdvice = () => {
  fetchAdvice();
};

generatorBtn.addEventListener("click", generateAdvice);
