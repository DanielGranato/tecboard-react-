import './botao.css';

function Botao ({children}) {
    return (
        <button className="botao">
            {children}
        </button>
    )
}
export default Botao;

