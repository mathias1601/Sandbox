import numberMemory_banner from '../assets/numberMemory_banner.jpg'
import trivia_banner from '../assets/trivia_banner.jpg'
import { useNavigate } from 'react-router-dom'
import '../css/games.css'

function Games() {

  const allGames = ["Number memory", "Trivia"]

  const navigate = useNavigate()

  const gameImages: Record<string, string> = {
    'Number memory': numberMemory_banner,
    'Trivia': trivia_banner
  }

  const gameNavigation: Record<string, () => void> = {
    'Number memory': () => navigate('/NumberMemory'), 
    'Trivia': () => navigate('/Trivia') 
  }

  const list = allGames.map((item: any) => (
    <div onClick={gameNavigation[item]} className='games_display_banner' key={item}>
        <img className='games_banner' src={gameImages[item]} alt={item} />
    </div>
  ))

  return (
    <div>
      <h1>Various short and sweet games</h1>
      {list}
    </div>
  )
}

export default Games