"use strict";

console.log("GAME.JS STARTED");

const worlds = [
    "Cyberpunk Earth",
    "Drowned Earth",
    "Frozen Earth",
    "Machine Earth",
    "Mirror Earth",
    "Post-Apocalyptic Earth",
    "Alien Earth",
    "Floating Earth",
    "Ancient Earth",
    "Reverse Earth"
];

const problems = [
    "androids are taking control of the city",
    "people are disappearing from reality",
    "a dimensional war has begun",
    "someone is replacing people with copies",
    "time has stopped moving correctly",
    "a mysterious signal is coming from another universe",
    "the city is slowly disappearing",
    "alternate versions of people are appearing",
    "someone is changing history",
    "the multiverse is beginning to collapse"
];

const characters = [
    "Alex",
    "Maya",
    "Nova",
    "Kai",
    "Jordan",
    "Riley",
    "Unit 734",
    "Dr. Morgan",
    "The Stranger",
    "The Other You"
];

function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function newDimension() {

    return {
        id: Math.floor(Math.random() * 999999),

        world: random(worlds),

        problem: random(problems),

        character: random(characters)
    };
}

let dimension = newDimension();

let scene = 0;

let history = [];


/* DISPLAY */

function display() {

    const text = document.getElementById("text");

    const speaker = document.getElementById("speaker");

    const choices = document.getElementById("choices");

    const dimensionText =
        document.getElementById("dimension");

    const location =
        document.getElementById("location");


    if (!text || !speaker || !choices) {

        console.error("GAME HTML ELEMENTS ARE MISSING");

        return;
    }


    dimensionText.textContent =
        "DIMENSION #" + dimension.id;


    location.textContent =
        dimension.world.toUpperCase();


    choices.innerHTML = "";


    if (scene === 0) {

        speaker.textContent =
            dimension.character;

        text.textContent =
            "You wake up in " +
            dimension.world +
            ". Something immediately feels wrong. " +
            dimension.problem +
            ".";


        addChoice(
            "Investigate the situation",
            1
        );

        addChoice(
            "Find someone who can explain this",
            1
        );

        addChoice(
            "Run away",
            2
        );

        addChoice(
            "Search for a dimensional portal",
            3
        );

    }

    else if (scene === 1) {

        speaker.textContent =
            dimension.character;

        text.textContent =
            dimension.character +
            " tells you the truth: " +
            dimension.problem +
            ". But they know something you don't.";

        addChoice(
            "Trust them",
            2
        );

        addChoice(
            "Ask what they are hiding",
            2
        );

        addChoice(
            "Leave them",
            3
        );

        addChoice(
            "Ask about other dimensions",
            3
        );

    }

    else if (scene === 2) {

        speaker.textContent =
            "SYSTEM";

        text.textContent =
            "The situation suddenly becomes worse. " +
            "You realize this problem could spread beyond this dimension.";

        addChoice(
            "Try to stop it",
            3
        );

        addChoice(
            "Save the people nearby",
            3
        );

        addChoice(
            "Find the source",
            4
        );

        addChoice(
            "Open a portal",
            4
        );

    }

    else if (scene === 3) {

        speaker.textContent =
            "THE STRANGER";

        text.textContent =
            "A stranger appears. They look exactly like you.";

        addChoice(
            "Talk to them",
            4
        );

        addChoice(
            "Run",
            4
        );

        addChoice(
            "Ask which dimension they came from",
            4
        );

        addChoice(
            "Attack",
            4
        );

    }

    else {

        speaker.textContent =
            "THE ARCHITECT";

        text.textContent =
            "You have reached the end of this timeline. " +
            "But the multiverse contains infinite possibilities.";

        addChoice(
            "Enter a new dimension",
            5
        );

        addChoice(
            "Create a new storyline",
            5
        );

        addChoice(
            "Search for another version of yourself",
            5
        );

        addChoice(
            "Trigger a multiverse event",
            5
        );

    }

}


/* CHOICE BUTTON */

function addChoice(label, next) {

    const button =
        document.createElement("button");

    button.className = "choice";

    button.textContent = label;

    button.onclick = function() {

        history.push({
            dimension: {
                ...dimension
            },
            scene: scene
        });

        if (next === 5) {

            dimension = newDimension();

            scene = 0;

        } else {

            scene = next;

        }

        display();

    };

    document
        .getElementById("choices")
        .appendChild(button);
}


/* BACKTRACK */

document
    .getElementById("backButton")
    .onclick = function() {

        if (history.length === 0) {

            alert(
                "Nothing to backtrack to."
            );

            return;
        }

        const old =
            history.pop();

        dimension =
            old.dimension;

        scene =
            old.scene;

        display();
    };


/* NEW STORYLINE */

document
    .getElementById("newButton")
    .onclick = function() {

        dimension =
            newDimension();

        scene = 0;

        history = [];

        display();
    };


/* HARD RESET */

document
    .getElementById("resetButton")
    .onclick = function() {

        dimension =
            newDimension();

        scene = 0;

        history = [];

        display();
    };


/* MAP */

document
    .getElementById("mapButton")
    .onclick = function() {

        alert(
            "You have discovered this dimension:\n\n" +
            dimension.world +
            "\nDimension #" +
            dimension.id
        );

    };


/* START */

display();

console.log(
    "INFINITE MULTIVERSE LOADED SUCCESSFULLY"
);
