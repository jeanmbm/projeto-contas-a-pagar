import Login from './Componentes/Login'
import './Componentes/Style.css'
import React from 'react'
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

  efetuarCadastro = () => {
    this.setState({ username: '', password: '' })
  }

  //  loginVerification = () => {
  //    if algo === {this.state.username} && algo2 === {this.state.password}
  //  }

  render() {
    return <Cadastro />
  }
}

export default App
