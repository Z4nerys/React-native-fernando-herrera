

export const TiposBasicos = () => {
  const nombre: string = "Gastón";
  const edad: number = 35
  const estaActivo: boolean = false

  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'] 

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? 'activo' : 'no activo'}
      <br/>
      {poderes.join(", ")}
    </>
  );
};
