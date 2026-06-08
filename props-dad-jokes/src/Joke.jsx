export default function Joke(props){
  
    return (
        <div>
            <p>{props.joke}</p>
            <p>{props.rating}/5</p>
        </div>
    );
}