/* ==================================================
   ALTERNATE TIMELINES
================================================== */

const alternateTimelines = [

    {
        name: "THE MACHINE WAR",

        dimension: "17-K",

        location: "NEON CITY - DISTRICT 9",

        intro: {
            speaker: "UNKNOWN",

            text:
                "Rain falls through the neon streets. Every machine in the city suddenly stops moving. Then your phone rings. The caller ID says YOUR NAME.",

            choices: [
                {
                    text: "Answer the phone.",
                    next: "machineCall"
                },
                {
                    text: "Ignore it and leave the city.",
                    next: "machineEscape"
                },
                {
                    text: "Trace the phone call.",
                    next: "machineTrace"
                },
                {
                    text: "Destroy the phone.",
                    next: "machineDestroy"
                }
            ]
        }
    },

    {
        name: "THE LAST HUMAN",

        dimension: "42-R",

        location: "ABANDONED RESEARCH FACILITY",

        intro: {
            speaker: "SYSTEM",

            text:
                "You wake inside a locked laboratory. Red emergency lights flash across the walls. A message appears on the glass: YOU ARE THE LAST HUMAN LEFT.",

            choices: [
                {
                    text: "Search the laboratory.",
                    next: "labSearch"
                },
                {
                    text: "Break the emergency door.",
                    next: "labDoor"
                },
                {
                    text: "Ask the computer what happened.",
                    next: "labComputer"
                },
                {
                    text: "Look for another survivor.",
                    next: "labSurvivor"
                }
            ]
        }
    },

    {
        name: "THE DEAD SUN",

        dimension: "08-X",

        location: "EARTH - YEAR 2149",

        intro: {
            speaker: "ALEX",

            text:
                "The sun has gone black. The world should be frozen, but somehow the city is still alive. Then something falls from the sky and crashes three blocks away.",

            choices: [
                {
                    text: "Go toward the crash.",
                    next: "sunCrash"
                },
                {
                    text: "Find shelter.",
                    next: "sunShelter"
                },
                {
                    text: "Look at the black sun.",
                    next: "sunLook"
                },
                {
                    text: "Try to contact someone.",
                    next: "sunContact"
                }
            ]
        }
    },

    {
        name: "THE MIRROR UNIVERSE",

        dimension: "99-M",

        location: "MIRROR CITY",

        intro: {
            speaker: "STRANGER",

            text:
                "You step outside your apartment and immediately realize something is wrong. Everyone on the street looks exactly like you.",

            choices: [
                {
                    text: "Talk to one of them.",
                    next: "mirrorTalk"
                },
                {
                    text: "Run back inside.",
                    next: "mirrorHome"
                },
                {
                    text: "Follow the crowd.",
                    next: "mirrorFollow"
                },
                {
                    text: "Find the oldest version of yourself.",
                    next: "mirrorOld"
                }
            ]
        }
    }

];


/* ==================================================
   ALTERNATE SCENES
================================================== */

scenes.machineCall = {

    speaker: "UNKNOWN",

    location: "NEON CITY",

    character: "stranger",

    text:
        "A distorted voice answers. 'Finally. I've been trying to reach you across twelve timelines.'",

    choices: [

        {
            text: "Ask who they are.",
            next: "machineTrace"
        },

        {
            text: "Ask what happened to the machines.",
            next: "machineEscape"
        },

        {
            text: "Hang up.",
            next: "machineDestroy"
        }

    ]

};


scenes.machineEscape = {

    speaker: "ALEX",

    location: "NEON CITY OUTSKIRTS",

    character: "alex",

    text:
        "You leave the city. Behind you, millions of machines turn their heads toward you at exactly the same time.",

    choices: [

        {
            text: "Keep running.",
            next: "machineTrace"
        },

        {
            text: "Turn around.",
            next: "machineCall"
        }

    ]

};


scenes.machineTrace = {

    speaker: "SYSTEM",

    location: "NEON CITY",

    character: "",

    text:
        "The signal leads beneath the city. Something has been building a machine capable of opening dimensional gates.",

    choices: [

        {
            text: "Enter the underground facility.",
            next: "portal"
        },

        {
            text: "Destroy the signal.",
            next: "machineDestroy"
        }

    ]

};


scenes.machineDestroy = {

    speaker: "ALEX",

    location: "NEON CITY",

    character: "alex",

    text:
        "You destroy the phone. Every machine in the city turns toward you. Then they begin walking.",

    choices: [

        {
            text: "Run.",
            next: "machineEscape"
        },

        {
            text: "Stay and confront them.",
            next: "machineCall"
        }

    ]

};


/* =========================
   LAST HUMAN
========================= */

scenes.labSearch = {

    speaker: "ALEX",

    location: "RESEARCH FACILITY",

    character: "alex",

    text:
        "You search the laboratory and discover hundreds of empty containment chambers. One chamber is still occupied.",

    choices: [

        {
            text: "Open the chamber.",
            next: "labSurvivor"
        },

        {
            text: "Read the chamber's records.",
            next: "labComputer"
        }

    ]

};


scenes.labDoor = {

    speaker: "SYSTEM",

    location: "RESEARCH FACILITY",

    character: "alex",

    text:
        "The emergency door opens. Beyond it is not another hallway. It is a completely different universe.",

    choices: [

        {
            text: "Step through.",
            next: "newDimension"
        },

        {
            text: "Close the door.",
            next: "labSearch"
        }

    ]

};


scenes.labComputer = {

    speaker: "FACILITY AI",

    location: "CONTROL ROOM",

    character: "",

    text:
        "The computer activates. 'Human population: ONE. Dimensional anomalies detected: 847.'",

    choices: [

        {
            text: "Ask where the other humans went.",
            next: "labSurvivor"
        },

        {
            text: "Ask about the dimensional anomalies.",
            next: "event"
        }

    ]

};


scenes.labSurvivor = {

    speaker: "UNKNOWN",

    location: "CONTAINMENT CHAMBER",

    character: "stranger",

    text:
        "The person inside the chamber opens their eyes. They look exactly like you.",

    choices: [

        {
            text: "Ask who they are.",
            next: "event"
        },

        {
            text: "Open the chamber.",
            next: "newDimension"
        },

        {
            text: "Leave them inside.",
            next: "labComputer"
        }

    ]

};


/* =========================
   DEAD SUN
========================= */

scenes.sunCrash = {

    speaker: "SYSTEM",

    location: "CRASH SITE",

    character: "alex",

    text:
        "Inside the crater is a machine from another universe. Its screen displays one message: WE FAILED HERE TOO.",

    choices: [

        {
            text: "Activate the machine.",
            next: "newDimension"
        },

        {
            text: "Search the wreckage.",
            next: "sunContact"
        }

    ]

};


scenes.sunShelter = {

    speaker: "ALEX",

    location: "UNDERGROUND SHELTER",

    character: "alex",

    text:
        "The shelter is filled with people who have been hiding for months. None of them remember the sun ever being normal.",

    choices: [

        {
            text: "Ask what happened.",
            next: "sunContact"
        },

        {
            text: "Tell them about the crash.",
            next: "sunCrash"
        }

    ]

};


scenes.sunLook = {

    speaker: "SYSTEM",

    location: "EARTH",

    character: "",

    text:
        "You stare at the black sun. Something stares back.",

    choices: [

        {
            text: "Look away.",
            next: "sunShelter"
        },

        {
            text: "Keep looking.",
            next: "event"
        }

    ]

};


scenes.sunContact = {

    speaker: "SYSTEM",

    location: "EARTH",

    character: "",

    text:
        "Your radio suddenly receives a transmission from Earth. The voice says: 'This isn't your first timeline.'",

    choices: [

        {
            text: "Ask who is speaking.",
            next: "event"
        },

        {
            text: "Ask about the other timelines.",
            next: "newDimension"
        }

    ]

};


/* =========================
   MIRROR UNIVERSE
========================= */

scenes.mirrorTalk = {

    speaker: "OTHER YOU",

    location: "MIRROR CITY",

    character: "alex",

    text:
        "The person smiles. 'You're not supposed to be here. We already replaced you.'",

    choices: [

        {
            text: "Ask what they mean.",
            next: "mirrorOld"
        },

        {
            text: "Run.",
            next: "mirrorHome"
        },

        {
            text: "Demand answers.",
            next: "event"
        }

    ]

};


scenes.mirrorHome = {

    speaker: "ALEX",

    location: "YOUR APARTMENT",

    character: "alex",

    text:
        "You lock the door. Your apartment looks exactly the same, except there is already someone sitting on your bed.",

    choices: [

        {
            text: "Turn on the lights.",
            next: "mirrorTalk"
        },

        {
            text: "Leave through the window.",
            next: "mirrorFollow"
        }

    ]

};


scenes.mirrorFollow = {

    speaker: "SYSTEM",

    location: "MIRROR CITY",

    character: "",

    text:
        "You follow the crowd into a massive building. Every person enters the same room and sits down at the same time.",

    choices: [

        {
            text: "Enter the room.",
            next: "mirrorOld"
        },

        {
            text: "Find another exit.",
            next: "mirrorHome"
        }

    ]

};


scenes.mirrorOld = {

    speaker: "THE OLDEST YOU",

    location: "MIRROR CITY",

    character: "stranger",

    text:
        "The oldest version of you looks exhausted. 'I've been trying to find the original universe for years.'",

    choices: [

        {
            text: "Ask where the original is.",
            next: "event"
        },

        {
            text: "Ask why the universes are connected.",
            next: "event"
        },

        {
            text: "Ask how to leave.",
            next: "newDimension"
        }

    ]

};
