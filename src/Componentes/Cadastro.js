import React from 'react'
import './Style.css'
import Button from './Button'

class Cadastro extends React.Component {
  constructor() {
    super()
  }

  efetuarCadastro = () => {}

  render() {
    return (
      <div class="container-cadastro">
        <form action="">
          <h2 class="title-cadastro">Cadastro</h2>

          <hr />

          <div class="container-itens-cadastro">
            <div class="division">
              <label for="" class="text-label">
                Usuário
              </label>
              <br />
              <input type="text" name="username" class="input-cadastro" />
            </div>

            <div>
              <label for="" class="text-label">
                Senha
              </label>
              <br />
              <input type="text" name="password" class="input-cadastro" />
            </div>
          </div>

          <Button
            acao="salvar"
            estiloContainer="container-itens-cadastro container-button-cadastro"
            estiloBotao="button button-cadastro"
          />
        </form>
      </div>
    )
  }
}

export default Cadastro
