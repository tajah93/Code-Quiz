var qQuestions = [
    {
        question: "1. Which of the following best describes an array in JavaScript?", 
        answers: {
            a: "Variable that can only hold one value",
            b: "Variable that only holds strings",
            c: "Variable that holds multiple values",
            d: "Variable that only holds integers"

        },
        correctA: "c"
    },
    {
        question: "2. True or False: The alert() method returns boolean values.",
        answers: {
            a: "True",
            b: "False"
        },    
        correctA: "b"
    },
    {
        question: "3. Which of the following is NOT another term to use for 'var'?",
        answers: {
            a: "const",
            b: "sec",
            c: "let",
            d: "Both A & C",
            e: "None of the above"
        },
        correctA: "d"
    },
    {
        question: "4. Review the array then answer the question that follows: var BestIceCreamFlavors ['red velvet', 'cookie dough', 'dulce de leche', 'banana pudding']; What would I place in the [] if I only wanted to choose cookie dough ice cream?",
        answers: {
            a: "cookie.dough",
            b: "2",
            c: "BestIceCreamFlavors-cookiedough",
            d: "1"
        },
        correctA: "d"
    },
    {
        question: "5. Which of the following gets an element by ID?",
        answers: {
            a: "getElementById('idname')",
            b: "getElemtntsByTagName('idname')",
            c: "getElemntById('#idname')",
            d: "None of the above"
        },
        correctA: "a"
    }
];


function javaScriptQuiz(questions, quizContainer, results, submit) {

  
    function quizOfficial(questions, quizContainer){

        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            
            
            answers = [];

            
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        
        quizContainer.innerHTML = output.join('');
    } ;   


  
    function quizResults(questions, quizContainer, results){
      
        var answerContainers = quizContainer.querySelectorAll('.answers');
      
        var userChoice = '';
        var numCorrect = 0;
        
       
        for(var i=0; i<questions.length; i++) {

           
            userChoice = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            
            if(userChoice===questions[i].correctA){
                numCorrect++;
                answerContainers[i].style.color = 'green';
            }
            
            else{
                answerContainers[i].style.color = 'red';
            }
        }

        
        results.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    
    submit.onclick = function(){
        quizResults(questions, quizContainer, results);
    }

    quizOfficial(questions, quizContainer);
}

var quizContainer = document.getElementById('quiz');
var results = document.getElementById('results');
var submit = document.getElementById('submit');


javaScriptQuiz(qQuestions, quizContainer, results, submit);