const questions = [
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
    if (element.getAttribute("data-clicked") === true) {
        return
    }

    document.getElementById("overlay").style.display = "block";

    const object = questions[element.getAttribute('data-first')][element.getAttribute('data-second')]

    let options = "<ol>"

    for (let index = 0; index < 4; index++) {
        options += `<li data-correct=${index === object.correctAnswer}>${object.choices[index]}</li>`
    }

    options += "</ol>"

    document.getElementById("overlay").innerHTML = `<h2> Question : ${object.question}</h2> ${options}`
    
    element.setAttribute("data-clicked", true)
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