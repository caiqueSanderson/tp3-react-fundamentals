import "./styles.css";

export default function StatusBadge({status}) {
    let className = '';

    switch(status){
        case 'ativo':
            className = 'badge active';
            break;
        case 'inativo':
            className = 'badge inactive';
            break;
        case 'pendente':
            className = 'badge pending';
            break;
        default:
            className = 'badge';
            break;
    }
    return (
        <div className={className}>
            <span>{status != '' ? status.charAt(0).toUpperCase() + status.slice(1) : 'Sem Status'}</span>
        </div>
    )
}