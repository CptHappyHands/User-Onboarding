import React from 'react'

function Family({details}) {
    if (!details) {
        return <h3>....loading</h3>
    }

    return (
        <div className='family container'>
            <h3>{details.username}</h3>
            <p>Email: {details.email}</p>
            <p>Terms of Service: {details.termsOfService}</p>

        </div>
    )
}

export default Family