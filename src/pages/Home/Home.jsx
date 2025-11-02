import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import logementsData from '../../data/logements.json'
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="home__main">
        <Banner 
          image="banner-home.jpg" 
          text="Chez vous, partout et ailleurs"
        />
        <section className="home__gallery">
          {logementsData.map(logement => (
            <Card 
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home