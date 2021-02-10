'use strict';


let score = 0;
let userName = prompt('Tell me your name')

 function user (){
   //let userName = prompt('Tell me your name')

    alert('Now you are welcome to my page  ' + '' + userName)
  

 }
 user();




function major (){
 
    let myMajor = prompt(userName + ' ' + ' Did you think I studied MIS ?');

    //console.log(myMajor.toLowerCase());
    myMajor = myMajor.toLowerCase();

    if (myMajor === 'yes' || myMajor === 'y') {
        score++;
        alert(' yes my major is MIS')

    } else {
        alert('No, is MIS')
    }
}

major();


function from (){
 
    let comFrom = prompt(userName+ ' ' + 'Did you think I lived in safad ?');
    //console.log(comFrom.toLowerCase());
    comFrom = comFrom.toLowerCase();

    if (comFrom === 'yes' || comFrom === 'y') {
        score++;
        alert('ooh no I born and lived in Irbid ')
    }

    else {
        alert('correct i live in irbid ')

    }


}

from();

   function position(){
    let myPosition = prompt(userName + ' ' + ' Are my Position now A software Developer ?');
    //console.log(myPosition.toLowerCase());

    myPosition = myPosition.toLowerCase();

    if (myPosition === 'yes' || myPosition === 'y') {
        score++;
        alert(' ya my position now is software developer')
    }

    else {
        alert(' you failed here ')
    }

}

position();







function knowledge (){
 
    let myknowldg = prompt(userName + '' + ' I have a some knowledge in QA ?');

    //console.log(myknowldg.toLowerCase);

    myknowldg = myknowldg.toLowerCase();

    if (myknowldg === 'yes' || myknowldg === 'y') {
        score++;
        alert(' oh that is right ')
    }
    else {
        alert('incorrect , i have a course in QA ')
    }
}

knowledge();


 function university (){
    let myUni = prompt(userName + '' + '  Did I graduates from Yarmouk University? ');

    //console.log(myUni.toLowerCase());

    myUni = myUni.toLowerCase();

    if (myUni === 'yes' || myUni === 'y') {
        score++;
        alert(' that is right ')

    }

    else {
        alert('that is wrong  my university is YU ')
    }

 }

 university();




   function gpa (){

   
    let myGpa = prompt(' what is my GPA ??')

    myGpa = parseInt(myGpa);

    if (myGpa === 79) {
        score++;
        alert('my GPA is correct ');
    }
    else {


        for (let i = 1; i <= 4; i++) {

            if (myGpa > 79) {
                alert('Higher than my GPA');
                myGpa = prompt('Try Again')
            }



            else if (myGpa < 79) {
                alert('Less than my GPA ');
                myGpa = prompt('Try Again');

            }

            if (myGpa === 79) {
                score++;
                break;
            }
            
        }
       


        


        alert('ok ... my GPA is = 79');


    }


    }
    gpa();

  function sesson (){

let flag = false ;

    for (let i = 0; i < 6; i++)
     {
        let mySeson = ['winter', 'summer', 'spring', 'autumn'];
        let userInput = prompt('can you guess my favourite seson ?')
        let Guess = userInput.toLocaleLowerCase();

        for (let j = 0; j < mySeson.length; j++) {
            if (Guess === mySeson[j]) {

                alert('that is correct');
                 flag= true ;
                score++;
                
                break;

            }
        }
        if (flag === true) {
            //alert('wrong answer');
            break;

        }
    }




alert(' my  seson are : winter , summer, spring, autumn ');

alert('you got ' + score + ' of seven Q  ' + 'congrats! ');


}
sesson();
 
