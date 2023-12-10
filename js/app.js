const app = {
  init: function () {
    const questions = document.querySelectorAll(".question-container");
    for (const question of questions) {
      question.addEventListener("click", (event) => {
        app.handleClickQuestion(event);
      });
    }
  },
  handleClickQuestion: function (event) {
    const response = event.currentTarget.querySelector(".answer");
    response.classList.toggle("hidden");
  },
};

window.addEventListener("DOMContentLoaded", app.init);
