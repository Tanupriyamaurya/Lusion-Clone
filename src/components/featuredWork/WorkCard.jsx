export default function WorkCard({ title, category, image, link }) {
  return (
    <a href={link} className="work-card">
      <div className="work-media">
        <img src={image} alt={title} />
      </div>

      <div className="work-meta">
        <span className="work-category">{category}</span>
        <h3 className="work-title">
          {title} <span className="arrow">→</span>
        </h3>
      </div>
    </a>
  );
}
