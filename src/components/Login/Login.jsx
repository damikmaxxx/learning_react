import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { reduxForm } from "redux-form"
import { Field } from "redux-form"
import { login } from "../../redux/auth-reducer"
import { required } from "../../utils/validator/validators"
import { Input } from "../common/FormsControl/FormsControls"  
import c from "../common/FormsControl/FormsControls.module.css"
const LoginForm = ([handleSubmit,error]) => {
    return <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} validate={[required]}/> remember me
            </div>
            {error && <div className={c.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

 const Login = (props) =>{
     
    const onSubmit = (formData) => {
        let {email,password,rememberMe} = formData
        props.login(email,password,rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login)