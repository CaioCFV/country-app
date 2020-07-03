import React,{Component} from 'react';
import './style.css';

class Header extends Component{

    render(){
        return(
            <div className="container-head">
                <header className="head">
                    <h1>Where in the world ?</h1>
                    <span onClick={this.props.changeTheme} className="icon-theme-toggle">
                        <i className="far fa-moon"></i>
                        Dark mode
                    </span>
        
                </header>
            </div>
        );
    }
}

export default Header;