import React from 'react'


const Stylecss ={
    marginTop:'20',
    textAlign:'center'
}

function LastUpdate({ date }) {
    let setDate = new Date (date.Date).toDateString()
    return (
        <div>
            <div style={Stylecss}>
                <h5>Last Update { setDate}</h5>
            </div>
        </div>
    )
}

export default LastUpdate;