import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Kontak from './komponen/Kontak'
import Beranda from './komponen/Beranda'
import ProfilKlub from './komponen/ProfilKlub'
import Footer from './komponen/Footer'

class App extends Component {
  render(){
    return(
      <div className='container'>
          <a href='/'>
            <h1 className='mt-5'>Klubola.kom</h1>
          </a>
        <div>
          <Route exact path='/' component={Beranda}/>
          <Route path='/kontak' component={Kontak}/>
          <Route path='/:profil' component={ProfilKlub}/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App