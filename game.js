```javascript
/* =========================================================
   INFINITE MULTIVERSE
   PROCEDURAL STORY ENGINE
========================================================= */


/* =========================================================
   STORY INGREDIENTS
========================================================= */

const worlds = [

    "Cyberpunk Earth",
    "Drowned Earth",
    "Desert Earth",
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
    "Moon Colony",
    "Mars Colony",
    "Space Station",
    "Infinite City",
    "Kingdom of Ash",
    "The Silent World",
    "The Last Human World",
    "The Reverse World"
];


const locations = [

    "New Detroit",
    "New York",
    "Albuquerque",
    "Tokyo",
    "Neo London",
    "Sector 7",
    "The Underground",
    "The Last City",
    "The Capital",
    "The Outer Colony",
    "The Forgotten Coast",
    "The Central District",
    "The Ruined Megacity",
    "The Floating District",
    "The Red Zone",
    "The Black Sea",
    "The Lunar Colony",
    "The Northern Wastes",
    "The Glass City",
    "The Old World"
];


const eras = [

    "2031",
    "2047",
    "2075",
    "2099",
    "2140",
    "2187",
    "2204",
    "2270",
    "2319",
    "2500",
    "unknown year"
];


const rules = [

    "People can read minds.",
    "Time moves differently for every person.",
    "Nobody can lie.",
    "Everyone has a duplicate.",
    "Machines have emotions.",
    "Humans cannot dream.",
    "Death only lasts for one hour.",
    "Every choice creates another version of the city.",
    "The sky changes color whenever someone dies.",
    "Memories can be transferred between people.",
    "Gravity changes every midnight.",
    "Nobody remembers yesterday.",
    "People can see the future.",
    "The dead can communicate through machines.",
    "Every person has a hidden second identity.",
    "Reality resets every seven days."
];


const conflicts = [

    "androids are demanding freedom",
    "a mysterious signal is controlling people",
    "a government is hiding another Earth",
    "people are disappearing from reality",
    "two versions of humanity are fighting",
    "a dimensional war has begun",
    "an artificial intelligence controls the city",
    "a portal has appeared beneath the city",
    "someone is killing alternate versions of important people",
    "the sun is slowly disappearing",
    "the city is trapped in a time loop",
    "an unknown civilization has returned",
    "the population has been replaced by copies",
    "the universe is beginning to collapse",
    "someone is rewriting history"
];


const characters = [

    "Alex",
    "Maya",
    "Marcus",
    "Nova",
    "Eli",
    "Rhea",
    "Kai",
    "Jordan",
    "Sam",
    "Avery",
    "Unit 734",
    "Commander Vale",
    "Dr. Morgan",
    "The Stranger",
    "The Architect",
    "The Other You"
];


const events = [

    "A dimensional crack opens above the city.",
    "Every electronic device displays the same message.",
    "The sky suddenly freezes.",
    "Millions of alternate versions of the same person appear.",
    "A portal connects several realities.",
    "Time stops for everyone except you.",
    "A dead character returns.",
    "Another Earth appears in the sky.",
    "The multiverse begins collapsing.",
    "A strange signal reaches every dimension.",
    "Someone sends a warning from the future.",
    "Every dimension experiences the same event.",
    "Reality begins rewriting itself."
];


const endings = [

    "You save the world.",
    "You accidentally create another timeline.",
    "You become the most wanted person in the universe.",
    "You disappear from your own reality.",
    "You become responsible for protecting the multiverse.",
    "You discover that another version of you caused everything.",
    "You prevent the collapse.",
    "You open a permanent gateway between realities.",
    "You sacrifice your timeline to save another.",
    "You leave the dimension behind."
];


/* =========================================================
   RANDOM HELPERS
========================================================= */

function random(array){

    return array[
        Math.floor(
            Math.random()*array.length
        )
    ];

}


function randomNumber(min,max){

    return Math.floor(
        Math.random()*(max-min+1)
    )+min;

}


/* =========================================================
   UNIQUE DIMENSION ID
========================================================= */

function generateID(){

    return String(
        randomNumber(1,999999)
    ).padStart(6,"0");

}


/* =========================================================
   GENERATE DIMENSION
========================================================= */

function generateDimension(){

    const id =
    generateID();


    return {

        id:id,

        world:random(worlds),

        location:random(locations),

        year:random(eras),

        rule:random(rules),

        conflict:random(conflicts),

        character:random(characters),

        event:random(events),

        ending:random(endings)

    };

}


/* =========================================================
   GAME STATE
========================================================= */

let state={

    current:null,

    history:[],

    visited:[],

    storyline:1,

    eventActive:false

};


/* =========================================================
   START
========================================================= */

function startGame(){

    loadGame();


    if(!state.current){

        createNewDimension();

    }


    render();

}


/* =========================================================
   CREATE NEW DIMENSION
========================================================= */

function createNewDimension(){

    let dimension =
    generateDimension();


    /*
       Prevent the generator from accidentally
       giving us exactly the same basic world.
    */

    if(state.current){

        let attempts=0;

        while(

            dimension.world===
            state.current.world &&

            dimension.conflict===
            state.current.conflict &&

            attempts<10

        ){

            dimension=
            generateDimension();

            attempts++;

        }

    }


    state.current=
    dimension;


    state.visited.push(
        dimension
    );


    state.history=[];


    state.storyline++;


    saveGame();

}


/* =========================================================
   STORY GENERATION
========================================================= */

function getScenes(){

    const d =
    state.current;


    return [

        {

            speaker:d.character,

            text:
            `You wake up in ${d.location}, `+
            `in ${d.world}. It is the year ${d.year}. `+
            `Something is wrong. `+
            `${d.rule}`,

            choices:[

                {
                    text:
                    "Investigate what is happening",
                    action:"investigate"
                },

                {
                    text:
                    "Find someone who can explain this",
                    action:"character"
                },

                {
                    text:
                    "Leave the city",
                    action:"escape"
                },

                {
                    text:
                    "Look for signs of another dimension",
                    action:"dimension"
                }

            ]

        },

        {

            speaker:"SYSTEM",

            text:
            `You discover that ${d.conflict}. `+
            `The situation is getting worse.`,

            choices:[

                {
                    text:"Confront the problem",
                    action:"confront"
                },

                {
                    text:"Help the people caught in it",
                    action:"help"
                },

                {
                    text:"Search for the person responsible",
                    action:"creator"
                },

                {
                    text:"Find a way out of this reality",
                    action:"dimension"
                }

            ]

        },

        {

            speaker:d.character,

            text:
            `The investigation reveals something impossible. `+
            `${d.event}`,

            choices:[

                {
                    text:"Find out why this is happening",
                    action:"why"
                },

                {
                    text:"Try to stop the event",
                    action:"stop"
                },

                {
                    text:"Use the event to reach another universe",
                    action:"dimension"
                },

                {
                    text:"Protect everyone nearby",
                    action:"protect"
                }

            ]

        },

        {

            speaker:"UNKNOWN",

            text:
            `A voice comes through the darkness. `+
            `"You don't belong in this universe."`,

            choices:[

                {
                    text:"Ask who is speaking",
                    action:"who"
                },

                {
                    text:"Demand to know why",
                    action:"why"
                },

                {
                    text:"Attack the unknown presence",
                    action:"attack"
                },

                {
                    text:"Follow the voice",
                    action:"follow"
                }

            ]

        },

        {

            speaker:"THE ARCHITECT",

            text:
            `"Every choice you've made has created consequences. `+
            `This reality is only one of them."`,

            choices:[

                {
                    text:"Ask about the multiverse",
                    action:"multiverse"
                },

                {
                    text:"Ask about your other selves",
                    action:"self"
                },

                {
                    text:"Demand a way home",
                    action:"home"
                },

                {
                    text:"Open another dimension",
                    action:"dimension"
                }

            ]

        }

    ];

}


/* =========================================================
   CURRENT SCENE
========================================================= */

let sceneIndex=0;


/* =========================================================
   RENDER
========================================================= */

function render(){

    const d =
    state.current;


    const scenes =
    getScenes();


    const scene =
    scenes[
        Math.min(
            sceneIndex,
            scenes.length-1
        )
    ];


    document.getElementById(
        "dimensionID"
    ).textContent=
    d.id;


    document.getElementById(
        "dimensionName"
    ).textContent=
    d.world.toUpperCase();


    document.getElementById(
        "storyTitle"
    ).textContent=
    "STORYLINE "+
    state.storyline;


    document.getElementById(
        "location"
    ).textContent=
    d.location.toUpperCase();


    document.getElementById(
        "time"
    ).textContent=
    d.year+
    " • "+
    d.rule;


    document.getElementById(
        "speaker"
    ).textContent=
    scene.speaker;


    document.getElementById(
        "text"
    ).textContent=
    scene.text;


    const choiceBox =
    document.getElementById(
        "choices"
    );


    choiceBox.innerHTML="";


    scene.choices.forEach(
        function(choice,index){

            const button =
            document.createElement(
                "button"
            );


            button.className=
            "choice";


            button.innerHTML=
            `<span class="choiceNumber">
            ${index+1}.
            </span>
            ${choice.text}`;


            button.onclick=
            function(){

                makeChoice(
                    choice.action
                );

            };


            choiceBox.appendChild(
                button
            );

        }
    );


    saveGame();

}


/* =========================================================
   CHOICE ENGINE
========================================================= */

function makeChoice(action){

    state.history.push({

        dimension:
        state.current,

        scene:
        sceneIndex,

        storyline:
        state.storyline

    });


    switch(action){

        case"investigate":

            sceneIndex=1;

            break;


        case"character":

            sceneIndex=1;

            break;


        case"escape":

            sceneIndex=2;

            break;


        case"dimension":

            sceneIndex=4;

            render();

            setTimeout(
                createFromChoice,
                600
            );

            return;


        case"confront":

            sceneIndex=2;

            break;


        case"help":

            sceneIndex=2;

            break;


        case"creator":

            sceneIndex=3;

            break;


        case"why":

            sceneIndex=3;

            break;


        case"stop":

            sceneIndex=4;

            break;


        case"protect":

            sceneIndex=2;

            break;


        case"who":

            sceneIndex=4;

            break;


        case"attack":

            sceneIndex=3;

            break;


        case"follow":

            sceneIndex=4;

            break;


        case"multiverse":

            sceneIndex=4;

            break;


        case"self":

            sceneIndex=3;

            break;


        case"home":

            sceneIndex=4;

            break;

    }


    render();


    /*
       After reaching the final scene,
       generate a major event.
    */

    if(sceneIndex>=4){

        setTimeout(
            function(){

                showEvent(
                    "REALITY DESTABILIZED"
                );

            },
            300
        );

    }

}


/* =========================================================
   CREATE NEW DIMENSION FROM CHOICE
========================================================= */

function createFromChoice(){

    const old =
    state.current;


    createNewDimension();


    sceneIndex=0;


    /*
       Sometimes a multiverse event carries
       information from the previous universe.
    */

    const event =
    random(events);


    showEvent(
        "NEW DIMENSION CREATED"
    );


    render();

}


/* =========================================================
   NEW STORYLINE
========================================================= */

function newStory(){

    createNewDimension();


    sceneIndex=0;


    state.storyline++;


    saveGame();


    showEvent(
        "ENTIRELY NEW STORYLINE"
    );


    render();

}


/* =========================================================
   BACKTRACK
========================================================= */

function backtrack(){

    if(
        state.history.length===0
    ){

        showEvent(
            "NO PREVIOUS DECISION"
        );

        return;

    }


    const previous =
    state.history.pop();


    state.current=
    previous.dimension;


    sceneIndex=
    previous.scene;


    state.storyline=
    previous.storyline;


    saveGame();


    showEvent(
        "TIMELINE REWOUND"
    );


    render();

}


/* =========================================================
   HARD RESET
========================================================= */

function hardReset(){

    const confirmReset=
    confirm(
        "Erase the entire multiverse and create a new storyline?"
    );


    if(!confirmReset){

        return;

    }


    localStorage.removeItem(
        "infiniteMultiverse"
    );


    state={

        current:null,

        history:[],

        visited:[],

        storyline:1,

        eventActive:false

    };


    sceneIndex=0;


    createNewDimension();


    showEvent(
        "NEW MULTIVERSE CREATED"
    );


    render();

}


/* =========================================================
   MAP
========================================================= */

function openMap(){

    const list =
    document.getElementById(
        "mapList"
    );


    list.innerHTML="";


    state.visited
    .slice()
    .reverse()
    .forEach(
        function(dimension){

            const card =
            document.createElement(
                "div"
            );


            card.className=
            "dimensionCard";


            if(
                dimension.id===
                state.current.id
            ){

                card.classList.add(
                    "current"
                );

            }


            card.innerHTML=

            `<div class="cardTop">

                <div class="cardName">
                    ${dimension.world}
                </div>

                <div class="cardNumber">
                    #${dimension.id}
                </div>

            </div>

            <div class="cardDescription">

                ${dimension.location}
                • ${dimension.year}

                <br><br>

                Reality rule:
                ${dimension.rule}

                <br>

                Conflict:
                ${dimension.conflict}

            </div>`;


            card.onclick=
            function(){

                travelTo(
                    dimension
                );

            };


            list.appendChild(
                card
            );

        }
    );


    document
    .getElementById("map")
    .classList.add("open");

}


function closeMap(){

    document
    .getElementById("map")
    .classList.remove("open");

}


/* =========================================================
   TRAVEL TO OLD DIMENSION
========================================================= */

function travelTo(dimension){

    state.current=
    dimension;


    sceneIndex=0;


    state.history=[];


    closeMap();


    saveGame();


    showEvent(
        "REALITY RESTORED"
    );


    render();

}


/* =========================================================
   EVENT MESSAGE
========================================================= */

let eventTimer;


function showEvent(message){

    const box =
    document.getElementById(
        "event"
    );


    box.textContent=
    message;


    box.classList.add(
        "show"
    );


    clearTimeout(
        eventTimer
    );


    eventTimer=
    setTimeout(
        function(){

            box.classList.remove(
                "show"
            );

        },
        2200
    );

}


/* =========================================================
   SAVE
========================================================= */

function saveGame(){

    try{

        localStorage.setItem(
            "infiniteMultiverse",
            JSON.stringify({
                state:state,
                sceneIndex:sceneIndex
            })
        );

    }catch(error){

        console.log(
            "Save failed."
        );

    }

}


/* =========================================================
   LOAD
========================================================= */

function loadGame(){

    try{

        const saved =
        localStorage.getItem(
            "infiniteMultiverse"
        );


        if(!saved){

            return;

        }


        const data =
        JSON.parse(saved);


        if(
            data &&
            data.state &&
            data.state.current
        ){

            state=
            data.state;


            sceneIndex=
            data.sceneIndex || 0;

        }

    }catch(error){

        console.log(
            "Starting fresh."
        );

    }

}


/* =========================================================
   START GAME
========================================================= */

window.addEventListener(
    "load",
    function(){

        startGame();


        setTimeout(
            function(){

                const loading=
                document.getElementById(
                    "loading"
                );


                loading.style.opacity="0";


                setTimeout(
                    function(){

                        loading.style.display=
                        "none";

                    },
                    500
                );

            },
            250
        );

    }
);
```
