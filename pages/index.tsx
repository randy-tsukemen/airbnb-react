import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'

export default function Home( { exploreData, cardsData } ) {
  console.log(exploreData)
  console.log(cardsData)
  return (
    <div className="">
      <Head>
        <title>Airbnb react</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map(({img, location, distance}) => (
            <SmallCard key={img} img={img} distance={distance}
            location={location} />
          ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide 
          p-3 -ml-3'>
            {cardsData?.map(({img, title}) => 
              <MediumCard key={img} img={img} title={title}  />)}
          </div>
        </section>

        <LargeCard 
        img="https://pbs.twimg.com/media/FIuwMM4agAAC5aW?format=jpg&name=4096x4096"
        title="ちまっとほろっくす"
        description="いろはにも絵を"
        buttonText="ロボロフス"/>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  )
  return {
    props: {
      // Anything returned here will be available
      // to the page via `props.whateverYouWantToName`
      exploreData,
      cardsData
    },
  }
}