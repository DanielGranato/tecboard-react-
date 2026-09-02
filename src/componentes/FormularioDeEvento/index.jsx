import CampoDeEntrada from '../CampoDeEntrada';
import CampoDeFormulario from '../CampoDeFormulario';
import Label from '../Label';
import TituloFormulario from '../TituloFormulario';
import './formulario-de-evento.css';
import Botao from '../botao';
import ListaSuspensa from '../ListaSuspensa';

function FormularioDeEvento() {

  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <CampoDeEntrada type="text" id="nome" name="nome" />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="data">Data do evento</Label>
        <CampoDeEntrada type="date" id="data" name="data" />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="tema">Tema do evento</Label>
        <ListaSuspensa />
      </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}
export default FormularioDeEvento;