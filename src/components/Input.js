const Input = ({props, onChange, name, valor}) => {
  return (
    <div>
        <label>{props}<input type="text" onChange={onChange} name={name} value={valor} /></label>
    </div>
  )
}

export default Input;