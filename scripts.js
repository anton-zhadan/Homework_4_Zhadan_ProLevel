points_all_answers = 0;

// amount = prompt (`What's 2+2?`);
// if (amount === '4') {
//     alert ('Well done!');
//     console.log (points_all_answers += 10);
// } else {
//     alert ('error');
// }

// sun = confirm (`The sun rises in the east?`);

// if (sun) {
//     console.log (points_all_answers += 10);
// } 

// incorrect_question = confirm (`How much 5 / 0? Spoiler, press OK, i will give you 10 points=))`);

// if (incorrect_question) {
//     alert ('We will agree!'); 
//     console.log (points_all_answers += 10);
// } else {
//     alert ('No, thats not how things are done!');
// }

color_sky = prompt (`What color is the sky?`).trim().toLowerCase();

switch (color_sky) {
    case 'blue':
    case 'синий':
    case 'блакитний':
    case 'blau': 
        console.log (points_all_answers += 10);
        break;
    case '':
    case null:
        break;
    default:
        alert ("Error, enter right value");
}

// philosophical_question = prompt (`What is the correct answer to the main question of life, the universe and all that?`).trim().toLowerCase();

// switch (philosophical_question) {
//     case '42':
//         alert ("Right, Deep Thought is proud of you!");
//         console.log (points_all_answers += 10);
//         break;
//     default:
//         //alert ("Don't right, ask Deep Thought!");
//         break;
// }

alert (`Your result ${points_all_answers} points!`);