import React from 'react';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  state = {
    fullName: "Sara",
    bio:"web developer",
    imgSrc:"/logo.svg",
    profession:"web developer",
    show:false,
    val:0
  };
  componentDidMount(val){
    setInterval(() => {
      this.setState({val:this.state.val+1})
    }, 2000);
   
  }
  
  render() {
    return (
      <>
      <Button variant="primary" onClick={()=> this.setState({show: !this.state.show})}>profile</Button>{' '}
      {this.state.show==true?
      <>
       <h1>{this.state.fullName} </h1>
       <h1>{this.state.bio} </h1>
       <h1>{this.state.profession} </h1>
       <h1>{this.state.val} </h1>
       <img src={this.state.imgSrc}/>
       </>
      : <h1></h1>
      }
      </>
     
      


    
    );
  }
}

export default App;
