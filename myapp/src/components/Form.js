import React from 'react'

export default function FamilyForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.prevventDefault()
        submit()
    }

    const onChange = evt => {
        const { name , value } = evt.target
        console.log(evt.target)
        change( name, value )
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className="form-group submit">
                <h3>Add a family member</h3>
                <button disabled={disabled}>submit</button>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
            </div>

            <div className="form-group inputs">
                <h4>Family Member Info</h4>
                <label>Username
                    <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                    />
                </label>
                <br></br>
                <label>Email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>
                <br></br>
                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
                {/* <br></br>
                <label> Confirm Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='confirm-password'
                    type='password'
                    />
                </label> */}

            <h4>Do you accept the terms of service?</h4>
                <label>Yes
                    <input
                    type='checkbox'
                    name='termsOfService'
                    value='true'
                    onChange={onChange}
                    checked={values.termsOfService === 'true'}
                    />
                </label>

            </div>

        </form>
    )
}