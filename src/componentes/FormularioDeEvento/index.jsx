import CampoDeEntrada from '../CampoDeEntrada';
import CampoDeFormulario from '../CampoDeFormulario';
import Label from '../Label';
import TituloFormulario from '../TituloFormulario';
import './formulario-de-evento.css';

function FormularioDeEvento() {

  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Nome</Label>
        <CampoDeEntrada type="text" id="nome" name="nome" />
      </CampoDeFormulario>
    </form>
  )
}
export default FormularioDeEvento;