const Botao = ({props, onClick, name}) => {

  return (
    <div>
        <button onClick={onClick} name={name}>{props}</button>
    </div>
  )
}

export default Botao;