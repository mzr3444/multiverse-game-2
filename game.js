/*
==================================================
MULTIVERSE: FRACTURED
GAME ENGINE
==================================================
*/


/* =========================
   PLAYER DATA
========================= */

let player = {

    universe: 1,

    alexRelationship: 50,

    strangerRelationship: 50,

    trust: 50,

    timelineStability: 100,

    choices: [],

    flags: {}

};


/* =========================
   STORY
========================= */

const story = {

    start: {

        speaker: "SYSTEM",

        location: "ABANDONED SUBWAY",

        background: "subway",

        character: "none",

        text:
            "11:47 PM. You wake up on the floor of an abandoned subway station.",

        choices: [

            {
                text: "Get up and look around.",
                next: "lookAround",

                effect: {
                    trust: 5
                }
            },

            {
                text: "Stay still and listen.",
                next: "listen",

                effect: {
                    trust: -2
                }
            }

        ]

    },


    lookAround: {

        speaker: "ALEX",

        location: "ABANDONED SUBWAY",

        character: "alex",

        text:
            "The station is empty. No passengers. No trains. Just a strange device attached to your wrist.",

        choices: [

            {
                text: "Examine the device.",
                next: "device",

                effect: {
                    timelineStability: -5
                }
            },

            {
                text: "Search for an exit.",
                next: "exit"
            }

        ]

    },


    listen: {

        speaker: "ALEX",

        location: "ABANDONED SUBWAY",

        character: "alex",

        text:
            "You hear footsteps coming from the darkness.",

        choices: [

            {
                text: "Call out.",
                next: "strangerEntrance",

                effect: {
                    strangerRelationship: 5
                }
            },

            {
                text: "Hide.",
                next: "strangerEntrance",

                effect: {
                    strangerRelationship: -5
                }
            }

        ]

    },


    device: {

        speaker: "SYSTEM",

        location: "ABANDONED SUBWAY",

        character: "alex",

        text:
            "UNIVERSE DETECTED: 01. TIMELINE STABILITY: 95%.",

        choices: [

            {
                text: "Activate the device.",
                next: "activate",

                effect: {
                    timelineStability: -20
                }
            },

            {
                text: "Leave it alone.",
                next: "strangerEntrance"
            }

        ]

    },


    exit: {

        speaker: "ALEX",

        location: "SUBWAY EXIT",

        character: "alex",

        text:
            "You find an exit. But outside is another subway station.",

        choices: [

            {
                text: "Go outside.",
                next: "universeShift"
            },

            {
                text: "Go back.",
                next: "strangerEntrance"
            }

        ]

    },


    strangerEntrance: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "You shouldn't be here.",

        choices: [

            {
                text: "Who are you?",
                next: "who",

                effect: {
                    strangerRelationship: 5
                }
            },

            {
                text: "Back away.",
                next: "threat",

                effect: {
                    strangerRelationship: -10
                }
            },

            {
                text: "How do you know I'm not supposed to be here?",
                next: "knows",

                effect: {
                    strangerRelationship: 8
                }
            }

        ]

    },


    who: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "I've met you before.",

        choices: [

            {
                text: "That's impossible.",
                next: "impossible"
            },

            {
                text: "Where?",
                next: "where"
            }

        ]

    },


    knows: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "Because I've seen what happens when you stay.",

        choices: [

            {
                text: "What happens?",
                next: "warning",

                effect: {
                    strangerRelationship: 5
                }
            },

            {
                text: "I don't believe you.",
                next: "impossible",

                effect: {
                    strangerRelationship: -5
                }
            }

        ]

    },


    threat: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "If I wanted you dead, you wouldn't be standing there.",

        choices: [

            {
                text: "Then help me.",
                next: "help",

                effect: {
                    strangerRelationship: 10
                }
            },

            {
                text: "Stay away from me.",
                next: "betrayal",

                effect: {
                    strangerRelationship: -15
                }
            }

        ]

    },


    where: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "In another universe.",

        choices: [

            {
                text: "Another universe?",
                next: "multiverse"
            }

        ]

    },


    impossible: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "That's what I said the first time too.",

        choices: [

            {
                text: "First time?",
                next: "multiverse"
            }

        ]

    },


    warning: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "This universe collapses in 17 minutes.",

        choices: [

            {
                text: "You're lying.",
                next: "timerScene"
            },

            {
                text: "How do we stop it?",
                next: "help",

                effect: {
                    strangerRelationship: 10
                }
            }

        ],

        timed: true,

        time: 12

    },


    help: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "The device on your wrist. It can open a doorway to another timeline.",

        choices: [

            {
                text: "Open the doorway.",
                next: "universeShift",

                effect: {
                    timelineStability: -15
                }
            },

            {
                text: "Destroy the device.",
                next: "destroy",

                effect: {
                    timelineStability: 20
                }
            }

        ]

    },


    activate: {

        speaker: "SYSTEM",

        location: "SUBWAY",

        character: "alex",

        text:
            "TIMELINE BREACH DETECTED.",

        choices: [

            {
                text: "Continue.",
                next: "universeShift"
            }

        ]

    },


    destroy: {

        speaker: "ALEX",

        location: "ABANDONED SUBWAY",

        character: "alex",

        text:
            "You smash the device against the floor.",

        choices: [

            {
                text: "Look at the stranger.",
                next: "destroyResult"
            }

        ]

    },


    destroyResult: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "You just trapped us here.",

        choices: [

            {
                text: "What have I done?",
                next: "badEnding"
            }

        ]

    },


    betrayal: {

        speaker: "SYSTEM",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "The stranger disappears into the darkness.",

        choices: [

            {
                text: "Follow them.",
                next: "universeShift"
            },

            {
                text: "Stay.",
                next: "badEnding"
            }

        ]

    },


    timerScene: {

        speaker: "SYSTEM",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "A countdown appears on your wrist.",

        choices: [

            {
                text: "Run with the stranger.",
                next: "universeShift"
            },

            {
                text: "Stay and investigate.",
                next: "badEnding"
            }

        ],

        timed: true,

        time: 10

    },


    multiverse: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "Every decision creates another version of this world.",

        choices: [

            {
                text: "So there are versions of me?",
                next: "alternate"
            },

            {
                text: "How many universes are there?",
                next: "alternate"
            }

        ]

    },


    alternate: {

        speaker: "STRANGER",

        location: "ABANDONED SUBWAY",

        character: "stranger",

        text:
            "Enough to make one mistake disappear... and another one take its place.",

        choices: [

            {
                text: "Open the portal.",
                next: "universeShift",

                effect: {
                    strangerRelationship: 5
                }
            },

            {
                text: "Don't do it.",
                next: "badEnding"
            }

        ]

    },


    universeShift: {

        speaker: "SYSTEM",

        location: "TIMELINE BREACH",

        character: "none",

        text:
            "TIMELINE SHIFT INITIATED...",

        choices: [

            {
                text: "Continue.",
                next: "universeTwo"
            }

        ]

    },


    universeTwo: {

        speaker: "SYSTEM",

        location: "UNIVERSE 02",

        character: "alex",

        text:
            "UNIVERSE 02. TIMELINE STABILITY: 72%.",

        choices: [

            {
                text: "Look for another version of yourself.",
                next: "alternateAlex"
            },

            {
                text: "Find the stranger.",
                next: "strangerTwo"
            }

        ]

    },


    alternateAlex: {

        speaker: "ALEX",

        location: "UNIVERSE 02",

        character: "alex",

        text:
            "Someone is standing across the street. They look exactly like you.",

        choices: [

            {
                text: "Approach them.",
                next: "endingOne"
            },

            {
                text: "Hide.",
                next: "endingTwo"
            }

        ]

    },


    strangerTwo: {

        speaker: "STRANGER",

        location: "UNIVERSE 02",

        character: "stranger",

        text:
            "You finally made it.",

        choices: [

            {
                text: "Made it where?",
                next: "endingOne"
            },

            {
                text: "What happened here?",
                next: "endingTwo"
            }

        ]

    },


    badEnding: {

        speaker: "SYSTEM",

        location: "COLLAPSING TIMELINE",

        character: "none",

        text:
            "TIMELINE COLLAPSE. UNIVERSE 01 HAS BEEN LOST.",

        choices: [

            {
                text: "Restart Universe 01.",
                next: "start"
            }

        ]

    },


    endingOne: {

        speaker: "SYSTEM",

        location: "UNIVERSE 02",

        character: "alex",

        text:
            "Your choices have created a timeline that was never supposed to exist.",

        choices: [

            {
                text: "Continue.",
                next: "final"
            }

        ]

    },


    endingTwo: {

        speaker: "SYSTEM",

        location: "UNIVERSE 02",

        character: "stranger",

        text:
            "Somewhere behind you, another version of yourself is watching.",

        choices: [

            {
                text: "Turn around.",
                next: "final"
            }

        ]

    },


    final: {

        speaker: "SYSTEM",

        location: "UNKNOWN",

        character: "none",

        text:
            "THIS WAS ONLY THE FIRST UNIVERSE.",

        choices: [

            {
                text: "Restart.",
                next: "start"
            }

        ]

    }

};


/* =========================
   HTML ELEMENTS
========================= */

const dialogueText =
    document.getElementById("dialogueText");

const speaker =
    document.getElementById("speaker");

const choicesContainer =
    document.getElementById("choices");

const background =
    document.getElementById("background");

const alex =
    document.getElementById("alex");

const stranger =
    document.getElementById("stranger");

const universeNumber =
    document.getElementById("universeNumber");

const alexRelationship =
    document.getElementById("alexRelationship");

const strangerRelationship =
    document.getElementById("strangerRelationship");

const timerContainer =
    document.getElementById("timerContainer");

const timerFill =
    document.getElementById("timerFill");

const saveMessage =
    document.getElementById("saveMessage");

const locationText =
    document.getElementById("location");


/* =========================
   LOAD SCENE
========================= */

function loadScene(sceneName) {

    const scene = story[sceneName];

    if (!scene) {

        console.error(
            "Scene not found:",
            sceneName
        );

        return;

    }


    /* Save current scene */

    player.currentScene = sceneName;


    /* Universe */

    universeNumber.textContent =
        String(player.universe).padStart(2, "0");


    /* Location */

    locationText.textContent =
        scene.location;


    /* Speaker */

    speaker.textContent =
        scene.speaker;


    /* Dialogue */

    typeText(scene.text);


    /* Character visibility */

    alex.classList.add("hidden");
    stranger.classList.add("hidden");

    alex.classList.remove("active");
    stranger.classList.remove("active");

    alex.classList.add("inactive");
    stranger.classList.add("inactive");


    if (scene.character === "alex") {

        alex.classList.remove("hidden");
        alex.classList.remove("inactive");
        alex.classList.add("active");

    }


    if (scene.character === "stranger") {

        stranger.classList.remove("hidden");
        stranger.classList.remove("inactive");
        stranger.classList.add("active");

    }


    /* Background */

    changeBackground(scene.background);


    /* Choices */

    choicesContainer.innerHTML = "";


    scene.choices.forEach(
        (choice, index) => {

            const button =
                document.createElement("button");

            button.classList.add("choice");

            button.textContent =
                choice.text;

            button.onclick = () => {

                choose(
                    choice,
                    index
                );

            };

            choicesContainer.appendChild(
                button
            );

        }
    );


    /* Timer */

    if (scene.timed) {

        startTimer(scene.time);

    } else {

        stopTimer();

    }


    updateStats();

    saveGame();

}


/* =========================
   TYPEWRITER
========================= */

let typingTimer;

function typeText(text) {

    clearInterval(typingTimer);

    dialogueText.textContent = "";

    let index = 0;

    typingTimer =
        setInterval(() => {

            dialogueText.textContent +=
                text[index];

            index++;

            if (index >= text.length) {

                clearInterval(
                    typingTimer
                );

            }

        }, 18);

}


/* =========================
   CHOICE
========================= */

function choose(choice, index) {

    clearInterval(typingTimer);

    choicesContainer.innerHTML = "";

    applyEffects(
        choice.effect
    );

    player.choices.push({
        scene: player.currentScene,
        choice: choice.text
    });


    /* Check special events */

    if (
        choice.next ===
        "universeTwo"
    ) {

        player.universe = 2;

    }


    if (
        choice.next ===
        "universeShift"
    ) {

        player.universe++;

    }


    loadScene(
        choice.next
    );

}


/* =========================
   EFFECTS
========================= */

function applyEffects(effect) {

    if (!effect) return;


    Object.keys(effect)
        .forEach(key => {

            if (
                typeof player[key]
                === "number"
            ) {

                player[key] +=
                    effect[key];

            }

        });


    /* Keep stats between 0-100 */

    player.alexRelationship =
        clamp(
            player.alexRelationship
        );

    player.strangerRelationship =
        clamp(
            player.strangerRelationship
        );

    player.trust =
        clamp(
            player.trust
        );

    player.timelineStability =
        clamp(
            player.timelineStability
        );

}


/* =========================
   CLAMP
========================= */

function clamp(number) {

    return Math.max(
        0,
        Math.min(
            100,
            number
        )
    );

}


/* =========================
   STATS
========================= */

function updateStats() {

    alexRelationship.style.width =
        player.alexRelationship + "%";

    strangerRelationship.style.width =
        player.strangerRelationship + "%";

}


/* =========================
   BACKGROUNDS
========================= */

function changeBackground(type) {

    if (type === "subway") {

        background.style.background =
            `
            radial-gradient(
                circle at 50% 35%,
                #303050,
                #10101b 55%,
                #020204
            )
            `;

    }

    else {

        background.style.background =
            `
            radial-gradient(
                circle at 50% 40%,
                #202040,
                #080812 60%,
                #020203
            )
            `;

    }

}


/* =========================
   TIMER
========================= */

let timerInterval;

function startTimer(seconds) {

    clearInterval(
        timerInterval
    );

    timerContainer.style.display =
        "block";

    let remaining =
        seconds;

    timerFill.style.width =
        "100%";


    timerInterval =
        setInterval(() => {

            remaining -= 0.1;

            const percent =
                (remaining / seconds) * 100;

            timerFill.style.width =
                percent + "%";


            if (remaining <= 0) {

                clearInterval(
                    timerInterval
                );

                timerContainer.style.display =
                    "none";

                /* Automatic consequence */

                loadScene(
                    "badEnding"
                );

            }

        }, 100);

}


function stopTimer() {

    clearInterval(
        timerInterval
    );

    timerContainer.style.display =
        "none";

}


/* =========================
   SAVE
========================= */

function saveGame() {

    localStorage.setItem(
        "multiverseSave",
        JSON.stringify(player)
    );

}


function loadSave() {

    const saved =
        localStorage.getItem(
            "multiverseSave"
        );

    if (!saved) return;

    try {

        player =
            JSON.parse(saved);

    }

    catch {

        console.log(
            "Save file could not be loaded."
        );

    }

}


/* =========================
   SAVE MESSAGE
========================= */

function showSaveMessage() {

    saveMessage.style.opacity =
        "1";

    setTimeout(() => {

        saveMessage.style.opacity =
            "0";

    }, 1200);

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
    "keydown",
    event => {

        const buttons =
            document.querySelectorAll(
                ".choice"
            );

        const number =
            parseInt(
                event.key
            ) - 1;


        if (
            number >= 0 &&
            number < buttons.length
        ) {

            buttons[number].click();

        }

    }
);


/* =========================
   START
========================= */

loadSave();

loadScene(
    player.currentScene ||
    "start"
);
