console.log('cabin access js is working!');


//getting the key from LS
let getCabinKey = window.localStorage.getItem('cabinKey');

console.log(getCabinKey); //checking


//if player has the key then can enter cabin...if not then must us another route
//will not let player enter cabin if no key in local storage
$('button#cabinAccess').on('click',function(){
    if(getCabinKey !== null && 'undefined'){
       window.location.replace("../allRooms/roomSeven.html"); //redirected to room seven player has key
    } else {
   alert(`${gettingPlayerName}, you don\'t have the key! You try to wiggle to knob, but to no avail...`);
    
    }
});

$('button#ignoreKey').on('click',function(){    //player has key but chooses to ignore using it
    if(getCabinKey !== null && 'undefined' ){
       window.location.replace("../allRooms/roomFive.html"); //redirected to room five --alernate end
    } else {
   alert(` ${gettingPlayerName}, you never picked up the key!!`);
    }
});


$('button#noKey').on('click',function(){     
    if(getCabinKey === null){
       window.location.replace("../allRooms/roomFour.html"); //redirected to room five --alernate end

    } else{
           alert(`${gettingPlayerName}, you HAVE picked up the key!!`); //reminder that player has key

    }
});



 
 


