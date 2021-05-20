import React, {useState}from 'react'

const SearchBar = (props) =>{
    //state
    const [values, setVaues] = useState({
      lat: 0,
      lon: 0
  })

    //deconstruct
    const {lat, lon } = values

    //event handler
    const handelChange = (lat)=>(event)=>{
        setVaues({
            ...values,
            [lat]:event.target.value
        })
    }
    //button submit
    const onSubmit = (event)=>{
        event.preventDefault();
        setVaues({...values})
        props.onSubmit(values)
    }


    return (
        <div className="ui segment">
            <form onSubmit={onSubmit} action="" className="ui form">
                <div className="field">
                    <lable> Longitude  </lable>
                    <input
                        type={"text"}
                        value={lon}
                        onChange={handelChange("lon")}
                    />
                </div>
                 <div>
                    <lable> Latitude </lable>
                    <input
                        type={"text"}
                        value={lat}
                        onChange={handelChange("lat")}
                    />
                </div>
                <button className="ui button"  onClick={onSubmit} style={{marginTop:"20px"}}>
                            Submit
                </button>
            </form>

        </div>
    )

}
export default SearchBar;