import './App.css';
import Joke from './Joke';

function  App(){
    //const dadJoke = "I used to be a banker, but then I lost interest.";
    const dadJoke2 = "I'm afraid for the calendar.It's days are numberd";
    const dadJoke3 = {joke : "Yellow", rating : 1};
    const jokes = [
      {
        joke : "Red", 
        rating : 5
      },
      {
        joke : "Orange",
        rating : 2
      }
      
    ];
    return(
        <div>
          <h1>
            Dad Jokes
          </h1>

          <Joke joke = "I used to be a banker, but then I lost interest." rating = {3}></Joke>
          <Joke joke={dadJoke2} rating = {4}></Joke>
          <Joke joke = "Hello" rating = {0}></Joke>
          <Joke {...dadJoke3}></Joke>
          {jokes.map((joke,index) => {
            return <Joke key={index} joke = {joke.joke} rating ={joke.rating}></Joke>
          })}
        </div>
    );
}

export default App
