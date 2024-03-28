const questions = [
        [ 
            {
                "question" : "The Terminator (1984)",
                "choices" : ["Go ahead, make my day.", "'ll be back", "Why so serious?", "Nobody puts Baby in a corner."],
                "correctAnswer" : 1,
                "points" : 200
            },

            {
                "question" : "Star Wars (1977)",
                "choices" : ["To infinity and beyond!", "I'm king of the world!", "May the Force be with you.","There's no crying in baseball!"],
                "correctAnswer" : 0,
                "points" : 100
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
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
            },

            {
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
            },

            {
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
            },

            {
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
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
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
            },

            {
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
            },

            {
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
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
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
            },

            {
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
            },

            {
                "question" : "i hate my life",
                "choices" : ["kill", "me", "right", "now"],
                "correctAnswer" : 0,
                "points" : 100
            },

        ],
]

function OnClick (element) {
    if (element.getAttribute("data-clicked") === "true") {
        return
    }

    document.getElementById("overlay").style.display = "block";

    const object = questions[element.getAttribute('data-first')][element.getAttribute('data-second')];

    let options = "<ol>";

    for (let index = 0; index < 4; index++) {
        options += `<li data-correct=${index === object.correctAnswer} data-clicked=false onClick=OptionClicked(this)>${object.choices[index]}</li>`
    }

    options += "</ol>";

    document.getElementById("overlay").innerHTML = `<h2> Question : ${object.question}</h2> ${options}`;
    
    element.setAttribute("data-clicked", true);
}

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

for (let index = 1; index <= 4; index++) {
    let string = "";
    let i = 0;
    questions[index - 1].forEach(element => {
        string += `<td data-first=${index} data-second=${i} data-clicked=false onClick="OnClick(this)"> ${element.points} </td>`;
        i += 1; 
    });
    document.getElementById(`${index}`).innerHTML = string;
}
