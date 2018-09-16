import React from 'react'
import {shallow}  from '../../configs/Enzyme'
import Register from '../../../components/pages/auth/Register'
import {Input} from '../../../components/widgets/Form/InputWidgets'

describe('Test the Register Component',()=>{
    it('Renders Form',()=>{
      const wrapper= shallow(<Register/>)
      console.log(wrapper)
      expect(wrapper.contains([
 <form/>
                                 
    
      ]
      
      )).toBeTruthy()
    })

})