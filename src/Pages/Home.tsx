import "../css/home.css"
import SandcastleCustomizer from "../components/sandcastle/SandcastleCustomizer"

function Home() {
  const titleMessage = "Hallo!"
  const mainMessage = "Jeg er en master-student på mitt fjerde år på UiO, og studerer Programmering og Systemarkitektur (PROSA). Skjekk ut nettsiden min for å bli litt bedre kjent med meg!"

  return (
    <div>
      <div className='intro-container'>
          <h1>{titleMessage}</h1>
        <div className='introText'>
          <p>{mainMessage}</p>
          <p>Jeg navnga nettsiden min "Sandbox" fordi den skulle operere lignende en vanlig sandkasse i virkeligheten. Et lite sted hvor jeg kan vise frem diverse prosjekter, mens jeg sakte men sikkert lærer meg å lage sandslottene (prosjektene) litt penere for hver gang</p>
        </div>
      </div>
      <SandcastleCustomizer />
    </div>
  )
}



export default Home
