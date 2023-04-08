const Input = ({estado, setpassword}) => {
    return (
        <div className="inputs">
            <label htmlFor="">Nombre: </label>
            <input className="form-control" type="text" placeholder="Ingresa un Texto" />
            <label htmlFor="">Contraseña: </label>
            <input className="form-control" type="password" placeholder="Ingresa la contraseña" onChange={(e) => setpassword(e.target.value)} value={estado} />
        </div>
    )
}
export default Input;