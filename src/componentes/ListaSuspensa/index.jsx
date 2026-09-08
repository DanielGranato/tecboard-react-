import './lista-suspensa.css';

function ListaSuspensa ( {itens} ) {
    return (
        <select className="lista-suspensa-form" defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            {itens.map(function(item) {
                return <option key={item.id} value={item.id}>{item.nome}</option>
            })}
        </select>
    )
}
export default ListaSuspensa;
