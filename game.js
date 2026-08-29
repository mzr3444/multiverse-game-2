```javascript
"use strict";

/*
==================================================
MULTIVERSE: FRACTURED
SIMPLE / FAST VERSION
==================================================
*/


/* -----------------------------------------------
   HTML ELEMENTS
------------------------------------------------ */

const textElement =
    document.getElementById("text");

const speakerElement =
    document.getElementById("speaker");

const locationElement =
    document.getElementById("location");

const choicesElement =
    document.getElementById("choices");

const storyElement =
    document.getElementById("story");

const dimensionElement =
    document.getElementById("dimensionNumber");

const eventElement =
    document.getElementById("event");

const mapElement =
    document.getElementById("map");

const dimensionList =
    document.getElementById("dimensionList");


/* -----------------------------------------------
   GAME DATA
------------------------------------------------ */

const scenes = {

    start: {

        speaker: "SYSTEM",

        location: "ABANDONED SUBWAY",

        text:
            "11:47 PM. You wake up on the floor of an abandoned subway station. Your wrist is glowing.",

        choices: [

            {
                text:
                    "Examine the device on your wrist.",

                next:
                    "device"
            },

            {
                text:
                    "Search the station.",

                next:
                    "search"
            },

            {
                text:
                    "Look for an exit.",

                next:
                    "exit"
            },

            {
                text:
                    "Stay still and listen.",

                next:
                    "footsteps"
            }

        ]

    },


    device: {

        speaker:
            "SYSTEM",

        location:
            "ABANDONED SUBWAY",

        text:
            "The device displays one message: UNIVERSE 01-A. TIMELINE STABILITY: 95%.",

        choices: [

            {
                text:
                    "Activate the device.",

                next:
                    "portal"
            },

            {
                text:
                    "Try to remove it.",

                next:
                    "remove"
            },

            {
                text:
                    "Leave it alone.",

                next:
                    "search"
            }

        ]

    },


    search: {

        speaker:
            "ALEX",

        location:
            "ABANDONED SUBWAY",

        text:
            "You search the station. A second set of footprints leads toward a dark maintenance tunnel.",

        choices: [

            {
                text:
                    "Follow the footprints.",

                next:
                    "tunnel"
            },

            {
                text:
                    "Search the platform.",

                next:
                    "platform"
            },

            {
                text:
                    "Call out.",

                next:
                    "stranger"
            }

        ]

    },


    exit: {

        speaker:
            "ALEX",

        location:
            "SUBWAY EXIT",

        text:
            "You push open the exit door. Instead of the city, another subway station is waiting outside.",

        choices: [

            {
                text:
                    "Step through.",

                next:
                    "portal"
            },

            {
                text:
                    "Close the door.",

                next:
                    "footsteps"
            }

        ]

    },


    footsteps: {

        speaker:
            "ALEX",

        location:
            "ABANDONED SUBWAY",

        text:
            "Footsteps echo through the station. Someone is walking toward you.",

        choices: [

            {
                text:
                    "Call out.",

                next:
                    "stranger"
            },

            {
                text:
                    "Hide.",

                next:
                    "stranger"
            },

            {
                text:
                    "Wait.",

                next:
                    "stranger"
            }

        ]

    },


    stranger: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        text:
            "Don't move. I need to know which version of you I'm talking to.",

        choices: [

            {
                text:
                    "What do you mean?",

                next:
                    "explain"
            },

            {
                text:
                    "Who are you?",

                next:
                    "identity"
            },

            {
                text:
                    "Back away.",

                next:
                    "threat"
            },

            {
                text:
                    "I want answers.",

                next:
                    "explain"
            }

        ]

    },


    explain: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        text:
            "Every choice creates another version of reality. I've seen this station play out dozens of different ways.",

        choices: [

            {
                text:
                    "How many versions of me exist?",

                next:
                    "versions"
            },

            {
                text:
                    "Why are you here?",

                next:
                    "mission"
            },

            {
                text:
                    "What happens if reality collapses?",

                next:
                    "collapse"
            }

        ]

    },


    identity: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        text:
            "Call me the Stranger. That's all you need to know for now.",

        choices: [

            {
                text:
                    "Tell me about the device.",

                next:
                    "deviceTruth"
            },

            {
                text:
                    "Why do you know about me?",

                next:
                    "versions"
            },

            {
                text:
                    "I don't trust you.",

                next:
                    "threat"
            }

        ]

    },


    threat: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        text:
            "If I wanted to hurt you, you wouldn't have heard me coming.",

        choices: [

            {
                text:
                    "Lower your guard.",

                next:
                    "explain"
            },

            {
                text:
                    "Run.",

                next:
                    "exit"
            }

        ]

    },


    tunnel: {

        speaker:
            "ALEX",

        location:
            "MAINTENANCE TUNNEL",

        text:
            "The footprints stop at a metal door. Written across it are four words: YOU HAVE DONE THIS BEFORE.",

        choices: [

            {
                text:
                    "Open the door.",

                next:
                    "portal"
            },

            {
                text:
                    "Touch the writing.",

                next:
                    "memory"
            },

            {
                text:
                    "Go back.",

                next:
                    "footsteps"
            }

        ]

    },


    platform: {

        speaker:
            "ALEX",

        location:
            "SUBWAY PLATFORM",

        text:
            "You find an old newspaper. The date is tomorrow. The headline says: CITY VANISHES WITHOUT WARNING.",

        choices: [

            {
                text:
                    "Keep the newspaper.",

                next:
                    "memory"
            },

            {
                text:
                    "Show the Stranger.",

                next:
                    "stranger"
            },

            {
                text:
                    "Search for another newspaper.",

                next:
                    "search"
            }

        ]

    },


    remove: {

        speaker:
            "SYSTEM",

        location:
            "ABANDONED SUBWAY",

        text:
            "The device refuses to detach. A warning appears: REMOVAL MAY DESTABILIZE TIMELINE.",

        choices: [

            {
                text:
                    "Keep trying.",

                next:
                    "collapse"
            },

            {
                text:
                    "Stop.",

                next:
                    "search"
            }

        ]

    },


    portal: {

        speaker:
            "SYSTEM",

        location:
            "DIMENSIONAL BREACH",

        text:
            "A tear opens in reality. Beyond it is a city that looks almost exactly like yours.",

        choices: [

            {
                text:
                    "Enter the new dimension.",

                next:
                    "newDimension"
            },

            {
                text:
                    "Close the portal.",

                next:
                    "footsteps"
            },

            {
                text:
                    "Ask the Stranger to go first.",

                next:
                    "stranger"
            }

        ]

    },


    versions: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        text:
            "Too many. Some are heroes. Some are monsters. One version of you may be responsible for the collapse.",

        choices: [

            {
                text:
                    "How do I find them?",

                next:
                    "alternate"
            },

            {
                text:
                    "Why haven't you stopped them?",

                next:
                    "mission"
            }

        ]

    },


    mission: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        text:
            "I'm trying to prevent a multiverse event. If it happens, the damage won't stay in this universe.",

        choices: [

            {
                text:
                    "What event?",

                next:
                    "event"
            },

            {
                text:
                    "I'll help.",

                next:
                    "event"
            },

            {
                text:
                    "I want to leave.",

                next:
                    "exit"
            }

        ]

    },


    collapse: {

        speaker:
            "SYSTEM",

        location:
            "ABANDONED SUBWAY",

        text:
            "The lights flicker. The walls distort. For a moment, the station exists in two places at once.",

        choices: [

            {
                text:
                    "Stabilize reality.",

                next:
                    "stable"
            },

            {
                text:
                    "Open a portal.",

                next:
                    "newDimension"
            },

            {
                text:
                    "Do nothing.",

                next:
                    "event"
            }

        ]

    },


    stable: {

        speaker:
            "SYSTEM",

        location:
            "DIMENSIONAL CORE",

        text:
            "Reality stops shaking... temporarily.",

        choices: [

            {
                text:
                    "Ask what happens next.",

                next:
                    "mission"
            },

            {
                text:
                    "Investigate the energy.",

                next:
                    "event"
            }

        ]

    },


    memory: {

        speaker:
            "ALEX",

        location:
            "UNKNOWN",

        text:
            "A memory flashes through your mind. You've stood here before. But you don't remember this universe.",

        choices: [

            {
                text:
                    "Try to remember.",

                next:
                    "alternate"
            },

            {
                text:
                    "Ignore it.",

                next:
                    "stranger"
            }

        ]

    },


    alternate: {

        speaker:
            "ALEX",

        location:
            "UNKNOWN DIMENSION",

        text:
            "Across the street stands another version of you. They look directly at you like they've been waiting.",

        choices: [

            {
                text:
                    "Approach them.",

                next:
                    "otherAlex"
            },

            {
                text:
                    "Watch from a distance.",

                next:
                    "event"
            },

            {
                text:
                    "Leave.",

                next:
                    "newDimension"
            }

        ]

    },


    otherAlex: {

        speaker:
            "OTHER ALEX",

        location:
            "UNKNOWN DIMENSION",

        text:
            "You're late. I was beginning to think you weren't coming.",

        choices: [

            {
                text:
                    "What do you know?",

                next:
                    "event"
            },

            {
                text:
                    "Why were you waiting?",

                next:
                    "event"
            },

            {
                text:
                    "How do I return?",

                next:
                    "return"
            }

        ]

    },


    deviceTruth: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        text:
            "That device isn't a phone. It's a key. Someone built it to open doors between realities.",

        choices: [

            {
                text:
                    "Who built it?",

                next:
                    "event"
            },

            {
                text:
                    "Where does the key lead?",

                next:
                    "newDimension"
            }

        ]

    },


    event: {

        speaker:
            "SYSTEM",

        location:
            "MULTIVERSE",

        text:
            "A MASSIVE DISTURBANCE HAS APPEARED. Multiple dimensions are experiencing the same event at the same time.",

        choices: [

            {
                text:
                    "Investigate the affected dimensions.",

                next:
                    "eventAfter"
            },

            {
                text:
                    "Travel to another universe.",

                next:
                    "newDimension"
            },

            {
                text:
                    "Try to stop it.",

                next:
                    "eventControl"
            }

        ]

    },


    eventAfter: {

        speaker:
            "SYSTEM",

        location:
            "MULTIVERSE",

        text:
            "Your device displays a map of the multiverse. Most dimensions are flashing red.",

        choices: [

            {
                text:
                    "Go to the source.",

                next:
                    "newDimension"
            },

            {
                text:
                    "Return home.",

                next:
                    "return"
            }

        ]

    },


    eventControl: {

        speaker:
            "SYSTEM",

        location:
            "DIMENSIONAL CORE",

        text:
            "You connect to the event. For a moment, you can feel millions of universes around you.",

        choices: [

            {
                text:
                    "Push the event away.",

                next:
                    "success"
            },

            {
                text:
                    "Redirect it.",

                next:
                    "success"
            },

            {
                text:
                    "Absorb the event.",

                next:
                    "failure"
            }

        ]

    },


    success: {

        speaker:
            "SYSTEM",

        location:
            "MULTIVERSE",

        text:
            "The fracture slows. Thousands of timelines stabilize. But something on the other side noticed you.",

        choices: [

            {
                text:
                    "Find out what noticed you.",

                next:
                    "alternate"
            },

            {
                text:
                    "Return home.",

                next:
                    "return"
            }

        ]

    },


    failure: {

        speaker:
            "SYSTEM",

        location:
            "COLLAPSING REALITY",

        text:
            "The device overloads. Your universe begins collapsing around you.",

        choices: [

            {
                text:
                    "Escape.",

                next:
                    "newDimension"
            },

            {
                text:
                    "Try again.",

                next:
                    "eventControl"
            }

        ]

    },


    return: {

        speaker:
            "SYSTEM",

        location:
            "PREVIOUS DIMENSION",

        text:
            "You return to a dimension you've visited before. Everything looks familiar... except one important detail has changed.",

        choices: [

            {
                text:
                    "Investigate.",

                next:
                    "memory"
            },

            {
                text:
                    "Find the Stranger.",

                next:
                    "stranger"
            },

            {
                text:
                    "Leave again.",

                next:
                    "newDimension"
            }

        ]

    }

};


/* -----------------------------------------------
   GAME STATE
------------------------------------------------ */

let game = {

    storyline:
        "The Fractured Rebellion",

    dimension:
        "01-A",

    scene:
        "start",

    history: [],

    dimensions: [

        {
            id:
                "01-A",

            location:
                "ABANDONED SUBWAY"
        }

    ]

};


/* -----------------------------------------------
   GENERATED DIMENSION
------------------------------------------------ */

function createDimension() {

    const letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const number =
        Math.floor(
            Math.random() * 99
        ) + 1;

    const letter =
        letters[
            Math.floor(
                Math.random() *
                letters.length
            )
        ];

    const id =
        String(number).padStart(2, "0")
        +
        "-"
        +
        letter;


    const locations = [

        "FROZEN CITY",

        "RUINED CITY",

        "UNDERGROUND LAB",

        "DESERT FACILITY",

        "SPACE STATION",

        "OCEAN CITY",

        "DEAD FOREST",

        "MEGACITY",

        "UNKNOWN COLONY"

    ];


    const location =
        locations[
            Math.floor(
                Math.random() *
                locations.length
            )
        ];


    game.dimensions.push({

        id:
            id,

        location:
            location

    });


    game.dimension =
        id;


    game.scene =
        "generated";


    showEvent(
        "ENTERED " + id
    );

}


/* -----------------------------------------------
   GENERATED SCENE
------------------------------------------------ */

function getGeneratedScene() {

    return {

        speaker:
            "SYSTEM",

        location:
            getCurrentLocation(),

        text:
            "You have entered a universe that has never seen you before. The rules of reality feel different here.",

        choices: [

            {
                text:
                    "Explore this universe.",

                next:
                    "generatedExplore"
            },

            {
                text:
                    "Find another version of yourself.",

                next:
                    "alternate"
            },

            {
                text:
                    "Search for a way back.",

                next:
                    "return"
            },

            {
                text:
                    "Look for signs of the multiverse event.",

                next:
                    "event"
            }

        ]

    };

}


/* -----------------------------------------------
   GENERATED EXPLORATION
------------------------------------------------ */

function getGeneratedExplore() {

    return {

        speaker:
            "SYSTEM",

        location:
            getCurrentLocation(),

        text:
            "You explore the unfamiliar world. Something is watching you from somewhere nearby.",

        choices: [

            {
                text:
                    "Find whoever is watching.",

                next:
                    "alternate"
            },

            {
                text:
                    "Keep exploring.",

                next:
                    "generatedExplore2"
            },

            {
                text:
                    "Return.",

                next:
                    "return"
            }

        ]

    };

}


/* -----------------------------------------------
   SECOND GENERATED SCENE
------------------------------------------------ */

function getGeneratedExplore2() {

    return {

        speaker:
            "UNKNOWN",

        location:
            getCurrentLocation(),

        text:
            "A voice speaks from behind you: 'Every dimension has a story. Yours keeps rewriting them.'",

        choices: [

            {
                text:
                    "Turn around.",

                next:
                    "alternate"
            },

            {
                text:
                    "Ask who they are.",

                next:
                    "event"
            },

            {
                text:
                    "Run.",

                next:
                    "newDimension"
            },

            {
                text:
                    "Go back.",

                next:
                    "return"
            }

        ]

    };

}


/* -----------------------------------------------
   CURRENT LOCATION
------------------------------------------------ */

function getCurrentLocation() {

    const found =
        game.dimensions.find(
            dimension =>
                dimension.id ===
                game.dimension
        );


    if (found) {

        return found.location;

    }


    return "UNKNOWN";
}


/* -----------------------------------------------
   RENDER
------------------------------------------------ */

function render() {

    let scene;


    if (
        game.scene ===
        "generated"
    ) {

        scene =
            getGeneratedScene();

    }

    else if (
        game.scene ===
        "generatedExplore"
    ) {

        scene =
            getGeneratedExplore();

    }

    else if (
        game.scene ===
        "generatedExplore2"
    ) {

        scene =
            getGeneratedExplore2();

    }

    else {

        scene =
            scenes[
                game.scene
            ];

    }


    if (!scene) {

        console.error(
            "Scene missing:",
            game.scene
        );

        game.scene =
            "start";

        scene =
            scenes.start;

    }


    storyElement.textContent =
        game.storyline;


    dimensionElement.textContent =
        game.dimension;


    speakerElement.textContent =
        scene.speaker;


    locationElement.textContent =
        scene.location;


    textElement.textContent =
        scene.text;


    choicesElement.innerHTML =
        "";


    scene.choices.forEach(
        choice => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice";


            button.textContent =
                choice.text;


            button.onclick =
                function() {

                    makeChoice(
                        choice.next
                    );

                };


            choicesElement.appendChild(
                button
            );

        }
    );

}


/* -----------------------------------------------
   MAKE CHOICE
------------------------------------------------ */

function makeChoice(next) {

    game.history.push({

        storyline:
            game.storyline,

        dimension:
            game.dimension,

        scene:
            game.scene

    });


    if (
        next ===
        "newDimension"
    ) {

        createDimension();

    }

    else {

        game.scene =
            next;

    }


    save();

    render();

}


/* -----------------------------------------------
   BACKTRACK
------------------------------------------------ */

function backtrack() {

    if (
        game.history.length ===
        0
    ) {

        showEvent(
            "NO PREVIOUS CHOICE"
        );

        return;

    }


    const previous =
        game.history.pop();


    game.storyline =
        previous.storyline;


    game.dimension =
        previous.dimension;


    game.scene =
        previous.scene;


    save();

    render();

    showEvent(
        "TIMELINE REWOUND"
    );

}


/* -----------------------------------------------
   NEW STORYLINE
------------------------------------------------ */

function newStoryline() {

    game = {

        storyline:
            "The Silent City",

        dimension:
            "73-Z",

        scene:
            "silentStart",

        history: [],

        dimensions: [

            {
                id:
                    "73-Z",

                location:
                    "EMPTY CITY"
            }

        ]

    };


    showEvent(
        "NEW TIMELINE CREATED"
    );


    save();

    render();

}


/* -----------------------------------------------
   SILENT CITY
------------------------------------------------ */

scenes.silentStart = {

    speaker:
        "SYSTEM",

    location:
        "EMPTY CITY",

    text:
        "You arrive in Dimension 73-Z. The city is completely empty. Cars are parked everywhere, lights are on, but there isn't a single person.",

    choices: [

        {
            text:
                "Enter a building.",

            next:
                "silentBuilding"
        },

        {
            text:
                "Go toward the city center.",

            next:
                "silentCenter"
        },

        {
            text:
                "Search the cars.",

            next:
                "silentCars"
        },

        {
            text:
                "Call out.",

            next:
                "silentCall"
        }

    ]

};


scenes.silentBuilding = {

    speaker:
        "ALEX",

    location:
        "EMPTY APARTMENT",

    text:
        "Dinner is still sitting on a table. A television is playing a news report, but the reporter is staring directly at you.",

    choices: [

        {
            text:
                "Watch the report.",

            next:
                "silentReport"
        },

        {
            text:
                "Turn off the television.",

            next:
                "silentPower"
        },

        {
            text:
                "Search the apartment.",

            next:
                "silentNote"
        }

    ]

};


scenes.silentReport = {

    speaker:
        "TELEVISION",

    location:
        "EMPTY APARTMENT",

    text:
        "The reporter finally speaks: 'If you're seeing this message, you're not from this dimension.'",

    choices: [

        {
            text:
                "Keep watching.",

            next:
                "silentEntity"
        },

        {
            text:
                "Turn it off.",

            next:
                "silentPower"
        }

    ]

};


scenes.silentPower = {

    speaker:
        "SYSTEM",

    location:
        "EMPTY APARTMENT",

    text:
        "The television explodes into static. For half a second, you see hundreds of people standing inside a white room.",

    choices: [

        {
            text:
                "Follow the signal.",

            next:
                "silentEntity"
        },

        {
            text:
                "Leave.",

            next:
                "silentCenter"
        }

    ]

};


scenes.silentNote = {

    speaker:
        "ALEX",

    location:
        "EMPTY APARTMENT",

    text:
        "Under the table you find a note: DON'T TRUST THE PERSON WHO LOOKS LIKE YOU.",

    choices: [

        {
            text:
                "Keep the note.",

            next:
                "silentCenter"
        },

        {
            text:
                "Search for whoever wrote it.",

            next:
                "silentEntity"
        }

    ]

};


scenes.silentCenter = {

    speaker:
        "ALEX",

    location:
        "CITY CENTER",

    text:
        "Every traffic light turns green. Then thousands of empty cars begin moving through the streets by themselves.",

    choices: [

        {
            text:
                "Follow the cars.",

            next:
                "silentCars"
        },

        {
            text:
                "Run into the subway.",

            next:
                "silentEntity"
        },

        {
            text:
                "Stay in the street.",

            next:
                "silentEntity"
        }

    ]

};


scenes.silentCars = {

    speaker:
        "SYSTEM",

    location:
        "CITY STREET",

    text:
        "A radio turns on inside one of the cars. A voice whispers: 'Dimension 73-Z is no longer considered inhabited.'",

    choices: [

        {
            text:
                "Ask who is speaking.",

            next:
                "silentEntity"
        },

        {
            text:
                "Trace the signal.",

            next:
                "silentEntity"
        },

        {
            text:
                "Leave.",

            next:
                "silentCenter"
        }

    ]

};


scenes.silentCall = {

    speaker:
        "ALEX",

    location:
        "EMPTY CITY",

    text:
        "You call out. Someone answers from directly behind you.",

    choices: [

        {
            text:
                "Turn around.",

            next:
                "silentOtherAlex"
        },

        {
            text:
                "Run.",

            next:
                "silentCenter"
        }

    ]

};


scenes.silentOtherAlex = {

    speaker:
        "OTHER ALEX",

    location:
        "EMPTY CITY",

    text:
        "You turn around and see yourself. The other you says: 'You shouldn't have come here.'",

    choices: [

        {
            text:
                "What happened?",

            next:
                "silentEntity"
        },

        {
            text:
                "Why do you look like me?",

            next:
                "silentEntity"
        },

        {
            text:
                "Trust them.",

            next:
                "silentEntity"
        }

    ]

};


scenes.silentEntity = {

    speaker:
        "THE ARCHIVIST",

    location:
        "THE WHITE ROOM",

    text:
        "A figure appears. 'Every universe eventually asks the same question: who created the multiverse?'",

    choices: [

        {
            text:
                "Who created it?",

            next:
                "silentTruth"
        },

        {
            text:
                "Where did everyone go?",

            next:
                "silentPeople"
        },

        {
            text:
                "Why was I brought here?",

            next:
                "silentReason"
        },

        {
            text:
                "Leave this universe.",

            next:
                "newDimension"
        }

    ]

};


scenes.silentTruth = {

    speaker:
        "THE ARCHIVIST",

    location:
        "THE WHITE ROOM",

    text:
        "The Archivist looks directly at you. 'You.'",

    choices: [

        {
            text:
                "That's impossible.",

            next:
                "silentReason"
        },

        {
            text:
                "Which version of me?",

            next:
                "silentReason"
        },

        {
            text:
                "Show me the original.",

            next:
                "newDimension"
        }

    ]

};


scenes.silentPeople = {

    speaker:
        "THE ARCHIVIST",

    location:
        "THE WHITE ROOM",

    text:
        "The missing citizens are alive. They're being stored outside normal time until someone decides whether this universe should continue.",

    choices: [

        {
            text:
                "Free them.",

            next:
                "event"
        },

        {
            text:
                "Who decides?",

            next:
                "silentReason"
        },

        {
            text:
                "Leave.",

            next:
                "newDimension"
        }

    ]

};


scenes.silentReason = {

    speaker:
        "THE ARCHIVIST",

    location:
        "THE WHITE ROOM",

    text:
        "The Archivist steps closer. 'You have already changed six universes. This is the seventh.'",

    choices: [

        {
            text:
                "What did I change?",

            next:
                "event"
        },

        {
            text:
                "How do I undo it?",

            next:
                "return"
        },

        {
            text:
                "Keep exploring.",

            next:
                "newDimension"
        }

    ]

};


/* -----------------------------------------------
   SAVE
------------------------------------------------ */

function save() {

    try {

        localStorage.setItem(
            "multiverseSave",
            JSON.stringify(game)
        );

    }

    catch (error) {

        console.log(
            "Save unavailable."
        );

    }

}


/* -----------------------------------------------
   LOAD
------------------------------------------------ */

function load() {

    try {

        const saved =
            localStorage.getItem(
                "multiverseSave"
            );


        if (saved) {

            const loaded =
                JSON.parse(saved);


            if (
                loaded &&
                loaded.scene
            ) {

                game =
                    loaded;

            }

        }

    }

    catch (error) {

        console.log(
            "Starting new game."
        );

    }

}


/* -----------------------------------------------
   MAP
------------------------------------------------ */

function openMap() {

    dimensionList.innerHTML =
        "";


    game.dimensions.forEach(
        dimension => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "dimensionCard";


            card.textContent =
                "Dimension " +
                dimension.id +
                " — " +
                dimension.location;


            card.onclick =
                function() {

                    game.dimension =
                        dimension.id;


                    if (
                        dimension.id ===
                        "01-A"
                    ) {

                        game.storyline =
                            "The Fractured Rebellion";

                        game.scene =
                            "start";

                    }

                    else if (
                        dimension.id ===
                        "73-Z"
                    ) {

                        game.storyline =
                            "The Silent City";

                        game.scene =
                            "silentStart";

                    }

                    else {

                        game.scene =
                            "generated";

                    }


                    closeMap();

                    save();

                    render();

                };


            dimensionList.appendChild(
                card
            );

        }
    );


    mapElement.classList.add(
        "open"
    );

}


/* -----------------------------------------------
   CLOSE MAP
------------------------------------------------ */

function closeMap() {

    mapElement.classList.remove(
        "open"
    );

}


/* -----------------------------------------------
   EVENT
------------------------------------------------ */

let eventTimer;


function showEvent(message) {

    eventElement.textContent =
        message;


    eventElement.classList.add(
        "show"
    );


    clearTimeout(
        eventTimer
    );


    eventTimer =
        setTimeout(
            function() {

                eventElement.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* -----------------------------------------------
   BUTTONS
------------------------------------------------ */

document
    .getElementById("backtrack")
    .onclick =
    backtrack;


document
    .getElementById("newStory")
    .onclick =
    newStoryline;


document
    .getElementById("mapButton")
    .onclick =
    openMap;


document
    .getElementById("closeMap")
    .onclick =
    closeMap;


document
    .getElementById("reset")
    .onclick =
    function() {

        if (
            confirm(
                "Erase your current timeline?"
            )
        ) {

            localStorage.removeItem(
                "multiverseSave"
            );


            game = {

                storyline:
                    "The Fractured Rebellion",

                dimension:
                    "01-A",

                scene:
                    "start",

                history: [],

                dimensions: [

                    {
                        id:
                            "01-A",

                        location:
                            "ABANDONED SUBWAY"
                    }

                ]

            };


            render();

            showEvent(
                "TIMELINE RESET"
            );

        }

    };


/* -----------------------------------------------
   START GAME
------------------------------------------------ */

load();

render();

console.log(
    "MULTIVERSE GAME LOADED SUCCESSFULLY"
);
```
