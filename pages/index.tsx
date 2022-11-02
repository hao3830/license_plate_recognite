import dynamic from 'next/dynamic'

const IndexPage = () => {
  
  const Home = dynamic(
    () =>
      import('../components'),
    {
      ssr: false,
    }
  )

  return <Home/>
}

export default IndexPage
