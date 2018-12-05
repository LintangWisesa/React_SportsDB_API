import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Kontak from './komponen/Kontak'
import Beranda from './komponen/Beranda'
import ProfilKlub from './komponen/ProfilKlub'

class App extends Component {
  render(){
    return(
      <div>
        <h1>Klubola.kom</h1>
        <div>
          <Route exact path='/' component={Beranda}/>
          <Route path='/kontak' component={Kontak}/>
          <Route path='/:profil' component={ProfilKlub}/>
        </div>
      </div>
    )
  }
}

export default App