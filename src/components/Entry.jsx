export default function Entry(props) {
  return (
    <article>
      <img src={props.img.src} alt={props.img.alt} />
      <div className="content">
        <i class="fa-solid fa-location-dot"></i>
        <span>{props.country}</span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h2>{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
