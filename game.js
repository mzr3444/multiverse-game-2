/* =====================================================
   MULTIVERSE: FRACTURED
   GAME ENGINE
===================================================== */


/* =====================================================
   GAME STATE
===================================================== */

let game = {

    storyline:
        "The Fractured Rebellion",

    dimension:
        "01-A",

    stability:
        100,

    alex:
        50,

    stranger:
        50,

    scene:
        "intro",

    dimensions: [

        {
            id:
                "01-A",

            location:
                "Abandoned Subway",

            stability:
                100
        }

    ],

    history: [],

    events: []

};


/* =====================================================
   ORIGINAL DIMENSION
===================================================== */

const scenes = {


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

            {
                text:
                    "Examine the device on your wrist.",

                next:
                    "device",

                effect:
                    "stability:-5"
            },

            {
                text:
                    "Search the station for another person.",

                next:
                    "search"
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

            {
                text:
                    "Activate the device.",

                next:
                    "portal",

                effect:
                    "stability:-15"
            },

            {
                text:
                    "Try to remove the device.",

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

        character:
            "alex",

        text:
            "You search the empty station. A second set of footprints leads toward a dark maintenance tunnel.",

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
                    "Call out to whoever made them.",

                next:
                    "stranger",

                effect:
                    "stranger:5"
            }

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

            {
                text:
                    "Step through the doorway.",

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

        character:
            "alex",

        text:
            "Footsteps echo through the station. Someone is walking toward you.",

        choices: [

            {
                text:
                    "Call out: Who's there?",

                next:
                    "stranger",

                effect:
                    "stranger:5"
            },

            {
                text:
                    "Hide behind a pillar.",

                next:
                    "stranger"
            },

            {
                text:
                    "Wait and see who appears.",

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

        character:
            "stranger",

        text:
            "Don't move. I need to know which version of you I'm talking to.",

        choices: [

            {
                text:
                    "Ask what they mean.",

                next:
                    "explain",

                effect:
                    "stranger:5"
            },

            {
                text:
                    "Ask who they are.",

                next:
                    "identity"
            },

            {
                text:
                    "Back away slowly.",

                next:
                    "threat",

                effect:
                    "stranger:-5"
            },

            {
                text:
                    "Tell them you want answers.",

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

        character:
            "stranger",

        text:
            "Every choice creates another version of reality. I've seen this station play out dozens of different ways.",

        choices: [

            {
                text:
                    "Ask how many versions of you exist.",

                next:
                    "versions"
            },

            {
                text:
                    "Ask why they're here.",

                next:
                    "mission"
            },

            {
                text:
                    "Ask what happens if reality collapses.",

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

        character:
            "stranger",

        text:
            "Call me the Stranger. That's all you need to know for now.",

        choices: [

            {
                text:
                    "Ask about the device.",

                next:
                    "deviceTruth"
            },

            {
                text:
                    "Ask why they know about you.",

                next:
                    "versions"
            },

            {
                text:
                    "Tell them you don't trust them.",

                next:
                    "threat",

                effect:
                    "stranger:-10"
            }

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

            {
                text:
                    "Lower your guard.",

                next:
                    "explain",

                effect:
                    "stranger:5"
            },

            {
                text:
                    "Run toward the exit.",

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

        character:
            "alex",

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
                    "memory",

                effect:
                    "stability:-8"
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

        character:
            "alex",

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
                    "Show it to the Stranger.",

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

        character:
            "alex",

        text:
            "The device refuses to detach. A warning appears: REMOVAL MAY DESTABILIZE TIMELINE.",

        choices: [

            {
                text:
                    "Keep trying.",

                next:
                    "collapse",

                effect:
                    "stability:-20"
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

        character:
            "",

        text:
            "The device opens a tear in reality. Beyond it is a city that looks almost exactly like yours.",

        choices: [

            {
                text:
                    "Enter the new dimension.",

                next:
                    "createNewDimension"
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
                    "stranger",

                effect:
                    "stranger:-5"
            }

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

            {
                text:
                    "Ask how to find them.",

                next:
                    "alternate"
            },

            {
                text:
                    "Ask why they haven't stopped them.",

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

        character:
            "stranger",

        text:
            "I'm trying to prevent a multiverse event. If it happens, the damage won't stay in this universe.",

        choices: [

            {
                text:
                    "Ask what the event is.",

                next:
                    "event"
            },

            {
                text:
                    "Offer to help.",

                next:
                    "event",

                effect:
                    "stranger:12"
            },

            {
                text:
                    "Tell them you want to leave.",

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

        character:
            "",

        text:
            "The lights flicker. The walls distort. For a moment, the station exists in two places at once.",

        choices: [

            {
                text:
                    "Stabilize reality.",

                next:
                    "stable",

                effect:
                    "stability:15"
            },

            {
                text:
                    "Open a portal.",

                next:
                    "createNewDimension",

                effect:
                    "stability:-15"
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

        character:
            "alex",

        text:
            "The device absorbs the dimensional energy. Reality stops shaking... temporarily.",

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

        character:
            "alex",

        text:
            "A memory flashes through your mind. You've stood here before. But you don't remember this universe.",

        choices: [

            {
                text:
                    "Try to remember.",

                next:
                    "alternate",

                effect:
                    "stability:-5"
            },

            {
                text:
                    "Ignore the memory.",

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

        character:
            "alex",

        text:
            "Across the street stands another version of you. They look directly at you like they've been waiting.",

        choices: [

            {
                text:
                    "Approach them.",

                next:
                    "meetAlternate"
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
                    "return"
            }

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

            {
                text:
                    "Ask what they know.",

                next:
                    "event"
            },

            {
                text:
                    "Ask why they were waiting.",

                next:
                    "event"
            },

            {
                text:
                    "Ask how to return.",

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

        character:
            "stranger",

        text:
            "That device isn't a phone. It's a key. Someone built it to open doors between realities.",

        choices: [

            {
                text:
                    "Ask who built it.",

                next:
                    "event"
            },

            {
                text:
                    "Ask where the key leads.",

                next:
                    "createNewDimension"
            }

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
                    "createNewDimension"
            },

            {
                text:
                    "Try to stop it.",

                next:
                    "eventControl",

                effect:
                    "stability:-10"
            }

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

            {
                text:
                    "Go to the source.",

                next:
                    "createNewDimension"
            },

            {
                text:
                    "Return to your original dimension.",

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

        character:
            "",

        text:
            "The device connects to the event. For a moment, you can feel millions of universes around you.",

        choices: [

            {
                text:
                    "Push the event away.",

                next:
                    "success",

                effect:
                    "stability:20"
            },

            {
                text:
                    "Redirect it.",

                next:
                    "success",

                effect:
                    "stability:10"
            },

            {

                text:
                    "Absorb the event.",

                next:
                    "failure",

                effect:
                    "stability:-30"
            }

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

        character:
            "",

        text:
            "The device overloads. Your universe begins collapsing around you.",

        choices: [

            {
                text:
                    "Escape.",

                next:
                    "createNewDimension"
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

        character:
            "",

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
                    "createNewDimension"
            }

        ]

    }

};


/* =====================================================
   NEW DIMENSION — THE SILENT CITY
===================================================== */

scenes.silentCityStart = {

    speaker:
        "SYSTEM",

    location:
        "DIMENSION 73-Z",

    character:
        "",

    text:
        "You arrive in Dimension 73-Z. The city looks normal at first. Cars are parked in the streets. Lights are on inside buildings. But there isn't a single person anywhere.",

    choices: [

        {
            text:
                "Enter the nearest building.",

            next:
                "silentBuilding"
        },

        {
            text:
                "Walk toward the city center.",

            next:
                "silentCenter"
        },

        {
            text:
                "Search the parked cars.",

            next:
                "silentCars"
        },

        {
            text:
                "Call out to see if anyone answers.",

            next:
                "silentCall"
        }

    ]

};


scenes.silentBuilding = {

    speaker:
        "ALEX",

    location:
        "ABANDONED APARTMENT",

    character:
        "alex",

    text:
        "The apartment door is unlocked. Dinner is still sitting on the table. A television is playing a news report, but the reporter isn't speaking. They're staring directly at you.",

    choices: [

        {
            text:
                "Turn off the television.",

            next:
                "silentTV"
        },

        {
            text:
                "Watch the report.",

            next:
                "silentReport"
        },

        {
            text:
                "Search the apartment.",

            next:
                "silentNote"
        },

        {
            text:
                "Leave immediately.",

            next:
                "silentCenter"
        }

    ]

};


scenes.silentTV = {

    speaker:
        "TELEVISION",

    location:
        "ABANDONED APARTMENT",

    character:
        "",

    text:
        "The television turns itself back on. The reporter finally speaks: 'If you're seeing this message, you're not from this dimension.'",

    choices: [

        {
            text:
                "Ask who created the message.",

            next:
                "silentReport"
        },

        {
            text:
                "Unplug the television.",

            next:
                "silentPower"
        },

        {
            text:
                "Keep watching.",

            next:
                "silentReport"
        }

    ]

};


scenes.silentReport = {

    speaker:
        "TELEVISION",

    location:
        "ABANDONED APARTMENT",

    character:
        "",

    text:
        "The reporter looks terrified. 'The people of this universe didn't disappear. They were moved somewhere else. And whatever moved them knows you're here.'",

    choices: [

        {
            text:
                "Ask where they were moved.",

            next:
                "silentUnderground"
        },

        {
            text:
                "Ask who moved them.",

            next:
                "silentEntity"
        },

        {
            text:
                "Destroy the television.",

            next:
                "silentPower"
        }

    ]

};


scenes.silentNote = {

    speaker:
        "ALEX",

    location:
        "ABANDONED APARTMENT",

    character:
        "alex",

    text:
        "You find a handwritten note underneath the table. It says: DON'T TRUST THE PERSON WHO LOOKS LIKE YOU.",

    choices: [

        {
            text:
                "Take the note.",

            next:
                "silentCenter"
        },

        {
            text:
                "Search for whoever wrote it.",

            next:
                "silentUnderground"
        },

        {
            text:
                "Ignore the warning.",

            next:
                "silentCenter"
        }

    ]

};


scenes.silentPower = {

    speaker:
        "SYSTEM",

    location:
        "ABANDONED APARTMENT",

    character:
        "",

    text:
        "The television explodes into static. For half a second, you see hundreds of people standing in a completely white room.",

    choices: [

        {
            text:
                "Follow the signal.",

            next:
                "silentUnderground"
        },

        {
            text:
                "Leave the apartment.",

            next:
                "silentCenter"
        }

    ]

};


scenes.silentCenter = {

    speaker:
        "ALEX",

    location:
        "CITY CENTER",

    character:
        "alex",

    text:
        "You reach the center of the city. Every traffic light suddenly turns green. Then thousands of empty cars start moving by themselves.",

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
                "silentUnderground"
        },

        {
            text:
                "Stay in the street.",

            next:
                "silentEntity"
        },

        {
            text:
                "Hide inside a building.",

            next:
                "silentBuilding"
        }

    ]

};


scenes.silentCars = {

    speaker:
        "SYSTEM",

    location:
        "CITY STREET",

    character:
        "",

    text:
        "You search one of the cars. The radio turns on by itself. A voice whispers: 'Dimension 73-Z is no longer considered inhabited.'",

    choices: [

        {
            text:
                "Ask who is speaking.",

            next:
                "silentEntity"
        },

        {
            text:
                "Trace the radio signal.",

            next:
                "silentUnderground"
        },

        {
            text:
                "Get out of the car.",

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

    character:
        "alex",

    text:
        "Your voice echoes between the buildings. For several seconds there is silence. Then someone answers from directly behind you.",

    choices: [

        {
            text:
                "Turn around.",

            next:
                "silentDouble"
        },

        {
            text:
                "Run.",

            next:
                "silentCenter"
        },

        {
            text:
                "Ask who they are.",

            next:
                "silentDouble"
        }

    ]

};


scenes.silentDouble = {

    speaker:
        "OTHER ALEX",

    location:
        "CITY STREET",

    character:
        "stranger",

    text:
        "You turn around and see yourself. The other you smiles. 'You shouldn't have come here.'",

    choices: [

        {
            text:
                "Ask what happened to this universe.",

            next:
                "silentEntity"
        },

        {
            text:
                "Ask why they look like you.",

            next:
                "silentDoubleTruth"
        },

        {
            text:
                "Attack them.",

            next:
                "silentFight"
        },

        {
            text:
                "Trust them.",

            next:
                "silentUnderground"
        }

    ]

};


scenes.silentDoubleTruth = {

    speaker:
        "OTHER ALEX",

    location:
        "CITY STREET",

    character:
        "stranger",

    text:
        "The other you looks at your wrist device. 'Because you're not the first version of yourself to arrive here.'",

    choices: [

        {
            text:
                "Ask where the others went.",

            next:
                "silentUnderground"
        },

        {
            text:
                "Ask how many versions there are.",

            next:
                "silentEntity"
        },

        {
            text:
                "Demand answers.",

            next:
                "silentEntity"
        }

    ]

};


scenes.silentFight = {

    speaker:
        "OTHER ALEX",

    location:
        "CITY STREET",

    character:
        "stranger",

    text:
        "The other you doesn't fight back. They simply touch your wrist device. Suddenly the entire city disappears.",

    choices: [

        {
            text:
                "Ask what they did.",

            next:
                "silentEntity"
        },

        {
            text:
                "Try to activate your device.",

            next:
                "silentUnderground"
        }

    ]

};


scenes.silentUnderground = {

    speaker:
        "SYSTEM",

    location:
        "SUBWAY BENEATH DIMENSION 73-Z",

    character:
        "",

    text:
        "You descend beneath the city. The subway tunnels are filled with doors. Each door has a different universe number written across it.",

    choices: [

        {
            text:
                "Open Door 73-Z.",

            next:
                "silentEntity"
        },

        {
            text:
                "Open Door 01-A.",

            next:
                "return"
        },

        {
            text:
                "Open a random door.",

            next:
                "createNewDimension"
        },

        {
            text:
                "Ask the other Alex which door to use.",

            next:
                "silentDouble"
        }

    ]

};


scenes.silentEntity = {

    speaker:
        "THE ARCHIVIST",

    location:
        "THE WHITE ROOM",

    character:
        "stranger",

    text:
        "A figure appears in the white room. 'Every universe eventually asks the same question: who created the multiverse?'",

    choices: [

        {
            text:
                "Ask who created it.",

            next:
                "silentTruth"
        },

        {
            text:
                "Ask what happened to the people.",

            next:
                "silentPeople"
        },

        {
            text:
                "Ask why you were brought here.",

            next:
                "silentReason"
        },

        {
            text:
                "Refuse to answer.",

            next:
                "silentEntity"
        }

    ]

};


scenes.silentTruth = {

    speaker:
        "THE ARCHIVIST",

    location:
        "THE WHITE ROOM",

    character:
        "stranger",

    text:
        "The Archivist says one word: 'You.'",

    choices: [

        {
            text:
                "Tell them that's impossible.",

            next:
                "silentReason"
        },

        {
            text:
                "Ask which version of you.",

            next:
                "silentReason"
        },

        {
            text:
                "Demand to see the original.",

            next:
                "alternate"
        }

    ]

};


scenes.silentPeople = {

    speaker:
        "THE ARCHIVIST",

    location:
        "THE WHITE ROOM",

    character:
        "stranger",

    text:
        "The missing citizens are alive. They're being stored outside normal time until someone decides whether this universe should continue to exist.",

    choices: [

        {
            text:
                "Free them.",

            next:
                "eventControl"
        },

        {
            text:
                "Ask who decides.",

            next:
                "silentReason"
        },

        {
            text:
                "Leave this dimension.",

            next:
                "return"
        }

    ]

};


scenes.silentReason = {

    speaker:
        "THE ARCHIVIST",

    location:
        "THE WHITE ROOM",

    character:
        "stranger",

    text:
        "The Archivist steps closer. 'You have already changed six universes. This is the seventh.'",

    choices: [

        {
            text:
                "Ask what you changed.",

            next:
                "event"
        },

        {
            text:
                "Ask how to undo it.",

            next:
                "return"
        },

        {
            text:
                "Keep exploring.",

            next:
                "createNewDimension"
        }

    ]

};


/* =====================================================
   SAVE
===================================================== */

function saveGame() {

    try {

        localStorage.setItem(
            "multiverseGame",
            JSON.stringify(game)
        );

    }

    catch (error) {

        console.log(
            "Could not save game:",
            error
        );

    }

}


/* =====================================================
   LOAD
===================================================== */

function loadGame() {

    const saved =
        localStorage.getItem(
            "multiverseGame"
        );


    if (!saved) {
        return;
    }


    try {

        const loaded =
            JSON.parse(saved);


        if (loaded) {

            game =
                loaded;

        }

    }

    catch (error) {

        console.log(
            "Save was corrupted."
        );

    }

}


/* =====================================================
   APPLY EFFECT
===================================================== */

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


    if (type === "stability") {

        game.stability += amount;

        game.stability =
            Math.max(
                0,
                Math.min(
                    100,
                    game.stability
                )
            );

    }


    if (type === "alex") {

        game.alex += amount;

        game.alex =
            Math.max(
                0,
                Math.min(
                    100,
                    game.alex
                )
            );

    }


    if (type === "stranger") {

        game.stranger += amount;

        game.stranger =
            Math.max(
                0,
                Math.min(
                    100,
                    game.stranger
                )
            );

    }

}


/* =====================================================
   MAKE CHOICE
===================================================== */

function choose(choice) {

    /*
        Store a complete copy of the game BEFORE
        the choice.

        This makes Backtrack actually work.
    */

    if (!game.history) {

        game.history = [];

    }


    const previousState =
        JSON.parse(
            JSON.stringify(game)
        );


    game.history.push(
        previousState
    );


    /*
        Don't allow infinite memory usage.
    */

    if (
        game.history.length > 100
    ) {

        game.history.shift();

    }


    /*
        Apply effects.
    */

    applyEffect(
        choice.effect
    );


    /*
        Create a new dimension when needed.
    */

    if (
        choice.next ===
        "createNewDimension"
    ) {

        createNewDimension();

    }

    else {

        game.scene =
            choice.next;

    }


    /*
        Multiverse event.
    */

    if (
        game.stability <= 10 &&
        game.scene !== "event"
    ) {

        createMultiverseEvent();

    }


    saveGame();

    render();

}


/* =====================================================
   BACKTRACK
===================================================== */

function backtrack() {

    if (
        !game.history ||
        game.history.length === 0
    ) {

        alert(
            "There is nowhere to backtrack to yet."
        );

        return;

    }


    /*
        Restore the last complete state.
    */

    const previousState =
        game.history.pop();


    game =
        previousState;


    saveGame();

    render();


    showEvent(
        "TIMELINE REWOUND"
    );

}


/* =====================================================
   NEW DIMENSION
===================================================== */

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
            dimension =>
                dimension.id === id
        )
    );


    const locations = [

        "Ruined Downtown",

        "Frozen City",

        "Underground Laboratory",

        "Desert Research Facility",

        "Broken Space Station",

        "Unknown Colony",

        "Dead Forest",

        "Abandoned Research Facility"

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
            50
        );


    game.dimensions.push({

        id:
            id,

        location:
            location,

        stability:
            stability

    });


    game.dimension =
        id;


    game.stability =
        stability;


    /*
        For now, randomly generated dimensions
        connect to the Silent City / multiverse
        storyline.

        Later we can give EVERY dimension
        its own complete story.
    */

    game.scene =
        "newDimension";


    /*
        Make sure the scene exists.
    */

    scenes.newDimension = {

        speaker:
            "SYSTEM",

        location:
            location.toUpperCase(),

        character:
            "",

        text:
            "Reality shifts around you. You have entered Dimension " +
            id +
            ". This universe has never seen you before.",

        choices: [

            {
                text:
                    "Explore the new universe.",

                next:
                    "exploreNew"
            },

            {
                text:
                    "Search for another version of yourself.",

                next:
                    "alternate"
            },

            {
                text:
                    "Look for a way back.",

                next:
                    "return"
            },

            {
                text:
                    "Search for signs of the multiverse event.",

                next:
                    "event"
            }

        ]

    };


    scenes.exploreNew = {

        speaker:
            "SYSTEM",

        location:
            location.toUpperCase(),

        character:
            "alex",

        text:
            "You explore the unfamiliar world. Something feels wrong. The people here act as if they already know who you are.",

        choices: [

            {
                text:
                    "Ask someone what is happening.",

                next:
                    "silentEntity"
            },

            {
                text:
                    "Keep exploring.",

                next:
                    "alternate"
            },

            {
                text:
                    "Return to the previous dimension.",

                next:
                    "return"
            }

        ]

    };

}


/* =====================================================
   NEW STORYLINE
===================================================== */

function newStory() {

    /*
        Completely replace the current timeline.

        This is NOT the same subway story.
    */


    game = {

        storyline:
            "The Silent City",

        dimension:
            "73-Z",

        stability:
            100,

        alex:
            50,

        stranger:
            50,

        scene:
            "silentCityStart",

        dimensions: [

            {
                id:
                    "73-Z",

                location:
                    "Silent City",

                stability:
                    100

            }

        ],

        history: [],

        events: []

    };


    saveGame();

    render();


    showEvent(
        "NEW TIMELINE CREATED"
    );

}


/* =====================================================
   HARD RESET
===================================================== */

function hardReset() {

    const answer =
        confirm(
            "This will erase the current storyline and create a completely new game. Continue?"
        );


    if (!answer) {
        return;
    }


    localStorage.removeItem(
        "multiverseGame"
    );


    game = {

        storyline:
            "The Fractured Rebellion",

        dimension:
            "01-A",

        stability:
            100,

        alex:
            50,

        stranger:
            50,

        scene:
            "intro",

        dimensions: [

            {
                id:
                    "01-A",

                location:
                    "Abandoned Subway",

                stability:
                    100

            }

        ],

        history: [],

        events: []

    };


    saveGame();

    render();


    showEvent(
        "TIMELINE RESET"
    );

}


/* =====================================================
   MULTIVERSE EVENT
===================================================== */

function createMultiverseEvent() {

    const events = [

        "THE FRACTURE",

        "THE CONVERGENCE",

        "THE PARADOX",

        "THE TIMELINE WAR",

        "THE GREAT COLLAPSE",

        "THE INVERSION",

        "THE VOID"

    ];


    const name =
        events[
            Math.floor(
                Math.random() *
                events.length
            )
        ];


    const affected = [];


    /*
        Affect most known dimensions.
    */

    game.dimensions.forEach(
        dimension => {

            if (
                Math.random() <
                0.75
            ) {

                dimension.stability =
                    Math.max(
                        0,
                        dimension.stability -
                        Math.floor(
                            Math.random() *
                            20
                        )
                    );


                affected.push(
                    dimension.id
                );

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
        affected.length +
        " DIMENSIONS AFFECTED"
    );

}


/* =====================================================
   EVENT DISPLAY
===================================================== */

function showEvent(name) {

    const event =
        document.getElementById(
            "event"
        );


    const eventName =
        document.getElementById(
            "eventName"
        );


    if (!event || !eventName) {
        return;
    }


    eventName.textContent =
        name;


    event.classList.add(
        "show"
    );


    setTimeout(
        function() {

            event.classList.remove(
                "show"
            );

        },
        4500
    );

}


/* =====================================================
   DIMENSION MAP
===================================================== */

function openMap() {

    const windowElement =
        document.getElementById(
            "window"
        );


    const content =
        document.getElementById(
            "windowContent"
        );


    const title =
        document.getElementById(
            "windowTitle"
        );


    title.textContent =
        "DIMENSION MAP";


    content.innerHTML = "";


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
                ${dimension.location}

                <br>

                Stability:
                ${dimension.stability}%

            `;


            card.onclick =
                function() {

                    game.dimension =
                        dimension.id;


                    game.stability =
                        dimension.stability;


                    game.scene =
                        "return";


                    saveGame();

                    closeWindow();

                    render();

                };


            content.appendChild(
                card
            );

        }
    );


    windowElement.classList.add(
        "open"
    );

}


/* =====================================================
   CLOSE WINDOW
===================================================== */

function closeWindow() {

    document.getElementById(
        "window"
    ).classList.remove(
        "open"
    );

}


/* =====================================================
   RENDER GAME
===================================================== */

function render() {

    /*
        Make sure the scene exists.
    */

    let scene =
        scenes[game.scene];


    if (!scene) {

        console.error(
            "Scene does not exist:",
            game.scene
        );


        game.scene =
            "intro";


        scene =
            scenes.intro;

    }


    /*
        Dialogue.
    */

    document.getElementById(
        "speaker"
    ).textContent =
        scene.speaker;


    document.getElementById(
        "text"
    ).textContent =
        scene.text;


    document.getElementById(
        "location"
    ).textContent =
        scene.location;


    document.getElementById(
        "dimensionNumber"
    ).textContent =
        game.dimension;


    /*
        Storyline title.
    */

    document.getElementById(
        "story"
    ).textContent =
        game.storyline;


    /*
        Characters.
    */

    document.getElementById(
        "alex"
    ).classList.remove(
        "show"
    );


    document.getElementById(
        "stranger"
    ).classList.remove(
        "show"
    );


    if (
        scene.character ===
        "alex"
    ) {

        document.getElementById(
            "alex"
        ).classList.add(
            "show"
        );

    }


    if (
        scene.character ===
        "stranger"
    ) {

        document.getElementById(
            "stranger"
        ).classList.add(
            "show"
        );

    }


    /*
        Choices.
    */

    const choices =
        document.getElementById(
            "choices"
        );


    choices.innerHTML =
        "";


    scene.choices.forEach(
        function(choice) {

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

                    choose(
                        choice
                    );

                };


            choices.appendChild(
                button
            );

        }
    );


    /*
        Status bars.
    */

    document.getElementById(
        "stabilityBar"
    ).style.width =
        game.stability +
        "%";


    document.getElementById(
        "alexBar"
    ).style.width =
        game.alex +
        "%";


    document.getElementById(
        "strangerBar"
    ).style.width =
        game.stranger +
        "%";


    /*
        Background changes between dimensions.
    */

    const hue =
        Math.floor(
            Math.random() *
            360
        );


    document.getElementById(
        "background"
    ).style.background =

        `
        radial-gradient(
            circle at center,
            hsl(${hue},30%,25%),
            #141421 48%,
            #030308 100%
        )
        `;

}


/* =====================================================
   START GAME
===================================================== */

loadGame();

render();
