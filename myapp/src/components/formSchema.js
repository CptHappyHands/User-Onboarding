import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required')
        .min(3, 'Username must be 3 characters or more'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required("email is required"),
    password: yup
        .string()
        .min(6)
        .max(16),
    termsOfService: yup    
        .boolean()
        .required('The terms must be accepted')
        .oneOf([true], 'Must be checked')
})

export default schema