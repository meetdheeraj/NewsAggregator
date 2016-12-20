var React = require('react');
var {Link} = require('react-router');

import NewsBoxComponent from './NewsBoxComponent.jsx';

export default class FavNewsComponent extends React.Component{

  constructor(){
    super();
    this.state={news:[],isUpdate:true};
  }

  componentDidMount()
  {

    console.log("componentDidMount");
    
  $.ajax({
      url: "/newsGet/viewNews",
      type: "GET",
      //  data:this.props.item,
      success : function(msg){
        console.log("Retrieve Successfully!!"+msg);
         this.setState({news:msg});
          
      }.bind(this),
      error: function(err){
        console.log("Error during Retrieving"+err);
      }.bind(this)
    });


  }


  render() {

    return(

      <NewsBoxComponent isUpdate={this.state.isUpdate} news={this.state.news}/>

    )
  }
}
