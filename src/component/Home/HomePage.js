//import react package.
import React from 'react';
import axios from 'axios';

//Home component 
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        //define state
        this.state = { details:[] ,selectCountry:''};
        //bind onClick loging button function..
        this._callApi=this._callApi.bind(this);
        this._onSelect=this._onSelect.bind(this)
    }
    _onSelect(e){ this.setState({selectCountry:e.target.value}) }
    _callApi(e){
        let country=this.state.selectCountry;
        //calling API with the use of "axios" 
        axios.get('https://restcountries.eu/rest/v2/name/'+country+'?fullText=true').then(res=>{
            //Set country details into state..
           this.setState({details:res.data[0]})
        }).catch(err=>{
            alert("Select Valid Option", +err);
        })
    }
    //render function 
    render() {
       return (
            <section>
                <section style={{ "background-color": "black", "color": "white", "height": "80px", "textAlign": "center", "margin": "5px", "padding-top": "10px" }}>
                    <h3>Welcome to the HomePage..!</h3>
                    <b>Username: {this.props.Username}</b>
                </section>
                <section className="jumbotron">
                <h5>Select Country to View details.</h5>
                <select style={{"width":"250px","display":"inline"}} onChange={this._onSelect}className="form-control">
                         <option></option>
                         <option>India</option>
                         <option>China</option>
                         <option>Albania</option>
                         <option>Afghanistan</option>
                         <option>Antarctica</option>
                         <option>Argentina</option>
                </select> 
                <button className="btn btn-primary" onClick={this._callApi}>Search</button>
                </section>
                <section>  
                   <center style={{"background-color":"grey","height":"50px","padding":"10px"}}> <h5>Display Common Country Information.</h5></center>
                    <ul className="jumbotron">  
                        <li>Country Name:{this.state.details.name}</li>
                        <li>Capital:     {this.state.details.capital}</li>
                        <li>Population:  {this.state.details.population}</li>
                        <li>Region:      {this.state.details.region}</li>
                    </ul>         
                </section>
            </section>
        );
    }
}//export Component
export default HomePage;