import React from 'react';

export default class UpdateDeleteComponent extends React.Component{
constructor(){
super();

this.updateNews=this.updateNews.bind(this);
this.deleteNews=this.deleteNe
ws.bind(this);
}

updateNews()
	{
	console.log("updateNews");

	var jsonStr=JSON.stringify(this.props.item);
console.log(jsonStr);
$.ajax({
url: "http://localhost:8080/newsGet/saveNews",
type: "POST",
dataType: 'APPLICATION/JSON',
data:this.props.item,
success : function(msg){
console.log(msg);
console.log("Saved Successfully!!");
}.bind(this),
error: function(err){
console.log("Error during AJAX Save");
}.bind(this)
});

	}

deleteNews()
	{
	console.log("deleteNews");
	var jsonStr=JSON.stringify(this.props.item);
console.log(jsonStr);
$.ajax({
url: "http://localhost:8080/newsGet/saveNews",
type: "POST",
dataType: 'APPLICATION/JSON',
data:this.props.item,
success : function(msg){
console.log(msg);
console.log("Saved Successfully!!");
}.bind(this),
error: function(err){
console.log("Error during AJAX Save");
}.bind(this)
});

	}
render(){

	
return(	
			<div>
			<input type="button"  name ="Update" value="Update" onClick={this.updateNews}/>
			
			<input type="button"  name ="Delete" value="Delete" onClick={this.deleteNews}/>
			</div>


		)
	}	
}