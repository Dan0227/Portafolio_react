import { useState } from "react";
import Proyectos from "../Components/Proyectos";

export const Home = () => {

  const [ contador, setContador ] = useState(1)

  return (
    <>
      <Proyectos contador={contador}  setContador={setContador}/>
    </>
  );
};