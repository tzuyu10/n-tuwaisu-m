import "../css/Card.css";

function Card({ member, onInfoClick }) {
    return (
        <div className="member-card">
            <div className="member-img">
                <img src={member.img} alt={member.name} />
            </div>
            <div className="member-overlay">
                <button className="info-btn" onClick={onInfoClick}>ⓘ</button>
            </div>
            <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.real_name}</p>
            </div>
        </div>
    );
}

export default Card;