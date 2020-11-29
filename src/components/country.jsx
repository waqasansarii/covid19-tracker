import React from 'react'



function CountryName({ data: { Country } }) {
    const Stylecss ={
        marginTop:'20',
        textAlign:'center'
    }
    return (
        <div>
            <div style={Stylecss}>
                <h2>{Country?Country :'Global'}</h2>
            </div>
        </div>
    )
}

export default CountryName