import React from 'react';
export default class SaveItemComponent extends React.Component
{

constructor(){
super();

this.saveNews=this.saveNews.bind(this);
}

saveNews(){

console.log("saveNews");
console.log(this.props.item);
$.ajax({
url: "/newsGet/saveNews",
type: "POST",
dataType: 'APPLICATION/JSON',
data:this.props.item,
success : function(msg){
console.log("Saved Successfully!!");
alert("News is added to the favourites");




}.bind(this),
error: function(err){
console.log("Error during Save");
alert("Error Occured");
}.bind(this)
});



}


render()
{
  console.log("inside news item");


  return (
    <article>
    <input type="button" className="btn btn-primary" value="Save" onClick={this.saveNews}></input>
    </article>

  );
}
}
