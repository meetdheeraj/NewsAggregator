import React from 'react';

export default class UpdateDeleteComponent extends React.Component{
constructor(){
super();

this.updateSource=this.updateSource.bind(this);
}

updateSource()
	{
	
	}

deleteSource()
	{

	}
render(){

	
return(	
			<div>
			<input type="button"  name ="Update" value="Update" onClick={this.updateSource}/>
			
			<input type="button"  name ="Delete" value="Delete" onClick={this.deleteSource}/>
			</div>


		)
	}	
}