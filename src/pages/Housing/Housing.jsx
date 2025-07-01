import { useParams, Navigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Gallery from '../../components/Gallery/Gallery'
import Rating from '../../components/Rating/Rating'
import Tags from '../../components/Tags/Tags'
import Collapse from '../../components/Collapse/Collapse'
import logementsData from '../../data/logements.json'
import './Housing.scss'

const Housing = () => {
  const { id } = useParams()
  
  // Trouver le logement correspondant à l'ID
  const housing = logementsData.find(logement => logement.id === id)
  
  // Si le logement n'existe pas, rediriger vers la page 404
  if (!housing) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="housing">
      <Header />
      <main className="housing__main">
        <Gallery pictures={housing.pictures} title={housing.title} />
        
        <div className="housing__content">
          <div className="housing__info">
            <div className="housing__header">
              <h1 className="housing__title">{housing.title}</h1>
              <p className="housing__location">{housing.location}</p>
            </div>
            <Tags tags={housing.tags} />
          </div>
          
          <div className="housing__host">
            <div className="housing__host-info">
              <span className="housing__host-name">{housing.host.name}</span>
              <img 
                src={housing.host.picture} 
                alt={housing.host.name}
                className="housing__host-picture"
              />
            </div>
            <Rating rating={housing.rating} />
          </div>
        </div>
        
        <div className="housing__details">
          <Collapse title="Description">
            <p>{housing.description}</p>
          </Collapse>
          
          <Collapse title="Équipements">
            <ul>
              {housing.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Housing