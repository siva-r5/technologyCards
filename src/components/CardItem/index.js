import './index.css'

const TechnologyCards = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  return (
    <li className={`div-container ${className}`}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <div className="image-place">
        <img src={imgUrl} className="image-width" alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCards
