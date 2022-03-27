import React from 'react'
import './Style.css'
import Button from './Button'

class Cadastro extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  alterarUsername = e => {
    this.setState({ username: e.target.value })
  }

  alterarPassword = e => {
    this.setState({ password: e.target.value })
  }

  submeterForm = e => {
    this.props.metodo(this.state)
    console.log('Username: ', this.state.username)
    console.log('Password: ', this.state.password)
  }

  render() {
    return (
      <div className="container-cadastro">
        <form onSubmit={this.submeterForm}>
          <h2 className="title-cadastro">Cadastro</h2>

          <hr />

          <div className="container-itens-cadastro">
            <div className="division">
              <label className="text-label">
                Informe um nome para usuário:
              </label>
              <br />
              <input
                id="username"
                type="text"
                name="username"
                className="input-cadastro"
                value={this.state.username}
                onChange={this.alterarUsername}
              />
            </div>

            <div>
              <label className="text-label">Informe uma senha:</label>
              <br />
              <input
                id="password"
                type="password"
                name="password"
                className="input-cadastro"
                value={this.state.password}
                onChange={this.alterarPassword}
              />
            </div>
          </div>

          <Button
            acao="salvar"
            estiloContainer="container-itens-cadastro container-button-cadastro"
            estiloBotao="button button-cadastro"
            metodo={this.submeterForm}
          />
        </form>
      </div>
    )
  }
}

export default Cadastro
