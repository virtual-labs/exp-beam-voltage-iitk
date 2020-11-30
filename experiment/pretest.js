 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
             question: "1.At which voltage the image of a conducting sample is usually imaged? ", ///// Write the question inside double quotes
             answers: {
                 a: "200 V", ///// Write the option 1 inside double quotes
                 b: "440 V", ///// Write the option 2 inside double quotes
                 c: "2,000 V", ///// Write the option 3 inside double quotes
                 d: "20,000 V"
             },
             correctAnswer: "d" ///// Write the correct option inside double quotes
         },

         {
             question: "2.Which of the following samples gets focused even at the higher voltage (kV)?", ///// Write the question inside double quotes
             answers: {
                 a: "Insulating", ///// Write the option 1 inside double quotes
                 b: "Conducting", ///// Write the option 2 inside double quotes
                 c: "Semiconductor", ///// Write the option 3 inside double quotes
                 d: "Biological" ///// Write the option 4 inside double quotes
             },
             correctAnswer: "b" ///// Write the correct option inside double quotes
         }, ///// To add more questions, copy the section below 
         ///// this line

         {
             question: "3. _________________ is required for observing insulating samples in SEM?<br>Note: gold coating is also very routinely used.",
             answers: {
                 a: "polymer coating",
                 b: "ceramic coating",
                 c: "carbon coating",
                 d: "washing"
             },
             correctAnswer: "c"
         },



         {
             question: "4.Which of the following WILL NOT be suitable for imaging samples in SEM?",
             answers: {
                 a: "Pt-coating",
                 b: "Gold-coating",
                 c: "Carbon-coating",
                 d: "SiO<sub>2</sub> coating"
             },
             correctAnswer: "d"
         },
         {
             question: "5.Which of the following will NOT matter when imaging insulating samples:",
             answers: {
                 a: "Density of insulating sample",
                 b: "Accelerating voltage being used",
                 c: "Time-duration being used for imaging",
                 d: "Level of vacuum being used during imaging"
             },
             correctAnswer: "a"
         },

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////