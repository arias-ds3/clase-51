import useCheckBox from "../../hooks/useCheckBox"
function AsistenciasComponent() {
  const [isPresente, PresenteCheckBox] = useCheckBox()
  const [isCorregido, CorregidoCheckBox] = useCheckBox()
  const handleClick = () => {
    const body = { isPresente, isCorregido }
    console.log(body)
  }
  return (
    <div>
      <PresenteCheckBox /> ¿El alumno asistió a clases?
      <br />
      <CorregidoCheckBox /> ¿El TP del alumno fue corregido?
      <br />
      <button onClick={handleClick}>Envíar</button>
    </div>
  )
}
export default AsistenciasComponent