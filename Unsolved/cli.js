// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
// one way to do it.
// const allArguments = process.argv.slice(2);
// const command = allArguments[0];
// const everythingElse = allArguments.slice(1);
const TV = require('./tv');

const tvMike = new TV();

const cliArgs = process.argv.slice(2);
const command = cliArgs.shift();
const searchString = cliArgs.join(' ');

// node cli show fringe
console.log(cliArgs);
console.log(command);
console.log(searchString);


switch (command) {
  case 'show':
    console.log('here is a show');
    // TODO: show search logic
    // tvMike.findShow(searchString);



    const dataThing = tvMike.findShow(searchString).then(function(data) {
      console.log(data);

      //write to DB 
      
    }); // prints undefined





    break;
  case 'actor':
    console.log('here is actor');
    // TODO: actor search logic
    tvMike.findActor(searchString);
    break;
  default:
    break;
}




// if(command === 'show') {
//   console.log('You are searching for a show!');
// } else if (command === 'actor') {
//   console.log('You are searching for an actor!');
// } else {
//   console.log('I have **no clue** what you meant to do.');
// }


// some change