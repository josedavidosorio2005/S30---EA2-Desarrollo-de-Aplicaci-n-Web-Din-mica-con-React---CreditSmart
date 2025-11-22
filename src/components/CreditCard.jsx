import { Link } from 'react-router-dom';
import { formatMoney, formatRate } from '../data/creditsData';

// Componente reutilizable para mostrar una tarjeta de crédito
function CreditCard({ credit }) {
  const { id, name, desc, icon, rate, min, max, termMax } = credit;

  return (
    <article className="card">
      <div className="card__media">
        <img 
          src={`/img/${icon}`} 
          alt={name} 
          className="card__img" 
          loading="lazy"
        />
      </div>
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__desc">{desc}</p>
        <ul className="meta">
          <li>
            <span className="tag">Tasa</span> {formatRate(rate)}
          </li>
          <li>
            <span className="tag">Monto</span> {formatMoney(min)} – {formatMoney(max)}
          </li>
          <li>
            <span className="tag">Plazo</span> hasta {termMax} meses
          </li>
        </ul>
        <div className="card__actions">
          <Link className="link-ghost" to={`/simulador?producto=${id}`}>
            Ver detalles
          </Link>
          <Link className="btn" to={`/solicitar?tipo=${encodeURIComponent(name)}`}>
            Solicitar
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CreditCard;
