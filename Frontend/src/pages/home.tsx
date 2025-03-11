import Hero from './hero'
import ProductsOfTheMonth from './productsOfTheMonth'
import NewLaunches from './newLaunches'
import HealthySnacking from './healthySnacking'
import Feature from './feature'

function Home() {
    return (
        <>
            <Hero />
            <ProductsOfTheMonth />
            <NewLaunches />
            <HealthySnacking />
            <Feature />
        </>
    )
}

export default Home