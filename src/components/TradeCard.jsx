import '../styles/componentStyles/TradeCard.css';

const TradeCard = ({ image, title, status, distance }) => {
  return (
    <div className="trade-card">
      <div
        className="trade-card-image"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="trade-card-content">
        <h4 className="trade-card-title">{title}</h4>
        <p className="trade-card-status">{status}</p>
        <div className="trade-card-location">
          <span className="material-symbols-outlined">location_on</span>
          {distance}
        </div>
      </div>
    </div>
  );
};

export default TradeCard;
