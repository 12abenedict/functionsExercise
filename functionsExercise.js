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
    return `October 31st`;
    
}
console.log(halloween());

// 5

function isEnoughCandy(pieces){
    if (pieces >= 31){
        return true;
    } else {
    return false;
    }

    // Or you can use a ternary

    // return (pieces >= 31 ? true : false);
}

let enough = isEnoughCandy(31);
console.log(enough);
let notEnough = isEnoughCandy(12);
console.log(notEnough);

// 6
function candyCounter(num){
    let total = 0;
    for (n of num){total = total + n;
    }

    // OR you can use a for loop
    // for(i = 0; i <num.length; i++){
    //     total = total + num[i];
    // }
    return total;
}

candyCounter ([2, 3, 4, 5]);
candyCounter([2, 3, 4, 5, 6, 6]);


// 7
const hauntedMansion = function (){
    console.log(`Welcome, foolish mortals, to the Haunted Mansion!`);   
}
hauntedMansion();

// 8
ghostbusters = () => `Who You Gonna Call?`;
console.log(ghostbusters());

// 9 NO
// 10 YES

// 11a
const costumes = [`Ghost`, `Hobo`, `Superman`];
// 11b
// "anonymous arrow function"
const upperCostumes = costumes.map(costumes => costumes.toUpperCase());
console.log(upperCostumes);

// BONUS

// 12a
const halloweenSongs1 = [`Moster Mash`, `Thriller`];
// 12b
const halloweenSongs2 = [`I Put A Spell On You`, `This Is Halloween`, `Ghostbusters`];
// 12c
// MY ORIGINAL WAY (MESSY AND INCOMPLETE)
// function halloweenJukebox(songs){
//     Math.floor(Math.random() * songs.length)
    
// }

// console.log(halloweenJukebox(halloweenSongs1));

// function halloweenJukebox(halloweenSongs2){
//     return halloweenSongs2[Math.floor(Math.random()*halloweenSongs2.length)];
    
    
// }

// console.log(halloweenJukebox(halloweenSongs2));

function halloweenJukebox(songs){
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    console.log(randomSong);
}
halloweenJukebox(halloweenSongs1)
halloweenJukebox(halloweenSongs2)


// OR
// function halloweenJukebox(songs){
//     console.log(songs(Math.floor(Math.random()* songs.length)));
    
// }

// 13
function caps(string){
    let str = "";
    for (i = 0; i <= string.length; i++){
        str += i % 2 == 0 ? string.charAt(i).toUpperCase() :
        string.charAt(i);
    
    }
    return str;
}

console.log(caps(`abcdef`));