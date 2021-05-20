export  const loadingImageSpinner = (loading)=>{
         return (
             loading && (
                 <div className="ui segment" style={{marginTop:"300px"}}>
                     <div className="ui active centered inline inverted  dimmer">
                         <div className="ui massive  text loader"></div>
                     </div>
                     <p></p>
                     <p></p>
                     <p></p>
                 </div>
             )
         )
    }