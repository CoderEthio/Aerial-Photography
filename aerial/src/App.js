import React, {useState} from 'react'
import SearchBar from "./components/SearchBar";
import {APICall} from "./ApiCall/nasaApi";
import {loadingImageSpinner} from "./components/loadingImageSpinner";

const App=()=> {

    const [image , setImage] = useState("")
    const [loading, setLoading] = useState(false)

    const onSearchSubmit = (values)=>{
        setLoading(true)
        APICall(values).then(res => {
            res.json().then(r =>{
                    setImage(r.url)
                    setLoading(false)
            })

            })
    }

    return (
    <div className="ui container" style={{marginTop:'20px'}}>
       <h1>Aerial Photography</h1>
        <div className="ui grid">
            <div className="four wide column"><SearchBar onSubmit = {onSearchSubmit}/></div>
            <div className="ten wide column">
                {loadingImageSpinner(loading)}
                {image && (<div><img className="ui fluid image" src={image} alt="up" /></div>)}
            </div>
        </div>
    </div>
  );
}

export default App;

