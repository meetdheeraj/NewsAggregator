import React from 'react';

import NewsItemComponent from './NewsItemComponent.jsx';
import UpdateDeleteComponent from './UpdateDeleteComponent.jsx';
import SaveItemComponent from './SaveItemComponent.jsx';
export default class NewsBoxComponent extends React.Component{
constructor(){
		super();
		
}



render(){
console.log("Inside NewsBoxComponent :: "+this.props.news);
console.log("isUpdate: "+this.props.isUpdate);
var that=this;

return(

	<div className="newsBox">
			 {
			 
				 this.props.news.map(function(item){
				 return(

				 <div>
				 <span><NewsItemComponent item={item}/></span>
				 <span><SaveItemComponent item={item} isUpdate={that.props.isUpdate}/></span>
				 
									<span><UpdateDeleteComponent isUpdate={that.props.isUpdate} item={item}  /></span>


					
				
			


				 </div>

				 )
			 }
			 )
		 }
	</div>
	)

}
}
