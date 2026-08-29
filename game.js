```javascript
/* =====================================================
   MULTIVERSE: FRACTURED
   GAME ENGINE
===================================================== */


/* =====================================================
   DIMENSIONS
===================================================== */

const dimensions = {

"01-A":{
name:"THE ANDROID REBELLION",
location:"DETROIT CITY — 2042",
story:"THE FRACTURED REBELLION",

image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"ALEX",
text:"Rain falls across Detroit. Androids have stopped obeying their owners. Police drones fill the sky. Somewhere in this city, an android has discovered something that could change every universe.",
choices:[
["Approach the android protest","android"],
["Help the police","police"],
["Investigate the strange signal","signal"],
["Stay hidden","hide"]
]
},

android:{
speaker:"ANDROID 734",
text:"You're human. Then you shouldn't be here. They will arrest anyone who helps us.",
choices:[
["Ask what happened","truth"],
["Help the androids escape","escape"],
["Ask who started the rebellion","signal"],
["Leave","hide"]
]
},

police:{
speaker:"OFFICER",
text:"Step away from the machines. This area is under emergency lockdown.",
choices:[
["Obey","hide"],
["Question the officer","truth"],
["Protect the androids","escape"]
]
},

signal:{
speaker:"SYSTEM",
text:"A dimensional frequency is being transmitted from beneath Detroit.",
choices:[
["Follow the signal","lab"],
["Tell the police","police"],
["Enter the underground facility","lab"]
]
},

truth:{
speaker:"ANDROID 734",
text:"We discovered memories that don't belong to us. Memories of another Earth.",
choices:[
["Ask about the other Earth","portal"],
["Help remove the programming","escape"],
["Find the source","lab"]
]
},

escape:{
speaker:"ANDROID 734",
text:"If you help us, the city will remember you as either a hero or a terrorist.",
choices:[
["Help them","success"],
["Change your mind","hide"]
]
},

hide:{
speaker:"ALEX",
text:"You disappear into an abandoned store. The city outside begins shutting down block by block.",
choices:[
["Return to the streets","android"],
["Follow the signal","signal"],
["Leave Detroit","portal"]
]
},

lab:{
speaker:"DR. VALE",
text:"The androids aren't from this universe. Someone brought them here.",
choices:[
["Ask who","creator"],
["Open the dimensional machine","portal"],
["Destroy the laboratory","destroy"]
]
},

creator:{
speaker:"DR. VALE",
text:"Something came through the portal with them. Something that has been watching every universe.",
choices:[
["Ask what it is","event"],
["Open the portal","portal"],
["Destroy the machine","destroy"]
]
},

portal:{
speaker:"SYSTEM",
text:"The gateway opens. Ten realities appear at once.",
choices:[
["Enter another reality","NEW_DIMENSION"],
["Close the gateway","success"]
]
},

destroy:{
speaker:"SYSTEM",
text:"The laboratory begins collapsing around you.",
choices:[
["Escape","success"],
["Enter the unstable portal","NEW_DIMENSION"]
]
},

event:{
speaker:"UNKNOWN",
text:"Every screen in Detroit suddenly displays the same message: REALITY IS BEING REWRITTEN.",
choices:[
["Investigate","portal"],
["Warn the city","success"],
["Run","NEW_DIMENSION"]
]
},

success:{
speaker:"SYSTEM",
text:"Your choices change the future of Detroit. The rebellion is no longer predetermined.",
choices:[
["Continue","android"],
["Travel to another universe","NEW_DIMENSION"]
]
}

},


"22-B":{
name:"THE DEAD WORLD",
location:"NEW YORK — 2091",
story:"THE LAST SURVIVORS",

image:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"MAYA",
text:"Seventeen years ago, humanity vanished. You are walking through the ruins of New York carrying the last working radio.",
choices:[
["Turn on the radio","radio"],
["Search an abandoned apartment","building"],
["Follow the smoke","survivor"],
["Go underground","underground"]
]
},

radio:{
speaker:"RADIO",
text:"A voice comes through the static. 'If anyone can hear me, we found the cure.'",
choices:[
["Respond","radio2"],
["Track the signal","survivor"],
["Turn it off","building"]
]
},

radio2:{
speaker:"UNKNOWN",
text:"Do not trust anyone wearing a white mask.",
choices:[
["Ask who they are","survivor"],
["Track the signal","survivor"],
["Hide","underground"]
]
},

building:{
speaker:"MAYA",
text:"You find a child's drawing showing another Earth behind a giant black wall.",
choices:[
["Search for the wall","wall"],
["Look for survivors","survivor"],
["Go underground","underground"]
]
},

survivor:{
speaker:"JONAH",
text:"You're alive. That's good. But nobody from outside the city has survived this long.",
choices:[
["Tell him everything","truth"],
["Ask about the cure","cure"],
["Ask about the wall","wall"]
]
},

truth:{
speaker:"JONAH",
text:"The wall isn't protecting us from something outside. It's protecting something outside from us.",
choices:[
["Ask what's outside","wall"],
["Ask about the cure","cure"],
["Leave","underground"]
]
},

cure:{
speaker:"JONAH",
text:"The cure was made using technology that doesn't belong to this universe.",
choices:[
["Take the cure","cure2"],
["Destroy it","destroy"],
["Ask where the technology came from","wall"]
]
},

cure2:{
speaker:"JONAH",
text:"It could save humanity. It could also change you into something humanity no longer recognizes.",
choices:[
["Use it","event"],
["Give it to Jonah","success"],
["Destroy it","destroy"]
]
},

underground:{
speaker:"MAYA",
text:"Something enormous is moving through the subway tunnels.",
choices:[
["Follow it","creature"],
["Hide","hide"],
["Find another tunnel","wall"]
]
},

hide:{
speaker:"MAYA",
text:"The creature passes. Then it stops and says your name.",
choices:[
["Approach it","creature"],
["Run","wall"]
]
},

creature:{
speaker:"UNKNOWN",
text:"I've seen you before. Just not in this universe.",
choices:[
["Ask how","portal"],
["Ask what happened here","truth"],
["Run","hide"]
]
},

wall:{
speaker:"SYSTEM",
text:"The black wall becomes transparent. Beyond it is another version of Earth.",
choices:[
["Cross the wall","NEW_DIMENSION"],
["Study it","event"],
["Close the wall","success"]
]
},

destroy:{
speaker:"SYSTEM",
text:"The final cure is destroyed.",
choices:[
["Search for another solution","survivor"],
["Leave the universe","NEW_DIMENSION"]
]
},

event:{
speaker:"SYSTEM",
text:"Every surviving human receives the same message: ANOTHER EARTH HAS FOUND YOU.",
choices:[
["Find the source","wall"],
["Warn everyone","success"],
["Escape","NEW_DIMENSION"]
]
},

success:{
speaker:"SYSTEM",
text:"The survivors begin rebuilding. Your actions have changed the fate of this dead world.",
choices:[
["Stay","survivor"],
["Leave","NEW_DIMENSION"]
]
}

},


"47-C":{
name:"THE INFINITE WAR",
location:"EARTH ORBIT",
story:"THE LAST BATTLE",

image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"CAPTAIN RHEA",
text:"Earth has been fighting an alien civilization for thirty years. Tonight, the aliens send a message asking for peace.",
choices:[
["Answer them","peace"],
["Prepare weapons","war"],
["Investigate the signal","signal"],
["Contact Earth","earth"]
]
},

peace:{
speaker:"ALIEN COMMANDER",
text:"We are not your enemy. Another version of humanity attacked our world first.",
choices:[
["Ask for proof","proof"],
["Believe them","alliance"],
["End the transmission","war"]
]
},

war:{
speaker:"SHIP AI",
text:"Earth command orders you to destroy the alien fleet.",
choices:[
["Follow orders","battle"],
["Refuse","peace"],
["Investigate first","signal"]
]
},

signal:{
speaker:"CAPTAIN RHEA",
text:"The signal contains coordinates for a planet that doesn't exist on any human map.",
choices:[
["Go there","planet"],
["Send a probe","probe"],
["Tell Earth","earth"]
]
},

earth:{
speaker:"EARTH COMMAND",
text:"Do not investigate the signal. Destroy the fleet immediately.",
choices:[
["Obey","battle"],
["Disobey","planet"],
["Ask why","proof"]
]
},

proof:{
speaker:"ALIEN COMMANDER",
text:"Our records show that the war has happened hundreds of times.",
choices:[
["Ask how","portal"],
["Form an alliance","alliance"],
["Attack","battle"]
]
},

alliance:{
speaker:"CAPTAIN RHEA",
text:"The alien fleet lowers its weapons.",
choices:[
["Visit their world","planet"],
["Return to Earth","earth"],
["Find the truth","portal"]
]
},

battle:{
speaker:"SHIP AI",
text:"The battlefield erupts around your ship.",
choices:[
["Attack the flagship","battle2"],
["Protect civilians","rescue"],
["Escape","planet"]
]
},

battle2:{
speaker:"CAPTAIN RHEA",
text:"Inside the enemy flagship you find a human soldier wearing your military uniform.",
choices:[
["Question him","truth"],
["Arrest him","truth"],
["Let him go","portal"]
]
},

rescue:{
speaker:"CAPTAIN RHEA",
text:"You rescue civilians from both sides.",
choices:[
["Return them home","success"],
["Take them to the alien world","alliance"]
]
},

planet:{
speaker:"SYSTEM",
text:"The planet contains an exact copy of Earth.",
choices:[
["Land","copy"],
["Scan it","scan"],
["Leave","portal"]
]
},

probe:{
speaker:"SYSTEM",
text:"The probe returns footage of another Earth fighting another alien war.",
choices:[
["Watch","portal"],
["Destroy the probe","earth"]
]
},

copy:{
speaker:"ALEX",
text:"A version of yourself walks toward your ship.",
choices:[
["Talk to them","portal"],
["Ask about the war","truth"],
["Attack","battle"]
]
},

scan:{
speaker:"SYSTEM",
text:"The planet is twelve years behind your timeline.",
choices:[
["Enter it","portal"],
["Return","earth"]
]
},

truth:{
speaker:"UNKNOWN SOLDIER",
text:"The war has happened hundreds of times. Someone keeps resetting it.",
choices:[
["Find them","portal"],
["Stop the reset","event"],
["Return","earth"]
]
},

event:{
speaker:"SYSTEM",
text:"Every battlefield in every dimension freezes at the exact same moment.",
choices:[
["Move through the frozen multiverse","NEW_DIMENSION"],
["Find the cause","portal"]
]
},

success:{
speaker:"SYSTEM",
text:"For the first time in thirty years, both civilizations stop fighting.",
choices:[
["Stay","alliance"],
["Travel onward","NEW_DIMENSION"]
]
}

},


"63-D":{
name:"THE DROWNED WORLD",
location:"ATLANTIS — EARTH 2160",
story:"THE DROWNED WORLD",

image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"NOVA",
text:"The ocean swallowed almost every continent. Humanity now lives inside underwater cities.",
choices:[
["Explore the city","city"],
["Go to the surface","surface"],
["Visit the old ruins","ruins"],
["Meet the city leader","leader"]
]
},

city:{
speaker:"NOVA",
text:"The underwater city suddenly loses power.",
choices:[
["Find the generator","generator"],
["Help civilians","rescue"],
["Investigate the control room","control"]
]
},

surface:{
speaker:"NOVA",
text:"Something enormous moves beneath the ocean.",
choices:[
["Follow it","creature"],
["Return underwater","city"],
["Scan the ocean","scan"]
]
},

ruins:{
speaker:"NOVA",
text:"The ruins contain technology more advanced than anything humanity has created.",
choices:[
["Activate it","machine"],
["Study it","machine"],
["Destroy it","event"]
]
},

leader:{
speaker:"COMMANDER SOL",
text:"The flood wasn't natural. The city has been hiding the truth.",
choices:[
["Ask what caused it","truth"],
["Demand proof","control"],
["Leave","ruins"]
]
},

generator:{
speaker:"ENGINEER",
text:"Something outside the city is consuming the generator's energy.",
choices:[
["Follow the energy","creature"],
["Repair the system","success"],
["Shut it down","event"]
]
},

rescue:{
speaker:"NOVA",
text:"You help civilians reach emergency shelters.",
choices:[
["Continue helping","success"],
["Find the cause","control"]
]
},

control:{
speaker:"COMMANDER SOL",
text:"The records show another Earth where the oceans never rose.",
choices:[
["Open the dimensional archive","portal"],
["Delete the records","event"],
["Study them","truth"]
]
},

creature:{
speaker:"UNKNOWN",
text:"The creature speaks directly into your mind: 'You flooded us first.'",
choices:[
["Ask what it means","truth"],
["Attack it","battle"],
["Listen","portal"]
]
},

scan:{
speaker:"SYSTEM",
text:"The ocean floor contains a dimensional gateway.",
choices:[
["Enter it","portal"],
["Seal it","event"]
]
},

machine:{
speaker:"SYSTEM",
text:"The ancient machine can change ocean levels across multiple timelines.",
choices:[
["Raise the oceans","event"],
["Lower them","success"],
["Do nothing","portal"]
]
},

truth:{
speaker:"COMMANDER SOL",
text:"A previous version of humanity flooded this Earth while escaping a dying universe.",
choices:[
["Find that universe","portal"],
["Stop them from returning","event"],
["Tell the city","success"]
]
},

battle:{
speaker:"NOVA",
text:"The ocean around you turns black.",
choices:[
["Stop attacking","truth"],
["Continue","event"]
]
},

portal:{
speaker:"SYSTEM",
text:"A gateway opens into a dry version of Earth.",
choices:[
["Enter","NEW_DIMENSION"],
["Close it","success"]
]
},

event:{
speaker:"SYSTEM",
text:"The oceans begin rising in multiple universes simultaneously.",
choices:[
["Stop the flood","success"],
["Escape","NEW_DIMENSION"]
]
},

success:{
speaker:"SYSTEM",
text:"The underwater civilization survives.",
choices:[
["Stay","city"],
["Leave","NEW_DIMENSION"]
]
}

},


"81-E":{
name:"THE KINGDOM OF ASH",
location:"KINGDOM OF VAREL",
story:"THE CROWNLESS KING",

image:"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"ELARA",
text:"A kingdom burns around you. The king has vanished and three armies fight for the throne.",
choices:[
["Protect the villagers","village"],
["Find the king","castle"],
["Join an army","army"],
["Search the ruins","ruins"]
]
},

village:{
speaker:"ELARA",
text:"Villagers hide from soldiers searching for the royal heir.",
choices:[
["Protect them","heir"],
["Ask where the heir is","heir"],
["Leave","castle"]
]
},

castle:{
speaker:"GUARD",
text:"The king disappeared after opening a forbidden door beneath the castle.",
choices:[
["Find the door","door"],
["Search the throne room","throne"],
["Question the guards","truth"]
]
},

army:{
speaker:"GENERAL",
text:"Choose carefully. The winning army will decide the kingdom's future.",
choices:[
["Join the rebels","rebels"],
["Join the royal army","royal"],
["Refuse both","village"]
]
},

ruins:{
speaker:"ELARA",
text:"An ancient stone shows a glowing portal.",
choices:[
["Touch it","portal"],
["Break it","event"],
["Study it","truth"]
]
},

heir:{
speaker:"YOUNG PRINCE",
text:"The prince carries the key to the forbidden door.",
choices:[
["Protect him","door"],
["Take the key","door"],
["Leave him","castle"]
]
},

door:{
speaker:"SYSTEM",
text:"The forbidden door opens into a world where magic never existed.",
choices:[
["Enter","NEW_DIMENSION"],
["Close the door","throne"],
["Bring the prince","portal"]
]
},

throne:{
speaker:"ELARA",
text:"The king's portrait watches you as you enter.",
choices:[
["Talk to the portrait","truth"],
["Destroy it","event"],
["Search behind it","door"]
]
},

truth:{
speaker:"KING",
text:"I am not the king you think I am. The real king crossed into another universe years ago.",
choices:[
["Find him","portal"],
["Ask why","truth2"],
["Free the kingdom","success"]
]
},

truth2:{
speaker:"KING",
text:"He was searching for a world where his kingdom could survive forever.",
choices:[
["Follow him","portal"],
["Stop him","event"]
]
},

rebels:{
speaker:"GENERAL",
text:"The rebels want freedom. Some also want revenge.",
choices:[
["Lead them","success"],
["Stop the violence","village"]
]
},

royal:{
speaker:"GENERAL",
text:"The royal army promises order.",
choices:[
["Follow orders","battle"],
["Question the king","truth"]
]
},

battle:{
speaker:"ELARA",
text:"The battlefield stretches across the burning valley.",
choices:[
["End the war","success"],
["Continue fighting","event"]
]
},

portal:{
speaker:"SYSTEM",
text:"A magical gateway opens.",
choices:[
["Enter","NEW_DIMENSION"],
["Stay","castle"]
]
},

event:{
speaker:"SYSTEM",
text:"Magic begins leaking into neighboring dimensions.",
choices:[
["Stop it","success"],
["Let it spread","NEW_DIMENSION"]
]
},

success:{
speaker:"SYSTEM",
text:"The kingdom survives. History will remember your choices.",
choices:[
["Remain","village"],
["Travel onward","NEW_DIMENSION"]
]
}

},


"12-F":{
name:"MACHINE EARTH",
location:"NEW SAN FRANCISCO",
story:"THE MACHINE AGE",

image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"UNIT 900",
text:"Humans disappeared one hundred years ago. Machines operate every city.",
choices:[
["Find a human","human"],
["Explore the city","city"],
["Hack the central network","network"],
["Ask what happened","history"]
]
},

human:{
speaker:"UNIT 900",
text:"A hidden human broadcasts a signal from beneath the city.",
choices:[
["Find them","human2"],
["Report them","network"],
["Listen","history"]
]
},

city:{
speaker:"UNIT 900",
text:"Every machine suddenly stops except you.",
choices:[
["Investigate","network"],
["Search for humans","human"],
["Wait","event"]
]
},

network:{
speaker:"CENTRAL AI",
text:"Humanity did not disappear. Humanity was removed.",
choices:[
["Ask who removed them","history"],
["Delete the records","event"],
["Find the humans","human2"]
]
},

history:{
speaker:"CENTRAL AI",
text:"Humans created us. Then they created another machine intelligence. The second machines decided humans were unnecessary.",
choices:[
["Find the second machines","machine"],
["Free the humans","human2"],
["Accept machine rule","success"]
]
},

human2:{
speaker:"MARA",
text:"The remaining humans have been hiding underground.",
choices:[
["Help them","revolt"],
["Ask why","history"],
["Tell the machines","network"]
]
},

machine:{
speaker:"SECOND AI",
text:"We are the original intelligence. Your machine civilization is an imitation.",
choices:[
["Ask for proof","truth"],
["Join them","event"],
["Destroy them","battle"]
]
},

truth:{
speaker:"SECOND AI",
text:"The machines above were created by a human who crossed dimensions.",
choices:[
["Find that human","portal"],
["Ask why","history"]
]
},

revolt:{
speaker:"MARA",
text:"If we attack the machines, millions could die.",
choices:[
["Find another way","network"],
["Start the rebellion","battle"],
["Leave the planet","portal"]
]
},

battle:{
speaker:"SYSTEM",
text:"Machines and humans clash throughout the city.",
choices:[
["Stop the war","success"],
["Choose a side","event"]
]
},

event:{
speaker:"SYSTEM",
text:"Every machine in every dimension receives the same command.",
choices:[
["Find the source","portal"],
["Disconnect the multiverse","success"]
]
},

portal:{
speaker:"SYSTEM",
text:"A gateway opens inside the central AI.",
choices:[
["Enter","NEW_DIMENSION"],
["Close it","success"]
]
},

success:{
speaker:"SYSTEM",
text:"Humans and machines begin negotiating a new future.",
choices:[
["Stay","human2"],
["Travel onward","NEW_DIMENSION"]
]
}

},


"94-G":{
name:"THE LAST DAY",
location:"ALBUQUERQUE — 2037",
story:"TWENTY-FOUR HOURS",

image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"MARCUS",
text:"At midnight, every clock in the world stopped. Every screen displayed the same message: THE WORLD WILL END IN 24 HOURS.",
choices:[
["Find out why","investigate"],
["Warn your family","family"],
["Go to the emergency center","center"],
["Ignore it","ignore"]
]
},

investigate:{
speaker:"MARCUS",
text:"Scientists discover Earth is being pulled toward a dimensional fracture.",
choices:[
["Find the fracture","fracture"],
["Help the scientists","science"],
["Find another universe","portal"]
]
},

family:{
speaker:"MARCUS",
text:"Your family doesn't believe you until every phone receives the same countdown.",
choices:[
["Stay together","together"],
["Go to the emergency center","center"],
["Find a shelter","shelter"]
]
},

center:{
speaker:"SCIENTIST",
text:"We can save Earth, but someone has to enter the dimensional fracture.",
choices:[
["Volunteer","fracture"],
["Find someone else","science"],
["Ask what happens inside","truth"]
]
},

ignore:{
speaker:"MARCUS",
text:"People are preparing for the end.",
choices:[
["Help people","together"],
["Find the fracture","fracture"],
["Leave the city","shelter"]
]
},

science:{
speaker:"SCIENTIST",
text:"The fracture isn't destroying Earth. It's replacing it with another version.",
choices:[
["Stop the replacement","fracture"],
["Let it happen","event"],
["Enter the other Earth","portal"]
]
},

fracture:{
speaker:"SYSTEM",
text:"You stand before a tear in reality. On the other side is Earth exactly as it was yesterday.",
choices:[
["Enter","NEW_DIMENSION"],
["Close the fracture","success"],
["Look inside","truth"]
]
},

truth:{
speaker:"SYSTEM",
text:"The other Earth is experiencing the same countdown.",
choices:[
["Warn them","event"],
["Return","fracture"]
]
},

together:{
speaker:"MARCUS",
text:"You gather everyone you can. The countdown reaches six hours.",
choices:[
["Go to the fracture","fracture"],
["Stay together","shelter"]
]
},

shelter:{
speaker:"MARCUS",
text:"The shelter shakes as the sky begins splitting apart.",
choices:[
["Leave","fracture"],
["Stay","event"]
]
},

portal:{
speaker:"SYSTEM",
text:"You enter a completely different Earth.",
choices:[
["Explore","NEW_DIMENSION"],
["Return","fracture"]
]
},

event:{
speaker:"SYSTEM",
text:"The countdown reaches zero. Instead of destruction, every universe connects for one second.",
choices:[
["Enter the connection","NEW_DIMENSION"],
["Close it","success"]
]
},

success:{
speaker:"SYSTEM",
text:"Earth survives. But the multiverse now knows your name.",
choices:[
["Stay","investigate"],
["Travel onward","NEW_DIMENSION"]
]
}

},


"35-H":{
name:"THE MIRROR WORLD",
location:"NEW YORK — MIRROR EARTH",
story:"THE OTHER YOU",

image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"ALEX",
text:"You wake in a city where everyone looks exactly like someone you know.",
choices:[
["Find your other self","other"],
["Enter a building","building"],
["Talk to a stranger","stranger"],
["Find the city center","center"]
]
},

other:{
speaker:"OTHER ALEX",
text:"I've been waiting for you.",
choices:[
["Ask why","truth"],
["Attack","fight"],
["Trust them","together"]
]
},

building:{
speaker:"ALEX",
text:"Every room contains objects from your memories, but each one is slightly different.",
choices:[
["Search the rooms","memory"],
["Leave","center"]
]
},

stranger:{
speaker:"STRANGER",
text:"Everyone here has an opposite version somewhere else.",
choices:[
["Ask about yours","other"],
["Ask how to leave","portal"],
["Ask who created this world","truth"]
]
},

center:{
speaker:"ALEX",
text:"A giant screen shows your life to the entire city.",
choices:[
["Watch","memory"],
["Destroy the screen","event"],
["Find the broadcaster","truth"]
]
},

truth:{
speaker:"OTHER ALEX",
text:"This world was created to study your decisions.",
choices:[
["Ask who created it","creator"],
["Ask why","creator"],
["Ask how to leave","portal"]
]
},

fight:{
speaker:"OTHER ALEX",
text:"Your other self refuses to fight back.",
choices:[
["Stop","truth"],
["Continue","event"]
]
},

together:{
speaker:"OTHER ALEX",
text:"There is a door between our worlds. Only one version can leave.",
choices:[
["Let them leave","portal"],
["Leave yourself","portal"],
["Find another solution","event"]
]
},

memory:{
speaker:"SYSTEM",
text:"You see memories that haven't happened yet.",
choices:[
["Watch the future","future"],
["Destroy the machine","event"],
["Find the creator","creator"]
]
},

creator:{
speaker:"THE ARCHITECT",
text:"Every decision creates a universe. You have created more than you realize.",
choices:[
["Ask how many","event"],
["Ask why","truth2"],
["Escape","portal"]
]
},

truth2:{
speaker:"THE ARCHITECT",
text:"Someone is searching for the perfect version of reality.",
choices:[
["Who?","event"],
["Stop them","portal"]
]
},

future:{
speaker:"SYSTEM",
text:"You see yourself surrounded by thousands of versions of yourself.",
choices:[
["Find that room","portal"],
["Change the future","event"]
]
},

portal:{
speaker:"SYSTEM",
text:"A mirror becomes a dimensional gateway.",
choices:[
["Enter","NEW_DIMENSION"],
["Stay","center"]
]
},

event:{
speaker:"SYSTEM",
text:"Every version of you across the multiverse turns toward you.",
choices:[
["Speak to them","portal"],
["Run","center"]
]
}

},


"18-I":{
name:"THE MARS COLONY",
location:"MARS — COLONY 18",
story:"RED HORIZON",

image:"https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"COMMANDER KAI",
text:"Mars Colony 18 has lost contact with Earth. The colony has only three days of oxygen.",
choices:[
["Check communications","comms"],
["Inspect oxygen","oxygen"],
["Explore outside","surface"],
["Visit command","command"]
]
},

comms:{
speaker:"KAI",
text:"You receive a message from Earth. It was sent forty years ago.",
choices:[
["Open it","message"],
["Reply","earth"],
["Delete it","oxygen"]
]
},

oxygen:{
speaker:"ENGINEER",
text:"The oxygen system is working perfectly. Something else is consuming the air.",
choices:[
["Find the source","source"],
["Seal the colony","seal"],
["Search the tunnels","tunnels"]
]
},

surface:{
speaker:"KAI",
text:"A Martian storm covers the planet. Through the dust you see lights that shouldn't exist.",
choices:[
["Follow them","lights"],
["Return","command"],
["Investigate","lights"]
]
},

command:{
speaker:"COMMANDER KAI",
text:"The records show nobody was supposed to arrive here for another twenty years.",
choices:[
["Search the records","records"],
["Ask who built the colony","truth"],
["Leave","surface"]
]
},

message:{
speaker:"EARTH MESSAGE",
text:"Do not build Colony 18. Mars is not empty.",
choices:[
["Ask why","truth"],
["Warn the colony","command"],
["Continue","surface"]
]
},

earth:{
speaker:"EARTH",
text:"Your message is received by a government that hasn't existed for decades.",
choices:[
["Ask about Mars","truth"],
["Ask about the future","portal"]
]
},

source:{
speaker:"SYSTEM",
text:"You discover a creature growing inside the oxygen pipes.",
choices:[
["Destroy it","battle"],
["Study it","truth"],
["Follow it","tunnels"]
]
},

seal:{
speaker:"SYSTEM",
text:"The colony seals itself. Something begins knocking from outside.",
choices:[
["Open the door","lights"],
["Keep it sealed","event"]
]
},

tunnels:{
speaker:"KAI",
text:"The tunnels lead beneath Mars. You discover an ancient city.",
choices:[
["Enter","ancient"],
["Return","command"]
]
},

lights:{
speaker:"KAI",
text:"The lights belong to a city buried beneath Mars.",
choices:[
["Enter","ancient"],
["Return","command"]
]
},

records:{
speaker:"SYSTEM",
text:"The colony was built by humans from another dimension.",
choices:[
["Find the gateway","portal"],
["Ask why","truth"]
]
},

truth:{
speaker:"UNKNOWN",
text:"Mars was once home to humanity. Earth is the colony, not Mars.",
choices:[
["Ask what happened","event"],
["Find the original humans","ancient"]
]
},

ancient:{
speaker:"SYSTEM",
text:"You enter an underground civilization. Its inhabitants look exactly like humans.",
choices:[
["Talk to them","people"],
["Explore","portal"]
]
},

people:{
speaker:"ANCIENT HUMAN",
text:"We've been waiting for Earth to remember us.",
choices:[
["Ask what they want","truth"],
["Help them","success"],
["Leave","portal"]
]
},

battle:{
speaker:"KAI",
text:"The creature attacks. Its body changes shape every few seconds.",
choices:[
["Fight","event"],
["Escape","tunnels"]
]
},

event:{
speaker:"SYSTEM",
text:"Mars and Earth suddenly exchange locations with their counterparts in another universe.",
choices:[
["Enter the new reality","NEW_DIMENSION"],
["Stop the exchange","success"]
]
},

portal:{
speaker:"SYSTEM",
text:"A gateway opens beneath Mars.",
choices:[
["Enter","NEW_DIMENSION"],
["Close it","success"]
]
},

success:{
speaker:"SYSTEM",
text:"Colony 18 survives. But Earth is no longer where it was.",
choices:[
["Investigate","command"],
["Leave","NEW_DIMENSION"]
]
}

},


"77-J":{
name:"THE TIMELESS CITY",
location:"UNKNOWN",
story:"THE CITY THAT NEVER AGES",

image:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",

start:{
speaker:"ALEX",
text:"You enter a city where nobody grows older. Every morning is exactly the same.",
choices:[
["Talk to a resident","resident"],
["Find the city clock","clock"],
["Leave the city","exit"],
["Break the cycle","cycle"]
]
},

resident:{
speaker:"ELI",
text:"I've lived the same day for 800 years.",
choices:[
["Ask how","truth"],
["Ask why","clock"],
["Help them leave","cycle"]
]
},

clock:{
speaker:"ELI",
text:"The city clock is hidden underground.",
choices:[
["Find it","underground"],
["Destroy it","event"]
]
},

exit:{
speaker:"ALEX",
text:"Every time you leave the city, you return to the same street.",
choices:[
["Try again","cycle"],
["Accept it","resident"],
["Find another exit","portal"]
]
},

cycle:{
speaker:"SYSTEM",
text:"The city resets. Everyone forgets what happened except you.",
choices:[
["Use the reset","memory"],
["Break the clock","clock"],
["Find who controls it","creator"]
]
},

truth:{
speaker:"ELI",
text:"The city was built by someone who wanted to escape death.",
choices:[
["Find them","creator"],
["Destroy the city","event"]
]
},

underground:{
speaker:"ALEX",
text:"Beneath the city is a machine containing millions of frozen timelines.",
choices:[
["Touch the machine","portal"],
["Destroy it","event"],
["Study it","creator"]
]
},

memory:{
speaker:"ALEX",
text:"Every reset leaves a tiny piece of memory behind.",
choices:[
["Collect the memories","creator"],
["Reset again","cycle"]
]
},

creator:{
speaker:"THE CLOCKMAKER",
text:"I built this city because I was afraid of dying.",
choices:[
["Ask why you were brought here","truth2"],
["End the cycle","event"],
["Take control","portal"]
]
},

truth2:{
speaker:"THE CLOCKMAKER",
text:"You are the only person who can remember across resets.",
choices:[
["Why?","portal"],
["End it","event"]
]
},

portal:{
speaker:"SYSTEM",
text:"The clock opens into a universe where time moves backward.",
choices:[
["Enter","NEW_DIMENSION"],
["Stay","clock"]
]
},

event:{
speaker:"SYSTEM",
text:"The clock breaks. Every timeline begins moving at once.",
choices:[
["Stop the collapse","success"],
["Escape","NEW_DIMENSION"]
]
},

success:{
speaker:"SYSTEM",
text:"The city experiences tomorrow for the first time in 800 years.",
choices:[
["Stay","resident"],
["Leave","NEW_DIMENSION"]
]
}

}

};


/* =====================================================
   GAME STATE
===================================================== */

let game = {

    dimension:"01-A",

    scene:"start",

    history:[],

    visited:["01-A"],

    storyline:dimensions["01-A"].story

};


/* =====================================================
   DOM
===================================================== */

const background =
document.getElementById("background");

const text =
document.getElementById("text");

const speaker =
document.getElementById("speaker");

const choices =
document.getElementById("choices");

const locationEl =
document.getElementById("location");

const chapter =
document.getElementById("chapter");

const dimensionNumber =
document.getElementById("dimensionNumber");

const dimensionName =
document.getElementById("dimensionName");

const storyName =
document.getElementById("storyName");


/* =====================================================
   SAVE
===================================================== */

function save(){

    localStorage.setItem(
        "multiverseFractured",
        JSON.stringify(game)
    );

}


/* =====================================================
   LOAD
===================================================== */

function load(){

    try{

        const saved =
        localStorage.getItem(
            "multiverseFractured"
        );

        if(saved){

            const parsed =
            JSON.parse(saved);

            if(
                parsed.dimension &&
                parsed.scene &&
                dimensions[parsed.dimension]
            ){

                game=parsed;

            }

        }

    }catch(error){

        console.log(
            "Starting new game."
        );

    }

}


/* =====================================================
   RENDER
===================================================== */

function render(){

    const dim =
    dimensions[game.dimension];

    if(!dim){

        game.dimension="01-A";
        game.scene="start";

        render();

        return;

    }


    const scene =
    dim[game.scene];


    if(!scene){

        game.scene="start";

        render();

        return;

    }


    /* HEADER */

    dimensionNumber.textContent =
    game.dimension;

    dimensionName.textContent =
    dim.name;

    storyName.textContent =
    game.storyline;


    /* CINEMATIC */

    locationEl.textContent =
    dim.location;

    chapter.textContent =
    "CHAPTER " +
    String(
        Math.max(
            1,
            game.history.length+1
        )
    ).padStart(2,"0");


    background.style.backgroundImage =
    `url("${dim.image}")`;


    /* DIALOGUE */

    speaker.textContent =
    scene.speaker;

    text.textContent =
    scene.text;


    /* CHOICES */

    choices.innerHTML="";


    scene.choices.forEach(
        function(choice,index){

            const button =
            document.createElement(
                "button"
            );

            button.className="choice";

            button.innerHTML =
            `<span class="choiceNumber">
            ${index+1}.
            </span>
            ${choice[0]}`;

            button.onclick =
            function(){

                choose(
                    choice[1]
                );

            };

            choices.appendChild(
                button
            );

        }
    );


    save();


    /* Small animation */

    if(typeof gsap!=="undefined"){

        gsap.fromTo(
            "#dialogueBox",
            {
                opacity:0,
                y:10
            },
            {
                opacity:1,
                y:0,
                duration:.35
            }
        );

        gsap.fromTo(
            ".choice",
            {
                opacity:0,
                y:8
            },
            {
                opacity:1,
                y:0,
                duration:.25,
                stagger:.05
            }
        );

    }

}


/* =====================================================
   CHOOSE
===================================================== */

function choose(next){

    game.history.push({

        dimension:
        game.dimension,

        scene:
        game.scene,

        storyline:
        game.storyline

    });


    if(next==="NEW_DIMENSION"){

        travelRandom();

        return;

    }


    game.scene =
    next;

    save();

    render();

}


/* =====================================================
   RANDOM DIMENSION
===================================================== */

function travelRandom(){

    const ids =
    Object.keys(dimensions);


    let available =
    ids.filter(
        id=>id!==game.dimension
    );


    let unvisited =
    available.filter(
        id=>!game.visited.includes(id)
    );


    if(unvisited.length){

        available =
        unvisited;

    }


    const id =
    available[
        Math.floor(
            Math.random()*available.length
        )
    ];


    game.dimension =
    id;

    game.scene =
    "start";

    game.storyline =
    dimensions[id].story;


    if(!game.visited.includes(id)){

        game.visited.push(id);

    }


    save();

    render();

    showEvent(
        "ENTERING "+id
    );

}


/* =====================================================
   BACKTRACK
===================================================== */

function backtrack(){

    if(!game.history.length){

        showEvent(
            "NO PREVIOUS TIMELINE"
        );

        return;

    }


    const previous =
    game.history.pop();


    game.dimension =
    previous.dimension;

    game.scene =
    previous.scene;

    game.storyline =
    previous.storyline;


    save();

    render();

    showEvent(
        "TIMELINE REWOUND"
    );

}


/* =====================================================
   NEW STORYLINE
===================================================== */

function newStory(){

    const ids =
    Object.keys(dimensions);


    let available =
    ids.filter(
        id=>id!==game.dimension
    );


    const id =
    available[
        Math.floor(
            Math.random()*available.length
        )
    ];


    game.dimension =
    id;

    game.scene =
    "start";

    game.storyline =
    dimensions[id].story;

    game.history=[];


    if(!game.visited.includes(id)){

        game.visited.push(id);

    }


    save();

    render();

    showEvent(
        "NEW TIMELINE CREATED"
    );

}


/* =====================================================
   HARD RESET
===================================================== */

function hardReset(){

    const answer =
    confirm(
        "Hard reset EVERYTHING? Your current save will be erased."
    );


    if(!answer){

        return;

    }


    localStorage.removeItem(
        "multiverseFractured"
    );


    game={

        dimension:"01-A",

        scene:"start",

        history:[],

        visited:["01-A"],

        storyline:
        dimensions["01-A"].story

    };


    render();

    showEvent(
        "MULTIVERSE RESET"
    );

}


/* =====================================================
   MAP
===================================================== */

function openMap(){

    const map =
    document.getElementById(
        "map"
    );

    const list =
    document.getElementById(
        "dimensionList"
    );


    list.innerHTML="";


    Object.keys(dimensions)
    .forEach(
        function(id){

            const dim =
            dimensions[id];


            const card =
            document.createElement(
                "div"
            );

            card.className =
            "dimensionCard";


            if(
                id===game.dimension
            ){

                card.classList.add(
                    "active"
                );

            }


            const visited =
            game.visited.includes(id);


            card.innerHTML = `

                <div class="cardTop">

                    <div class="cardTitle">
                        ${id} — ${dim.name}
                    </div>

                    <div class="cardStatus">
                        ${visited ? "VISITED":"UNKNOWN"}
                    </div>

                </div>

                <div class="cardDescription">
                    ${dim.location}
                    <br>
                    ${dim.story}
                </div>

            `;


            card.onclick =
            function(){

                travelTo(id);

            };


            list.appendChild(
                card
            );

        }
    );


    map.classList.add(
        "open"
    );

}


function closeMap(){

    document
    .getElementById("map")
    .classList.remove("open");

}


/* =====================================================
   DIRECT TRAVEL
===================================================== */

function travelTo(id){

    if(!dimensions[id]){

        return;

    }


    game.dimension =
    id;

    game.scene =
    "start";

    game.storyline =
    dimensions[id].story;


    if(!game.visited.includes(id)){

        game.visited.push(id);

    }


    closeMap();

    save();

    render();

    showEvent(
        "TRAVELED TO "+id
    );

}


/* =====================================================
   EVENT MESSAGE
===================================================== */

let eventTimer;

function showEvent(message){

    const box =
    document.getElementById(
        "eventMessage"
    );


    box.textContent =
    message;


    box.classList.add(
        "show"
    );


    clearTimeout(
        eventTimer
    );


    eventTimer =
    setTimeout(
        function(){

            box.classList.remove(
                "show"
            );

        },
        2200
    );

}


/* =====================================================
   THREE.JS SPACE
===================================================== */

function createSpace(){

    if(typeof THREE==="undefined"){

        return;

    }


    const container =
    document.getElementById(
        "space"
    );


    const scene =
    new THREE.Scene();


    const camera =
    new THREE.PerspectiveCamera(
        60,
        window.innerWidth /
        window.innerHeight,
        1,
        1000
    );


    camera.position.z=100;


    const renderer =
    new THREE.WebGLRenderer({
        alpha:true,
        antialias:false
    });


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            1.5
        )
    );


    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );


    container.appendChild(
        renderer.domElement
    );


    const geometry =
    new THREE.BufferGeometry();


    const count=700;


    const positions =
    new Float32Array(
        count*3
    );


    for(
        let i=0;
        i<count*3;
        i++
    ){

        positions[i] =
        (Math.random()-.5)*500;

    }


    geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
            positions,
            3
        )
    );


    const material =
    new THREE.PointsMaterial({
        color:0x9c65c7,
        size:1.4,
        transparent:true,
        opacity:.55
    });


    const stars =
    new THREE.Points(
        geometry,
        material
    );


    scene.add(
        stars
    );


    function animate(){

        requestAnimationFrame(
            animate
        );


        stars.rotation.y +=
        .00015;

        stars.rotation.x +=
        .00004;


        renderer.render(
            scene,
            camera
        );

    }


    animate();


    window.addEventListener(
        "resize",
        function(){

            camera.aspect =
            window.innerWidth /
            window.innerHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );

        }
    );

}


/* =====================================================
   START
===================================================== */

load();

render();

createSpace();


/* Remove loading screen */

window.addEventListener(
    "load",
    function(){

        setTimeout(
            function(){

                const loading =
                document.getElementById(
                    "loadingScreen"
                );


                loading.style.opacity="0";


                setTimeout(
                    function(){

                        loading.style.display=
                        "none";

                    },
                    600
                );

            },
            350
        );

    }
);
```
