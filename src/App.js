import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './Componentes/Style.css'
import Login from './Componentes/Login'
import Cadastro from './Componentes/Cadastro'
import Conta from './Componentes/Conta'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isLoggedin: false
    }
  }

  efetuarCadastro = (loginUsername, loginPassword) => {
    this.setState({ username: loginUsername, password: loginPassword })
  }

  loginVerification = (loginUsername, loginPassword) => {
    alert(this.state.username + this.state.password)
    alert(loginUsername + loginPassword)
    if (
      loginUsername == this.state.username &&
      loginPassword == this.state.password
    ) {
      this.setState({ isLoggedin: true })
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
            <Route path="/conta" element={<Conta />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
