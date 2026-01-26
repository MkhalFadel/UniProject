/*
   JSON.parse(localStorage.getItem("results")) is used here to first parse the results array which means transforming the stored data
   from strings to an array, localStorage.getItem is used to get the results array we stored previously
*/

const results = JSON.parse(localStorage.getItem('results'))

const scoreResult = document.querySelector(".scoreResult"); // The Score result element 
const resultsList = document.getElementById("resultsList"); // The list which will show the user's answers

function escapeHTML(str) {
   return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
}

function showResults()
{
   /*
      1- let score = 0; is a variable that will keep track of the score the user gets

      2- const answersEl = results.map; in here the .map function is used to loops through the results array and check if the match
      property is true, if yes it will return the div element with the 'correct' class which will show in green 
      to indicate that the answer is correct, it also shows the user's answer and the correct answer and will also increment the score
      variable by 1, while if the match property is false it will return the same div but with the 'wrong' class which will show 
      in red to indicate that the answer is wrong.  

      3- the .join function is used at the end of the map method to join all the values together because it may seperate some elements
      sometimes and cause issues

      4- scoreResults.innerHTML is used to print the user's final score on the page
      
      5- resultsList.innerHTML is used to print the elements created from the .map method and stored in the answerEl variable
   */

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