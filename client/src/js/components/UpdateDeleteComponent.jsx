import React from 'react';

export default class UpdateDeleteComponent extends React.Component{
constructor(){
super();

this.updateSource=this.updateSource.bind(this);
this.deleteSource=this.deleteSource.bind(this);
}

updateSource()
	{

	}

deleteSource()
	{
		$.ajax({
				url: "/newsGet/deleteNews",
				type: "DELETE",
				data:this.props.item,
				success : function(msg){
					console.log("Deleted Successfully!!"+msg);

				}.bind(this),
				error: function(err){
					console.log("Error during Deleting"+err);
				}.bind(this)
			});
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
