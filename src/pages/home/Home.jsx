import Feature from '../../features/feature/Feature'
import commitmentList from '../../data/featureList'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <div className="features">
        {commitmentList.map(({ id, alt, title, text }) => (
          <div key={id}>
            <Feature src={`src/assets/${alt}.png`} alt={alt} title={title} text={text} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home