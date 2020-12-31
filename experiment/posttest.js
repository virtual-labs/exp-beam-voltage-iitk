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
            question: "1. Quality of imaging on an insulating sample can be enhanced by:", ///// Write the question inside double quotes
            answers: {
                a: "Increasing the pressure of chamber (lower vacuum)", ///// Write the option 1 inside double quotes
                b: "Decreasing the pressure of chamber (higher vacuum)", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "2. Quality of imaging on an insulating sample will deteriorate when using:", ///// Write the question inside double quotes
            answers: {
                a: "Low accelerating voltage of electron beam ", ///// Write the option 1 inside double quotes
                b: "High accelerating voltage of electron beam ", ///// Write the option 2 inside double quotes

            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        }, ///// To add more questions, copy the section below 
        ///// this line

        {
            question: "3. The beam damage on a polymeric sample will be high at ___________ accelerating voltage and ________ beam size.",
            answers: {
                a: "low accelerating voltage and smaller spot size",
                b: "low accelerating voltage and bigger spot size",
                c: "high accelerating voltage and smaller spot size",
                d: "high accelerating voltage and bigger spot size"
            },
            correctAnswer: "d"
        },
      
        {
            question: "4. The following image is taken  _______________ conductive coating on the polymeric sample.<img src='images/post6.jpg'>",
            answers: {
                a: "with",
                b: "without"
            },
            correctAnswer: "b"
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