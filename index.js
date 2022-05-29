var questionsArr = [
    {
        question: 'The mascot of University of Florida is a dinosaur.',
        answer: false,
    },
    {
        question: 'The mascot of Miami Dade College is a shark.',
        answer: true,
    },
    {
        question: 'The mascot of University of Miami is a flamingo.',
        answer: false,
    },
    {
        question: 'The mascot of Florida International University is a panther.',
        answer: true,
    },
    {
        question: 'The mascot of Barry University is a parrot.',
        answer: true,
    },
]

function runQuiz(){
    var numOfAgrees = 0
    for (var i = 0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i].question)
        var answers = questionsArr[i].answer
        if (userAnswer === answers){
            numOfAgrees++
        }
    }
    var score = (numOfAgrees / questionsArr.length) * 100
    var finalScore = Math.round(score)

    alert ('Your score is ' + finalScore +'%')
}