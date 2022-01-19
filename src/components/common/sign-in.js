
const SignIn = () => {
    
    const loginContainerStyle = {
        textAlign: "left",
        margin: 15,
        padding: 15,
        borderColor: "black",
    };
    
    const emailStyle = {
        marginLeft: 545
    };

    const containerStyle = {
        border: "1px solid black",
        width: 200,
        margin: 15,
        padding: 15,
        borderRadius: "15px",
        marginLeft: 545
    };

    const passwordStyle = {
        marginLeft: 545
    };  
    
    const loginButtonStyle = {
        color: "white",
        backgroundColor: "green",
        marginLeft: 585,
        width: 100
    }

  return (
    <div container style={loginContainerStyle}>
        <p style={emailStyle}>Email</p>
        <div container style={containerStyle}>
        </div>
        <p style={passwordStyle}>Password</p>
        <div container style={containerStyle}>
        </div>
        <button style={loginButtonStyle}>Login</button>
    </div>
  )
};

export default SignIn;
