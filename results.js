const results = JSON.parse(localStorage.getItem('results'))

const scoreResult = document.querySelector(".scoreResult");
const resultsList = document.getElementById("resultsList");

function escapeHTML(str) {
   return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
}

function showResults()
{
   let score = 0;
   const answersEl = results.map(r => {
      
      if(r.match)
      {
         score++;
         return `
         <div class="answerResultDiv correct">
            <p style="margin-bottom: 15px;">Your Answer: ${escapeHTML(r.userAnswer)}</p>
            <p>Correct Answer: ${escapeHTML(r.correctAnswer)}</p>
         </div>
         `

      }
      else{
         return `
         <div class="answerResultDiv wrong">
            <p style="margin-bottom: 15px;">Your Answer: ${escapeHTML(r.userAnswer)}</p>
            <p>Correct Answer: ${escapeHTML(r.correctAnswer)}</p>
         </div>
         `
      }

   }).join("");

   scoreResult.innerHTML = `${score}/10`
   resultsList.innerHTML = answersEl;
}

showResults();