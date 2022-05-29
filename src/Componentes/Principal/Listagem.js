import React from 'react'
import '../Style.css'

class Listagem extends React.Component {
  render() {
    const linhas = this.props.lista.map((lista, index) => (
      <tr key={index}>
        <td>{lista.valor}</td>
        <td>{lista.descricao}</td>
        <td>{lista.tipo}</td>
        <td>{lista.data}</td>
        <td>
          <div className="actions">
            <button className="editButton" onClick={() => this.props.edit()}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                height="20"
                width="20"
                alt="Edit"
              />
            </button>
            <button
              className="deleteButton"
              onClick={() => this.props.delete()}
            >
              <img
                src="https://img.icons8.com/material-rounded/344/filled-trash.png"
                height="20"
                width="20"
                alt="Delete"
              />
            </button>
          </div>
        </td>
      </tr>
    ))

    return (
      <div>
        <h2 className="title-conta">Extrato</h2>
        <table className="demo">
          <thead>
            <tr>
              <th>Valor (R$)</th>
              <th>Descrição</th>
              <th>Tipo de transação</th>
              <th>Data</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </table>
      </div>
    )
  }
}

export default Listagem
