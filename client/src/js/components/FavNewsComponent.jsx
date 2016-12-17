var React = require('react');
var {Link} = require('react-router');

import NewsBoxComponent from './NewsBoxComponent.jsx';

export default class FavNewsComponent extends React.Component{

  constructor(){
    super();
    this.state={news:[]};
  }

  componentDidMount()
  {

    console.log("componentDidMount");
    //this.props.news="get lost news";
    //console.log(this.props.item);
  //  this.setState({news:"hello"});

  $.ajax({
      url: "/newsGet/viewNews",
      type: "GET",
      //  data:this.props.item,
      success : function(msg){
        console.log("Retrieve Successfully!!"+msg);
         this.setState({news:msg});
          //  return(<NewsBoxComponent news={msg}/>)
        //  var d=this.state.news;

      }.bind(this),
      error: function(err){
        console.log("Error during Retrieving"+err);
      }.bind(this)
    });


  }


  render() {

    return(

      <NewsBoxComponent news={this.state.news}/>

    )
  }
}
