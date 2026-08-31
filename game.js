```javascript
"use strict";

/* =====================================================
   INFINITE MULTIVERSE
   Every new dimension gets a different story.
===================================================== */

const worlds = [
    {
        name: "Cyberpunk Earth",
        places: ["Neon District", "Sector 9", "The Underground"],
        problems: [
            "the city's android police have stopped obeying humans",
            "someone is secretly replacing citizens with synthetic copies",
            "the central AI has predicted the destruction of the city"
        ],
        atmosphere: "neon lights reflect across the rain-soaked streets"
    },

    {
        name: "Drowned Earth",
        places: ["The Last Island", "Submerged City", "The Floating Colony"],
        problems: [
            "something enormous has awakened beneath the ocean",
            "the remaining cities are disappearing beneath the waves",
            "a mysterious signal is coming from the bottom of the ocean"
        ],
        atmosphere: "water surrounds almost everything you can see"
    },

    {
        name: "Frozen Earth",
        places: ["The Ice Fortress", "Frozen Chicago", "The Northern Colony"],
        problems: [
            "people are vanishing into the frozen wilderness",
            "the temperature is dropping every hour",
            "something is moving underneath the ice"
        ],
        atmosphere: "snow covers everything beneath a dark gray sky"
    },

    {
        name: "Machine Earth",
        places: ["Machine City", "Factory 77", "The Central Network"],
        problems: [
            "machines have developed their own society",
            "humans are being hunted by autonomous machines",
            "the machines have discovered another dimension"
        ],
        atmosphere: "massive mechanical structures tower above the streets"
    },

    {
        name: "Mirror Earth",
        places: ["Mirror City", "The Reflection District", "The Other Side"],
        problems: [
            "people are meeting alternate versions of themselves",
            "reflections have started moving independently",
            "someone is switching people with their alternate selves"
        ],
        atmosphere: "every surface reflects a world that shouldn't exist"
    },

    {
        name: "Ancient Earth",
        places: ["The Forgotten Kingdom", "The Ancient Capital", "The Temple City"],
        problems: [
            "an ancient civilization has discovered dimensional travel",
            "a forgotten ruler has returned from the dead",
            "a portal has appeared inside an ancient temple"
        ],
        atmosphere: "stone towers and ancient monuments surround you"
    },

    {
        name: "Post-Apocalyptic Earth",
        places: ["The Ruins", "New Haven", "The Last Settlement"],
        problems: [
            "a mysterious army is approaching the settlement",
            "someone has discovered a functioning nuclear reactor",
            "survivors are disappearing one by one"
        ],
        atmosphere: "the remains of civilization stretch across the horizon"
    },

    {
        name: "Alien Earth",
        places: ["The Alien Capital", "Research Station 12", "The Red Valley"],
        problems: [
            "humans have discovered that Earth was never their original home",
            "an alien civilization has returned",
            "someone has been receiving messages from outside the universe"
        ],
        atmosphere: "strange stars fill a sky that looks nothing like Earth"
    },

    {
        name: "Floating Earth",
        places: ["Sky City", "Cloud Station", "The Floating Kingdom"],
        problems: [
            "the cities are slowly falling from the sky",
            "someone is sabotaging the gravity systems",
            "a second planet has appeared above the clouds"
        ],
        atmosphere: "entire cities float above an endless sea of clouds"
    },

    {
        name: "Reverse Earth",
        places: ["Reverse City", "The Backward District", "Zero Street"],
        problems: [
            "time is moving backward",
            "people remember events that haven't happened yet",
            "history is being rewritten every morning"
        ],
        atmosphere: "everything feels slightly wrong, as if reality is running backward"
    }
];


const characters = [
    "Alex",
    "Maya",
    "Jordan",
    "Nova",
    "Kai",
    "Riley",
    "Eli",
    "Rhea",
    "Dr. Morgan",
    "Commander Vale",
    "Unit 734",
    "The Stranger",
    "The Other You"
];


const characterTypes = [
    "detective",
    "scientist",
    "soldier",
    "hacker",
    "engineer",
    "rebel",
    "doctor",
    "android",
    "traveler",
    "mysterious stranger"
];


const twists = [
    "you discover that someone has been watching your timeline",
    "you find evidence that another version of you has already been here",
    "the person helping you is hiding their real identity",
    "you discover that this dimension is connected to hundreds of others",
    "you realize someone is deliberately creating these realities",
    "you discover that your arrival was predicted years ago",
    "you find a message written by yourself from another timeline"
];


const multiverseEvents = [
    "Every dimension suddenly experiences the same blackout.",
    "Millions of portals appear across the multiverse.",
    "Every alternate version of you receives the same message.",
    "Time freezes across thousands of dimensions.",
    "A massive dimensional wave spreads through reality.",
    "Entire timelines begin disappearing.",
    "A mysterious signal reaches every intelligent life-form in the multiverse.",
    "The boundaries between dimensions begin collapsing."
];


const endings = [
    "You escape before the dimension collapses.",
    "You become the protector of this timeline.",
    "You accidentally create an entirely new reality.",
    "You discover that the real enemy exists outside the multiverse.",
    "You sacrifice your place in this timeline to save everyone.",
    "You become trapped between dimensions.",
    "You discover that you were responsible for creating this timeline."
];


/* =====================================================
   RANDOM HELPERS
===================================================== */

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function id() {
    return Math.floor(
        100000 +
        Math.random() * 900000
    ).toString();
}


/* =====================================================
   CREATE A COMPLETELY NEW DIMENSION
===================================================== */

function createDimension() {

    const world = random(worlds);

    const character = random(characters);

    const type = random(characterTypes);

    const place = random(world.places);

    const problem = random(world.problems);

    const twist = random(twists);

    const event = random(multiverseEvents);

    const ending = random(endings);

    return {

        id: id(),

        world: world.name,

        place: place,

        problem: problem,

        atmosphere: world.atmosphere,

        character: character,

        characterType: type,

        twist: twist,

        event: event,

        ending: ending,

        year:
            2026 +
            Math.floor(
                Math.random() * 1000
            ),

        /*
           These make every storyline
           generate different dialogue.
        */

        openingLines: [
            `You wake up in ${place}.`,

            `The first thing you notice is that ${world.atmosphere}.`,

            `You have no memory of how you arrived.`,

            `Then you hear someone calling your name.`,

            `"You finally made it," a voice says.`
        ],

        discoveries: [
            `You discover that ${problem}.`,

            `A hidden door leads beneath ${place}.`,

            `${character} tells you that this has happened before.`,

            `A strange symbol appears on your hand.`,

            `Your surroundings suddenly change.`
        ]

    };

}


/* =====================================================
   GAME STATE
===================================================== */

let game = {

    dimension: null,

    discovered: [],

    history: [],

    scene: 0,

    storyline: 1

};


/* =====================================================
   SAVE
===================================================== */

function save() {

    try {

        localStorage.setItem(
            "INFINITE_MULTIVERSE_SAVE",
            JSON.stringify(game)
        );

    } catch (error) {

        console.log(error);

    }

}


/* =====================================================
   LOAD
===================================================== */

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
            "Save could not be loaded."
        );

    }

    return false;

}


/* =====================================================
   NEW DIMENSION
===================================================== */

function newDimension() {

    const previous =
        game.dimension;

    let dimension =
        createDimension();

    /*
       Make sure the new dimension
       isn't basically identical.
    */

    let attempts = 0;

    while (

        previous &&

        dimension.world === previous.world &&

        dimension.problem === previous.problem &&

        attempts < 20

    ) {

        dimension =
            createDimension();

        attempts++;

    }


    game.dimension =
        dimension;


    game.discovered.push(
        dimension
    );


    game.history = [];

    game.scene = 0;


    save();

}


/* =====================================================
   STORY GENERATOR
===================================================== */

function getStory() {

    const d =
        game.dimension;


    const opening =
        random(d.openingLines);


    const discovery =
        random(d.discoveries);


    /*
       SCENE 0
    */

    if (game.scene === 0) {

        return {

            speaker:
                d.character,

            text:

                `${opening} ` +

                `${discovery} ` +

                `"I'm ${d.character}," they say. ` +

                `They are a ${d.characterType}. ` +

                `"If you want to survive, you need to trust me."`,

            choices: [

                {
                    text:
                        `Trust ${d.character}`,
                    next: 1
                },

                {
                    text:
                        "Demand answers",
                    next: 1
                },

                {
                    text:
                        "Walk away",
                    next: 2
                },

                {
                    text:
                        "Search for another dimension",
                    next: 3
                }

            ]

        };

    }


    /*
       SCENE 1
    */

    if (game.scene === 1) {

        return {

            speaker:
                d.character,

            text:

                `"There's a problem," ` +
                `${d.character} says. ` +

                `${d.problem}. ` +

                `Then they reveal something worse: ` +

                `${d.twist}.`,

            choices: [

                {
                    text:
                        "Help them",
                    next: 2
                },

                {
                    text:
                        "Investigate alone",
                    next: 2
                },

                {
                    text:
                        "Ask about the multiverse",
                    next: 3
                },

                {
                    text:
                        "Leave before things get worse",
                    next: 3
                }

            ]

        };

    }


    /*
       SCENE 2
    */

    if (game.scene === 2) {

        return {

            speaker:
                "SYSTEM",

            text:

                `${d.discoveries[Math.floor(
                    Math.random() *
                    d.discoveries.length
                )]} ` +

                `Suddenly, ${d.event}` +

                ` You realize this event may affect ` +
                `more than just this dimension.`,

            choices: [

                {
                    text:
                        "Try to stop it",
                    next: 3
                },

                {
                    text:
                        "Save the people nearby",
                    next: 3
                },

                {
                    text:
                        "Find the source",
                    next: 4
                },

                {
                    text:
                        "Open a dimensional portal",
                    next: 4
                }

            ]

        };

    }


    /*
       SCENE 3
    */

    if (game.scene === 3) {

        return {

            speaker:
                "THE STRANGER",

            text:

                `"You're asking the wrong question." ` +

                `The stranger appears behind you. ` +

                `"The real question is why YOU keep appearing ` +
                `in every timeline."` +

                `Then they say: ` +

                `"Your next choice will change everything."`,

            choices: [

                {
                    text:
                        "Ask who they are",
                    next: 4
                },

                {
                    text:
                        "Attack",
                    next: 4
                },

                {
                    text:
                        "Run",
                    next: 4
                },

                {
                    text:
                        "Believe them",
                    next: 4
                }

            ]

        };

    }


    /*
       FINAL SCENE
    */

    return {

        speaker:
            "THE ARCHITECT",

        text:

            `${d.event} ` +

            `The Architect looks directly at you. ` +

            `"This timeline has reached its final decision." ` +

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
                    "Search for another version of yourself",
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


/* =====================================================
   RENDER
===================================================== */

function render() {

    const d =
        game.dimension;

    if (!d) {
        return;
    }


    const story =
        getStory();


    document.getElementById(
        "dimension"
    ).textContent =

        `DIMENSION #${d.id} • ` +
        `STORYLINE ${game.storyline}`;


    document.getElementById(
        "location"
    ).textContent =

        `${d.place} • ${d.world} • YEAR ${d.year}`;


    document.getElementById(
        "speaker"
    ).textContent =
        story.speaker;


    document.getElementById(
        "text"
    ).textContent =
        story.text;


    const choices =
        document.getElementById(
            "choices"
        );


    choices.innerHTML = "";


    story.choices.forEach(
        function(choice, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice";


            button.textContent =
                `${index + 1}. ${choice.text}`;


            button.onclick =
                function() {

                    choose(
                        choice.next
                    );

                };


            choices.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   CHOICE
===================================================== */

function choose(nextScene) {

    /*
       Save current position so
       BACKTRACK actually works.
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
       Move into a completely
       different dimension.
    */

    if (nextScene === 5) {

        game.storyline++;

        newDimension();

        render();

        return;

    }


    game.scene =
        nextScene;


    save();

    render();

}


/* =====================================================
   BACKTRACK
===================================================== */

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


/* =====================================================
   NEW STORYLINE
===================================================== */

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

    newDimension();

    render();

};


/* =====================================================
   HARD RESET
===================================================== */

document.getElementById(
    "resetButton"
).onclick = function() {

    const answer =
        confirm(
            "HARD RESET THE ENTIRE MULTIVERSE?"
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


    newDimension();

    render();

};


/* =====================================================
   DIMENSION MAP
===================================================== */

document.getElementById(
    "mapButton"
).onclick = function() {

    const map =
        document.getElementById(
            "mapList"
        );


    map.innerHTML = "";


    [...game.discovered]
        .reverse()
        .forEach(
            function(d) {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "dimensionCard";


                card.innerHTML =

                    `<strong>
                        ${d.world}
                    </strong>

                    #${d.id}

                    <small>

                        Location:
                        ${d.place}

                        <br>

                        Year:
                        ${d.year}

                        <br>

                        Problem:
                        ${d.problem}

                        <br>

                        Reality:
                        ${d.atmosphere}

                    </small>`;


                card.onclick =
                    function() {

                        game.dimension =
                            d;

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


/* =====================================================
   CLOSE MAP
===================================================== */

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


/* =====================================================
   START
===================================================== */

if (!load()) {

    newDimension();

}

render();
```
