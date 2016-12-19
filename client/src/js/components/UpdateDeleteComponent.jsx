import React from 'react';

export default class UpdateDeleteComponent extends React.Component{
constructor(){
super();

this.updateSource=this.updateSource.bind(this);
this.deleteSource=this.deleteSource.bind(this);
}

updateSource()
	{
	console.log("Update source");
	var obj=this.props.item;
	console.log(obj.title);
	console.log(this.refs.txtTitle.value);
	obj.title=this.refs.txtTitle.value;
	console.log(obj.title);
		console.log();
		$.ajax({
				url: "/newsGet/updateNews",
				type: "PUT",
				data:this.props.item,
				success : function(msg){
					console.log("Updated Successfully!!"+msg);

				}.bind(this),
				error: function(err){
					console.log("Error during Update"+err);
				}.bind(this)
			});


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
			<input type="text" defaultValue={this.props.item.title} ref="txtTitle"></input>
			<input type="button"  name ="Update" value="Update" onClick={this.updateSource}/>

			<input type="button"  name ="Delete" value="Delete" onClick={this.deleteSource}/>
			</div>


		)
	}
}
