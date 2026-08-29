/* =========================================
   MULTIVERSE: FRACTURED
   PROCEDURAL MULTIVERSE ENGINE
========================================= */


/* ---------- RANDOM ---------- */

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function randomId() {
    return Math.floor(
        1000 + Math.random() * 9000
    );
}


/* ---------- STORY THEMES ---------- */

const themes = [
    "The Fractured Rebellion",
    "The Last Human",
    "War of the Versions",
    "The Missing Timeline",
    "Echoes of Tomorrow",
    "The Collapse",
    "The Infinite Stranger",
    "The Dead Universe"
];

const locations = [
    "Ruined Metro Station",
    "Abandoned City",
    "Underground Facility",
    "Frozen Colony",
    "Broken Downtown",
    "Deserted Laboratory",
    "Unknown Planet",
    "Destroyed Research Center"
];

const events = [
    "THE FRACTURE",
    "THE COLLAPSE",
    "THE ECHO",
    "THE CONVERGENCE",
    "THE INVERSION",
    "THE GREAT SHIFT",
    "THE PARADOX",
    "THE VOID"
];


/* ---------- GAME STATE ---------- */

let game = {

    multiverseId: randomId(),

    storyline: themes[
        randomNumber(themes.length)
    ],

    currentDimension: "01-A",

    dimensions: [],

    choices: [],

    events: [],

    characters: {

        alex: 50,

        stranger: 50

    },

    stability: 100,

    currentScene: "start",

    generation: 1

};


/* =========================================
   DIMENSION GENERATION
========================================= */

function generateDimension(parent = null) {

    const number =
        String(
            Math.floor(
                1 + Math.random() * 99
            )
        ).padStart(2, "0");

    const letter =
        String.fromCharCode(
            65 + randomNumber(26)
        );

    const id =
        number + "-" + letter;

    const dimension = {

        id: id,

        parent:
            parent ||
            null,

        location:
            locations[
                randomNumber(
                    locations.length
                )
            ],

        stability:
            Math.floor(
                40 + Math.random() * 60
            ),

        visited: true,

        createdAt:
            Date.now(),

        altered: false

    };

    game.dimensions.push(
        dimension
    );

    return dimension;
}


/* =========================================
   ENSURE STARTING DIMENSION
========================================= */

function setupStartingDimension() {

    if (
        game.dimensions.length === 0
    ) {

        const starting =
            generateDimension();

        game.currentDimension =
            starting.id;

    }

}


/* =========================================
   GET CURRENT DIMENSION
========================================= */

function currentDimension() {

    return game.dimensions.find(
        d =>
            d.id ===
            game.currentDimension
    );

}


/* =========================================
   CREATE NEW BRANCH
========================================= */

function createBranch() {

    const current =
        currentDimension();

    const newDimension =
        generateDimension(
            current.id
        );

    current.altered = true;

    game.currentDimension =
        newDimension.id;

    game.generation++;

    game.stability =
        newDimension.stability;

    saveGame();

}


/* =========================================
   STORY GENERATION
========================================= */

function generateScene() {

    const dimension =
        currentDimension();

    const possibleEvents = [];

    /*
    Major event chance increases
    as the multiverse becomes unstable.
    */

    if (
        Math.random() <
        (100 - game.stability) / 150
    ) {

        triggerMultiverseEvent();

    }


    const eventText =
        game.events.length > 0
            ? game.events[
                game.events.length - 1
              ].name
            : null;


    let speaker =
        Math.random() > .5
            ? "ALEX"
            : "STRANGER";


    let text;


    if (eventText) {

        text =
            `Something is wrong with ${dimension.id}. ` +
            `The effects of ${eventText} are spreading ` +
            `through this reality.`;

    } else {

        const situations = [

            "You hear footsteps behind you.",

            "A figure appears across the street.",

            "The lights suddenly shut off.",

            "A portal opens nearby.",

            "Your device begins vibrating.",

            "Someone calls your name.",

            "The city suddenly freezes.",

            "A version of you appears."

        ];

        text =
            situations[
                randomNumber(
                    situations.length
                )
            ];

    }


    const choices =
        generateChoices();


    return {

        speaker,

        location:
            dimension.location,

        text,

        choices

    };

}


/* =========================================
   PROCEDURAL CHOICES
========================================= */

function generateChoices() {

    const templates = [

        {
            text: "Approach the stranger.",
            effect: {
                stranger: 8,
                stability: -3
            }
        },

        {
            text: "Walk away.",
            effect: {
                stranger: -5,
                stability: 2
            }
        },

        {
            text: "Investigate the anomaly.",
            effect: {
                stability: -8
            }
        },

        {
            text: "Use the device.",
            effect: {
                stability: -12
            }
        },

        {
            text: "Try to change the timeline.",
            effect: {
                stability: -15
            }
        },

        {
            text: "Trust Alex.",
            effect: {
                alex: 10
            }
        },

        {
            text: "Don't trust anyone.",
            effect: {
                alex: -4,
                stranger: -4
            }
        },

        {
            text: "Go back to an earlier dimension.",
            special: "map"
        },

        {
            text: "Create a completely new branch.",
            special: "branch"
        },

        {
            text: "Wait and observe.",
            effect: {
                stability: 5
            }
        }

    ];


    /*
    Pick four unique choices.
    */

    const shuffled =
        [...templates]
            .sort(
                () =>
                    Math.random() - .5
            );


    return shuffled
        .slice(0, 4);
}


/* =========================================
   CHOICE HANDLER
========================================= */

function chooseChoice(choice) {

    game.choices.push({

        dimension:
            game.currentDimension,

        text:
            choice.text,

        time:
            Date.now()

    });


    if (choice.effect) {

        if (choice.effect.alex) {

            game.characters.alex +=
                choice.effect.alex;

        }

        if (choice.effect.stranger) {

            game.characters.stranger +=
                choice.effect.stranger;

        }

        if (choice.effect.stability) {

            game.stability +=
                choice.effect.stability;

        }

    }


    game.stability =
        Math.max(
            0,
            Math.min(
                100,
                game.stability
            )
        );


    if (
        choice.special ===
        "branch"
    ) {

        createBranch();

    }


    if (
        choice.special ===
        "map"
    ) {

        openMap();

        return;

    }


    /*
    If stability becomes dangerously low,
    trigger a major event.
    */

    if (
        game.stability <= 20
    ) {

        triggerMultiverseEvent();

    }


    saveGame();

    showSave();

    nextScene();

}


/* =========================================
   NEXT SCENE
========================================= */

function nextScene() {

    const scene =
        generateScene();

    renderScene(scene);

}


/* =========================================
   MULTIVERSE EVENT
========================================= */

function triggerMultiverseEvent() {

    const name =
        events[
            randomNumber(
                events.length
            )
        ];


    /*
    Prevent the same event from being
    triggered repeatedly.
    */

    if (
        game.events.some(
            e =>
                e.name === name
        )
    ) {

        return;

    }


    const event = {

        name,

        strength:
            Math.floor(
                20 +
                Math.random() * 80
            ),

        created:
            Date.now(),

        affectedUniverses: []

    };


    /*
    Affect most known dimensions.
    */

    game.dimensions.forEach(
        dimension => {

            if (
                Math.random() < .75
            ) {

                dimension.stability -=
                    Math.floor(
                        event.strength / 10
                    );

                dimension.stability =
                    Math.max(
                        0,
                        dimension.stability
                    );

                event.affectedUniverses
                    .push(
                        dimension.id
                    );

            }

        }
    );


    game.events.push(
        event
    );


    showEvent(
        name
    );

    saveGame();

}


/* =========================================
   RENDER SCENE
========================================= */

function renderScene(scene) {

    document.getElementById(
        "speaker"
    ).textContent =
        scene.speaker;

    document.getElementById(
        "dialogueText"
    ).textContent =
        scene.text;


    /*
    Background
    */

    const dimension =
        currentDimension();

    document.getElementById(
        "background"
    ).style.background =
        `
        radial-gradient(
            circle at 50% 35%,
            hsl(
                ${randomNumber(360)},
                35%,
                25%
            ),
            #080810 58%,
            #010103
        )
        `;


    /*
    Characters
    */

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
        scene.speaker ===
        "ALEX"
    ) {

        alex.classList.remove(
            "hidden"
        );

    } else {

        stranger.classList.remove(
            "hidden"
        );

    }


    /*
    Choices
    */

    const choices =
        document.getElementById(
            "choices"
        );

    choices.innerHTML = "";


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
                () =>
                    chooseChoice(
                        choice
                    );

            choices.appendChild(
                button
            );

        }
    );


    updateUI();

}


/* =========================================
   UI
========================================= */

function updateUI() {

    document.getElementById(
        "multiverseId"
    ).textContent =
        "MULTIVERSE #" +
        game.multiverseId;


    document.getElementById(
        "dimensionName"
    ).textContent =
        game.currentDimension;


    document.getElementById(
        "stabilityFill"
    ).style.width =
        game.stability + "%";


    document.getElementById(
        "stabilityText"
    ).textContent =
        game.stability + "%";


    document.getElementById(
        "alexRelation"
    ).style.width =
        clamp(
            game.characters.alex
        ) + "%";


    document.getElementById(
        "strangerRelation"
    ).style.width =
        clamp(
            game.characters.stranger
        ) + "%";


    updateEvents();

}


/* =========================================
   EVENTS UI
========================================= */

function updateEvents() {

    const list =
        document.getElementById(
            "eventList"
        );


    if (
        game.events.length === 0
    ) {

        list.textContent =
            "No major events detected.";

        return;

    }


    list.innerHTML =
        game.events
            .slice(-5)
            .map(
                event =>
                    `<div>
                        ⚠ ${event.name}
                        <br>
                        Affected:
                        ${event.affectedUniverses.length}
                        dimensions
                    </div>`
            )
            .join("");

}


/* =========================================
   EVENT WARNING
========================================= */

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
        4000
    );

}


/* =========================================
   DIMENSION MAP
========================================= */

function openMap() {

    closeOverlays();

    const screen =
        document.getElementById(
            "mapScreen"
        );

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
                "dimension-card";


            card.innerHTML = `

                <strong>
                    UNIVERSE ${dimension.id}
                </strong>

                <br>

                ${dimension.location}

                <br>

                Stability:
                ${dimension.stability}%

                <br>

                ${
                    dimension.id ===
                    game.currentDimension
                    ? "CURRENT"
                    : "VISITED"
                }

            `;


            card.onclick =
                () => {

                    travelTo(
                        dimension.id
                    );

                };


            list.appendChild(
                card
            );

        }
    );


    screen.classList.remove(
        "hidden"
    );

}


/* =========================================
   TRAVEL BACK
========================================= */

function travelTo(id) {

    const target =
        game.dimensions.find(
            d =>
                d.id === id
        );


    if (!target) return;


    game.currentDimension =
        id;


    game.stability =
        target.stability;


    /*
    Returning to a previous dimension
    allows the player to make a different
    choice and create a new timeline.
    */

    target.altered = true;


    saveGame();

    closeOverlays();

    nextScene();

}


/* =========================================
   STORYLINES
========================================= */

function openStorylines() {

    closeOverlays();

    const screen =
        document.getElementById(
            "storyScreen"
        );

    const list =
        document.getElementById(
            "storyList"
        );


    list.innerHTML = `

        <div class="story-card">

            <strong>
                CURRENT STORYLINE
            </strong>

            <br><br>

            ${game.storyline}

            <br><br>

            Multiverse #${game.multiverseId}

            <br>

            ${game.dimensions.length}
            dimensions discovered.

        </div>

    `;


    screen.classList.remove(
        "hidden"
    );

}


/* =========================================
   NEW STORYLINE
========================================= */

function newStoryline() {

    /*
    Preserve the current multiverse
    in the browser archive.
    */

    archiveCurrentStoryline();


    game =
        createFreshGame();


    setupStartingDimension();

    saveGame();

    nextScene();

}


/* =========================================
   CREATE FRESH GAME
========================================= */

function createFreshGame() {

    return {

        multiverseId:
            randomId(),

        storyline:
            themes[
                randomNumber(
                    themes.length
                )
            ],

        currentDimension:
            "01-A",

        dimensions: [],

        choices: [],

        events: [],

        characters: {

            alex: 50,

            stranger: 50

        },

        stability: 100,

        currentScene: "start",

        generation: 1

    };

}


/* =========================================
   ARCHIVE
========================================= */

function archiveCurrentStoryline() {

    const archives =
        JSON.parse(
            localStorage.getItem(
                "multiverseArchives"
            ) || "[]"
        );


    archives.push(
        game
    );


    /*
    Keep previous storylines.
    */

    localStorage.setItem(
        "multiverseArchives",
        JSON.stringify(
            archives
        )
    );

}


/* =========================================
   HARD RESET
========================================= */

function hardReset() {

    closeOverlays();

    document.getElementById(
        "resetTitle"
    ).textContent =
        "HARD RESET";


    document.getElementById(
        "resetDescription"
    ).textContent =
        "Start a completely new storyline. " +
        "Your current storyline will be archived " +
        "and can be recovered later.";


    document.getElementById(
        "resetScreen"
    ).classList.remove(
        "hidden"
    );


    window.resetType =
        "hard";

}


/* =========================================
   TRUE RESET
========================================= */

function trueReset() {

    closeOverlays();

    document.getElementById(
        "resetTitle"
    ).textContent =
        "TRUE RESET";


    document.getElementById(
        "resetDescription"
    ).textContent =
        "WARNING: This deletes every known " +
        "dimension, storyline, event, choice, " +
        "and archive from this browser.";


    document.getElementById(
        "resetScreen"
    ).classList.remove(
        "hidden"
    );


    window.resetType =
        "true";

}


/* =========================================
   CONFIRM RESET
========================================= */

function confirmReset() {

    if (
        window.resetType ===
        "hard"
    ) {

        newStoryline();

    }


    if (
        window.resetType ===
        "true"
    ) {

        localStorage.removeItem(
            "multiverseSave"
        );

        localStorage.removeItem(
            "multiverseArchives"
        );


        game =
            createFreshGame();


        setupStartingDimension();

        saveGame();

        closeOverlays();

        nextScene();

    }

}


/* =========================================
   CLOSE WINDOWS
========================================= */

function closeOverlays() {

    document.querySelectorAll(
        ".overlay"
    ).forEach(
        overlay =>
            overlay.classList.add(
                "hidden"
            )
    );

}


/* =========================================
   SAVE
========================================= */

function saveGame() {

    localStorage.setItem(
        "multiverseSave",
        JSON.stringify(
            game
        )
    );

}


function loadGame() {

    const saved =
        localStorage.getItem(
            "multiverseSave"
        );


    if (!saved) {

        game =
            createFreshGame();

        setupStartingDimension();

        saveGame();

        return;

    }


    try {

        game =
            JSON.parse(
                saved
            );

    }

    catch {

        game =
            createFreshGame();

        setupStartingDimension();

    }

}


/* =========================================
   SAVE INDICATOR
========================================= */

function showSave() {

    const indicator =
        document.getElementById(
            "saveIndicator"
        );


    indicator.style.opacity =
        "1";


    setTimeout(
        () => {

            indicator.style.opacity =
                "0";

        },
        1000
    );

}


/* =========================================
   CLAMP
========================================= */

function clamp(number) {

    return Math.max(
        0,
        Math.min(
            100,
            number
        )
    );

}


/* =========================================
   START
========================================= */

loadGame();

setupStartingDimension();

updateUI();

nextScene();
