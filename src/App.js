import React from 'react';
import Routes from './routes';
import './AppGeral.css';
import Header from './Components/Header';




class App extends React.Component{
  constructor(props){
    super(props);
    this.setTheme = this.setTheme.bind(this);
  }
  state = {
    themeColor: "light"
  }
  setTheme(){
    this.state.themeColor === "light" ?
    (this.setState({themeColor:"dark"})) :
    (this.setState({themeColor:"light"}));

  }
  render(){
    return (
      <> 
        <div className={this.state.themeColor}> 
          <Header changeTheme={this.setTheme}/>
          <Routes />
  
        </div>
      </>
    );
  }
}



export default App;
