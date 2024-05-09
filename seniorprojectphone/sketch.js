let gif;
let questions;
let currentQuestionIndex = 0;
let scores = { "I": 0, "E": 0, "S": 0, "N": 0, "T": 0, "F": 0, "J": 0, "P": 0 };
let colors = ['#738637', '#EDDECA', '#8AA6D1', '#98FB98', '#E46423', '#FFCF5C']; // Hex colors for backs
let bgMusic = new Audio('quizsong.mp3'); // Replace 'background_music.mp3' with the path to your background music file
bgMusic.loop = true;

function preload() {
    questions = loadJSON('question.json');
   
}

function setup() {
  
    noCanvas();
    initializeLandingPage();
 
}

function initializeLandingPage() {
    // Populate landing content
    const landingContainer = document.getElementById('landing-content');
    landingContainer.insertAdjacentHTML('afterbegin', `
        <h1>${questions.landingContent.title}</h1>
        <p>${questions.landingContent.intro}</p>
        <p>${questions.landingContent.description}</p>
    `);

    
    const startButton = document.getElementById('start-button');
    startButton.textContent = questions.landingContent.startButtonText;
    startButton.addEventListener('click', startQuiz);
}

function startQuiz() {
    document.getElementById('landing-content').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'flex';
    displayQuestion(); // Proceed to show the first question
    bgMusic.play()
}
function displayQuestion() {
    const container = document.getElementById('quiz-container');
    container.style.backgroundColor = colors[currentQuestionIndex % colors.length];
    container.innerHTML = ''; // Clear previous content

    if (currentQuestionIndex < questions.questions.length) {
        let q = questions.questions[currentQuestionIndex];
        const questionText = document.createElement('h2');
        questionText.textContent = q.text;
        container.appendChild(questionText);

        q.options.forEach((option, index) => {
            const optionContainer = document.createElement('div'); 
            optionContainer.className = 'option-container';

            const button = document.createElement('button');
            button.textContent = option.text;
            button.className = 'quiz-button';
            button.onclick = () => selectOption(option.traits, index);
            
            optionContainer.appendChild(button); 
            container.appendChild(optionContainer); 
        });
    } else {
        displayResults();
    }
}

function selectOption(traits, index) {
    for (let trait in traits) {
        scores[trait] += traits[trait];
    }
    console.log('Option ${index} selected., scores'); // Log the current scores to console for debugging
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.questions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}

function displayResults() {
    // Calculate the E/I, S/N, T/F, and P/J scores
    let eScore = scores["E"];
    let iScore = scores["I"];
    let sScore = scores["S"];
    let nScore = scores["N"];
    let tScore = scores["T"];
    let fScore = scores["F"];
    let pScore = scores["P"];
    let jScore = scores["J"];

    // Determine the user's MBTI type
    let mbti = "";
    if (eScore > iScore) {
        mbti += "E";
    } else {
        mbti += "I";
    }

    if (sScore > nScore) {
        mbti += "S";
    } else {
        mbti += "N";
    }

    if (tScore > fScore) {
        mbti += "T";
    } else {
        mbti += "F";
    }

    if (pScore > jScore) {
        mbti += "P";
    } else {
        mbti += "J";
    }

    // Map the MBTI result to the quiz result
    let quizResult = "";
    switch (mbti) {
        case "INTJ":
          quizResult = "Leader";
            break;
        case "INTP":
            quizResult = "Leader";
            break;
        case "ENTJ":
            quizResult = "Leader";
            break;
        case "ENTP":
            quizResult = "maknae";
            break;
        case "INFJ":
            quizResult = "Variety Star";
            break;
        case "INFP":
            quizResult = "Charmer";
            break;
        case "ENFJ":
            quizResult = "Charmer";
            break;
        case "ENFP":
            quizResult = "maknae";
            break;
        case "ISTJ":
            quizResult = "All-Rounder";
            break;
        case "ISFJ":
            quizResult = "All-Rounder";
            break;
        case "ESTJ":
            quizResult = "All-Rounder";
            break;
        case "ISTP":
            quizResult = "maknae";
            break;
        case "ISFP":
            quizResult = "Variety Star";
            break;
        case "ESTP":
            quizResult = "Variety Star";
            break;
        case "ESFP":
            quizResult = "Variety Star";
            break;
        case "ESFJ":
            quizResult = "Leader";
            break;
      
    }

    // Define image paths for each quiz result
    const imagePaths = {
        "Variety Star": "varietymobile.gif",
        "Leader": "leadermobile.gif",
        "Charmer": "charmermobile.gif",
        "All-Rounder": "roundermobile.gif",
        "maknae": "youngestmobile.gif"// Add more paths for other results
    };

    // Display the quiz result image
    const container = document.getElementById('quiz-container');
    container.innerHTML = ''; // Clear the quiz content
    container.style.backgroundColor = '#FFFFFF'; 

    const resultText = document.createElement('h2');
    // resultText.textContent = `Your idol personality: (${quizResult})`;
    container.appendChild(resultText);

    const image = document.createElement('img');
    image.src = imagePaths[quizResult]; // Get the image path based on the quiz result
    image.alt = quizResult;
    // Add CSS style to resize the image
    image.style.width = '90%'; // Adjust the width as needed
    image.style.height = '90%'; // Maintain aspect ratio
    container.appendChild(image);
}
