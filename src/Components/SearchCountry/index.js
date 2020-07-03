import React,{Component} from 'react';
import './style.css';


class SearchCountry extends Component{

    render(){
        return (
            <div className="search-filter-box">
                <i className="fas fa-search"></i>
                <input onChange={this.props.handleChange} name="coutry" placeholder="Search for a country..."/>
            </div>
        );
    }
}
export default SearchCountry;