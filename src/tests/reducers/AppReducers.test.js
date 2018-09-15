import {accountDetailsReducer,developerSkillsReducer,developerProjectsReducer} from '../../reducers/AppReducers'

describe('tests all developer project reducers',()=>{

    it('should go to default state',()=>{
        const action={
            type:'A'
        }
        expect(developerProjectsReducer(undefined ,action)).toEqual([])

    });

    it('add projects to list',()=>{
        const action= {
            type:'ADD_PROJECT',
            project:{name:'name',desc:'theis'}
        }
        const defaultState=[]
        expect(developerProjectsReducer(defaultState,action)).toEqual([...defaultState,action.project])
    })

})


describe('tests all skills developer skills ',()=>{
    it('shoud return default',()=>{
        const action={
            type:'a'
        }

        expect(developerSkillsReducer(undefined,action)).toEqual([])
    })

    it('should add skill',()=>{
        const action={
            type:'ADD_SKILL',
            skill: {
                name:'REACT',
                rating:5
            }
        }
         const initialState=[]
        expect(developerSkillsReducer(initialState,action)).toEqual([...initialState,action.skill])
    })
})