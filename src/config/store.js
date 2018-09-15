import {createStore,combineReducers} from 'redux'
import {accountDetailsReducer,developerProjectsReducer,developerSkillsReducer} from '../reducers/AppReducers'


export default ()=>{
   const store= createStore(combineReducers({
           user:accountDetailsReducer,
           skills:developerSkillsReducer,
           projects:developerProjectsReducer
    }));
    
    return store;
}
