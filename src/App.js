import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/static/Header'
import Footer from './components/static/Footer'
import MainPage from './components/static/MainPage'
import VkMain from './components/mech/vk/VkMain'
import VkVote from './components/mech/vk/VkVote'

import { css } from 'aphrodite/no-important'
import app from './styles/app_styl.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={css(app.wholeWrapper)}>
          <Header/>
          <main className={css(app.mainContainer)}>
            <div className={css(app.mainContent)}>
              <Route exact={true} path='/' component={MainPage}/>
              <Route path='/vk' component={VkMain}/>
              <Route path='/vkvote' component={VkVote}/>
            </div>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
