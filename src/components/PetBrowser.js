import React from 'react'

import Pet from './Pet'



class PetBrowser extends React.Component {
  
  
  render() {
    
    return (
      <div>
        <Pet pets={this.props.data.map((pet) => console.log(pet))}/>
      </div>
    )
    
  }
}

export default PetBrowser
