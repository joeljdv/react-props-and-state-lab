import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: '',
      filters: {
        type: 'all',
      }
    }
  }

  handleFilterChange= (e) => {
    console.log(e.target.value)
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  handleClick = () => {
    var request = 'pets'
    if(this.state.filters.type === 'cat') {
      request = 'pets?type=cat'
    }else if(this.state.filters.type === 'dog'){
      request = 'pets?type=dog'
    }else if(this.state.filters.type === 'micropig') {
      request= 'pets?type=micropig'
    }else{
      request = 'pets'
    }
    fetch(`/api/${request}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          pets:[data]
        })
      })
  }

  handleAdoption = (id) => {
    let pet = this.state.pets.find(element => element.id === id)
    console.log(pet)
    pet.isAdopted = true
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={e=>this.handleFilterChange(e)} onFindPetsClick={this.handleClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={id=> this.handleAdoption(id)} data={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
