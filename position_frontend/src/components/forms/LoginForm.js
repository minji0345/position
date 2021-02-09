import React from "react";
import useForm from "./useForm";
import "./form.css"

function LoginForm() {
    const { values, errors, submitting, handleChange, handleSubmit } = useForm({
        initialValues: { username: "", password: ""},
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    // const [inputs, setInputs] = useState({
    //     username: '',
    //     password:'',
    //     password_check:'',
    // })

    // const { username, password, password_check } = inputs


    return (
        <form onSubmit={handleSubmit} noValidate>
            <label>
                <input type="email" name="username" value={values.username} onChange={handleChange}/>
            </label>
            <label>
                <input type="password" name="password" value={values.password} onChange={handleChange}/>
            </label>
            <button type="submit" disabled={submitting}>
                Log in
            </button>
        </form>
    )
}

export default LoginForm