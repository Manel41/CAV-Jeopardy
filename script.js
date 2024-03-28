const questions = [
    [ 
        {
            "question" : "Star Wars (1977)",
            "choices" : ["To infinity and beyond!", "I'm king of the world!", "May the Force be with you.","There's no crying in baseball!"],
            "correctAnswer" : 0,
            "points" : 100
        },
        
        {
            "question" : "The Terminator (1984)",
            "choices" : ["Go ahead, make my day.", "'ll be back", "Why so serious?", "Nobody puts Baby in a corner."],
            "correctAnswer" : 1,
            "points" : 200
        },

        {
            "question" : "The Wizard of Oz (1939)",
            "choices" : ["There's no place like home", "E.T phone home", "I'm gonna make him an offer he can't refuse", "Show me the money!"],
            "correctAnswer" : 0,
            "points" : 300
        },

        {
            "question" : "Titanic (1997)",
            "choices" : ["It's alive! It's alive!", "You talking to me?", "I'm the king of the world!", "I feel the need—the need for speed!"],
            "correctAnswer" : 2,
            "points" : 400
        },

    ],
    [
        {
            "question" : "Titanic (1997)",
            "choices" : ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp", "Matt Damon"],
            "correctAnswer" : 1,
            "points" : 100
        },
        
        {
            "question" : "Fight club(1999)",
            "choices" : ["Edward Norton", "Brad Pitt", "Matt Damon", "Leonardo DiCaprio"],
            "correctAnswer" : 1,
            "points" : 200
        },

        {
            "question" : "Inception (2010)",
            "choices" : ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Tom Hardy", " Michael Caine"],
            "correctAnswer" : 0,
            "points" : 300
        },
        
        {
            "question" : "The Dark Knight (2008)",
            "choices" : ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Gary Oldman"],
            "correctAnswer" : 0,
            "points" : 400
        },
    ],
    [ 
        {
            "question" : "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
            "choices" : ["The Lion King ", "Madagascar", "The Jungle Book", "Zootopia"],
            "correctAnswer" : 0,
            "points" : 100
        },

        {
            "question" : "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers",
            "choices" : ["Tron", "Ready Player One", "The Matrix", "Inception"],
            "correctAnswer" : 2,
            "points" : 200
        },

        {
            "question" : "A troubled mathematician discovers a mysterious numerical pattern in the Torah that provides keys to foreseeing global catastrophes. ",
            "choices" : ["The Number 23", "Pi", "A Beautiful Mind", "Good Will Hunting"],
            "correctAnswer" : 1,
            "points" : 300
        },

        {
            "question" : "In a dystopian future, 24 teenagers are forced to participate in a televised battle to the death. ",
            "choices" : ["Divergent", "The Maze Runner", "Battle Royale", "The Hunger Games"],
            "correctAnswer" : 3,
            "points" : 400
        },

    ],
    [ 
        {
            "question" : "i hate my life",
            "choices" : ["kill", "me", "right", "now"],
            "correctAnswer" : 0,
            "points" : 100
        },

        {
            "question" : "Parasite",
            "choices" : ["2019", "2015", "2023", "2021"],
            "correctAnswer" : 0,
            "points" : 200
        },

        {
            "question" : "Jaws",
            "choices" : ["1970", "1975", "1990", "2011"],
            "correctAnswer" : 1,
            "points" : 300
        },

        {
            "question" : "La La Land",
            "choices" : ["2014", "2021", "2016", "2002"],
            "correctAnswer" : 2,
            "points" : 400
        },

    ],
]

function OnClick (element) {
    if (element.getAttribute("data-clicked") === "true") {
        return
    }

    document.getElementById("overlay").style.display = "block";

    const object = questions[element.getAttribute('data-first') - 1][element.getAttribute('data-second')];

    let options = "<ol>";

    for (let index = 0; index < 4; index++) {
        options += `<li data-correct=${index === object.correctAnswer} data-clicked=false onClick=OptionClicked(this)>${object.choices[index]}</li>`
    }

    options += "</ol>";

    document.getElementById("overlay").innerHTML = `<h2> Question : ${object.question}</h2> ${options}`;
    
    element.setAttribute("data-clicked", true);
}

// Cette fonction est celle qui gere ce qui ce passe lorsqu'on click sur une des cellules.
// Elle couvre la page avec un div puis affiche la question correspondante et les reponses possible. 




function OptionClicked (element) {
    if (element.getAttribute("data-clicked") === "true") {
        return
    }

    element.setAttribute("data-clicked", true);

    if (element.getAttribute("data-correct") == "false") {
        element.style.color = '#ff0000';
        return
    }

    document.getElementById("overlay").innerHTML = "";
    document.getElementById("overlay").style.display = "none"; 

}

// Cette fonction gere lorsqu'une reponse est clickee.
// Si c'est la bonne reponse, elle arrete de tout afficher
// Sinon, elle change la couleur de la reponse clickee au rouge



// for (let index = 1; index <= 4; index++) {
//     let string = "";
//     let i = 0;
//     questions[index - 1].forEach(element => {
//         string += `<td data-first=${index} data-second=${i} data-clicked=false onClick="OnClick(this)"> ${element.points} </td>`;
//         i += 1; 
//     });
//     document.getElementById(`${index}`).innerHTML = string;
// }

const numRows = questions.length;
const numColumns = questions[0].length;

let tableHTML = "";
for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
    tableHTML += "<tr>";
    for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
        let points = questions[rowIndex][columnIndex].points;
        tableHTML += `<td data-first=${rowIndex + 1} data-second=${columnIndex} data-clicked=false onClick="OnClick(this)"> ${points} </td>`;
    }
    tableHTML += "</tr>";
}

// Assuming you have a table element with id="myTable"
document.getElementById("questions place").innerHTML += tableHTML;

// Cette boucle "for" cree le tableau qui liste les points de toutes les questions dans les categories