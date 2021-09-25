// higher order function example
function hello() {
    return function(){
        console.log('hello world!');
    }
}

hello()();


// example 1 without higher order fuction 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var result = [];

for (let i = 0; i < numbers.length; i++) {
result.push(numbers[i])    
}

console.log(result);


// example 1 with higher order fuction 
var result = numbers.map((number) => number * 2)

console.log(result);

// example 2 without higher order fuction 
var players = [
    {
        name: 'sakib',
        avg: 30.0,
    },
    {
        name: 'tamim',
        avg: 34.0,
    },
    {
        name: 'mahmudullah',
        avg: 100.00,
    },
    {
        name: 'musfiq',
        avg: 49.23,
    },
]


var playerAvgWithFourty = [];

for (let i = 0; i < players.length; i++) {
    if(players[i].avg >= 40){
        playerAvgWithFourty.push(players[i])
    }  
}

console.log(playerAvgWithFourty);

// example 2 with higher-order-fuction 
var playersWithAvgFourty = players.filter((player) => player.avg >= 40)

console.log(playersWithAvgFourty);

