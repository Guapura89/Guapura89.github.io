const API_URL = "http://jservice.io";

const HTMLResponse = document.querySelector("#app");
const sw = document.getElementById("stopwatch");
const answer = document.getElementById("answer");
const btn = document.getElementById("btn");

let seg = 20;

function question() {
  seg = 20;
  fetch(`${API_URL}/api/random`)
    .then((response) => response.json())
    .then((questions) => {
      const tpl = questions.map((question) => `<h3>${question.question}</h3>`);
      const tpl2 = questions.map((question) => `<h3>${question.answer}</h3>`);
      HTMLResponse.innerHTML = `${tpl}`;
      answer.innerHTML = `${tpl2}`;
      answer.style.visibility = "hidden";
      var obj = setInterval(segundos, 1000);
      btn.disabled = true;
      function segundos() {
        seg -= 1;
        sw.innerHTML = seg;
        if (seg == 0) {
          clearInterval(obj);
          answer.style.visibility = "visible";
          btn.disabled = false;
        }
      }
    });
}
