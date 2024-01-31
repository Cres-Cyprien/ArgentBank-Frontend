/* eslint-disable react/prop-types */
import './Feature.scss'

const Feature = ({ id, alt, title, text }) => {
  return(
    <div  key={id} className="feature-item">
      <img src={`src/assets/${alt}.png`} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Feature