import React from 'react';
export default class Login extends React.Component{
constructor(){
    super();
  this.state={
    "username":"default",
    "password":"default"
  }
}
user(euser){
this.setState({"username":euser.target.value});
console.log(this.state.username);
}
pass(epass){
this.setState({password:epass.target.value});
}
check(){
  console.log("check login");
var login={
  "username":this.refs.user.value,
  "password":this.refs.pass.value
}
  console.log("login clicked");
  console.log(login);
  $.ajax({
    url:"/users/findUser",
    type: 'POST',
    data : login,
    success: function(data)
    {
      console.log("inside success");
      alert("Success");
    },
    error: function(err)
    {
      console.log(err);
      console.log("error!!!!");
      alert("Error")
    }
  });
}

render(){
return (
    <div className="login-card">
       <div>
       <h1>Log-in</h1><br />
       </div>
    <form>
    {/*
      <input type="text" name="user" placeholder="Username" onChange={this.user.bind(this)}/><br/>
      <input type="password" name="pass" placeholder="Password" onChange={this.pass.bind(this)}/><br/>
      */}
      <input type="text" name="user" placeholder="Username" ref="user"/><br/>
      <input type="password" name="pass" placeholder="Password" ref="pass"/><br/>

      <input type="submit" name="Login" className="login login-submit" value="Login" onClick={this.check.bind(this)} />
    </form>

  </div>

   )
   }
}
