import React from 'react';
import NewsItemComponent from './NewsItemComponent.jsx';
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
         return(<NewsItemComponent item={item}/>)
       }
       )
     }
  </div>
  )

}
}
