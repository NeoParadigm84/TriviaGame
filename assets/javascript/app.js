$(document).ready(function () {
    var options = [
        {
            question: "Who was the first colonist slain in the Boston Massacre?",
            choice: ['Crispus Attucks', 'Booker T Washington', 'Martin Luther King', 'Prince Hakim'],
            answer: 0,
            photo: "assets/images/Crispus.jpg"
        },
        {
            question: "What Author of ‘Song of Solomon' won the Nobel Prize for literature?",
            choice: ['Alice Walker', 'Maya Angelou', 'Toni Morrison', 'James Baldwin'],
            answer: 2,
            photo: "assets/images/Toni.gif"
        },
        {
            question: "Who was the most famous conductor of the underground railroad?",
            choice: ['Don Corneliu', 'Shemar Moore', 'Harriet Tubman', 'Harriet Beecher Stowe'],
            answer: 2,
            photo: "assets/images/Harriet.gif"
        },
        {
            question: "Who assassinated Dr. Martin Luther King?",
            choice: ['Donald J Trump', 'James Earl Ray', 'James Wilkes Booth', 'Lee Harvey Oswald'],
            answer: 1,
            photo: "assets/images/JEray.jpg"
        },
        {
            question: "Which amendment to the US Constitution abolished slavery?",
            choice: ['1st', '5th', '13th', '14th',],
            answer: 2,
            photo: "assets/images/13th.jpg"
        },
        {
            question: "On the TV show Martin, what was Tommy's Job?",
            choice: ['Janitor', 'Lawyer', 'Unemployed', 'Teacher'],
            answer: 2,
            photo: "assets/images/Tommy.gif"
        },
        {
            question: "Female rapper Lil' Kim once belonged to a rap collective called Junior M.A.F.I.A. that included the following NY rappers except for whom?",
            choice: ['The Notorious B.I.G.', 'Jadakiss', 'Lil Cease', 'Nino Brown'],
            answer: 1,
            photo: "assets/images/Mafia.gif"
        },
        {
            question: "NBA superstar Shaquille O'Neal began his career with which team?",
            choice: ['Los Angeles Lakers', 'Orlando Magic', 'Chicago Bulls', 'Boston Celtics'],
            answer: 0,
            photo: "assets/images/Shaq.gif"
        },
        {
            question: "In the premier episode of The Cosby Show, which Huxtable child was reprimanded for doing poorly in school?",
            choice: ['Rudy', 'Vanessa', 'Theo', 'Denise'],
            answer: 2,
            photo: "assets/images/Theo.gif"
        },
        {
            question: "What was the first black show on Disney Channel?",
            choice: ['Thats So Raven', 'Sister Sister', 'The Proud Family', 'Kenan & Kel'],
            answer: 2,
            photo: "assets/images/proud.gif"
        },
        {
            question: "Who was the first black president of the US?",
            choice: ['John Hanson', 'W.E.B. Duboise', 'Barrack Obama', 'Bill Clinton'],
            answer: 2,
            photo: "assets/images/Obama.gif"
        },
        {
            question: "Which is not a flavor(color) of Kool-aide?",
            choice: ['Blue', 'Orange', 'Red', 'Lemon'],
            answer: 3,
            photo: "assets/images/kool.gif"
        },
        {
            question: "If some says you are ‘Trippin' this most closely means you are?",
            choice: ['Going on vacation', 'Falling over something', 'Acting strange or out of character', 'Doing a popular hip hop dance'],
            answer: 2,
            photo: "assets/images/trippin.gif"
        },
        {
            question: "According to rapper Drake all but one of the following are acceptable?",
            choice: ['Cheering for the Taranto Raptors', 'Late nights and early mornings', 'Free smoke', 'New friends'],
            answer: 3,
            photo: "assets/images/Drake.gif"
        },
        {
            question: "In what movie starring Denzel Washington did someone famously shout, ‘Get your hand out of my pocket!’",
            choice: ['Training Day', 'The Preacher’s Wife','Malcom X', 'The Book of Eli'],
            answer: 2,
            photo: "assets/images/Malcome.gif"
        },
        {
            question: "In this 1998 Spike Lee film a father attempted to use his son's basketball talent as a bargaining chip to get out of prison.",
            choice: ['Jungle Fever', '25th Hour', 'Do the Right Thing', 'He Got Game'],
            answer: 3,
            photo: "assets/images/HGG.gif"
        },
        {
            question: "According to Mob Deep what are there no such thing as?",
            choice: ['Ghost', 'Halfway crooks', 'The Tooth Fairy', 'Free lunch'],
            answer: 1,
            photo: "assets/images/mobb.gif"
        },
        {
            question: "Which Housewife on Real Housewives of Atlanta says ‘Who’s gon’ check me boo?'",
            choice: ['Nene Leakes', 'Phaedra Parks', 'Sheree Whitfield', 'Porsha Williams'],
            answer: 2,
            photo: "assets/images/CheckMe.gif"
        },
        {
            question:"When someone refers to their kitchen which part of themselves are they referring to?" ,
            choice: ['The hair on the back of their neck', 'Their mouth', 'Their Hands', 'The space behind their knees'],
            answer: 0,
            photo: "assets/images/Kitchen.jpg"
        },
        {
            question: "What is a side piece?",
            choice: ['A food accompanying a large meal (i.e. biscuit, green beans, macaroni)', 'The non-face side of a coin', 'A mistress or mister', 'A bag worn on the side of your body'],
            answer: 2,
            photo: "assets/images/Side.gif"
        }];
        
var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var timer = 20;
var intervalId;
var userGuess ="";
var running = false;
var qCount = options.length;
var pick;
var index;
var newArray = [];
var holder = [];





})