import React from 'react';
export default class SaveItemComponent extends React.Component
{

constructor(){
super();

this.saveNews=this.saveNews.bind(this);
}

saveNews(){

console.log("inside saveNews fn");
console.log(this.props.item);
$.ajax({
url: "/newsGet/saveNews",
type: "POST",

data:this.props.item,
success : function(msg){
console.log("Saved Successfully!!");
alert("News is added to the favourites");




}.bind(this),
error: function(err){
console.log("Error during Save");
alert("Sorry. There was Error during save");
}.bind(this)
});



}


render()
{
  console.log("inside news item");

  var isUpdate=this.props.isUpdate;
console.log("saveItemComp - isUpdate:"+isUpdate);
if(!isUpdate){
  return (
    <article >
    <input type="button" className="btn btn-primary" value="Save" onClick={this.saveNews}></input>
    </article>

  );
  }
  else{
  return (
    <article>
    
    </article>

  );
  }
}
}
