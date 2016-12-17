import React from 'react';
import NewsItemComponent from './NewsItemComponent.jsx';
import UpdateDeleteComponent from './UpdateDeleteComponent.jsx';
export default class NewsBoxComponent extends React.Component{
constructor(){
    super();
}
render(){
console.log("NewsBoxComponent :: "+this.props.news);

{/*
  var newsCollection = this.props.news.map(function(element) {
  return <NewsItemComponent newsObj={element}>;
  });
*/}

return(

  <div className="newsBox">
       {
         this.props.news.map(function(item){
         return(
         
         <div>
         <span><NewsItemComponent item={item}/></span>
         <span><UpdateDeleteComponent item={item}/></span>
         </div>

         )
       }
       )
     }
  </div>
  )

}
}
