"use strict";

/*
=========================================================
MULTIVERSE: FRACTURED
OPTIMIZED GAME ENGINE
=========================================================
*/


/* ======================================================
   ELEMENT CACHE

   We find the HTML elements ONCE instead of repeatedly
   searching the page.
====================================================== */

const UI = {

    background:
        document.getElementById("background"),

    story:
        document.getElementById("story"),

    dimension:
        document.getElementById("dimensionNumber"),

    location:
        document.getElementById("location"),

    speaker:
        document.getElementById("speaker"),

    text:
        document.getElementById("text"),

    choices:
        document.getElementById("choices"),

    alex:
        document.getElementById("alex"),

    stranger:
        document.getElementById("stranger"),

    event:
        document.getElementById("event"),

    eventName:
        document.getElementById("eventName"),

    stability:
        document.getElementById("stabilityBar"),

    alexBar:
        document.getElementById("alexBar"),

    strangerBar:
        document.getElementById("strangerBar"),

    window:
        document.getElementById("window"),

    windowTitle:
        document.getElementById("windowTitle"),

    windowContent:
        document.getElementById("windowContent"),

    backtrack:
        document.getElementById("backtrackButton"),

    map:
        document.getElementById("mapButton"),

    newStory:
        document.getElementById("newStoryButton"),

    reset:
        document.getElementById("resetButton"),

    closeWindow:
        document.getElementById("closeWindow")

};


/* ======================================================
   DEFAULT GAME
====================================================== */

function createDefaultGame() {

    return {

        storyline:
            "The Fractured Rebellion",

        dimension:
            "01-A",

        scene:
            "intro",

        stability:
            100,

        alex:
            50,

        stranger:
            50,

        dimensions: [

            {
                id:
                    "01-A",

                location:
                    "Abandoned Subway",

                stability:
                    100,

                story:
                    "main"
            }

        ],

        history: [],

        events: [],

        visited:
            {}

    };

}


/* ======================================================
   GAME STATE
====================================================== */

let game =
    createDefaultGame();


/* ======================================================
   MAIN STORY
====================================================== */

const mainScenes = {

    intro: {

        speaker:
            "SYSTEM",

        location:
            "ABANDONED SUBWAY",

        character:
            "",

        text:
            "11:47 PM. You wake up on the floor of an abandoned subway station. There are no passengers. No trains. Your wrist is glowing.",

        choices: [

            [
                "Examine the device on your wrist.",
                "device",
                "stability:-5"
            ],

            [
                "Search the station for another person.",
                "search",
                ""
            ],

            [
                "Look for a way out.",
                "exit",
                ""
            ],

            [
                "Stay still and listen.",
                "footsteps",
                ""
            ]

        ]

    },


    device: {

        speaker:
            "SYSTEM",

        location:
            "ABANDONED SUBWAY",

        character:
            "alex",

        text:
            "The device displays one message: UNIVERSE 01-A. TIMELINE STABILITY: 95%.",

        choices: [

            [
                "Activate the device.",
                "portal",
                "stability:-15"
            ],

            [
                "Try to remove the device.",
                "remove",
                ""
            ],

            [
                "Leave it alone.",
                "search",
                ""
            ]

        ]

    },


    search: {

        speaker:
            "ALEX",

        location:
            "ABANDONED SUBWAY",

        character:
            "alex",

        text:
            "You search the empty station. A second set of footprints leads toward a dark maintenance tunnel.",

        choices: [

            [
                "Follow the footprints.",
                "tunnel",
                ""
            ],

            [
                "Search the platform.",
                "platform",
                ""
            ],

            [
                "Call out to whoever made them.",
                "stranger",
                "stranger:5"
            ]

        ]

    },


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

            [
                "Step through the doorway.",
                "portal",
                ""
            ],

            [
                "Close the door.",
                "footsteps",
                ""
            ]

        ]

    },


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

            [
                "Call out: Who's there?",
                "stranger",
                "stranger:5"
            ],

            [
                "Hide behind a pillar.",
                "stranger",
                ""
            ],

            [
                "Wait and see who appears.",
                "stranger",
                ""
            ]

        ]

    },


    stranger: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        character:
            "stranger",

        text:
            "Don't move. I need to know which version of you I'm talking to.",

        choices: [

            [
                "Ask what they mean.",
                "explain",
                "stranger:5"
            ],

            [
                "Ask who they are.",
                "identity",
                ""
            ],

            [
                "Back away slowly.",
                "threat",
                "stranger:-5"
            ],

            [
                "Tell them you want answers.",
                "explain",
                ""
            ]

        ]

    },


    explain: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        character:
            "stranger",

        text:
            "Every choice creates another version of reality. I've seen this station play out dozens of different ways.",

        choices: [

            [
                "Ask how many versions of you exist.",
                "versions",
                ""
            ],

            [
                "Ask why they're here.",
                "mission",
                ""
            ],

            [
                "Ask what happens if reality collapses.",
                "collapse",
                ""
            ]

        ]

    },


    identity: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        character:
            "stranger",

        text:
            "Call me the Stranger. That's all you need to know for now.",

        choices: [

            [
                "Ask about the device.",
                "deviceTruth",
                ""
            ],

            [
                "Ask why they know about you.",
                "versions",
                ""
            ],

            [
                "Tell them you don't trust them.",
                "threat",
                "stranger:-10"
            ]

        ]

    },


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

            [
                "Lower your guard.",
                "explain",
                "stranger:5"
            ],

            [
                "Run toward the exit.",
                "exit",
                ""
            ]

        ]

    },


    tunnel: {

        speaker:
            "ALEX",

        location:
            "MAINTENANCE TUNNEL",

        character:
            "alex",

        text:
            "The footprints stop at a metal door. Written across it are four words: YOU HAVE DONE THIS BEFORE.",

        choices: [

            [
                "Open the door.",
                "portal",
                ""
            ],

            [
                "Touch the writing.",
                "memory",
                "stability:-8"
            ],

            [
                "Go back.",
                "footsteps",
                ""
            ]

        ]

    },


    platform: {

        speaker:
            "ALEX",

        location:
            "SUBWAY PLATFORM",

        character:
            "alex",

        text:
            "You find an old newspaper. The date is tomorrow. The headline says: CITY VANISHES WITHOUT WARNING.",

        choices: [

            [
                "Keep the newspaper.",
                "memory",
                ""
            ],

            [
                "Show it to the Stranger.",
                "stranger",
                ""
            ],

            [
                "Search for another newspaper.",
                "search",
                ""
            ]

        ]

    },


    remove: {

        speaker:
            "SYSTEM",

        location:
            "ABANDONED SUBWAY",

        character:
            "alex",

        text:
            "The device refuses to detach. A warning appears: REMOVAL MAY DESTABILIZE TIMELINE.",

        choices: [

            [
                "Keep trying.",
                "collapse",
                "stability:-20"
            ],

            [
                "Stop.",
                "search",
                ""
            ]

        ]

    },


    portal: {

        speaker:
            "SYSTEM",

        location:
            "DIMENSIONAL BREACH",

        character:
            "",

        text:
            "The device opens a tear in reality. Beyond it is a city that looks almost exactly like yours.",

        choices: [

            [
                "Enter the new dimension.",
                "newDimension",
                ""
            ],

            [
                "Close the portal.",
                "footsteps",
                ""
            ],

            [
                "Ask the Stranger to go first.",
                "stranger",
                "stranger:-5"
            ]

        ]

    },


    versions: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        character:
            "stranger",

        text:
            "Too many. Some are heroes. Some are monsters. One version of you may be responsible for the collapse.",

        choices: [

            [
                "Ask how to find them.",
                "alternate",
                ""
            ],

            [
                "Ask why they haven't stopped them.",
                "mission",
                ""
            ]

        ]

    },


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

            [
                "Ask what the event is.",
                "event",
                ""
            ],

            [
                "Offer to help.",
                "event",
                "stranger:12"
            ],

            [
                "Tell them you want to leave.",
                "exit",
                ""
            ]

        ]

    },


    collapse: {

        speaker:
            "SYSTEM",

        location:
            "ABANDONED SUBWAY",

        character:
            "",

        text:
            "The lights flicker. The walls distort. For a moment, the station exists in two places at once.",

        choices: [

            [
                "Stabilize reality.",
                "stable",
                "stability:15"
            ],

            [
                "Open a portal.",
                "newDimension",
                "stability:-15"
            ],

            [
                "Do nothing.",
                "event",
                ""
            ]

        ]

    },


    stable: {

        speaker:
            "SYSTEM",

        location:
            "DIMENSIONAL CORE",

        character:
            "alex",

        text:
            "The device absorbs the dimensional energy. Reality stops shaking... temporarily.",

        choices: [

            [
                "Ask what happens next.",
                "mission",
                ""
            ],

            [
                "Investigate the energy.",
                "event",
                ""
            ]

        ]

    },


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

            [
                "Try to remember.",
                "alternate",
                "stability:-5"
            ],

            [
                "Ignore the memory.",
                "stranger",
                ""
            ]

        ]

    },


    alternate: {

        speaker:
            "ALEX",

        location:
            "UNKNOWN DIMENSION",

        character:
            "alex",

        text:
            "Across the street stands another version of you. They look directly at you like they've been waiting.",

        choices: [

            [
                "Approach them.",
                "meetAlternate",
                ""
            ],

            [
                "Watch from a distance.",
                "event",
                ""
            ],

            [
                "Leave.",
                "return",
                ""
            ]

        ]

    },


    meetAlternate: {

        speaker:
            "OTHER ALEX",

        location:
            "UNKNOWN DIMENSION",

        character:
            "alex",

        text:
            "You're late. I was beginning to think you weren't coming.",

        choices: [

            [
                "Ask what they know.",
                "event",
                ""
            ],

            [
                "Ask why they were waiting.",
                "event",
                ""
            ],

            [
                "Ask how to return.",
                "return",
                ""
            ]

        ]

    },


    deviceTruth: {

        speaker:
            "STRANGER",

        location:
            "ABANDONED SUBWAY",

        character:
            "stranger",

        text:
            "That device isn't a phone. It's a key. Someone built it to open doors between realities.",

        choices: [

            [
                "Ask who built it.",
                "event",
                ""
            ],

            [
                "Ask where the key leads.",
                "newDimension",
                ""
            ]

        ]

    },


    event: {

        speaker:
            "SYSTEM",

        location:
            "MULTIVERSE",

        character:
            "",

        text:
            "⚠ A MASSIVE DISTURBANCE HAS APPEARED. Multiple dimensions are experiencing the same event at the same time.",

        choices: [

            [
                "Investigate the affected dimensions.",
                "eventAfter",
                ""
            ],

            [
                "Travel to another universe.",
                "newDimension",
                ""
            ],

            [
                "Try to stop it.",
                "eventControl",
                "stability:-10"
            ]

        ]

    },


    eventAfter: {

        speaker:
            "SYSTEM",

        location:
            "MULTIVERSE",

        character:
            "",

        text:
            "Your device displays a map of the multiverse. Most dimensions are flashing red. One dimension appears to be causing the disturbance.",

        choices: [

            [
                "Go to the source.",
                "newDimension",
                ""
            ],

            [
                "Return to your original dimension.",
                "return",
                ""
            ]

        ]

    },


    eventControl: {

        speaker:
            "SYSTEM",

        location:
            "DIMENSIONAL CORE",

        character:
            "",

        text:
            "The device connects to the event. For a moment, you can feel millions of universes around you.",

        choices: [

            [
                "Push the event away.",
                "success",
                "stability:20"
            ],

            [
                "Redirect it.",
                "success",
                "stability:10"
            ],

            [
                "Absorb the event.",
                "failure",
                "stability:-30"
            ]

        ]

    },


    success: {

        speaker:
            "SYSTEM",

        location:
            "MULTIVERSE",

        character:
            "",

        text:
            "The fracture slows. Thousands of timelines stabilize. But something on the other side noticed you.",

        choices: [

            [
                "Find out what noticed you.",
                "alternate",
                ""
            ],

            [
                "Return home.",
                "return",
                ""
            ]

        ]

    },


    failure: {

        speaker:
            "SYSTEM",

        location:
            "COLLAPSING REALITY",

        character:
            "",

        text:
            "The device overloads. Your universe begins collapsing around you.",

        choices: [

            [
                "Escape.",
                "newDimension",
                ""
            ],

            [
                "Try again.",
                "eventControl",
                ""
            ]

        ]

    },


    return: {

        speaker:
            "SYSTEM",

        location:
            "PREVIOUS DIMENSION",

        character:
            "",

        text:
            "You return to a dimension you've visited before. Everything looks familiar... except one important detail has changed.",

        choices: [

            [
                "Investigate.",
                "memory",
                ""
            ],

            [
                "Find the Stranger.",
                "stranger",
                ""
            ],

            [
                "Leave again.",
                "newDimension",
                ""
            ]

        ]

    }

};


/* ======================================================
   SILENT CITY — COMPLETELY DIFFERENT STORYLINE
====================================================== */

const silentScenes = {

    start: {

        speaker:
            "SYSTEM",

        location:
            "DIMENSION 73-Z",

        character:
            "",

        text:
            "You arrive in Dimension 73-Z. The city looks normal. Cars are parked everywhere. Lights are on. But there isn't a single person anywhere.",

        choices: [

            [
                "Enter the nearest building.",
                "building",
                ""
            ],

            [
                "Walk toward the city center.",
                "center",
                ""
            ],

            [
                "Search the parked cars.",
                "cars",
                ""
            ],

            [
                "Call out to see if anyone answers.",
                "call",
                ""
            ]

        ]

    },


    building: {

        speaker:
            "ALEX",

        location:
            "ABANDONED APARTMENT",

        character:
            "alex",

        text:
            "Dinner is still sitting on the table. A television is playing a news report, but the reporter isn't speaking. They're staring directly at you.",

        choices: [

            [
                "Turn off the television.",
                "tv",
                ""
            ],

            [
                "Watch the report.",
                "report",
                ""
            ],

            [
                "Search the apartment.",
                "note",
                ""
            ],

            [
                "Leave.",
                "center",
                ""
            ]

        ]

    },


    tv: {

        speaker:
            "TELEVISION",

        location:
            "ABANDONED APARTMENT",

        character:
            "",

        text:
            "The television turns itself back on. The reporter finally speaks: 'If you're seeing this message, you're not from this dimension.'",

        choices: [

            [
                "Ask who created the message.",
                "report",
                ""
            ],

            [
                "Unplug the television.",
                "power",
                ""
            ],

            [
                "Keep watching.",
                "report",
                ""
            ]

        ]

    },


    report: {

        speaker:
            "TELEVISION",

        location:
            "ABANDONED APARTMENT",

        character:
            "",

        text:
            "The reporter looks terrified. 'The people of this universe didn't disappear. They were moved somewhere else. And whatever moved them knows you're here.'",

        choices: [

            [
                "Ask where they were moved.",
                "underground",
                ""
            ],

            [
                "Ask who moved them.",
                "entity",
                ""
            ],

            [
                "Destroy the television.",
                "power",
                ""
            ]

        ]

    },


    note: {

        speaker:
            "ALEX",

        location:
            "ABANDONED APARTMENT",

        character:
            "alex",

        text:
            "You find a handwritten note underneath the table. It says: DON'T TRUST THE PERSON WHO LOOKS LIKE YOU.",

        choices: [

            [
                "Take the note.",
                "center",
                ""
            ],

            [
                "Search for whoever wrote it.",
                "underground",
                ""
            ],

            [
                "Ignore the warning.",
                "center",
                ""
            ]

        ]

    },


    power: {

        speaker:
            "SYSTEM",

        location:
            "ABANDONED APARTMENT",

        character:
            "",

        text:
            "The television explodes into static. For half a second, you see hundreds of people standing in a completely white room.",

        choices: [

            [
                "Follow the signal.",
                "underground",
                ""
            ],

            [
                "Leave.",
                "center",
                ""
            ]

        ]

    },


    center: {

        speaker:
            "ALEX",

        location:
            "CITY CENTER",

        character:
            "alex",

        text:
            "Every traffic light suddenly turns green. Then thousands of empty cars start moving through the streets by themselves.",

        choices: [

            [
                "Follow the cars.",
                "cars",
                ""
            ],

            [
                "Run into the subway.",
                "underground",
                ""
            ],

            [
                "Stay in the street.",
                "entity",
                ""
            ],

            [
                "Hide inside a building.",
                "building",
                ""
            ]

        ]

    },


    cars: {

        speaker:
            "SYSTEM",

        location:
            "CITY STREET",

        character:
            "",

        text:
            "You search one of the cars. The radio turns on by itself. A voice whispers: 'Dimension 73-Z is no longer considered inhabited.'",

        choices: [

            [
                "Ask who is speaking.",
                "entity",
                ""
            ],

            [
                "Trace the radio signal.",
                "underground",
                ""
            ],

            [
                "Get out.",
                "center",
                ""
            ]

        ]

    },


    call: {

        speaker:
            "ALEX",

        location:
            "EMPTY CITY",

        character:
            "alex",

        text:
            "Your voice echoes between the buildings. Then someone answers from directly behind you.",

        choices: [

            [
                "Turn around.",
                "double",
                ""
            ],

            [
                "Run.",
                "center",
                ""
            ],

            [
                "Ask who they are.",
                "double",
                ""
            ]

        ]

    },


    double: {

        speaker:
            "OTHER ALEX",

        location:
            "CITY STREET",

        character:
            "stranger",

        text:
            "You turn around and see yourself. The other you smiles. 'You shouldn't have come here.'",

        choices: [

            [
                "Ask what happened.",
                "entity",
                ""
            ],

            [
                "Ask why they look like you.",
                "doubleTruth",
                ""
            ],

            [
                "Attack them.",
                "fight",
                ""
            ],

            [
                "Trust them.",
                "underground",
                ""
            ]

        ]

    },


    doubleTruth: {

        speaker:
            "OTHER ALEX",

        location:
            "CITY STREET",

        character:
            "stranger",

        text:
            "The other you looks at your wrist device. 'Because you're not the first version of yourself to arrive here.'",

        choices: [

            [
                "Ask where the others went.",
                "underground",
                ""
            ],

            [
                "Ask how many versions exist.",
                "entity",
                ""
            ],

            [
                "Demand answers.",
                "entity",
                ""
            ]

        ]

    },


    fight: {

        speaker:
            "OTHER ALEX",

        location:
            "CITY STREET",

        character:
            "stranger",

        text:
            "The other you doesn't fight back. They simply touch your wrist device. Suddenly the entire city disappears.",

        choices: [

            [
                "Ask what they did.",
                "entity",
                ""
            ],

            [
                "Activate your device.",
                "underground",
                ""
            ]

        ]

    },


    underground: {

        speaker:
            "SYSTEM",

        location:
            "SUBWAY BENEATH 73-Z",

        character:
            "",

        text:
            "You descend beneath the city. The tunnels are filled with doors. Every door has a different universe number written across it.",

        choices: [

            [
                "Open Door 73-Z.",
                "entity",
                ""
            ],

            [
                "Open Door 01-A.",
                "return",
                ""
            ],

            [
                "Open a random door.",
                "newDimension",
                ""
            ],

            [
                "Ask the other Alex which door to use.",
                "double",
                ""
            ]

        ]

    },


    entity: {

        speaker:
            "THE ARCHIVIST",

        location:
            "THE WHITE ROOM",

        character:
            "stranger",

        text:
            "A figure appears in the white room. 'Every universe eventually asks the same question: who created the multiverse?'",

        choices: [

            [
                "Ask who created it.",
                "truth",
                ""
            ],

            [
                "Ask what happened to the people.",
                "people",
                ""
            ],

            [
                "Ask why you were brought here.",
                "reason",
                ""
            ],

            [
                "Refuse to answer.",
                "entity",
                ""
            ]

        ]

    },


    truth: {

        speaker:
            "THE ARCHIVIST",

        location:
            "THE WHITE ROOM",

        character:
            "stranger",

        text:
            "The Archivist looks directly at you. 'You.'",

        choices: [

            [
                "Tell them that's impossible.",
                "reason",
                ""
            ],

            [
                "Ask which version of you.",
                "reason",
                ""
            ],

            [
                "Demand to see the original.",
                "newDimension",
                ""
            ]

        ]

    },


    people: {

        speaker:
            "THE ARCHIVIST",

        location:
            "THE WHITE ROOM",

        character:
            "stranger",

        text:
            "The missing citizens are alive. They're being stored outside normal time until someone decides whether this universe should continue to exist.",

        choices: [

            [
                "Free them.",
                "event",
                ""
            ],

            [
                "Ask who decides.",
                "reason",
                ""
            ],

            [
                "Leave this dimension.",
                "return",
                ""
            ]

        ]

    },


    reason: {

        speaker:
            "THE ARCHIVIST",

        location:
            "THE WHITE ROOM",

        character:
            "stranger",

        text:
            "The Archivist steps closer. 'You have already changed six universes. This is the seventh.'",

        choices: [

            [
                "Ask what you changed.",
                "event",
                ""
            ],

            [
                "Ask how to undo it.",
                "return",
                ""
            ],

            [
                "Keep exploring.",
                "newDimension",
                ""
            ]

        ]

    }

};


/* ======================================================
   GET CURRENT SCENE

   Scenes are looked up only when needed.
====================================================== */

function getScene() {

    if (
        game.storyline ===
        "The Silent City"
    ) {

        return silentScenes[
            game.scene
        ] || null;

    }


    return mainScenes[
        game.scene
    ] || null;

}


/* ======================================================
   SAVE

   Only save when something actually changes.
====================================================== */

let saveTimer = null;


function saveGame() {

    clearTimeout(saveTimer);


    saveTimer =
        setTimeout(() => {

            try {

                localStorage.setItem(
                    "multiverseFracturedSave",
                    JSON.stringify(game)
                );

            } catch (error) {

                console.warn(
                    "Save failed:",
                    error
                );

            }

        }, 150);

}


/* ======================================================
   LOAD
====================================================== */

function loadGame() {

    try {

        const saved =
            localStorage.getItem(
                "multiverseFracturedSave"
            );


        if (!saved) {
            return;
        }


        const loaded =
            JSON.parse(saved);


        if (
            loaded &&
            typeof loaded === "object"
        ) {

            game = loaded;

        }

    } catch (error) {

        console.warn(
            "Could not load save.",
            error
        );

        game =
            createDefaultGame();

    }

}


/* ======================================================
   HISTORY

   Stores only the information needed to backtrack.
   This is much smaller than copying the entire game.
====================================================== */

function saveHistory() {

    game.history.push({

        storyline:
            game.storyline,

        dimension:
            game.dimension,

        scene:
            game.scene,

        stability:
            game.stability,

        alex:
            game.alex,

        stranger:
            game.stranger

    });


    if (
        game.history.length > 50
    ) {

        game.history.shift();

    }

}


/* ======================================================
   BACKTRACK
====================================================== */

function backtrack() {

    if (
        !game.history ||
        game.history.length === 0
    ) {

        showEvent(
            "NO PREVIOUS TIMELINE"
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


    game.stability =
        previous.stability;


    game.alex =
        previous.alex;


    game.stranger =
        previous.stranger;


    saveGame();

    render();

    showEvent(
        "TIMELINE REWOUND"
    );

}


/* ======================================================
   EFFECTS
====================================================== */

function applyEffect(effect) {

    if (!effect) {
        return;
    }


    const parts =
        effect.split(":");


    const type =
        parts[0];


    const amount =
        Number(parts[1]);


    if (
        Number.isNaN(amount)
    ) {
        return;
    }


    if (
        type === "stability"
    ) {

        game.stability =
            clamp(
                game.stability +
                amount,
                0,
                100
            );

    }


    if (
        type === "alex"
    ) {

        game.alex =
            clamp(
                game.alex +
                amount,
                0,
                100
            );

    }


    if (
        type === "stranger"
    ) {

        game.stranger =
            clamp(
                game.stranger +
                amount,
                0,
                100
            );

    }

}


/* ======================================================
   CHOICE
====================================================== */

function choose(choice) {

    saveHistory();


    applyEffect(
        choice[2]
    );


    const next =
        choice[1];


    if (
        next ===
        "newDimension"
    ) {

        createNewDimension();

    }

    else if (
        next ===
        "return"
    ) {

        returnToDimension();

    }

    else if (
        next ===
        "event"
    ) {

        game.scene =
            "event";


        if (
            game.storyline ===
            "The Silent City"
        ) {

            /*
                Silent City uses the main
                multiverse event system here.
            */

        }

    }

    else {

        game.scene =
            next;

    }


    checkForMultiverseEvent();

    saveGame();

    render();

}


/* ======================================================
   CLAMP
====================================================== */

function clamp(
    value,
    min,
    max
) {

    return Math.max(
        min,
        Math.min(
            max,
            value
        )
    );

}


/* ======================================================
   NEW STORYLINE
====================================================== */

function newStory() {

    const confirmed =
        confirm(
            "Start a completely different timeline?"
        );


    if (!confirmed) {
        return;
    }


    game = {

        storyline:
            "The Silent City",

        dimension:
            "73-Z",

        scene:
            "start",

        stability:
            100,

        alex:
            50,

        stranger:
            50,

        dimensions: [

            {
                id:
                    "73-Z",

                location:
                    "Silent City",

                stability:
                    100,

                story:
                    "silent"
            }

        ],

        history: [],

        events: [],

        visited:
            {}

    };


    setBackground(
        "silent"
    );


    saveGame();

    render();

    showEvent(
        "NEW TIMELINE CREATED"
    );

}


/* ======================================================
   HARD RESET
====================================================== */

function hardReset() {

    const confirmed =
        confirm(
            "HARD RESET will erase your current save and return to Dimension 01-A. Continue?"
        );


    if (!confirmed) {
        return;
    }


    localStorage.removeItem(
        "multiverseFracturedSave"
    );


    game =
        createDefaultGame();


    setBackground(
        "main"
    );


    render();

    showEvent(
        "TIMELINE RESET"
    );

}


/* ======================================================
   CREATE DIMENSION
====================================================== */

function createNewDimension() {

    const letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    let id;


    do {

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


        id =
            String(number).padStart(
                2,
                "0"
            )
            +
            "-"
            +
            letter;

    }

    while (
        game.dimensions.some(
            d =>
                d.id === id
        )
    );


    const locations = [

        "RUINED DOWNTOWN",

        "FROZEN CITY",

        "UNDERGROUND LABORATORY",

        "DESERT RESEARCH FACILITY",

        "BROKEN SPACE STATION",

        "UNKNOWN COLONY",

        "DEAD FOREST",

        "ABANDONED RESEARCH FACILITY",

        "OCEAN CITY",

        "MEGACITY",

        "TIMELINE ZERO"

    ];


    const location =
        locations[
            Math.floor(
                Math.random() *
                locations.length
            )
        ];


    const stability =
        Math.floor(
            50 +
            Math.random() *
            51
        );


    game.dimensions.push({

        id:
            id,

        location:
            location,

        stability:
            stability,

        story:
            "generated"

    });


    game.dimension =
        id;


    game.stability =
        stability;


    game.scene =
        "generated";


    /*
        Generated scene is created only when
        the player actually enters a new dimension.
    */

    showEvent(
        "ENTERING " + id
    );

}


/* ======================================================
   GENERATED DIMENSION SCENES
====================================================== */

function getGeneratedScene() {

    const dimension =
        game.dimensions.find(
            d =>
                d.id ===
                game.dimension
        );


    const location =
        dimension
            ? dimension.location
            : "UNKNOWN LOCATION";


    return {

        speaker:
            "SYSTEM",

        location:
            location,

        character:
            "",

        text:
            "Reality shifts around you. You have entered Dimension " +
            game.dimension +
            ". This universe has never seen you before.",

        choices: [

            [
                "Explore this universe.",
                "generatedExplore",
                ""
            ],

            [
                "Search for another version of yourself.",
                "alternate",
                ""
            ],

            [
                "Search for a way back.",
                "return",
                ""
            ],

            [
                "Look for signs of the multiverse event.",
                "event",
                ""
            ]

        ]

    };

}


/* ======================================================
   GENERATED EXPLORATION
====================================================== */

function getGeneratedExploreScene() {

    const locations = [

        "A city where nobody sleeps.",

        "A colony orbiting a dead planet.",

        "A world where the sky is permanently red.",

        "A city frozen in time.",

        "A civilization hidden underground.",

        "A world where every building is identical."

    ];


    const text =
        locations[
            hashDimension(
                game.dimension
            ) %
            locations.length
        ];


    return {

        speaker:
            "SYSTEM",

        location:
            "UNKNOWN TERRITORY",

        character:
            "alex",

        text:
            text +
            " Something feels wrong. The people here act as if they already know who you are.",

        choices: [

            [
                "Find someone and ask questions.",
                "silentEntity",
                ""
            ],

            [
                "Keep exploring.",
                "generatedExplore2",
                ""
            ],

            [
                "Return to the previous dimension.",
                "return",
                ""
            ]

        ]

    };

}


/* ======================================================
   SECOND GENERATED SCENE
====================================================== */

function getGeneratedExplore2Scene() {

    return {

        speaker:
            "UNKNOWN",

        location:
            "UNKNOWN TERRITORY",

        character:
            "stranger",

        text:
            "You hear a voice behind you. 'Every dimension has a story. The problem is that yours keeps rewriting them.'",

        choices: [

            [
                "Turn around.",
                "alternate",
                ""
            ],

            [
                "Ask who they are.",
                "silentEntity",
                ""
            ],

            [
                "Run.",
                "newDimension",
                ""
            ],

            [
                "Return.",
                "return",
                ""
            ]

        ]

    };

}


/* ======================================================
   GET CURRENT SCENE — WITH GENERATED SUPPORT
====================================================== */

function getCurrentScene() {

    if (
        game.storyline ===
        "The Silent City"
    ) {

        if (
            game.scene ===
            "event" ||
            game.scene ===
            "newDimension" ||
            game.scene ===
            "return" ||
            game.scene ===
            "alternate"
        ) {

            return getSharedScene(
                game.scene
            );

        }


        return silentScenes[
            game.scene
        ];

    }


    if (
        game.scene ===
        "generated"
    ) {

        return getGeneratedScene();

    }


    if (
        game.scene ===
        "generatedExplore"
    ) {

        return getGeneratedExploreScene();

    }


    if (
        game.scene ===
        "generatedExplore2"
    ) {

        return getGeneratedExplore2Scene();

    }


    return mainScenes[
        game.scene
    ];

}


/* ======================================================
   SHARED SCENES
====================================================== */

function getSharedScene(sceneName) {

    if (
        sceneName ===
        "newDimension"
    ) {

        createNewDimension();

        return getGeneratedScene();

    }


    if (
        sceneName ===
        "return"
    ) {

        return {

            speaker:
                "SYSTEM",

            location:
                "PREVIOUS DIMENSION",

            character:
                "",

            text:
                "The dimensional doorway opens. The previous reality is waiting on the other side.",

            choices: [

                [
                    "Go back.",
                    "returnNow",
                    ""
                ],

                [
                    "Stay here.",
                    "generatedExplore",
                    ""
                ],

                [
                    "Open another universe.",
                    "newDimension",
                    ""
                ]

            ]

        };

    }


    if (
        sceneName ===
        "alternate"
    ) {

        return {

            speaker:
                "OTHER YOU",

            location:
                "UNKNOWN DIMENSION",

            character:
                "stranger",

            text:
                "Another version of you is standing across the street. They already know what choice you're going to make.",

            choices: [

                [
                    "Ask what happens next.",
                    "event",
                    ""
                ],

                [
                    "Ask how to escape.",
                    "return",
                    ""
                ],

                [
                    "Follow them.",
                    "generatedExplore",
                    ""
                ]

            ]

        };

    }


    if (
        sceneName ===
        "event"
    ) {

        return {

            speaker:
                "SYSTEM",

            location:
                "MULTIVERSE",

            character:
                "",

            text:
                "⚠ A MULTIVERSE EVENT IS IN PROGRESS. Hundreds of timelines are changing simultaneously.",

            choices: [

                [
                    "Investigate the event.",
                    "eventAfter",
                    ""
                ],

                [
                    "Enter another universe.",
                    "newDimension",
                    ""
                ],

                [
                    "Try to stop it.",
                    "eventControl",
                    "stability:-10"
                ]

            ]

        };

    }


    if (
        sceneName ===
        "eventAfter"
    ) {

        return {

            speaker:
                "SYSTEM",

            location:
                "MULTIVERSE",

            character:
                "",

            text:
                "Your device identifies the source. One unknown dimension is sending waves through nearly every timeline.",

            choices: [

                [
                    "Go to the source.",
                    "newDimension",
                    ""
                ],

                [
                    "Try to stabilize your universe.",
                    "stable",
                    "stability:15"
                ],

                [
                    "Do nothing.",
                    "return",
                    ""
                ]

            ]

        };

    }


    if (
        sceneName ===
        "eventControl"
    ) {

        return {

            speaker:
                "SYSTEM",

            location:
                "DIMENSIONAL CORE",

            character:
                "",

            text:
                "You connect directly to the multiverse. Millions of timelines appear in your mind at once.",

            choices: [

                [
                    "Push the event away.",
                    "success",
                    "stability:20"
                ],

                [
                    "Redirect it.",
                    "success",
                    "stability:10"
                ],

                [
                    "Absorb it.",
                    "failure",
                    "stability:-30"
                ]

            ]

        };

    }


    if (
        sceneName ===
        "success"
    ) {

        return {

            speaker:
                "SYSTEM",

            location:
                "MULTIVERSE",

            character:
                "",

            text:
                "The fracture begins to close. Thousands of universes stabilize. Then something notices you.",

            choices: [

                [
                    "Find what noticed you.",
                    "alternate",
                    ""
                ],

                [
                    "Return.",
                    "return",
                    ""
                ]

            ]

        };

    }


    if (
        sceneName ===
        "failure"
    ) {

        return {

            speaker:
                "SYSTEM",

            location:
                "COLLAPSING REALITY",

            character:
                "",

            text:
                "The device overloads. Your universe begins collapsing.",

            choices: [

                [
                    "Escape.",
                    "newDimension",
                    ""
                ],

                [
                    "Try again.",
                    "eventControl",
                    ""
                ]

            ]

        };

    }


    if (
        sceneName ===
        "stable"
    ) {

        return {

            speaker:
                "SYSTEM",

            location:
                "DIMENSIONAL CORE",

            character:
                "alex",

            text:
                "Reality stabilizes. But the multiverse event has left a permanent scar across the timeline.",

            choices: [

                [
                    "Investigate the scar.",
                    "alternate",
                    ""
                ],

                [
                    "Travel elsewhere.",
                    "newDimension",
                    ""
                ]

            ]

        };

    }


    if (
        sceneName ===
        "returnNow"
    ) {

        game.scene =
            "intro";

        return mainScenes.intro;

    }


    if (
        sceneName ===
        "silentEntity"
    ) {

        return {

            speaker:
                "THE ARCHIVIST",

            location:
                "THE WHITE ROOM",

            character:
                "stranger",

            text:
                "The Archivist appears. 'You have crossed too many timelines. Something has begun following you.'",

            choices: [

                [
                    "Ask what is following me.",
                    "event",
                    ""
                ],

                [
                    "Ask who created the multiverse.",
                    "truth",
                    ""
                ],

                [
                    "Run.",
                    "newDimension",
                    ""
                ]

            ]

        };

    }


    return mainScenes.intro;

}


/* ======================================================
   DIMENSION HASH

   Gives generated dimensions consistent text without
   using random numbers every render.
====================================================== */

function hashDimension(id) {

    let hash =
        0;


    for (
        let i = 0;
        i < id.length;
        i++
    ) {

        hash =
            (
                hash * 31 +
                id.charCodeAt(i)
            )
            >>> 0;

    }


    return hash;

}


/* ======================================================
   RETURN TO DIMENSION
====================================================== */

function returnToDimension() {

    if (
        game.storyline ===
        "The Silent City"
    ) {

        game.dimension =
            "73-Z";

        game.scene =
            "start";

        game.stability =
            100;

        return;

    }


    game.dimension =
        "01-A";


    game.scene =
        "intro";


    game.stability =
        100;

}


/* ======================================================
   MULTIVERSE EVENTS
====================================================== */

function checkForMultiverseEvent() {

    /*
        Events only happen occasionally.

        This prevents an event from appearing after
        every single choice.
    */

    if (
        Math.random() >
        0.08
    ) {

        return;

    }


    if (
        game.dimensions.length <
        2
    ) {

        return;

    }


    const names = [

        "THE FRACTURE",

        "THE CONVERGENCE",

        "THE PARADOX",

        "THE TIMELINE WAR",

        "THE GREAT COLLAPSE",

        "THE INVERSION",

        "THE VOID"

    ];


    const name =
        names[
            Math.floor(
                Math.random() *
                names.length
            )
        ];


    let affected =
        0;


    game.dimensions.forEach(
        dimension => {

            if (
                Math.random() <
                0.75
            ) {

                dimension.stability =
                    clamp(
                        dimension.stability -
                        Math.floor(
                            Math.random() *
                            20
                        ),
                        0,
                        100
                    );


                affected++;

            }

        }
    );


    game.events.push({

        name:
            name,

        affected:
            affected,

        time:
            Date.now()

    });


    saveGame();


    showEvent(
        name +
        " — " +
        affected +
        " DIMENSIONS AFFECTED"
    );

}


/* ======================================================
   EVENT POPUP
====================================================== */

let eventTimer = null;


function showEvent(name) {

    UI.eventName.textContent =
        name;


    UI.event.classList.add(
        "show"
    );


    clearTimeout(
        eventTimer
    );


    eventTimer =
        setTimeout(
            () => {

                UI.event.classList.remove(
                    "show"
                );

            },
            4000
        );

}


/* ======================================================
   BACKGROUND

   Only changes when entering a new type of world.
   It does NOT change every time the dialogue renders.
====================================================== */

function setBackground(type) {

    if (
        type ===
        "silent"
    ) {

        UI.background.style.background =
            `
            radial-gradient(
                circle at 50% 35%,
                #27323b 0%,
                #111820 48%,
                #020406 100%
            )
            `;

        return;

    }


    if (
        type ===
        "generated"
    ) {

        const hue =
            hashDimension(
                game.dimension
            ) %
            360;


        UI.background.style.background =
            `
            radial-gradient(
                circle at 50% 40%,
                hsl(${hue}, 28%, 27%) 0%,
                #151522 48%,
                #030308 100%
            )
            `;

        return;

    }


    UI.background.style.background =
        `
        radial-gradient(
            circle at 50% 40%,
            #30304a 0%,
            #151522 45%,
            #030308 100%
        )
        `;

}


/* ======================================================
   RENDER

   One render updates the existing elements instead of
   rebuilding the entire page.
====================================================== */

function render() {

    let scene =
        getCurrentScene();


    /*
        Generated scene fallback.
    */

    if (!scene) {

        console.warn(
            "Missing scene:",
            game.scene
        );


        game.scene =
            "intro";


        game.storyline =
            "The Fractured Rebellion";


        scene =
            mainScenes.intro;

    }


    UI.story.textContent =
        game.storyline;


    UI.dimension.textContent =
        game.dimension;


    UI.location.textContent =
        scene.location;


    UI.speaker.textContent =
        scene.speaker;


    UI.text.textContent =
        scene.text;


    /*
        Characters
    */

    UI.alex.classList.remove(
        "show"
    );


    UI.stranger.classList.remove(
        "show"
    );


    if (
        scene.character ===
        "alex"
    ) {

        UI.alex.classList.add(
            "show"
        );

    }


    if (
        scene.character ===
        "stranger"
    ) {

        UI.stranger.classList.add(
            "show"
        );

    }


    /*
        Choices

        We use a DocumentFragment so the browser only
        updates the screen once.
    */

    const fragment =
        document.createDocumentFragment();


    scene.choices.forEach(
        choice => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice";


            button.textContent =
                choice[0];


            button.addEventListener(
                "click",
                () => {

                    choose(
                        choice
                    );

                },
                {
                    once:
                        true
                }
            );


            fragment.appendChild(
                button
            );

        }
    );


    UI.choices.replaceChildren(
        fragment
    );


    /*
        Status
    */

    UI.stability.style.width =
        game.stability +
        "%";


    UI.alexBar.style.width =
        game.alex +
        "%";


    UI.strangerBar.style.width =
        game.stranger +
        "%";


    /*
        Background only changes when appropriate.
    */

    if (
        game.storyline ===
        "The Silent City"
    ) {

        setBackground(
            "silent"
        );

    }

    else if (
        game.scene ===
        "generated" ||
        game.scene ===
        "generatedExplore" ||
        game.scene ===
        "generatedExplore2"
    ) {

        setBackground(
            "generated"
        );

    }

    else {

        setBackground(
            "main"
        );

    }

}


/* ======================================================
   DIMENSION MAP
====================================================== */

function openMap() {

    UI.windowTitle.textContent =
        "DIMENSION MAP";


    UI.windowContent.replaceChildren();


    const fragment =
        document.createDocumentFragment();


    game.dimensions.forEach(
        dimension => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "card";


            card.innerHTML = `

                <strong>
                    DIMENSION ${dimension.id}
                </strong>

                <br>

                Location:
                ${escapeHTML(
                    dimension.location
                )}

                <br>

                Stability:
                ${dimension.stability}%

            `;


            card.addEventListener(
                "click",
                () => {

                    travelToDimension(
                        dimension.id
                    );

                }
            );


            fragment.appendChild(
                card
            );

        }
    );


    UI.windowContent.appendChild(
        fragment
    );


    UI.window.classList.add(
        "open"
    );

}


/* ======================================================
   TRAVEL TO DIMENSION
====================================================== */

function travelToDimension(id) {

    const dimension =
        game.dimensions.find(
            d =>
                d.id === id
        );


    if (!dimension) {
        return;
    }


    saveHistory();


    game.dimension =
        id;


    game.stability =
        dimension.stability;


    if (
        dimension.story ===
        "silent"
    ) {

        game.storyline =
            "The Silent City";

        game.scene =
            "start";

    }

    else if (
        dimension.story ===
        "main"
    ) {

        game.storyline =
            "The Fractured Rebellion";

        game.scene =
            "intro";

    }

    else {

        game.storyline =
            "The Fractured Rebellion";

        game.scene =
            "generated";

    }


    saveGame();

    closeWindow();

    render();


    showEvent(
        "TRAVELED TO " +
        id
    );

}


/* ======================================================
   CLOSE WINDOW
====================================================== */

function closeWindow() {

    UI.window.classList.remove(
        "open"
    );

}


/* ======================================================
   HTML ESCAPE
====================================================== */

function escapeHTML(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* ======================================================
   BUTTONS
====================================================== */

UI.backtrack.addEventListener(
    "click",
    backtrack
);


UI.map.addEventListener(
    "click",
    openMap
);


UI.newStory.addEventListener(
    "click",
    newStory
);


UI.reset.addEventListener(
    "click",
    hardReset
);


UI.closeWindow.addEventListener(
    "click",
    closeWindow
);


/*
    Clicking outside the map closes it.
*/

UI.window.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            UI.window
        ) {

            closeWindow();

        }

    }
);


/* ======================================================
   STARTUP

   This happens immediately. There are no images,
   external libraries, fonts, or network requests.
====================================================== */

loadGame();

render();
