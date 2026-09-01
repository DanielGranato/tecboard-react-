import './campo-de-entrada.css';
function CampoDeEntrada(props) {
    return <input {...props} className="campo-entrada-form" />
    // ...props é o mesmo que type={type} id={id} name={name}
  }
  export default CampoDeEntrada;

  