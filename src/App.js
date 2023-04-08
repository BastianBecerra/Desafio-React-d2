import { useState } from "react";
import Input from './componentes/Input'
import Boton from './componentes/Boton'

function App() {
  const [estado, setpassword] = useState("")
  return (
    <div className="App">
      <h1>Desafio Estado de los componentes y eventos</h1>
      <Input estado={estado} setpassword={setpassword}/>
      {estado === "252525" && <Boton />}
    </div>
  );
}

export default App;
