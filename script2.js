document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".category.citations").addEventListener('click', function() {
        displayQuestion(getRandomQuestion(questions));
    });

    document.querySelector(".category.acteurs").addEventListener('click', function() {
        displayQuestion(getRandomQuestion(actorQuestions));
    });
    document.querySelector(".category.dates").addEventListener('click', function() {
        displayQuestion(getRandomQuestion(movieDateQuestions));
    });
    document.querySelector(".category.titre").addEventListener('click', function() {
        displayQuestion(getRandomQuestion(movieTitleQuestions
));
    });
});

// questions pour "Citations de films populaires"
const questions = [
    {
        "text": "Which of these is a real quote from 'Gone with the Wind'?",
        "correct": 3,
        "answers": [
            "A) Love means never having to say you're sorry.",
            "B) I think this is the beginning of a beautiful friendship.",
            "C) After all, tomorrow is another day!",
            "D) Frankly, my dear, I don't give a damn."
        ]
    },
    {
        "text": "Which of these is a real quote from 'Casablanca'?",
        "correct": 1,
        "answers": [
            "A) Made it, Ma! Top of the world!",
            "B) Here's looking at you, kid.",
            "C) I coulda been a contender.",
            "D) Life is like a box of chocolates."
        ]
    },
    {
        "text": "Which of these is a real quote from 'A Few Good Men'?",
        "correct": 0,
        "answers": [
            "A) You can't handle the truth!",
            "B) What we've got here is failure to communicate.",
            "C) Keep your friends close, but your enemies closer.",
            "D) I see dead people."
        ]
    },
    {
        "text": "Which of these is a real quote from 'The Terminator'?",
        "correct": 1,
        "answers": [
            "A) Go ahead, make my day.",
            "B) I'll be back.",
            "C) Why so serious?",
            "D) Nobody puts Baby in a corner."
        ]
    },
    {
        "text": "Which of these is a real quote from 'Star Wars'?",
        "correct": 2,
        "answers": [
            "A) To infinity and beyond!",
            "B) I'm king of the world!",
            "C) May the Force be with you.",
            "D) There's no crying in baseball!"
        ]
    },
    {
        "text": "Which of these is a real quote from 'The Wizard of Oz'?",
        "correct": 0,
        "answers": [
            "A) There's no place like home.",
            "B) E.T. phone home.",
            "C) I'm gonna make him an offer he can't refuse.",
            "D) Show me the money!"
        ]
    },
    {
        "text": "Which of these is a real quote from 'Titanic'?",
        "correct": 1,
        "answers": [
            "A) It's alive! It's alive!",
            "B) I'm the king of the world!",
            "C) I feel the need—the need for speed!",
            "D) You talking to me?"
        ]
    },
    {
        "text": "Which of these is a real quote from 'Dead Poets Society'?",
        "correct": 0,
        "answers": [
            "A) Carpe diem. Seize the day, boys.",
            "B) Get busy living, or get busy dying.",
            "C) Hasta la vista, baby.",
            "D) Oh, captain, my captain!"
        ]
    },
    {
        "text": "Which of these is a real quote from 'Apollo 13'?",
        "correct": 0,
        "answers": [
            "A) Houston, we have a problem.",
            "B) Just keep swimming.",
            "C) I'm not bad. I'm just drawn that way.",
            "D) Say hello to my little friend!"
        ]
    },
    {
        "text": "Which of these is a real quote from 'Midnight Cowboy'?",
        "correct": 1,
        "answers": [
            "A) Is it safe?",
            "B) I'm walking here! I'm walking here!",
            "C) The stuff that dreams are made of.",
            "D) You can't handle the truth!"
        ]
    }
];
const actorQuestions = [
    {
        "text": "Who starred in 'The Shawshank Redemption' (1994)?",
        "correct": 1,
        "answers": [
            "A) Morgan Freeman",
            "B) Tim Robbins",
            "C) Tom Hanks",
            "D) Kevin Spacey"
        ]
    },
    {
        "text": "Who starred in 'Fight Club' (1999)?",
        "correct": 1,
        "answers": [
            "A) Edward Norton",
            "B) Brad Pitt",
            "C) Matt Damon",
            "D) Leonardo DiCaprio"
        ]
    },
    {
        "text": "Who starred in 'Forrest Gump' (1994)?",
        "correct": 0,
        "answers": [
            "A) Tom Hanks",
            "B) Bill Murray",
            "C) Michael Douglas",
            "D) Robin Williams"
        ]
    },
    {
        "text": "Who starred in 'The Dark Knight' (2008)?",
        "correct": 0,
        "answers": [
            "A) Christian Bale",
            "B) Heath Ledger",
            "C) Aaron Eckhart",
            "D) Gary Oldman"
        ]
    },
    {
        "text": "Who starred in 'Gladiator' (2000)?",
        "correct": 2,
        "answers": [
            "A) Joaquin Phoenix",
            "B) Mel Gibson",
            "C) Russell Crowe",
            "D) Liam Neeson"
        ]
    },
    {
        "text": "Who starred in 'The Godfather' (1972)?",
        "correct": 2,
        "answers": [
            "A) Al Pacino",
            "B) Robert De Niro",
            "C) Marlon Brando",
            "D) James Caan"
        ]
    },
    {
        "text": "Who starred in 'Titanic' (1997)?",
        "correct": 1,
        "answers": [
            "A) Brad Pitt",
            "B) Leonardo DiCaprio",
            "C) Johnny Depp",
            "D) Matt Damon"
        ]
    },
    {
        "text": "Who starred in 'Jurassic Park' (1993)?",
        "correct": 1,
        "answers": [
            "A) Jeff Goldblum",
            "B) Sam Neill",
            "C) Richard Attenborough",
            "D) Laura Dern"
        ]
    },
    {
        "text": "Who starred in 'Inception' (2010)?",
        "correct": 0,
        "answers": [
            "A) Leonardo DiCaprio",
            "B) Joseph Gordon-Levitt",
            "C) Tom Hardy",
            "D) Michael Caine"
        ]
    },
    {
        "text": "Who starred in 'Pulp Fiction' (1994)?",
        "correct": 2,
        "answers": [
            "A) Bruce Willis",
            "B) Samuel L. Jackson",
            "C) John Travolta",
            "D) Uma Thurman"
        ]
    }
];

// questions pour "Titre de films"
const movieTitleQuestions = [
    {
        "text": "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        "correct": 0,
        "answers": [
            "A) The Lion King",
            "B) Madagascar",
            "C) The Jungle Book",
            "D) Zootopia"
        ]
    },
    {
        "text": "After a gentle alien becomes stranded on Earth, he is discovered and befriended by a young boy. Together, they attempt to find a way to return the alien home.",
        "correct": 2,
        "answers": [
            "A) Close Encounters of the Third Kind",
            "B) Avatar",
            "C) E.T. the Extra-Terrestrial",
            "D) Star Wars: A New Hope"
        ]
    },
    {
        "text": "In a dystopian future, 24 teenagers are forced to participate in a televised battle to the death.",
        "correct": 1,
        "answers": [
            "A) Divergent",
            "B) The Hunger Games",
            "C) The Maze Runner",
            "D) Battle Royale"
        ]
    },
    {
        "text": "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
        "correct": 2,
        "answers": [
            "A) Se7en",
            "B) Zodiac",
            "C) The Silence of the Lambs",
            "D) Red Dragon"
        ]
    },
    {
        "text": "A troubled mathematician discovers a mysterious numerical pattern in the Torah that provides keys to foreseeing global catastrophes.",
        "correct": 1,
        "answers": [
            "A) The Number 23",
            "B) Pi",
            "C) A Beautiful Mind",
            "D) Good Will Hunting"
        ]
    },
    {
        "text": "During World War II, a group of Jewish U.S. soldiers plan to assassinate Nazi leaders in German-occupied France.",
        "correct": 3,
        "answers": [
            "A) Saving Private Ryan",
            "B) The Dirty Dozen",
            "C) Schindler's List",
            "D) Inglourious Basterds"
        ]
    },
    {
        "text": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "correct": 1,
        "answers": [
            "A) Tron",
            "B) The Matrix",
            "C) Ready Player One",
            "D) Inception"
        ]
    },
    {
        "text": "A young girl's love for a tiny puppy named Clifford makes the dog grow to an enormous size.",
        "correct": 2,
        "answers": [
            "A) Beethoven",
            "B) Marley & Me",
            "C) Clifford the Big Red Dog",
            "D) The Secret Life of Pets"
        ]
    },
    {
        "text": "A robotics engineer creates a highly advanced child robot in a futuristic tale of artificial intelligence and humanity.",
        "correct": 2,
        "answers": [
            "A) Blade Runner",
            "B) Ex Machina",
            "C) A.I. Artificial Intelligence",
            "D) I, Robot"
        ]
    },
    {
        "text": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        "correct": 1,
        "answers": [
            "A) Star Trek",
            "B) Guardians of the Galaxy",
            "C) The Avengers",
            "D) Star Wars: The Force Awakens"
        ]
    }
];
const movieDateQuestions = [
    {
        "text": "What year was 'Jaws' released?",
        "correct": 1,
        "answers": [
            "A) 1970",
            "B) 1975",
            "C) 1990",
            "D) 2001"
        ]
    },
    {
        "text": "What year was 'Finding Nemo' released?",
        "correct": 2,
        "answers": [
            "A) 2026",
            "B) 1989",
            "C) 2003",
            "D) 2009"
        ]
    },
    {
        "text": "What year was 'La La Land' released?",
        "correct": 1,
        "answers": [
            "A) 2014",
            "B) 2016",
            "C) 2018",
            "D) 2020"
        ]
    },
    {
        "text": "What year was 'Parasite' released?",
        "correct": 2,
        "answers": [
            "A) 2015",
            "B) 2017",
            "C) 2019",
            "D) 2021"
        ]
    },
    {
        "text": "What year was 'Interstellar' released?",
        "correct": 3,
        "answers": [
            "A) 2008",
            "B) 2010",
            "C) 2012",
            "D) 2014"
        ]
    },
    {
        "text": "What year was 'Back to the Future' released?",
        "correct": 1,
        "answers": [
            "A) 1980",
            "B) 1985",
            "C) 2000",
            "D) 1968"
        ]
    },
    {
        "text": "What year was 'Toy Story' released?",
        "correct": 1,
        "answers": [
            "A) 1999",
            "B) 1995",
            "C) 2006",
            "D) 2012"
        ]
    },
    {
        "text": "What year was 'Moonlight' released?",
        "correct": 2,
        "answers": [
            "A) 2012",
            "B) 2014",
            "C) 2016",
            "D) 2018"
        ]
    },
    {
        "text": "What year was 'Birdman' released?",
        "correct": 2,
        "answers": [
            "A) 2010",
            "B) 2012",
            "C) 2014",
            "D) 2016"
        ]
    },
    {
        "text": "What year was 'The Revenant' released?",
        "correct": 2,
        "answers": [
            "A) 2011",
            "B) 2013",
            "C) 2015",
            "D) 2017"
        ]
    }
];

function getRandomQuestion(questionsArray) {
    const index = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[index];
}

function displayQuestion(question) {
    const overlay = document.getElementById("overlay");
    const questionElement = document.getElementById("question");
    const answersList = document.getElementById("answers");

    overlay.style.display = "grid";
    questionElement.textContent = question.text;
    answersList.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.textContent = answer;
        li.addEventListener('click', () => selectAnswer(index, question.correct));
        answersList.appendChild(li);
    });
}

function selectAnswer(selectedIndex, correctIndex) {
    const isCorrect = selectedIndex === correctIndex;
    alert(isCorrect ? "Correct!" : "Wrong!");
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("overlay").addEventListener('click', function(e) {
    if (e.target.id === "overlay") {
        this.style.display = "none";
    }
});