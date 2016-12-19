import React from 'react';

import NewsItemComponent from './NewsItemComponent.jsx';
import UpdateDeleteComponent from './UpdateDeleteComponent.jsx';
import SaveItemComponent from './SaveItemComponent.jsx';
export default class NewsBoxComponent extends React.Component{
constructor(){
    super();
    this.setUpdate=this.setUpdate.bind(this);
}

setUpdate(){
console.log("inside setUpdate newsBox");
  this.props.setUpdate();
}


render(){
console.log("NewsBoxComponent :: "+this.props.news);
console.log(this.props.isUpdate);



return(

  <div className="newsBox">
       {
       
         this.props.news.map(function(item){
         return(

         <div>
         <span><NewsItemComponent item={item}/></span>
         <span><SaveItemComponent item={item}/></span>
         
                  <span><UpdateDeleteComponent item={item} setUpdate={that.setUpdate.bind(that)}/></span>

          
        
      


         </div>

         )
       }
       )
     }
  </div>
  )

}
}
