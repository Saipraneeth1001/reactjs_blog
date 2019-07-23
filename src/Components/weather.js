import React from 'react';
import axios from 'axios';

class weather extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        city:'',
        country:'',
        error_details:'',
        error:'',
        temperature : undefined,
        humidity: undefined,
        description: undefined,
       main_weather : undefined,

    };
    handleChange =(e) =>{

        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const api_key = '71530fc9e90f42fc120fd29043c517fb';
        const city = e.target.city.value;
        const country = e.target.country.value;
        if(city !== '' && country!== ''){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`,{ responseType: 'json'})
        .then((res)=>{
          this.setState({
              temperature:res.data.main.temp,
              humidity:res.data.main.humidity,
              description: res.data.weather[0].description,
              main_weather: res.data.weather[0].main
          })
            }).catch((err)=>{
                this.setState({
                    error:'Process Failed : Check if you have entered the correct names or not'
                })
            })
        }else{
            this.setState({
                error_details: 'please fill all the fields with proper city and country names'
            })
        }
        
      };
      handleClick =(e) =>{
          e.preventDefault();
          this.setState({
              temperature:null,
              humidity:null,
              description:null,
              main_weather:null,
              city:'',
              country:'',
              error:'',
              error_details:''
          })
         
      }
    

    render(){
        
        return (
            <div>
             <div className="container">
                <form onSubmit = {this.handleSubmit} className="white">
                    <div className="input-field">
                        <label>City</label>
                        <input type = "text" name="city" 
                        value={this.state.city} onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label>Country</label>
                        <input type = "text" name="country"
                        value={this.state.country} onChange={this.handleChange}></input>
                    </div>
                    <button className="btn blue" htmlFor="submit">Submit</button>
                    <button className="btn blue" style={{ marginLeft: '7px'}} 
                    onClick={this.handleClick}>Clear</button>
                </form>
            </div>
          <br />
          <div className="container">
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card white">
                            <div class="card-content">
                            <span class="card-title">Weather Info</span>
                            <h6>Temperature: {this.state.temperature}</h6>
                            <h6>Humidity: {this.state.humidity}</h6>
                            <h6>Main: {this.state.main_weather}</h6>
                            <h6>Description: {this.state.description}</h6>
                            <p style={{color:'red'}}>{this.state.error_details}</p>
                            <p style={{color:'red'}}>{this.state.error}</p>
                             </div>
                        </div>
                     </div>
                </div>
        </div>
    </div>
        )

    }
    
}

export default weather ;