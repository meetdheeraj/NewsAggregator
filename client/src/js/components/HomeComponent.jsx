
import React from 'react';

import SearchComponent from './SearchComponent.jsx';
import NewsBoxComponent from './NewsBoxComponent.jsx';


export default class HomeComponent extends React.Component{
constructor(){
super();
this.state={articles:[], data:"default",isUpdate:false};

this.fetchNewsJSON=this.fetchNewsJSON.bind(this);
this.setUpdate=this.setUpdate.bind(this);


}

fetchNewsFromExternalAPI(source) {
console.log("inside fetchNewsFromExternalAPI: "+source);

$.ajax({
url: "https://newsapi.org/v1/articles?source="+source+"&sortBy=top&apiKey=3931448f70a249d8b30ac6d29205122d",
type: "GET",
dataType: 'JSON',

success : function(msg){
console.log("News Fetched Successfully");
console.log(msg);
var art=msg.articles;
this.setState({articles:msg.articles});
console.log("main:: "+this.state.articles);

}.bind(this),
error: function(err){
cosnole.log("Main-Error Fetching News");
}.bind(this)
});
}

fetchNewsJSON(source){
console.log("inside fetchNewsJSON");
console.log(source);

this.setState({data:source});
this.fetchNewsFromExternalAPI(source);
}

setUpdate(){
console.log("inside setUpdate home");
	this.setState({isUpdate:true});
}




render(){
var d=this.state.data;
var a=this.state.articles;
return(
<div>

<SearchComponent news={a} data={d} newsSource={this.fetchNewsJSON.bind(this)}/>
<NewsBoxComponent news={a} isUpdate={this.state.isUpdate} />


</div>

)
}

}
