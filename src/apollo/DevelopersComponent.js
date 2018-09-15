import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const Developers=()=>(
  <Query query={gql `
  {
  developers{npm 
    skills{
      name,
      duration
    },
    projects{
      description,
      title
    },
    linkdedIn,
    name,
    image
  }
}
  `}>

  {({loading,error,data})=>{
      if(loading) return <h1>loadingdta...</h1>
      if(error) {
        console.log(error.message)
        return <p>Error </p>
     
      }
      return data.developers.map(({linkdedIn,name,image})=>(
          <div>
              <p>
                  {`${name} and ${linkdedIn} and ${image}` }
              </p>

          </div>

      ))
  }}

  </Query>
)

export default Developers