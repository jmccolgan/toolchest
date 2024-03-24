import NavBar from '../navbar/NavBar'
import Dashboard from '../dashboard/Dashboard'
import Banner from '../banner/Banner'


const Overlay = () => {
  return (
    <>
      <Banner / >
      <div className='overlay'>
        <NavBar />
        <Dashboard />
      </div>
    </>
  )
}

export default Overlay
