import React from 'react';


export default class SearchComponent extends React.Component{
constructor(){
super();

this.passSource=this.passSource.bind(this);
}

passSource(){
console.log("passSource");
var searchStr=this.refs.source.value;
console.log("searchStr: "+searchStr);
this.props.newsSource(searchStr);

}
render(){
	



return(
    <div className="searchBar">
            <div className="col_12">
    
            </div>

        <div className="col_12">
            
            <div>
            </div>    

            <div className="col_12">
                <input type="text" className="form-control" name="search here" id ="searchId" ref="source"/>
            </div>

            <div>

            

            
            <input type="image" id="btn" src="https://thumbs.dreamstime.com/t/puzzle-button-news-black-red-showing-51595693.jpg" alt="Submit" width="48" height="48"  value="Search"  onClick={this.passSource}/>
            </div>
        </div>
        
        
    </div>
        )
    }

}
