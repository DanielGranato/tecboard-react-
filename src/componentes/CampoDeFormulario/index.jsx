import './campo-de-formulario.css';
function CampoDeFormulario({children}) {
    return (
      <fieldset className="campo-form">
        {children}
      </fieldset>
    )
  }
  export default CampoDeFormulario;