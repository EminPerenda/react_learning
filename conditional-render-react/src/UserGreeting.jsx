
function UserGreeting (props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>; 
    if(props.isLoggedIn){
        return welcomeMessage;
    }
    return loginPrompt;
}

export default UserGreeting