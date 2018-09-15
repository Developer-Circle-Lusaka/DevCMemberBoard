const initalAccountState={}
export const accountDetailsReducer=(state=initalAccountState,action)=>{
    switch (action.type){
        case 'STORE_ACCOUNT_INFO':
          return Object.assign({},state,{
              user:action.user
          })
        break;

        default:
        return state;
        break;
    }
}



const initialDeveloperInfo=[]
export const developerProjectsReducer=(state=initialDeveloperInfo,action)=>{
    switch (action.type){
        case 'ADD_PROJECT':
        return [   
              ...state,
              {
                name: action.project.name,
                desc: action.project.desc
              }
            
        ]
        break;

        default:
        return state;
        break;
    }
}


const initalState=[]
export const developerSkillsReducer=(state=initalState,action)=>{
    switch (action.type){
        case 'ADD_SKILL':
          return [
              ...state,
              {
                  name:action.skill.name,
                  rating:action.skill.rating
              }
          ]
        break;

        default:
        return state;
        break;
    }
}