"use strict";


/* =========================================
   INFINITE MULTIVERSE
========================================= */


/* WORLDS */

const worlds = [
    "Cyberpunk Earth",
    "Drowned Earth",
    "Frozen Earth",
    "Machine Earth",
    "Mirror Earth",
    "Underground Earth",
    "Floating Earth",
    "Post-Apocalyptic Earth",
    "Ancient Earth",
    "Alien Earth",
    "Artificial Earth",
    "Ocean Planet",
    "Crystal Planet",
    "Mars Colony",
    "Moon Colony",
    "Infinite City",
    "Kingdom of Ash",
    "Silent Earth",
    "Reverse Earth",
    "Robot Earth"
];


/* PLACES */

const places = [
    "New Detroit",
    "Tokyo",
    "New York",
    "Albuquerque",
    "Neo London",
    "Sector 7",
    "The Last City",
    "The Capital",
    "The Outer Colony",
    "The Red Zone",
    "The Glass City",
    "The Lunar Colony",
    "The Northern Wastes",
    "The Forgotten Coast",
    "The Underground"
];


/* REALITY RULES */

const rules = [
    "Everyone has a duplicate.",
    "Machines have emotions.",
    "Nobody can lie.",
    "Time moves differently for everyone.",
    "Memories can be transferred.",
    "Gravity changes every midnight.",
    "Nobody remembers yesterday.",
    "People can see the future.",
    "The dead can communicate through machines.",
    "Reality resets every seven days.",
    "Every choice creates another timeline.",
    "Everyone has a hidden identity."
];


/* CONFLICTS */

const conflicts = [
    "androids are demanding freedom",
    "people are disappearing from reality",
    "two versions of humanity are fighting",
    "a dimensional war has begun",
    "an artificial intelligence controls the city",
    "a portal has appeared",
    "someone is killing alternate versions of important people",
    "the population has been replaced by copies",
    "someone is rewriting history",
    "the universe is beginning to collapse"
];


/* CHARACTERS */

const characters = [
    "Alex",
    "Maya",
    "Marcus",
    "Nova",
    "Eli",
    "Rhea",
    "Kai",
    "Jordan",
    "Unit 734",
    "Commander Vale",
    "Dr. Morgan",
    "The Stranger",
    "The Other You"
];


/* EVENTS */

const events = [
    "A dimensional crack opens above the city.",
    "Every electronic device displays the same message.",
    "Another Earth appears in the sky.",
    "Millions of alternate versions of one person appear.",
    "Time stops for everyone except you.",
    "A dead character returns.",
    "Every dimension experiences the same event.",
    "The multiverse begins to collapse.",
    "A strange signal reaches every dimension."
];


/* ENDINGS */

const endings = [
    "You save the world.",
    "You accidentally create another timeline.",
    "You become wanted across the multiverse.",
    "You disappear from your own reality.",
    "You become responsible for protecting the multiverse.",
    "You discover another version of you caused everything."
];


/* RANDOM */

function random(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];

}


/* ID */

function makeID() {

    return Math.floor(
        100000 +
        Math.random() * 900000
    ).toString();

}


/* CREATE A DIMENSION */

function createDimension() {

    return {

        id: makeID(),

        world: random(worlds),

        place: random(places),

        year:
            2020 +
            Math.floor(
                Math.random() * 500
            ),

        rule: random(rules),

        conflict: random(conflicts),

        character: random(characters),

        event: random(events),

        ending: random(endings)

    };

}


/* =========================================
   GAME DATA
========================================= */

let game = {

    dimension: null,

    discovered: [],

    history: [],

    scene: 0,

    storyline: 1

};


/* =========================================
   SAVE
========================================= */

function save() {

    try {

        localStorage.setItem(
            "INFINITE_MULTIVERSE_SAVE",
            JSON.stringify(game)
        );

    } catch (error) {

        console.log(
            "Save failed:",
            error
        );

    }

}


/* =========================================
   LOAD
========================================= */

function load() {

    try {

        const saved =
            localStorage.getItem(
                "INFINITE_MULTIVERSE_SAVE"
            );


        if (!saved) {

            return false;

        }


        const data =
            JSON.parse(saved);


        if (
            data &&
            data.dimension
        ) {

            game = data;

            return true;

        }

    } catch (error) {

        console.log(
            "No valid save found."
        );

    }


    return false;

}


/* =========================================
   CREATE NEW DIMENSION
========================================= */

function createNewDimension() {

    let newDimension =
        createDimension();


    /*
       Make it different from
       the current dimension.
    */

    let attempts = 0;


    while (

        game.dimension &&

        newDimension.world ===
            game.dimension.world &&

        newDimension.place ===
            game.dimension.place &&

        attempts < 30

    ) {

        newDimension =
            createDimension();

        attempts++;

    }


    game.dimension =
        newDimension;


    game.discovered.push(
        newDimension
    );


    game.history = [];


    game.scene = 0;


    save();

}


/* =========================================
   GET CURRENT SCENE
========================================= */

function getScene() {

    const d =
        game.dimension;


    if (game.scene === 0) {

        return {

            speaker: d.character,

            text:

                `You wake up in ${d.place}, ` +
                `${d.world}. It is the year ${d.year}. ` +
                `${d.rule} ` +
                `You immediately realize something is wrong.`,

            choices: [

                {
                    text:
                        "Investigate the strange situation",
                    next: 1
                },

                {
                    text:
                        "Find someone who knows what is happening",
                    next: 1
                },

                {
                    text:
                        "Leave the city",
                    next: 2
                },

                {
                    text:
                        "Search for a dimensional gateway",
                    next: 3
                }

            ]

        };

    }


    if (game.scene === 1) {

        return {

            speaker: "SYSTEM",

            text:

                `You discover that ${d.conflict}. ` +
                `The situation is becoming more dangerous.`,

            choices: [

                {
                    text:
                        "Confront the problem",
                    next: 2
                },

                {
                    text:
                        "Help the people caught in it",
                    next: 2
                },

                {
                    text:
                        "Find whoever caused this",
                    next: 3
                },

                {
                    text:
                        "Search for another reality",
                    next: 3
                }

            ]

        };

    }


    if (game.scene === 2) {

        return {

            speaker: d.character,

            text:

                `${d.event} ` +
                `You realize this may not be happening ` +
                `only in your dimension.`,

            choices: [

                {
                    text:
                        "Try to stop the event",
                    next: 3
                },

                {
                    text:
                        "Protect the people nearby",
                    next: 3
                },

                {
                    text:
                        "Use the event to cross dimensions",
                    next: 4
                },

                {
                    text:
                        "Find out who started it",
                    next: 4
                }

            ]

        };

    }


    if (game.scene === 3) {

        return {

            speaker: "UNKNOWN",

            text:

                `"You don't belong in this universe." ` +
                `The voice continues: "${d.rule}"`,

            choices: [

                {
                    text:
                        "Ask who is speaking",
                    next: 4
                },

                {
                    text:
                        "Demand an explanation",
                    next: 4
                },

                {
                    text:
                        "Follow the voice",
                    next: 4
                },

                {
                    text:
                        "Open another dimension",
                    next: 4
                }

            ]

        };

    }


    return {

        speaker: "THE ARCHITECT",

        text:

            `"Every choice creates consequences." ` +
            `${d.ending}`,

        choices: [

            {
                text:
                    "Enter another dimension",
                next: 5
            },

            {
                text:
                    "Change this timeline",
                next: 5
            },

            {
                text:
                    "Return to an earlier decision",
                next: 5
            },

            {
                text:
                    "Trigger a multiverse event",
                next: 5
            }

        ]

    };

}


/* =========================================
   RENDER
========================================= */

function render() {

    const d =
        game.dimension;


    if (!d) {

        return;

    }


    const scene =
        getScene();


    document.getElementById(
        "dimension"
    ).textContent =

        "DIMENSION #" +
        d.id +
        " • STORYLINE " +
        game.storyline;


    document.getElementById(
        "location"
    ).textContent =

        (
            d.place +
            " • " +
            d.world +
            " • YEAR " +
            d.year
        ).toUpperCase();


    document.getElementById(
        "speaker"
    ).textContent =
        scene.speaker;


    document.getElementById(
        "text"
    ).textContent =
        scene.text;


    const choices =
        document.getElementById(
            "choices"
        );


    choices.innerHTML = "";


    scene.choices.forEach(
        function(choice, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice";


            button.textContent =
                (index + 1) +
                ". " +
                choice.text;


            button.onclick =
                function() {

                    makeChoice(
                        choice.next
                    );

                };


            choices.appendChild(
                button
            );

        }
    );

}


/* =========================================
   CHOICE
========================================= */

function makeChoice(next) {


    /*
       Save the current state
       before moving forward.
    */

    game.history.push({

        dimension:
            JSON.parse(
                JSON.stringify(
                    game.dimension
                )
            ),

        discovered:
            JSON.parse(
                JSON.stringify(
                    game.discovered
                )
            ),

        scene:
            game.scene,

        storyline:
            game.storyline

    });


    /*
       NEXT DIMENSION
    */

    if (next === 5) {

        game.storyline++;

        createNewDimension();

        render();

        return;

    }


    game.scene =
        next;


    save();


    render();

}


/* =========================================
   BACKTRACK
========================================= */

document.getElementById(
    "backButton"
).onclick = function() {


    if (
        game.history.length === 0
    ) {

        alert(
            "There is nothing to backtrack to yet."
        );

        return;

    }


    const previous =
        game.history.pop();


    game.dimension =
        previous.dimension;


    game.discovered =
        previous.discovered;


    game.scene =
        previous.scene;


    game.storyline =
        previous.storyline;


    save();


    render();

};


/* =========================================
   NEW STORYLINE
========================================= */

document.getElementById(
    "newButton"
).onclick = function() {


    const answer =
        confirm(
            "Create a completely different timeline?"
        );


    if (!answer) {

        return;

    }


    game.storyline++;


    createNewDimension();


    render();

};


/* =========================================
   HARD RESET
========================================= */

document.getElementById(
    "resetButton"
).onclick = function() {


    const answer =
        confirm(
            "HARD RESET EVERYTHING?"
        );


    if (!answer) {

        return;

    }


    localStorage.removeItem(
        "INFINITE_MULTIVERSE_SAVE"
    );


    game = {

        dimension: null,

        discovered: [],

        history: [],

        scene: 0,

        storyline: 1

    };


    createNewDimension();


    render();

};


/* =========================================
   MAP
========================================= */

document.getElementById(
    "mapButton"
).onclick = function() {


    const map =
        document.getElementById(
            "mapList"
        );


    map.innerHTML = "";


    const dimensions =
        [...game.discovered].reverse();


    dimensions.forEach(
        function(dimension) {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "dimensionCard";


            card.innerHTML =

                `<strong>
                    ${dimension.world}
                </strong>

                #${dimension.id}

                <small>

                    Location:
                    ${dimension.place}

                    <br>

                    Year:
                    ${dimension.year}

                    <br>

                    Reality Rule:
                    ${dimension.rule}

                    <br>

                    Conflict:
                    ${dimension.conflict}

                </small>`;


            card.onclick =
                function() {

                    game.dimension =
                        dimension;


                    game.scene = 0;


                    game.history = [];


                    document
                        .getElementById(
                            "mapScreen"
                        )
                        .classList.remove(
                            "open"
                        );


                    save();


                    render();

                };


            map.appendChild(
                card
            );

        }
    );


    document
        .getElementById(
            "mapScreen"
        )
        .classList.add(
            "open"
        );

};


/* =========================================
   CLOSE MAP
========================================= */

document.getElementById(
    "closeMap"
).onclick = function() {

    document
        .getElementById(
            "mapScreen"
        )
        .classList.remove(
            "open"
        );

};


/* =========================================
   START GAME
========================================= */

if (!load()) {

    createNewDimension();

}


render();
