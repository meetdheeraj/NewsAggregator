import React from 'react';
import NewsItemComponent from './NewsItemComponent.jsx';
import UpdateDeleteComponent from './UpdateDeleteComponent.jsx';
import SaveItemComponent from './SaveItemComponent.jsx';
export default class NewsBoxComponent extends React.Component{
constructor(){
    super();
}
render(){
console.log("NewsBoxComponent :: "+this.props.news);



return(

  <div className="newsBox">
       {
         this.props.news.map(function(item){
         return(

         <div>
         <span><NewsItemComponent item={item}/></span>
         <span><SaveItemComponent item={item}/></span>
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
