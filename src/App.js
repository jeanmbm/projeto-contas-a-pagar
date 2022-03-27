import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Componentes/Style.css'
import Login from './Componentes/Login'
import Cadastro from './Componentes/Cadastro'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      login: false
    }
  }

  efetuarCadastro = e => {
    // this.setState({ username: username, password: password })
    console.log('Username: ', this.state.username)
    console.log('Password: ', this.state.password)
    e.preventDefault()
  }

  loginVerification = (username, password) => {
    if (
      username === { username: this.state.username } &&
      password === { password: this.state.password }
    ) {
      this.setState({ login: true })
    } else {
      const userNotEnter = document.getElementById('userNotEnter')
      userNotEnter.style.cssText = 'visibility: hidden;'
    }
  }

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Login metodo={this.loginVerification} />}
            />
            <Route
              path="/cadastro"
              element={<Cadastro metodo={this.efetuarCadastro} />}
            />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
