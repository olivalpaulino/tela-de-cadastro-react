import React from 'react'
import Botao from './Botao'
import { Input } from './Input'

const Formulario = ({props}) => {
  return (
    <div>
        <div>
            <h1>{props}</h1>
        </div>

        <div>
            <Input props={"Nome: "} />
            <Input props={"Sobrenome: "} />
            <Input props={"Idade: "} />
            <Input props={"Sexo: "} />
            <Input props={"Cpf: "} />
        </div>

        <div>
            <Botao props={"Cadastrar"} />
            <Botao props={"Cancelar"} />
        </div>
    </div>
  )
}

export default Formulario;