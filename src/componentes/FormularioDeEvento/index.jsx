import CampoDeEntrada from '../CampoDeEntrada';
import CampoDeFormulario from '../CampoDeFormulario';
import Label from '../Label';
import TituloFormulario from '../TituloFormulario';

function FormularioDeEvento() {

  return (
    <form className="event-form">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Nome</Label>
        <CampoDeEntrada type="text" id="nome" name="nome" />
      </CampoDeFormulario>
    </form>
  )
}
export default FormularioDeEvento;