
var qQuestions = [

        
    {
        question: "1. Which of the following best describes an array in JavaScript?", 
        answers: {
            a: "Variable that can only hold one value",
            b: "Variable that only holds strings",
            c: "Variable that holds multiple values",
            d: "Variable that only holds integers"

        },
        correctA: "c",
        
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

        var count = 100;
        var interval = setInterval(function(){
        document.getElementById('count').innerHTML=count;
        count--;
        if (count === 0){
            clearInterval(interval);
            document.getElementById('count').innerHTML='Done';
            alert("Time's up! Submit your quiz and click on the 'Store' button.");
        }
        }, 1000);

        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            
            
            answers = [];

            
            for(letter in questions[i].answers){

              
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

       
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

        
        results.innerHTML = 'Your Score: ' + numCorrect + '/' + questions.length;
    }

    
        submit.onclick = function(){
            quizResults(questions, quizContainer, results);
        }

        function Store(event){
            event.preventDefault()
            var score = prompt ("Enter your score. (ex: 4/5):")
                console.log(score);
                    localStorage.setItem("score", JSON.stringify(score))
            while(score === ""){
                alert("You must enter your score.")
                score = prompt ("Enter your score. (Ex: 4/5):")
                    console.log(score);
                    localStorage.setItem("score", JSON.stringify(score))
            }
            var initials = prompt ("Enter your first and last name initials without using periods. (Ex: TJ)");
                console.log(initials);
                localStorage.setItem("initials", JSON.stringify(initials));
        }
            store.addEventListener("click", Store)

    
    
        quizOfficial(questions, quizContainer); 
    
    
}



var quizContainer = document.getElementById('quiz');
var results = document.getElementById('results');
var submit = document.getElementById('Submit');
var store = document.getElementById("store");

javaScriptQuiz(qQuestions, quizContainer, results, submit);
