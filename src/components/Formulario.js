import Botao from './Botao';
import Input from './Input';
import {useState} from 'react';

const Formulario = ({props}) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [cpf, setCpf] = useState("");

  const cancelar = () => {
    setNome("");
    setSobrenome("");
    setIdade("");
    setSexo("");
    setCpf("");
  }

  const onClick = (e) => {
    if (e.target.name === "cadastrar") {
      console.log(nome, sobrenome, idade, sexo, cpf);
      cancelar();
    } else {
      cancelar();
    }
    
  }

  const onChange = (e) => {
    if (e.target.name === "nome") {
      setNome(e.target.value);
    } else if (e.target.name === "sobrenome") {
      setSobrenome(e.target.value);
    } else if (e.target.name === "idade") {
      setIdade(e.target.value);
    } else if (e.target.name === "sexo") {
      setSexo(e.target.value);
    } else if (e.target.name === "cpf") {
      setCpf(e.target.value);
    }
    
  }

  return (
    <div>
        <div>
            <h1>{props}</h1>
        </div>

        <div>
            <Input props={"Nome: "} onChange={onChange} name={"nome"} valor={nome} /> <br />
            <Input props={"Sobrenome: "} onChange={onChange} name={"sobrenome"} valor={sobrenome} /> <br />
            <Input props={"Idade: "} onChange={onChange} name={"idade"} valor={idade} /> <br />
            <Input props={"Sexo: "} onChange={onChange} name={"sexo"} valor={sexo} /> <br />
            <Input props={"Cpf: "} onChange={onChange} name={"cpf"} valor={cpf} /> <br />
        </div>

        <div>
            <Botao props={"Cadastrar"} onClick={onClick} name={"cadastrar"} /> <br />
            <Botao props={"Cancelar"} onClick={onClick} name={"cancelar"} /> <br />
        </div>
    </div>
  )
}

export default Formulario;