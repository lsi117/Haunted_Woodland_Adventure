//locally storing the key if player decideds to pick up
console.log('set the key!');
//window.localStorage.setItem('cabinKey', 'key');

//setting the item on click --
$('button#keyPickUp').on("click",function(){
  window.localStorage.setItem('cabinKey', 'key');
});

