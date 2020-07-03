import React,{Component} from 'react';
import Api from '../../services';
import './style.css';
import SearchCountry from '../SearchCountry';
import FilterCountry from '../filterCountry';
import {Link} from 'react-router-dom';




class CoutryList extends Component{
    constructor(props){
        super(props);

        this.searchCountry = this.searchCountry.bind(this);
        this.filterCountry = this.filterCountry.bind(this);
        

        
    }

    state = {
        coutries:[],
        allCountries:[]
    }

    async componentDidMount(){
       const response = await Api.get('/all');
        await this.setState({coutries:response.data});
        await this.setState({allCountries:response.data});
    }
    
    searchCountry(e){
        const result = this.state.allCountries.filter((i)=>{
            return i.name.lastIndexOf(e.target.value) > -1;
        });
        
        this.setState({
            coutries:result
        });
    }

    filterCountry(e){
        if(e.target.value === "All"){
            this.setState({
                coutries:this.state.allCountries
            });
        }else{
            const result = this.state.allCountries.filter((i)=>{
                return i.region === e.target.value;
            });
            
            this.setState({
                coutries:result
            });
        }
    }



    render(){
      
        return (    
            <>
    
            <div className="coutryFilterContent">
                <SearchCountry handleChange={this.searchCountry}/>
                <FilterCountry handleChangeBox={this.filterCountry}/> 
            </div>
            
            <section className="coutryList-container">
                {this.state.coutries.map((item,i)=>{
                    const {name,flag,population,capital,region} = item;
            
                    return( 
                        <Link key={i} to={`/country/${name}`} >
                            <article className="coutryItem">
                                <div className="coutryItemImage">
                                    <img src={flag} alt="pais" className="coutryImg"/>
                                </div>
                                <ul className="coutryItemInfo">
                                    <h2>{name}</h2>
                                    <li>population: <span>{population} </span>  </li>
                                    <li>capital:    <span>{capital}    </span>  </li>
                                    <li>region:     <span>{region}     </span>  </li>
                                </ul>

                            
                            </article>
                        </Link>
                    );
                })
                }
            </section>
            </>
        );
    }
}
export default CoutryList;

