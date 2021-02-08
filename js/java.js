'use strict';

let userName = prompt('Tell me your name')

//alert('Hi' +' ' + userName + ' '+  'There is a few  Question to go inside my page ');


let myMajor = prompt( userName +' ' +' Did you think I studied MIS ?') ;

 console.log(myMajor.toLowerCase());
 myMajor = myMajor.toLowerCase();

if (myMajor ==='yes' || myMajor==='y'){
alert(' yes my major is MIS')
} else {
  alert('No, is MIS')
}
let comFrom = prompt ( userName + ' ' +'Did you think I lived in safad ?');
console.log(comFrom.toLowerCase());
comFrom= comFrom.toLowerCase();

if ( comFrom === 'yes' || comFrom === 'y')

{
    alert('ooh no I born and lived in Irbid ')
}

else
 {
     alert('correct i live in irbid ')

}
let myPosition = prompt( userName + ' '+ ' Are my Position now A software Developer ?');
console.log(myPosition.toLowerCase());

myPosition = myPosition.toLowerCase();

if (myPosition === 'yes'|| myPosition === 'y'){
    alert(' ya my position now is software developer')
}

else
{
    alert(' you failed here ')
}

let myknowldg = prompt( userName + ''+ ' I have a some knowledge in QA ?');

console.log(myknowldg.toLowerCase);

myknowldg = myknowldg.toLowerCase();

if (myknowldg === 'yes'|| myknowldg === 'y'){
    alert( ' oh that is right ')
}
else
{
    alert('incorrect , i have a course in QA ')
}

let myUni = prompt ( userName + ''+ '  Did I graduates from Yarmouk University? ');

console.log(myUni.toLowerCase());

myUni = myUni.toLowerCase();

if (myUni === 'yes' || myUni === 'y')
{
    alert(' that is right ')

}

else
{
    alert('that is wrong  my university is YU ')
}

alert( 'Now you are welcome to my page  ' +''+  userName)


 
 

