const app = {
  init: function () {
    const questions = document.querySelectorAll(".question-container");
    for (const question of questions) {
      question.addEventListener("click", (event) => {
        const response = event.currentTarget.querySelector(".answer");
        if (response.classList.contains("hidden")) {
          app.hideAnswerElem();
          app.handleClickQuestion(event);
        } else {
          app.handleClickQuestion(event);
        }
      });
    }
  },
  handleClickQuestion: function (event) {
    const response = event.currentTarget.querySelector(".answer");
    const iconPlus = event.currentTarget.querySelector(".plus");
    const iconMinus = event.currentTarget.querySelector(".minus");
    response.classList.toggle("hidden");
    iconPlus.classList.toggle("hidden");
    iconMinus.classList.toggle("hidden");
  },
  hideAnswerElem: function () {
    const answers = document.querySelectorAll(".answer");
    const iconsPlus = document.querySelectorAll(".plus");
    const iconsMinus = document.querySelectorAll(".minus");

    for (const answer of answers) {
      answer.classList.add("hidden");
    }
    for (const iconPlus of iconsPlus) {
      iconPlus.classList.remove("hidden");
    }
    for (const iconMinus of iconsMinus) {
      iconMinus.classList.add("hidden");
    }
  },
};

window.addEventListener("DOMContentLoaded", app.init);
