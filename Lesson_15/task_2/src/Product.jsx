import React from 'react'



const Product= ({match})=>{
    // console.log(rest)
    return(
        <div>
           {match.params.productId}
        </div>
    )
}


export default Product