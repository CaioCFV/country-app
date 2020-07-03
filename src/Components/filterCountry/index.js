import React,{Component} from 'react';
import './style.css';

class FilterCountry extends Component{
    render(){
        return (
            <select value="" className="optionContainer"  onChange={this.props.handleChangeBox}>
                <option name="all"  value="All">-- All --</option>
                <option name="asia" value="Asia">Asia</option>
                <option name="europe" value="Europe">Europe</option>
                <option name="africa" value="Africa">Africa</option>
                <option name="americas" value="Americas">Americas</option>
                <option name="oceania" value="Oceania">Oceania</option>
                <option name="polar" value="Polar">Polar</option>
            </select>
        );
    }
}

export default FilterCountry;