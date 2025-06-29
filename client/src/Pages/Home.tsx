import "../css/home.css"

function Home() {
  const titleMessage = "Hallo!"
  const mainMessage = "Jeg er en bachelor-student på mitt tredje år på UiO, og studerer Programmering og Systemarkitektur (PROSA). Skjekk ut nettsiden min for å bli litt bedre kjent med meg!"

  return (
    <div>
      <div className='intro-container'>
          <h1>{titleMessage}</h1>
        <div className='introText'>
          <p className='introText'>{mainMessage}</p>
        </div>
      </div>
    </div>
  )
}



export default Home