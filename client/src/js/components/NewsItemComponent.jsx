import React from 'react';
export default class NewsItemComponent extends React.Component
{

constructor(){
super();

this.saveNews=this.saveNews.bind(this);
}

saveNews(){

console.log("saveNews");
var jsonStr=JSON.stringify(this.props.item);
console.log(jsonStr);
$.ajax({
url: "/newsGet/saveNews",
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


 render()
 {
   console.log("inside news item");


   return (
     <article>

     <div className="col-12" id="maindiv">

     <div className="col-4"><img className="newsPic col-4" src={this.props.item.urlToImage} alt="image" />
     </div>
     <div className="col-8" height="200px">
     <div  className="col-8">
     <text className="textTitle"><a href="#" >{this.props.item.title}</a></text>
     </div>
     <div className="col-8" >
     <text>{this.props.item.description}</text>
     </div>
     </div>
     <input type="button" className="btn btn-primary" value="Save" onClick={this.saveNews}></input>


     </div>
     </article>

   );
 }
}
