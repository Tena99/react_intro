export default Card;
import "./styles.css";

function Card({ title, photo, description }) {
  return (
    <article className="card">
      <div className="card_item">
        <div className="img_wrap">
          <img src={photo} alt="portrait"></img>
        </div>
        <h3 className="card_item_title">{title}</h3>
      </div>

      <p>{description}</p>
    </article>
  );
}
