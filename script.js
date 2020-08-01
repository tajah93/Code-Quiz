var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var Questions = [
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





function Quiz() (

)