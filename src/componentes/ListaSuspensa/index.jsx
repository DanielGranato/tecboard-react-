import './lista-suspensa.css';

function ListaSuspensa () {
    return (
        <select className="lista-suspensa-form">
            <option value="">Selecione uma opção</option>
            <option value="1">Tecnologia</option>
            <option value="2">Negócios</option>
            <option value="3">Marketing</option>
            <option value="4">Design</option>
            <option value="5">Inovação</option>
            <option value="6">Finanças</option>
            <option value="7">Educação</option>
            <option value="8">Saúde</option>
            <option value="9">Esportes</option>
            <option value="10">Entretenimento</option>
        </select>
    )
}
export default ListaSuspensa;
