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

  efetuarCadastro = (username, password) => {
    this.setState({ username: username, password: password })
    console.log('Componente App')
    console.log('Username: ', this.state.username)
    console.log('Password: ', this.state.password)
  }

  loginVerification = (username, password) => {
    if (username === this.state.username && password === this.state.password) {
      this.setState({ login: true })
      console.log('true')
    } else {
      const userNotEnter = document.getElementById('userNotEnter')
      userNotEnter.style.cssText = 'display: block;' + 'visibility: visible;'
      console.log('false')
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
