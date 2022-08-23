interface Persona {
  nombreCompleto: string
  edad: number
  direccion: Direccion
}

interface Direccion {
    pais: string
    casaNr: number
}
//la interface es para definir como luce un objeto. reglas de validacion
//no sirve para crear una instancia.

export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: "Fernando",
    edad: 35,
    direccion: {
      pais: "Canadá",
      casaNr: 615,
    },
  };


  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  );
};
