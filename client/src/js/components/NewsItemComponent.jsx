import React from 'react';
export default class NewsItemComponent extends React.Component
{

constructor(){
super();


}




 render()
 {
   console.log("inside news item");


   return (
     <article id="newsItem">

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
     


     </div>
     </article>

   );
 }
}
