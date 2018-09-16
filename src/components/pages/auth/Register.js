import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Paper,Button,Typography,Grid} from '@material-ui/core'
import UIkit from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';
import {Input,Select} from '../../widgets/Form/InputWidgets'
  

class RegisterComponent extends Component {
    
 constructor(props) {
     super(props);
     
 }
 


    render() {

        return (
          <div className={'uk-container'}>
                <div className="uk-grid uk-grid-large uk-child-medium uk-flex-center" >
          <div>
              <div className="uk-card uk-card-default uk-card-body">

               <Input type={'text'} placeholder={'Full Name'} icon={'user'}/>
               <Input type={'email'} placeholder={'email'} icon={'mail'}/>
               <Input type={'password'} placeholder={'Password'} icon={'lock'}/>
               <Input type={'password'} placeholder={'Confirm Password'} icon={'lock'}/>
               <button class="uk-button uk-button-primary">submit</button>
          </div>
          
      </div>
          </div>
          </div>
        
        )
    }
}

export default RegisterComponent;