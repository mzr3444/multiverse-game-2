/* =========================================
   INFINITE MULTIVERSE
========================================= */


/* =========================================
   WORLD GENERATOR
========================================= */

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


const rules = [

    "Everyone has a duplicate.",
    "Machines have emotions.",
    "Nobody can lie.",
    "Time moves differently for every person.",
    "Memories can be transferred between people.",
    "Gravity changes every midnight.",
    "Nobody remembers yesterday.",
    "People can see the future.",
    "The dead can communicate through machines.",
    "Reality resets every seven days.",
    "Every choice creates another timeline.",
    "Everyone has a hidden second identity."


];


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


const people = [

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


const endings = [

    "You save the world.",

    "You accidentally create another timeline.",

    "You become wanted across the multiverse.",

    "You disappear from your own reality.",

    "You become responsible for protecting the multiverse.",

    "You discover another version of you caused everything."

];


/* =========================================
   RANDOM FUNCTIONS
========================================= */

function random(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];

}


function randomID() {

    return String(
        Math.floor(
            Math.random() * 1000000
        )
    ).padStart(6, "0");

}


/* =========================================
   CREATE DIMENSION
========================================= */

function createDimension() {

    return {

        id: randomID(),

        world: random(worlds),

        place: random(places),

        year:
            2020 +
            Math.floor(
                Math.random() * 400
            ),

        rule: random(rules),

        conflict: random(conflicts),

        person: random(people),

        event: random(events),

        ending: random(endings)

    };

}


/* =========================================
   GAME STATE
========================================= */

let game = {

    current: null,

    visited: [],

    history: [],

    scene: 0,

    storyline: 1

};


/* =========================================
   SAVE
========================================= */

function saveGame() {

    try {

        localStorage.setItem(

            "infiniteMultiverse",

            JSON.stringify(game)

        );

    }

    catch(error) {

        console.log(
            "Save unavailable."
        );

    }

}


/* =========================================
   LOAD
========================================= */

function loadGame() {

    try {

        const saved =
            localStorage.getItem(
                "infiniteMultiverse"
            );


        if (!saved) {

            return false;

        }


        const data =
            JSON.parse(saved);


        if (
            data &&
            data.current
        ) {

            game = data;

            return true;

        }

    }

    catch(error) {

        console.log(
            "Starting new game."
        );

    }


    return false;

}


/* =========================================
   NEW DIMENSION
========================================= */

function newDimension() {

    let dimension =
        createDimension();


    /*
       Try to make sure the next
       dimension isn't identical.
    */

    if (game.current) {

        let tries = 0;


        while (

            dimension.world ===
                game.current.world &&

            dimension.conflict ===
                game.current.conflict &&

            tries < 20

        ) {

            dimension =
                createDimension();

            tries++;

        }

    }


    game.current =
        dimension;


    game.visited.push(
        dimension
    );


    game.history = [];


    game.scene = 0;


    saveGame();

}


/* =========================================
   STORY SCENES
========================================= */

function getScene() {

    const d =
        game.current;


    if (game.scene === 0) {

        return {

            speaker: d.person,

            text:

                `You wake up in ${d.place}, ` +
                `${d.world}. It is the year ` +
                `${d.year}. ${d.rule} ` +
                `Something is very wrong.`,

            choices: [

                [
                    "Investigate what is happening",
                    1
                ],

                [
                    "Find someone who can explain this",
                    1
                ],

                [
                    "Leave the city",
                    2
                ],

                [
                    "Search for a dimensional gateway",
                    3
                ]

            ]

        };

    }


    if (game.scene === 1) {

        return {

            speaker: "SYSTEM",

            text:

                `You discover that ${d.conflict}. ` +
                `The situation is getting worse.`,

            choices: [

                [
                    "Confront the problem",
                    2
                ],

                [
                    "Help the people caught in it",
                    2
                ],

                [
                    "Find whoever caused this",
                    3
                ],

                [
                    "Search for another reality",
                    3
                ]

            ]

        };

    }


    if (game.scene === 2) {

        return {

            speaker: d.person,

            text:

                `${d.event} ` +
                `You realize this event may not ` +
                `be limited to this dimension.`,

            choices: [

                [
                    "Try to stop the event",
                    3
                ],

                [
                    "Protect the people nearby",
                    3
                ],

                [
                    "Use the event to cross dimensions",
                    4
                ],

                [
                    "Find out who started it",
                    4
                ]

            ]

        };

    }


    if (game.scene === 3) {

        return {

            speaker: "UNKNOWN",

            text:

                `A voice whispers: ` +
                `"You don't belong in this universe." ` +
                `${d.rule}`,

            choices: [

                [
                    "Ask who is speaking",
                    4
                ],

                [
                    "Demand an explanation",
                    4
                ],

                [
                    "Follow the voice",
                    4
                ],

                [
                    "Open another dimension",
                    4
                ]

            ]

        };

    }


    return {

        speaker: "THE ARCHITECT",

        text:

            `"Every choice creates consequences." ` +
            `${d.ending}`,

        choices: [

            [
                "Enter another dimension",
                5
            ],

            [
                "Change this timeline",
                5
            ],

            [
                "Return to an earlier decision",
                5
            ],

            [
                "Trigger a multiverse event",
                5
            ]

        ]

    };

}


/* =========================================
   DISPLAY STORY
========================================= */

function render() {

    const d =
        game.current;


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
            " • " +
            d.rule
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
                choice[0];


            button.onclick =

                function() {

                    choose(
                        choice[1]
                    );

                };


            choices.appendChild(
                button
            );

        }

    );

}


/* =========================================
   CHOICE SYSTEM
========================================= */

function choose(nextScene) {


    game.history.push({

        current:
            JSON.parse(
                JSON.stringify(
                    game.current
                )
            ),

        visited:
            JSON.parse(
                JSON.stringify(
                    game.visited
                )
            ),

        scene:
            game.scene,

        storyline:
            game.storyline

    });


    /*
       If the choice reaches
       another dimension.
    */

    if (nextScene >= 5) {

        game.storyline++;

        newDimension();

        render();

        return;

    }


    game.scene =
        nextScene;


    render();


    saveGame();

}


/* =========================================
   BACKTRACK
========================================= */

document.getElementById(
    "back"
).onclick = function() {


    if (
        game.history.length === 0
    ) {

        alert(
            "There is nothing to backtrack to."
        );

        return;

    }


    const previous =
        game.history.pop();


    game.current =
        previous.current;


    game.visited =
        previous.visited;


    game.scene =
        previous.scene;


    game.storyline =
        previous.storyline;


    saveGame();


    render();

};


/* =========================================
   NEW STORYLINE
========================================= */

document.getElementById(
    "new"
).onclick = function() {


    const answer =
        confirm(

            "Create a completely new timeline?"

        );


    if (!answer) {

        return;

    }


    game.storyline++;


    newDimension();


    render();

};


/* =========================================
   HARD RESET
========================================= */

document.getElementById(
    "reset"
).onclick = function() {


    const answer =
        confirm(

            "HARD RESET EVERYTHING? " +
            "Your current multiverse will be erased."

        );


    if (!answer) {

        return;

    }


    localStorage.removeItem(
        "infiniteMultiverse"
    );


    game = {

        current: null,

        visited: [],

        history: [],

        scene: 0,

        storyline: 1

    };


    newDimension();


    render();

};


/* =========================================
   DIMENSION MAP
========================================= */

document.getElementById(
    "map"
).onclick = function() {


    const mapList =
        document.getElementById(
            "mapList"
        );


    mapList.innerHTML = "";


    const dimensions =
        [...game.visited].reverse();


    dimensions.forEach(

        function(dimension) {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "card";


            card.innerHTML =

                `<b>
                    ${dimension.world}
                </b>

                #${dimension.id}

                <small>

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

                    game.current =
                        dimension;


                    game.scene = 0;


                    game.history = [];


                    saveGame();


                    document
                        .getElementById(
                            "mapScreen"
                        )
                        .classList.add(
                            "hidden"
                        );


                    render();

                };


            mapList.appendChild(
                card
            );

        }

    );


    document
        .getElementById(
            "mapScreen"
        )
        .classList.remove(
            "hidden"
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
        .classList.add(
            "hidden"
        );

};


/* =========================================
   START
========================================= */

if (
    !loadGame()
) {

    newDimension();

}


render();
