import name from '../assets/name.svg'
import './styles/Home.css'


export default function Home() {

  return (
    <>
      <div className='home__one'>
        Profile Tech
        <button className='button__home'> Explorar </button>
      </div>
      <div className='home__container'>
        <img className='titulo__vector' src={name} alt="" />
        <div className='imagen__container'>
        </div>
        <div className='container__text'>
          <span className='subtitle'> Desarrollador Mobile con Flutter  </span>
        </div>
        <button className='button__home'> Explorar </button>
      </div>
    </>
  )
}

