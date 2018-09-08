import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const Developers=()=>(
  <Query query={gql `
  {
  developers{
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
      if(error) return <p>Error :c</p>
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