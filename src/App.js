import React,{ Component } from 'react';
import './App.css';

class App extends Component{
  state={
    fname: '',
    lname: '',
    isSubmit: false
  }
  
  changeHandler = e => {
    if(e.target.name === 'fname')
      this.setState({fname: e.target.value})
    else this.setState({lname: e.target.value})
  }
  
  btnClick = () => {
    this.setState({isSubmit: true})
  }

  render(){
    const {fname, lname, isSubmit} = this.state;
    return(
      <div>
        <div className="topnav">
          {/*<a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#">Link</a>*/}
        </div>

        <div className="content">
          <h2>Hello {isSubmit && `${fname} ${lname}`}</h2>
          <label htmlFor='fname'>First Name: </label>
          <input type='text' id='fname' name='fname' value={fname} placeholder='name' onChange={this.changeHandler} />
          <br />
          <label htmlFor='lname'>Last Name: </label>
          <input type='text' id='lname' name='lname' value={lname} placeholder='name' onChange={this.changeHandler} />
          <br />
          <button onClick={this.btnClick}>Submit</button>
        </div>

        <div className="footer">
          <p>Footer</p>
        </div>

      </div>
    )
  }
}

export default App;
