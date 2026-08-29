/* =====================================================
   MULTIVERSE: FRACTURED
   CINEMATIC MULTIVERSE ENGINE
===================================================== */


/* =====================================================
   BASIC HELPERS
===================================================== */

function random(array) {
    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];
}


function clamp(value) {

    return Math.max(
        0,
        Math.min(
            100,
            value
        )
    );

}


function makeId() {

    return Math.floor(
        1000 +
        Math.random() * 9000
    );

}


/* =====================================================
   STORYLINES
===================================================== */

const storylines = [

    "The Fractured Rebellion",

    "The Last Human",

    "War of the Versions",

    "The Missing Timeline",

    "Echoes of Tomorrow",

    "The Infinite Stranger",

    "The Collapse",

    "The Other You"

];


/* =====================================================
   LOCATIONS
===================================================== */

const locations = [

    "Abandoned Subway",

    "Ruined Downtown",

    "Underground Laboratory",

    "Frozen City",

    "Deserted Research Facility",

    "Broken Space Station",

    "Unknown Colony",

    "Dead Forest"

];


/* =====================================================
   GAME DATA
===================================================== */

let game;


/* =====================================================
   CREATE NEW GAME
===================================================== */

function createNewGame() {

    return {

        multiverseId:
            makeId(),

        storyline:
            random(
                storylines
            ),

        currentDimension:
            "01-A",

        dimensions: [

            {
                id: "01-A",

                parent: null,

                location:
                    "Abandoned Subway",

                stability: 100,

                visited: true,

                altered: false
            }

        ],

        choices: [],

        events: [],

        relationships: {

            alex: 50,

            stranger: 50

        },

        stability: 100,

        scene:
            "intro",

        generation: 1

    };

}


/* =====================================================
   SAVE
===================================================== */

function saveGame() {

    localStorage.setItem(
        "multiverseGame",
        JSON.stringify(game)
    );

}


/* =====================================================
   LOAD
===================================================== */

function loadGame() {

    const saved =
        localStorage.getItem(
            "multiverseGame"
        );


    if (saved) {

        try {

            game =
                JSON.parse(saved);

        }

        catch {

            game =
                createNewGame();

        }

    }

    else {

        game =
            createNewGame();

    }

}


/* =====================================================
   CURRENT DIMENSION
===================================================== */

function getDimension() {

    return game.dimensions.find(
        dimension =>
            dimension.id ===
            game.currentDimension
    );

}


/* =====================================================
   DIMENSION GENERATOR
===================================================== */

function createDimension() {

    const number =
        String(
            Math.floor(
                Math.random() * 99
            ) + 1
        ).padStart(2, "0");


    const letter =
        String.fromCharCode(
            65 +
            Math.floor(
                Math.random() * 26
            )
        );


    const id =
        number + "-" + letter;


    /*
    Make sure we don't duplicate
    an existing dimension.
    */

    if (
        game.dimensions.some(
            d => d.id === id
        )
    ) {

        return createDimension();

    }


    const parent =
        game.currentDimension;


    const dimension = {

        id,

        parent,

        location:
            random(
                locations
            ),

        stability:
            Math.floor(
                45 +
                Math.random() * 55
            ),

        visited: true,

        altered: false

    };


    game.dimensions.push(
        dimension
    );


    return dimension;

}


/* =====================================================
   CHANGE DIMENSION
===================================================== */

function travelToNewDimension() {

    const newDimension =
        createDimension();


    game.currentDimension =
        newDimension.id;


    game.stability =
        newDimension.stability;


    game.generation++;


    saveGame();

}


/* =====================================================
   GO BACK
===================================================== */

function travelBack(id) {

    const target =
        game.dimensions.find(
            dimension =>
                dimension.id === id
        );


    if (!target) return;


    game.currentDimension =
        target.id;


    game.stability =
        target.stability;


    /*
    Returning to a dimension means
    the player can change something.
    */

    target.altered = true;


    game.scene =
        "return";


    saveGame();


    closeWindows();


    renderScene(
        getScene("return")
    );

}


/* =====================================================
   SCENE SYSTEM
===================================================== */

function getScene(sceneName) {

    /*
    Every scene has its own choices.
    Nothing is randomly matched to dialogue.
    */

    const scenes = {


        /* =========================================
           INTRO
        ========================================= */

        intro: {

            speaker: "SYSTEM",

            location:
                "ABANDONED SUBWAY",

            character:
                "none",

            text:
                "11:47 PM. You wake up on the floor of an abandoned subway station. There are no passengers. No trains. Your wrist is glowing.",

            choices: [

                {
                    text:
                        "Examine the device on your wrist.",

                    next:
                        "device",

                    effect: {

                        stability:
                            -5

                    }

                },

                {
                    text:
                        "Search the station for another person.",

                    next:
                        "search",

                    effect: {

                        stranger:
                            3

                    }

                },

                {
                    text:
                        "Look for a way out.",

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


        /* =========================================
           DEVICE
        ========================================= */

        device: {

            speaker:
                "SYSTEM",

            location:
                "ABANDONED SUBWAY",

            character:
                "alex",

            text:
                "The device displays a single message: UNIVERSE 01-A. TIMELINE STABILITY: 95%.",

            choices: [

                {
                    text:
                        "Activate the device.",

                    next:
                        "portal",

                    effect: {

                        stability:
                            -15

                    }

                },

                {
                    text:
                        "Try to remove the device.",

                    next:
                        "removeDevice"

                },

                {
                    text:
                        "Leave it alone and search the station.",

                    next:
                        "search"

                }

            ]

        },


        /* =========================================
           SEARCH
        ========================================= */

        search: {

            speaker:
                "ALEX",

            location:
                "ABANDONED SUBWAY",

            character:
                "alex",

            text:
                "You search the empty station. A second set of footprints leads toward a maintenance tunnel.",

            choices: [

                {
                    text:
                        "Follow the footprints.",

                    next:
                        "tunnel"

                },

                {
                    text:
                        "Ignore them and search the platform.",

                    next:
                        "platform"

                },

                {
                    text:
                        "Call out to whoever made them.",

                    next:
                        "strangerEntrance",

                    effect: {

                        stranger:
                            5

                    }

                }

            ]

        },


        /* =========================================
           EXIT
        ========================================= */

        exit: {

            speaker:
                "ALEX",

            location:
                "SUBWAY EXIT",

            character:
                "alex",

            text:
                "You push open the exit door. Instead of the city, another subway station is waiting outside.",

            choices: [

                {
                    text:
                        "Step through the doorway.",

                    next:
                        "portal",

                    effect: {

                        stability:
                            -10

                    }

                },

                {
                    text:
                        "Close the door and go back.",

                    next:
                        "footsteps"

                }

            ]

        },


        /* =========================================
           FOOTSTEPS
        ========================================= */

        footsteps: {

            speaker:
                "ALEX",

            location:
                "ABANDONED SUBWAY",

            character:
                "alex",

            text:
                "Footsteps echo through the station. Someone is walking toward you.",

            choices: [

                {
                    text:
                        "Call out: 'Who's there?'",

                    next:
                        "strangerEntrance",

                    effect: {

                        stranger:
                            5

                    }

                },

                {
                    text:
                        "Hide behind the pillar.",

                    next:
                        "strangerEntrance",

                    effect: {

                        stranger:
                            -2

                    }

                },

                {
                    text:
                        "Prepare yourself and wait.",

                    next:
                        "strangerEntrance"

                }

            ]

        },


        /* =========================================
           STRANGER
        ========================================= */

        strangerEntrance: {

            speaker:
                "STRANGER",

            location:
                "ABANDONED SUBWAY",

            character:
                "stranger",

            text:
                "Don't move. I need to know which version of you I'm talking to.",

            choices: [

                {
                    text:
                        "Ask what they mean.",

                    next:
                        "questionStranger",

                    effect: {

                        stranger:
                            5

                    }

                },

                {
                    text:
                        "Demand to know who they are.",

                    next:
                        "demand",

                    effect: {

                        stranger:
                            -2

                    }

                },

                {
                    text:
                        "Back away slowly.",

                    next:
                        "threat",

                    effect: {

                        stranger:
                            -5

                    }

                },

                {
                    text:
                        "Tell them your name.",

                    next:
                        "name",

                    effect: {

                        stranger:
                            8

                    }

                }

            ]

        },


        /* =========================================
           QUESTION
        ========================================= */

        questionStranger: {

            speaker:
                "STRANGER",

            location:
                "ABANDONED SUBWAY",

            character:
                "stranger",

            text:
                "Every decision creates another version of this world. I've watched this station end differently dozens of times.",

            choices: [

                {
                    text:
                        "Ask how many versions of you exist.",

                    next:
                        "versions"

                },

                {
                    text:
                        "Ask why they are here.",

                    next:
                        "mission"

                },

                {
                    text:
                        "Ask what happens if the timeline collapses.",

                    next:
                        "collapse"

                }

            ]

        },


        /* =========================================
           DEMAND
        ========================================= */

        demand: {

            speaker:
                "STRANGER",

            location:
                "ABANDONED SUBWAY",

            character:
                "stranger",

            text:
                "My name doesn't matter. What matters is that your universe is about to become unstable.",

            choices: [

                {
                    text:
                        "Ask what is causing the instability.",

                    next:
                        "cause"

                },

                {
                    text:
                        "Tell them you don't trust them.",

                    next:
                        "distrust",

                    effect: {

                        stranger:
                            -10

                    }

                }

            ]

        },


        /* =========================================
           NAME
        ========================================= */

        name: {

            speaker:
                "STRANGER",

            location:
                "ABANDONED SUBWAY",

            character:
                "stranger",

            text:
                "Alex. I know. I've heard you say it before.",

            choices: [

                {
                    text:
                        "Ask how they know your name.",

                    next:
                        "versions",

                    effect: {

                        stranger:
                            5

                    }

                },

                {
                    text:
                        "Ask whether they have met another Alex.",

                    next:
                        "alternateAlex"

                }

            ]

        },


        /* =========================================
           THREAT
        ========================================= */

        threat: {

            speaker:
                "STRANGER",

            location:
                "ABANDONED SUBWAY",

            character:
                "stranger",

            text:
                "If I wanted to hurt you, you wouldn't have heard me coming.",

            choices: [

                {
                    text:
                        "Lower your guard.",

                    next:
                        "questionStranger",

                    effect: {

                        stranger:
                            7

                    }

                },

                {
                    text:
                        "Run toward the exit.",

                    next:
                        "exit"

                }

            ]

        },


        /* =========================================
           TUNNEL
        ========================================= */

        tunnel: {

            speaker:
                "ALEX",

            location:
                "MAINTENANCE TUNNEL",

            character:
                "alex",

            text:
                "The footprints stop at a metal door. Someone has written one sentence across it: YOU HAVE DONE THIS BEFORE.",

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
                        "memory",

                    effect: {

                        stability:
                            -8

                    }

                },

                {
                    text:
                        "Go back to the station.",

                    next:
                        "footsteps"

                }

            ]

        },


        /* =========================================
           PLATFORM
        ========================================= */

        platform: {

            speaker:
                "ALEX",

            location:
                "SUBWAY PLATFORM",

            character:
                "alex",

            text:
                "You find an old newspaper. The date is tomorrow. The headline reads: CITY VANISHES WITHOUT WARNING.",

            choices: [

                {
                    text:
                        "Keep the newspaper.",

                    next:
                        "memory"

                },

                {
                    text:
                        "Search for today's newspaper.",

                    next:
                        "search"

                },

                {
                    text:
                        "Show the newspaper to the stranger.",

                    next:
                        "strangerEntrance",

                    effect: {

                        stranger:
                            5

                    }

                }

            ]

        },


        /* =========================================
           DEVICE REMOVAL
        ========================================= */

        removeDevice: {

            speaker:
                "SYSTEM",

            location:
                "ABANDONED SUBWAY",

            character:
                "alex",

            text:
                "The device won't come off. A warning appears: REMOVAL MAY DESTABILIZE TIMELINE.",

            choices: [

                {
                    text:
                        "Keep trying to remove it.",

                    next:
                        "collapse",

                    effect: {

                        stability:
                            -20

                    }

                },

                {
                    text:
                        "Stop and leave it alone.",

                    next:
                        "search"

                }

            ]

        },


        /* =========================================
           PORTAL
        ========================================= */

        portal: {

            speaker:
                "SYSTEM",

            location:
                "DIMENSIONAL BREACH",

            character:
                "none",

            text:
                "The device opens a tear in reality. Beyond it is a city that looks almost exactly like yours.",

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
                        "Ask the stranger to go first.",

                    next:
                        "strangerEntrance",

                    effect: {

                        stranger:
                            -5

                    }

                }

            ]

        },


        /* =========================================
           NEW DIMENSION
        ========================================= */

        newDimension: {

            speaker:
                "SYSTEM",

            location:
                "UNKNOWN DIMENSION",

            character:
                "none",

            text:
                "You step through the portal. Reality changes around you. This universe has never seen you before.",

            choices: [

                {
                    text:
                        "Explore the new universe.",

                    next:
                        "exploreNew"

                },

                {
                    text:
                        "Look for another version of yourself.",

                    next:
                        "alternateAlex"

                },

                {
                    text:
                        "Return to the previous universe.",

                    next:
                        "return"

                }

            ]

        },


        /* =========================================
           EXPLORE
        ========================================= */

        exploreNew: {

            speaker:
                "ALEX",

            location:
                "UNKNOWN CITY",

            character:
                "alex",

            text:
                "The city is alive, but nobody seems to recognize you. Then a television screen displays your face.",

            choices: [

                {
                    text:
                        "Walk toward the television.",

                    next:
                        "alternateAlex"

                },

                {
                    text:
                        "Hide from the cameras.",

                    next:
                        "memory"

                },

                {
                    text:
                        "Find the nearest person and ask for help.",

                    next:
                        "strangerEntrance"

                }

            ]

        },


        /* =========================================
           VERSIONS
        ========================================= */

        versions: {

            speaker:
                "STRANGER",

            location:
                "ABANDONED SUBWAY",

            character:
                "stranger",

            text:
                "Too many. Some are heroes. Some are monsters. One of them is responsible for the collapse.",

            choices: [

                {
                    text:
                        "Ask how to find the dangerous version.",

                    next:
                        "alternateAlex"

                },

                {
                    text:
                        "Ask why they haven't stopped them.",

                    next:
                        "mission"

                }

            ]

        },


        /* =========================================
           MISSION
        ========================================= */

        mission: {

            speaker:
                "STRANGER",

            location:
                "ABANDONED SUBWAY",

            character:
                "stranger",

            text:
                "I'm trying to prevent a multiverse event. If it happens, the damage won't stay in this universe.",

            choices: [

                {
                    text:
                        "Ask what the event is.",

                    next:
                        "majorEvent"

                },

                {
                    text:
                        "Offer to help.",

                    next:
                        "teamUp",

                    effect: {

                        stranger:
                            12

                    }

                },

                {
                    text:
                        "Tell them you want to leave.",

                    next:
                        "exit"

                }

            ]

        },


        /* =========================================
           CAUSE
        ========================================= */

        cause: {

            speaker:
                "STRANGER",

            location:
                "ABANDONED SUBWAY",

            character:
                "stranger",

            text:
                "Someone is deliberately changing timelines. Every change is weakening the barrier between universes.",

            choices: [

                {
                    text:
                        "Ask who is doing it.",

                    next:
                        "alternateAlex"

                },

                {
                    text:
                        "Ask how to stop them.",

                    next:
                        "teamUp"

                }

            ]

        },


        /* =========================================
           COLLAPSE
        ========================================= */

        collapse: {

            speaker:
                "SYSTEM",

            location:
                "ABANDONED SUBWAY",

            character:
                "none",

            text:
                "The lights flicker. The walls distort for a second. You realize the station is beginning to exist in two places at once.",

            choices: [

                {
                    text:
                        "Use the device to stabilize reality.",

                    next:
                        "stabilize",

                    effect: {

                        stability:
                            15

                    }

                },

                {
                    text:
                        "Open a portal and escape.",

                    next:
                        "newDimension",

                    effect: {

                        stability:
                            -15

                    }

                },

                {
                    text:
                        "Do nothing and watch what happens.",

                    next:
                        "majorEvent"

                }

            ]

        },


        /* =========================================
           STABILIZE
        ========================================= */

        stabilize: {

            speaker:
                "SYSTEM",

            location:
                "ABANDONED SUBWAY",

            character:
                "alex",

            text:
                "The device absorbs the dimensional energy. Reality stops shaking... temporarily.",

            choices: [

                {
                    text:
                        "Ask the stranger what comes next.",

                    next:
                        "mission"

                },

                {
                    text:
                        "Investigate where the energy came from.",

                    next:
                        "majorEvent"

                }

            ]

        },


        /* =========================================
           MEMORY
        ========================================= */

        memory: {

            speaker:
                "ALEX",

            location:
                "UNKNOWN",

            character:
                "alex",

            text:
                "A memory flashes through your mind. You've stood here before. But you don't remember this universe.",

            choices: [

                {
                    text:
                        "Try to remember what happened.",

                    next:
                        "alternateAlex",

                    effect: {

                        stability:
                            -5

                    }

                },

                {
                    text:
                        "Ignore the memory.",

                    next:
                        "strangerEntrance"

                }

            ]

        },


        /* =========================================
           ALTERNATE ALEX
        ========================================= */

        alternateAlex: {

            speaker:
                "ALEX",

            location:
                "UNKNOWN DIMENSION",

            character:
                "alex",

            text:
                "Across the street stands another version of you. They look at you like they've been waiting.",

            choices: [

                {
                    text:
                        "Approach your alternate self.",

                    next:
                        "meetAlex"

                },

                {
                    text:
                        "Watch from a distance.",

                    next:
                        "majorEvent"

                },

                {
                    text:
                        "Leave before they notice you.",

                    next:
                        "return"

                }

            ]

        },


        /* =========================================
           MEET ALEX
        ========================================= */

        meetAlex: {

            speaker:
                "OTHER ALEX",

            location:
                "UNKNOWN DIMENSION",

            character:
                "alex",

            text:
                "You're late. I was beginning to think you weren't coming.",

            choices: [

                {
                    text:
                        "Ask what they know.",

                    next:
                        "majorEvent"

                },

                {
                    text:
                        "Ask why they were waiting.",

                    next:
                        "majorEvent"

                },

                {
                    text:
                        "Tell them you don't trust them.",

                    next:
                        "majorEvent",

                    effect: {

                        stability:
                            -5

                    }

                }

            ]

        },


        /* =========================================
           MAJOR EVENT
        ========================================= */

        majorEvent: {

            speaker:
                "SYSTEM",

            location:
                "MULTIVERSE",

            character:
                "none",

            text:
                "⚠ A MASSIVE DISTURBANCE HAS APPEARED. Multiple dimensions are experiencing the same event at the same time.",

            choices: [

                {
                    text:
                        "Find out which dimensions are affected.",

                    next:
                        "eventAftermath"

                },

                {
                    text:
                        "Travel to another affected universe.",

                    next:
                        "newDimension"

                },

                {
                    text:
                        "Try to stop the event from here.",

                    next:
                        "eventControl",

                    effect: {

                        stability:
                            -10

                    }

                }

            ]

        },


        /* =========================================
           TEAM UP
        ========================================= */

        teamUp: {

            speaker:
                "STRANGER",

            location:
                "ABANDONED SUBWAY",

            character:
                "stranger",

            text:
                "Then we're going to need to move quickly. The fracture has already reached other universes.",

            choices: [

                {
                    text:
                        "Ask for the plan.",

                    next:
                        "majorEvent"

                },

                {
                    text:
                        "Tell the stranger you trust them.",

                    next:
                        "majorEvent",

                    effect: {

                        stranger:
                            15

                    }

                },

                {
                    text:
                        "Keep your distance and follow.",

                    next:
                        "majorEvent"

                }

            ]

        },


        /* =========================================
           EVENT AFTERMATH
        ========================================= */

        eventAftermath: {

            speaker:
                "SYSTEM",

            location:
                "MULTIVERSE",

            character:
                "none",

            text:
                "The map reveals several glowing dimensions. Some are collapsing. Others are changing. One appears to be spreading the disturbance.",

            choices: [

                {
                    text:
                        "Visit the collapsing dimension.",

                    next:
                        "newDimension"

                },

                {
                    text:
                        "Visit the source of the disturbance.",

                    next:
                        "newDimension"

                },

                {
                    text:
                        "Return to an earlier dimension.",

                    next:
                        "return"

                }

            ]

        },


        /* =========================================
           EVENT CONTROL
        ========================================= */

        eventControl: {

            speaker:
                "SYSTEM",

            location:
                "DIMENSIONAL CORE",

            character:
                "none",

            text:
                "The device connects to the event. For a moment, you can feel millions of universes around you.",

            choices: [

                {
                    text:
                        "Push the event away from your universe.",

                    next:
                        "eventSuccess",

                    effect: {

                        stability:
                            20

                    }

                },

                {
                    text:
                        "Redirect the event into an empty dimension.",

                    next:
                        "eventSuccess",

                    effect: {

                        stability:
                            10

                    }

                },

                {
                    text:
                        "Try to absorb the event.",

                    next:
                        "eventFailure",

                    effect: {

                        stability:
                            -30

                    }

                }

            ]

        },


        /* =========================================
           EVENT SUCCESS
        ========================================= */

        eventSuccess: {

            speaker:
                "SYSTEM",

            location:
                "MULTIVERSE",

            character:
                "none",

            text:
                "The fracture slows. Thousands of timelines stabilize. But something on the other side noticed you.",

            choices: [

                {
                    text:
                        "Find out what noticed you.",

                    next:
                        "alternateAlex"

                },

                {
                    text:
                        "Return to your original universe.",

                    next:
                        "return"

                }

            ]

        },


        /* =========================================
           EVENT FAILURE
        ========================================= */

        eventFailure: {

            speaker:
                "SYSTEM",

            location:
                "COLLAPSING REALITY",

            character:
                "none",

            text:
                "The device overloads. Your universe begins collapsing around you.",

            choices: [

                {
                    text:
                        "Escape to another dimension.",

                    next:
                        "newDimension"

                },

                {
                    text:
                        "Stay and try to repair reality.",

                    next:
                        "eventControl"

                }

            ]

        },


        /* =========================================
           RETURN
        ========================================= */

        return: {

            speaker:
                "SYSTEM",

            location:
                "PREVIOUS DIMENSION",

            character:
                "none",

            text:
                "You return to a dimension you have already visited. Everything looks familiar... except one detail has changed.",

            choices: [

                {
                    text:
                        "Investigate what changed.",

                    next:
                        "memory"

                },

                {
                    text:
                        "Find the stranger.",

                    next:
                        "strangerEntrance"

                },

                {
                    text:
                        "Leave this dimension again.",

                    next:
                        "newDimension"

                }

            ]

        }

    };


    return scenes[sceneName] ||
        scenes.intro;

}


/* =====================================================
   RENDER SCENE
===================================================== */

function renderScene(scene) {

    const dimension =
        getDimension();


    document.getElementById(
        "speaker"
    ).textContent =
        scene.speaker;


    document.getElementById(
        "dialogueText"
    ).textContent =
        scene.text;


    document.getElementById(
        "location"
    ).textContent =
        scene.location;


    document.getElementById(
        "dimensionName"
    ).textContent =
        game.currentDimension;


    document.getElementById(
        "storylineName"
    ).textContent =
        game.storyline;


    /* =========================================
       BACKGROUND
    ========================================= */

    const hue =
        Math.floor(
            Math.random() * 360
        );


    document.getElementById(
        "background"
    ).style.background =
        `
        radial-gradient(
            circle at 50% 35%,
            hsl(
                ${hue},
                28%,
                25%
            ),
            #11111c 50%,
            #030305 100%
        )
        `;


    /* =========================================
       CHARACTERS
    ========================================= */

    const alex =
        document.getElementById(
            "alex"
        );

    const stranger =
        document.getElementById(
            "stranger"
        );


    alex.classList.add(
        "hidden"
    );

    stranger.classList.add(
        "hidden"
    );


    if (
        scene.character ===
        "alex"
    ) {

        alex.classList.remove(
            "hidden"
        );

        alex.classList.add(
            "active"
        );

    }


    if (
        scene.character ===
        "stranger"
    ) {

        stranger.classList.remove(
            "hidden"
        );

        stranger.classList.add(
            "active"
        );

    }


    /* =========================================
       CHOICES
    ========================================= */

    const choices =
        document.getElementById(
            "choices"
        );


    choices.innerHTML = "";


    scene.choices.forEach(
        (choice, index) => {

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

                    selectChoice(
                        choice
                    );

                };


            choices.appendChild(
                button
            );

        }
    );


    updateUI();

}


/* =====================================================
   SELECT CHOICE
===================================================== */

function selectChoice(choice) {

    /*
    Save the choice to the current
    dimension.
    */

    game.choices.push({

        dimension:
            game.currentDimension,

        scene:
            game.scene,

        choice:
            choice.text,

        timestamp:
            Date.now()

    });


    /* =========================================
       EFFECTS
    ========================================= */

    if (choice.effect) {

        if (
            choice.effect.alex
        ) {

            game.relationships.alex +=
                choice.effect.alex;

        }


        if (
            choice.effect.stranger
        ) {

            game.relationships.stranger +=
                choice.effect.stranger;

        }


        if (
            choice.effect.stability
        ) {

            game.stability +=
                choice.effect.stability;

        }

    }


    game.relationships.alex =
        clamp(
            game.relationships.alex
        );


    game.relationships.stranger =
        clamp(
            game.relationships.stranger
        );


    game.stability =
        clamp(
            game.stability
        );


    /* =========================================
       DIMENSION TRAVEL
    ========================================= */

    if (
        choice.next ===
        "newDimension"
    ) {

        triggerDimensionTravel();

        return;

    }


    /*
    If returning to an old dimension,
    don't create a new one.
    */

    game.scene =
        choice.next;


    /*
    Low stability can trigger
    a multiverse event.
    */

    if (
        game.stability <= 20
    ) {

        triggerMultiverseEvent();

    }


    saveGame();

    showSave();

    renderScene(
        getScene(
            game.scene
        )
    );

}


/* =====================================================
   NEW DIMENSION
===================================================== */

function triggerDimensionTravel() {

    const dimension =
        createDimension();


    game.currentDimension =
        dimension.id;


    game.stability =
        dimension.stability;


    game.scene =
        "newDimension";


    saveGame();


    renderScene(
        getScene(
            "newDimension"
        )
    );

}


/* =====================================================
   MULTIVERSE EVENT
===================================================== */

function triggerMultiverseEvent() {

    const eventNames = [

        "THE FRACTURE",

        "THE GREAT COLLAPSE",

        "THE CONVERGENCE",

        "THE ECHO",

        "THE PARADOX",

        "THE INVERSION",

        "THE VOID",

        "THE TIMELINE WAR"

    ];


    const name =
        random(
            eventNames
        );


    /*
    Don't create the same event twice
    in a row.
    */

    const latest =
        game.events[
            game.events.length - 1
        ];


    if (
        latest &&
        latest.name === name
    ) {

        return;

    }


    const affected = [];


    /*
    Affect most discovered dimensions.
    */

    game.dimensions.forEach(
        dimension => {

            if (
                Math.random() < .75
            ) {

                const damage =
                    Math.floor(
                        Math.random() * 20
                    ) + 5;


                dimension.stability =
                    clamp(
                        dimension.stability -
                        damage
                    );


                affected.push(
                    dimension.id
                );

            }

        }
    );


    game.events.push({

        name,

        affected,

        timestamp:
            Date.now()

    });


    showEvent(
        name
    );


    saveGame();

    updateUI();

}


/* =====================================================
   UI UPDATE
===================================================== */

function updateUI() {

    document.getElementById(
        "dimensionName"
    ).textContent =
        game.currentDimension;


    document.getElementById(
        "storylineName"
    ).textContent =
        game.storyline;


    document.getElementById(
        "stabilityFill"
    ).style.width =
        game.stability + "%";


    document.getElementById(
        "stabilityText"
    ).textContent =
        game.stability + "%";


    document.getElementById(
        "alexRelationship"
    ).style.width =
        game.relationships.alex +
        "%";


    document.getElementById(
        "strangerRelationship"
    ).style.width =
        game.relationships.stranger +
        "%";


    updateEvents();

}


/* =====================================================
   EVENTS DISPLAY
===================================================== */

function updateEvents() {

    const list =
        document.getElementById(
            "eventList"
        );


    if (
        game.events.length === 0
    ) {

        list.textContent =
            "No active multiverse events.";

        return;

    }


    list.innerHTML =
        game.events
            .slice(-4)
            .map(
                event => {

                    return `
                        <div>
                            ⚠ ${event.name}
                            <br>
                            Affecting
                            ${event.affected.length}
                            dimensions
                        </div>
                    `;

                }
            )
            .join("<br>");

}


/* =====================================================
   EVENT WARNING
===================================================== */

function showEvent(name) {

    const warning =
        document.getElementById(
            "eventWarning"
        );


    document.getElementById(
        "eventName"
    ).textContent =
        name;


    warning.style.opacity =
        "1";


    setTimeout(
        () => {

            warning.style.opacity =
                "0";

        },
        4500
    );

}


/* =====================================================
   MAP
===================================================== */

function openMap() {

    const list =
        document.getElementById(
            "dimensionList"
        );


    list.innerHTML = "";


    game.dimensions.forEach(
        dimension => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "dimensionCard";


            card.innerHTML = `

                <strong>
                    UNIVERSE ${dimension.id}
                </strong>

                <br>

                Location:
                ${dimension.location}

                <br>

                Reality Stability:
                ${dimension.stability}%

                <br><br>

                ${
                    dimension.id ===
                    game.currentDimension
                    ? "◆ CURRENT DIMENSION"
                    : "◇ TRAVEL HERE"
                }

            `;


            card.onclick =
                () => {

                    if (
                        dimension.id !==
                        game.currentDimension
                    ) {

                        travelBack(
                            dimension.id
                        );

                    }

                };


            list.appendChild(
                card
            );

        }
    );


    document.getElementById(
        "mapOverlay"
    ).classList.remove(
        "hidden"
    );

}


/* =====================================================
   STORYLINES
===================================================== */

function openStorylines() {

    const list =
        document.getElementById(
            "storyList"
        );


    const archives =
        JSON.parse(
            localStorage.getItem(
                "multiverseArchives"
            ) || "[]"
        );


    list.innerHTML = `

        <div class="storyCard">

            <strong>
                CURRENT STORYLINE
            </strong>

            <br><br>

            ${game.storyline}

            <br>

            Multiverse #${game.multiverseId}

            <br>

            ${game.dimensions.length}
            dimensions discovered.

        </div>

    `;


    archives.forEach(
        archive => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "storyCard";


            card.innerHTML = `

                <strong>
                    ARCHIVED MULTIVERSE
                </strong>

                <br><br>

                ${archive.storyline}

                <br>

                Multiverse #${archive.multiverseId}

                <br>

                ${archive.dimensions.length}
                dimensions

            `;


            list.appendChild(
                card
            );

        }
    );


    document.getElementById(
        "storyOverlay"
    ).classList.remove(
        "hidden"
    );

}


/* =====================================================
   NEW STORYLINE
===================================================== */

function newStoryline() {

    archiveCurrent();


    game =
        createNewGame();


    saveGame();


    closeWindows();


    renderScene(
        getScene(
            "intro"
        )
    );

}


/* =====================================================
   ARCHIVE
===================================================== */

function archiveCurrent() {

    const archives =
        JSON.parse(
            localStorage.getItem(
                "multiverseArchives"
            ) || "[]"
        );


    archives.push(
        game
    );


    localStorage.setItem(
        "multiverseArchives",
        JSON.stringify(
            archives
        )
    );

}


/* =====================================================
   HARD RESET
===================================================== */

let resetType = null;


function hardReset() {

    resetType =
        "hard";


    document.getElementById(
        "resetTitle"
    ).textContent =
        "HARD RESET";


    document.getElementById(
        "resetDescription"
    ).textContent =
        "Start a completely new storyline. Your current multiverse will be archived and preserved.";


    document.getElementById(
        "resetOverlay"
    ).classList.remove(
        "hidden"
    );

}


/* =====================================================
   TRUE RESET
===================================================== */

function trueReset() {

    resetType =
        "true";


    document.getElementById(
        "resetTitle"
    ).textContent =
        "TRUE RESET";


    document.getElementById(
        "resetDescription"
    ).textContent =
        "This will permanently erase your current multiverse, dimensions, choices, events, and archived storylines from this browser.";


    document.getElementById(
        "resetOverlay"
    ).classList.remove(
        "hidden"
    );

}


/* =====================================================
   CONFIRM RESET
===================================================== */

function confirmReset() {

    if (
        resetType ===
        "hard"
    ) {

        newStoryline();

        return;

    }


    if (
        resetType ===
        "true"
    ) {

        localStorage.removeItem(
            "multiverseGame"
        );


        localStorage.removeItem(
            "multiverseArchives"
        );


        game =
            createNewGame();


        saveGame();


        closeWindows();


        renderScene(
            getScene(
                "intro"
            )
        );

    }

}


/* =====================================================
   CLOSE WINDOWS
===================================================== */

function closeWindows() {

    document
        .querySelectorAll(
            ".overlay"
        )
        .forEach(
            overlay => {

                overlay.classList.add(
                    "hidden"
                );

            }
        );

}


/* =====================================================
   SAVE MESSAGE
===================================================== */

function showSave() {

    const message =
        document.getElementById(
            "saveMessage"
        );


    message.style.opacity =
        "1";


    setTimeout(
        () => {

            message.style.opacity =
                "0";

        },
        1000
    );

}


/* =====================================================
   START GAME
===================================================== */

loadGame();

updateUI();

renderScene(
    getScene(
        game.scene ||
        "intro"
    )
);
