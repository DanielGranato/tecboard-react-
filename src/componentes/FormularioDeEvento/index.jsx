import CampoDeEntrada from '../CampoDeEntrada';
import CampoDeFormulario from '../CampoDeFormulario';
import Label from '../Label';
import TituloFormulario from '../TituloFormulario';
import './formulario-de-evento.css';
import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';

function FormularioDeEvento( {temas, aoSubmeter} ) {

  function aoFormSubmetido(formData) {
    console.log('opa, tá na hora de criar um novo evento', formData)
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    aoSubmeter(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <CampoDeEntrada type="text" id="nome" name="nomeEvento" />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="capa">Qual o endereço da imagem de capa?</Label>
        <CampoDeEntrada type="text" id="capa" name="capa" />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="data">Data do evento</Label>
        <CampoDeEntrada type="date" id="data" name="dataEvento" />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="tema">Tema do evento</Label>
        <ListaSuspensa id="tema" name="tema" itens={temas} />
      </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}
export default FormularioDeEvento;