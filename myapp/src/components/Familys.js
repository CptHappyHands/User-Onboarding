import React from 'react'

function Familys({details}) {
    if (!details) {
        return <h3>....loading</h3>
    }

    return (
        <div className='family container'>
            {
              details.first_name ? <h3>{details.first_name}</h3> : <h3>{details.username}</h3>
            }
            <p>Email: {details.email}</p>
            <p>Terms of Service: {details.termsOfService}</p>

        </div>
    )
}

export default Familys