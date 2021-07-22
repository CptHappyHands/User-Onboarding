// import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { reach } from 'yup';
import schema from './components/formSchema'
import Familys from './components/Familys';

const initialFormValues = {
  username: '',
  email: '',
  termsOfService: false,
  password: '',
  // confirmPassword: '',
}

const initialFormErrors = {
  username: '',
  email: ''
}

const initialFamily = []
const initialDisabled = true

export default function App() {

  const [family, setFamily] = useState(initialFamily)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

const getFamily = () => {
  axios.get('https://reqres.in/api/users')
  
  .then(res => {
    setFamily(res.data.data)
  })
  .catch(err => {
    console.log(err)
  })
}

const postNewFamily = newFamily => {
  axios.post('https://reqres.in/api/users', newFamily)
  .then(res => {
    setFamily([...family, newFamily])
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log("THIS GOT RAN")
    setFormValues(initialFormValues)
  })
}

const validate = (name, value ) => {
  reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = (e) => {
    const newFamily = {
      username: formValues.username,
      email: formValues.email,
      termsOfService: formValues.termsOfService
    }
    postNewFamily(newFamily)
  }

  useEffect(() => {
    getFamily()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
        <header><h1>Welcome to the family!</h1></header>

        <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
        {
          family.map((fam, index) => {
            console.log(fam);
            return (
              <Familys key={index} details={fam} />
            )
          })
        }

    </div>
  )


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}


