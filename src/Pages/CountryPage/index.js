import React,{Component} from 'react';
import Api from '../../services';
import {Link} from 'react-router-dom';
import './style.css';

class CoutryPage extends Component{
    state = {
        country:{}
    }
    async componentDidMount(){
        const countryName = this.props.match.params.name;
        const response = await Api.get(`/name/${countryName}`);
        this.setState({
            country:response.data[0]
        });
    }
    
    render(){ 
        let countryinfo = this.state.country;
        countryinfo.borders = countryinfo.borders || ['no borders'];
        countryinfo.currencies = countryinfo.currencies || [{}];
        countryinfo.languages = countryinfo.languages || [{}];
        return(
        <>
            <div className="container-main">
                <Link className="back" to="/"><i className="fas fa-arrow-left"></i> Back</Link>
        
                <section className="container-country">
                    <div className="country-img">
                        <img src={countryinfo.flag} alt="flag"/>
                    </div>
                    <div className="country-description">
                        <h1 className="country-title">{countryinfo.name}</h1>
                        <ul className="list-caracteriscs">
                            <div className="list1">
                                <li>Native Name: <span>{countryinfo.nativeName}</span></li>
                                <li>Population: <span>{countryinfo.population}</span></li>
                                <li>Region: <span>{countryinfo.region}</span></li>
                                <li>Sub Region: <span>{countryinfo.subregion}</span></li>
                                <li>Capital: <span>{countryinfo.capital}</span></li>
                            </div>
                            <div className="list2">
                                <li>Top Level Domain: <span>{countryinfo.topLevelDomain}</span></li>
                                <li>Currencies: <span>{countryinfo.currencies.map((item,i)=>{
                                    return item.name;
                                })}</span></li>
                                <li>Language: <span>{countryinfo.languages.map((item,i)=>{
                                    return <span className="language-uni" key={i}>{item.name}</span>;
                                })}</span></li>
                            </div>
                        </ul>
                        <div className="border-countries">
                            <ul>
                                <li>Border countries: <span>{countryinfo.borders.map((item,i)=>{
                                return <p key={i}>{item}</p>;
                                })}</span></li>
                            
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
        );
    }
}
export default CoutryPage;
