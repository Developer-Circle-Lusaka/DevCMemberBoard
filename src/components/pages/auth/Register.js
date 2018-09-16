import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Paper,Button,Typography,Grid} from '@material-ui/core'
import UIkit from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';
import {Input,Select} from '../../widgets/Form/InputWidgets'
import emailValidator from 'email-validator'
import config from '../../../config/config'
  

class RegisterComponent extends Component {
    
 constructor(props) {
     super(props);
     this.state={
         fullname:'',
         email:'',
         password:'',
         confirmPassword:''
     }

     this.handleInputChange = this.handleInputChange.bind(this);
     this.validateConfirmPassword = this.validateConfirmPassword.bind(this);
     this.validatePassword = this.validatePassword.bind(this)
     this.validateEmail = this.validateEmail.bind(this);
     
     
 }
 

 handleInputChange(e){
     console.log(e.target)
     const {name,value}=e.target
     switch(name){
         case 'fullname':
         this.setState({
             fullname:value
         })
         break;

         case 'email':
         this.setState({
            email:value
        })
         break;

         case 'password':

         this.setState({
            password:value
        })
         break;


         case 'confirmPassword':

         this.setState({
            confirmPassword:value
        })
         break;

     }
 }

validatePassword(){
    const {password}=this.state
    if(password && password.length <=8){
        return 'Password has be more than 8 or more characters'
    }    

}

validateEmail(){
    const {email}=this.state
    const valid=emailValidator.validate(email)
   
 if(!valid && email){
   return 'Email is not valid.'
 }
}

validateConfirmPassword(){
    const {password,confirmPassword}=this.state
    if(password !== confirmPassword){
        return 'Password must be the same'
    }

}

    render() {
         const {email,password,confirmPassword,fullname}=this.state
        return (
        
          <div className={'uk-container'}>
                <div className="uk-grid uk-grid-large uk-child-medium uk-flex-center" >
                     <div>
                         <div className="uk-card uk-card-default uk-card-body">
                                <form>
                                    <Input type={'text'} placeholder={'Full Name'} icon={'user'} value={fullname} name="fullname" controlFunc={this.handleInputChange}/>
                                    <Input type={'email'} placeholder={'email'} icon={'mail'} value={email} name="email" controlFunc={this.handleInputChange} validator={this.validateEmail()}/>
                                    <Input type={'password'} placeholder={'Password'} icon={'lock'} value={password} name="password" validator={this.validatePassword()} controlFunc={this.handleInputChange}/>
                                    <Input type={'password'} placeholder={'Confirm Password'} icon={'lock'} value={confirmPassword} name="confirmPassword" validator={this.validateConfirmPassword()} controlFunc={this.handleInputChange}/>
                                  <button className="uk-button uk-button-primary" >submit</button>
                                </form>
         
          </div>
          
      </div>
          </div>
          </div>
        
        )
    }
}

export default RegisterComponent;