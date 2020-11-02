// 1
function spookyGhosts(){
    console.log(`Boo!!!`);
}
spookyGhosts();

// 2
function candy(goal){
    console.log(`${goal}, ${goal}, ${goal}, ${goal}`);
}
candy(`Get Candy`);

// 3
function werewolf(a, b){
    if (a === `Full` && b === `Moon`){
        return `ARH-WOOO!`
    } 
    return `woof`;
}
const wolfin = werewolf(`Full`, `Moon`);
console.log(wolfin);
const notWolfin = werewolf(`New`, `Moon`);
console.log(notWolfin);


// 4
function halloween(){
    console.log(`October 31st`);
    return;
    
}
halloween();

// 5

function isEnoughCandy(pieces){
    if (pieces >= 31){
        return true;
    }
    return false;
}

let enough = isEnoughCandy(31);
console.log(enough);
let notEnough = isEnoughCandy(12);
console.log(notEnough);

// 6
function candyCounter(num){
    console.log(num);
}
candyCounter([2 + 3 + 15 + 8]);

// 7
const hauntedMansion = function (){
    console.log(`Welcome, foolish mortals, to the Haunted Mansion!`);   
}
hauntedMansion();

// 8
ghostbusters = () => `Who You Gonna Call?`;
const call = ghostbusters();
console.log(call);

// 9 NO
// 10 NO

// 11a
const costumes = [`Ghost`, `Hobo`, `Superman`];
// 11b
const upperCostumes = costumes.map(costumes => costumes.toUpperCase());
console.log(upperCostumes);

// BONUS

// 12a
let halloweenSongs1 = [`Moster Mash`, `Thriller`];
// 12b
let halloweenSongs2 = [`I Put A Spell On You`, `This Is Halloween`, `Ghostbusters`];
// 12c

function halloweenJukebox(halloweenSongs1){
    return halloweenSongs1[Math.floor(Math.random()*halloweenSongs1.length)];
    
    
}

console.log(halloweenJukebox(halloweenSongs1));

// 12d