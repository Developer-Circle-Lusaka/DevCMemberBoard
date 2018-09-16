import React from 'react'
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons';
import propTypes from 'prop-types'

const hint={
    fontSize:12
}

const Error=(props)=>(
 <span><p className={'uk-text-danger'} style={hint}>{props.error}</p></span>   
)

export const Input=(props)=>(
       <div className="uk-margin">
        <div className="uk-inline">
            <span className="uk-form-icon" data-uk-icon={`icon: ${props.icon}`}></span>
         <input value={props.value} name={props.name} className="uk-input" type={props.type} placeholder={props.placeholder} onChange={props.controlFunc}/>
         <br/>
        
        </div>
        <div>
        <Error error={props.validator}/>
        </div>
     
    </div>
)

export const Select=(props)=>(
    <div class="uk-margin">
    <select defaultValue='Gender' class="uk-select uk-form-width-medium" id='selection'>
        <option disabled value='Gender'>Gender</option>
        <option>Female</option>
        <option>Male</option>
    </select>  
    </div>
)



