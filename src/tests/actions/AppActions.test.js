import {storeAccountInfo,addSkill,addProject} from '../../actions/AppActions'

describe('tests all the actions',()=>{
    it('add skills',()=>{
     const result= addSkill({name:'name',rating:4})
     expect(result).toEqual({
         type:'ADD_SKILL',
         skill:{name:'name',rating:4}
     })
    })

    it('add projects',()=>{
        const result= addProject({name:'name',desc:'jdkdk'})
        expect(result).toEqual({
            type:'ADD_PROJECT',
            project:{name:'name',desc:'jdkdk'}
        })
       })


       it('stores user information ',()=>{
        const result= storeAccountInfo({name:'name',desc:'jdkdk'})
        expect(result).toEqual({
            type:'STORE_ACCOUNT_INFO',
            user:{name:'name',desc:'jdkdk'}
        })
       })
       
})


