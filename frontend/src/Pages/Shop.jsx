import Popular from "../Components/Popular/Popular"
import Hero from "../Components/Hero/Hero"
import Offers from "../Components/Offers/Offers"
import NewCollections from "../Components/NewCollections/NewCollections"
import Newsletter from "../components/newsletter/newsletter"
import Footer from "../Components/Footer/Footer"


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop