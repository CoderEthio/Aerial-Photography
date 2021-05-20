export const APICall =  async (values) =>{
        return   await  fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${values.lon}&lat=${values.lat}&date=2020-01-01&dim=0.10&api_key=SPOnwhs5Gvys2vQgQPxb0y70i0j3e8FsSFmEOEeP`)

}