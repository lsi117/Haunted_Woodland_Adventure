console.log(`js is working!`);


//setting player name to all pages
let gettingPlayerName = window.localStorage.getItem('playerUserName');

console.log(gettingPlayerName); //checking

//create an array of objects --5 rooms
//create a name for each room and then create a description for each room
//later append these objects to html --for each scenario
const gameRooms =[{
  roomOne: `The Haunted Woodland`,
  descriptionOne: `You shake off a mean headache as you lift yourself from the damp ground. Your eyes searching your environment, a dim green light filters through the dense forest. A thick fog is quickly sweeping in, but in a narrow clearing you\`re able to make out a battered rickety sign that reads, "Current Location: Eastern: HAUNTED WOODLANDS, BEWARE!". Suddenly, you hear an ominous noise coming from just a few yards behind the old sign, you can\`t really make out what it is though ...what\`s your next move?!`
  },
  
  {
    roomTwo: `The Haunted Woodland` ,
    descriptionTwo:  ` ${gettingPlayerName}, after runnning as fast as you can and escaping the evil entities you stop to collect your thoughts and catch your breath. Your head is still aching as you try to make sense of why you\`re in this strange place to begin with. The old rickty sign flashes in your head and you think to yourself, "I\`ve got to get outta here!". As your engulfed in your thoughts you notice a small, but shiny object on the ground. It\`s a KEY! ${gettingPlayerName} what\`s your next move?`
  },
  
    {
        roomThree: `Victory! You\`ve made it out alive!` ,
        descriptionThree: `As you push forwards through the musty woodlands you come to a small clearing. ${gettingPlayerName} the evil aura that has stuck with you suddenly vanishes! You make your way out of the Haunted Woodlands! `
  },
  
    {
        roomFour: `${gettingPlayerName} the Creatures have found you...`,
        descriptionFour: `You feel sick, the last thing you see is, shapeless forms with evil grins and dark cold eyes surronding you. `
  },
  
    {
        roomFive: `${gettingPlayerName}, you\`ve become a creature yourself`,
        descriptionFive: `It seems that you\`ve either lost your way, eaten something strange(cursed) or have stayed too long in the Haunted Woodland. Your body starts to tingle and grow uncomfortable every second. ${gettingPlayerName}, you slip in and out of consciousness...Suddenly you\`re transformed into a creature, forever cursed to roam the Haunted Woodland.`
  },
  {
      roomSix: `The Haunted Woodland`,
      descriptionSix: `It\`s been some time since you\`ve come across that random key. The woodland is heavy with fog and a slight drizzle begins to ensue, the eerie green light seems to cover it\`s entirety, it\`s like there is no sun, but only this strange greenish source that gives any illumination. Your body is exhausted, your belly is rumbling, and your head is pounding, just as your thoughts go on a downward spiral you come across a cabin. The cabin seems quiet, but there is a flickering light coming from inside..looks like a fireplace must be lit. Also, a lantern is lit and hung outside to give the porch some light. You wonder who could live in such a place? But, not much time to really think about that, you know those creatures you encountered earlier are still after you, you can feel their aura all around. Quick! ${gettingPlayerName} what do you do?!`
  },
  {
      roomSeven:`A Cozy Cabin`,
      descriptionSeven:`The door gives a loud creak as you open it slowly. You hesitate a bit, hoping the noise hasn\`t woke anything sinister. The cabin seems empty, but someone or something definitely lives here. You take a look behind you and nothing seems to have followed you here, although you cannot shake the ominous feeling as if those creatures were right behind you. You head inside and are surprised to see a lit crackling fireplace, a cozy bed and a plethora of what looks to be freshly made hot meals and ingredients scattered all over the tiny kitchen. You\`ve never seen these ingredients ever in your life, but then again this strange place seems to lack anything really human, so it\`s not that much of a surprise. Your stomach starts to rumble and your headache is fading, but still present. You look to the cozy bed tucked away in the corner of the cabin, it looks slept in. On the small night table next to the bed there is, what looks to be an obscure map...what should you do ${gettingPlayerName}?`
  },
  {
      roomEight:`The Haunted Woodlands: Cross Roads`,
      descriptionEight:`After leaving the cozy cabin without eating or sleeping you\`ve become exhausted, but it\`s almost as if your under a spell of some sort...it\`s felt that way since the beginning. Just as that thought leaves your mind you come across a very foggy patch, but are able to make out some old small wooden signs planted at the beginning of different paths. It looks like a cross roads...One path is labeled North, another South, East, and West. You pull out the map you brought from the cabin, the map has lead you in this direction, but it\`s obscure on where to go next. You observe the map, it seems the NORTHERN part of the map has been burned off, who knows why...the SOUTHERN part of the map seems to have an odd mark on it, the mark resembles one of the ingredients you saw back at the cabin...could this be the way out? The EASTERN part of the map just looks like a lot of trees and wetland...looks oddly familiar. The WESTERN part of the map is weathered, but you can make out that there must have been some sort of red colored mark once. So far, it looks like you\`ve been traveling westward since coming across the cozy cabin... Which path do you take, ${gettingPlayerName}?`
  },

  {
      roomTen:`The Witch has found you...`,
      descriptionTen:`A strong sense of doom comes over you, it\`s pure silence for a moment and then your body contracts violently before becoming completely numb. You cannot move! Slowly a face comes to light and it\`s hardly a face at all. A green aura surronds this haunting figure right before everything fades to black...`
  }
];


//const placingGameStory = $(document).getElementById(`#gameStory`);

//room One scenario
$(document).ready(function(){
    $(`#gameStoryOne`).append(`${gameRooms[0].roomOne}` + `<br /> <br /> ` + `${gameRooms[0].descriptionOne}`);
});


//room Two scenario
$(document).ready(function(){
    $(`#gameStoryTwo`).append(`${gameRooms[1].roomTwo}` + `<br /> <br /> ` + `${gameRooms[1].descriptionTwo}`);
});

//room Three scenario
$(document).ready(function(){
    $(`#gameStoryThree`).append(`${gameRooms[2].roomThree}` + `<br /> <br /> ` + `${gameRooms[2].descriptionThree}`);
});

//room Four scenario
$(document).ready(function(){
    $(`#gameStoryFour`).append(`${gameRooms[3].roomFour}` + `<br /> <br /> ` + `${gameRooms[3].descriptionFour}`);
});

//room Five scenario
$(document).ready(function(){
    $(`#gameStoryFive`).append(`${gameRooms[4].roomFive}` + `<br /> <br /> ` + `${gameRooms[4].descriptionFive}`);
});

//room Six scenario
$(document).ready(function(){
    $(`#gameStorySix`).append(`${gameRooms[5].roomSix}` + `<br /> <br /> ` + `${gameRooms[5].descriptionSix}`);
});

//room Seven scenario
$(document).ready(function(){
    $(`#gameStorySeven`).append(`${gameRooms[6].roomSeven}` + `<br /> <br /> ` + `${gameRooms[6].descriptionSeven}`);
});


//room Eight scenario
$(document).ready(function(){
    $(`#gameStoryEight`).append(`${gameRooms[7].roomEight}` + `<br /> <br /> ` + `${gameRooms[7].descriptionEight}`);
});

//room Nine scenario

//room Ten scenario
$(document).ready(function(){
    $(`#gameStoryTen`).append(`${gameRooms[8].roomTen}` + `<br /> <br /> ` + `${gameRooms[8].descriptionTen}`);
});


//some sounds are from http://soundbible.com/suggest.php?q=forest&x=0&y=0




