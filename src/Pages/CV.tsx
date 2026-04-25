import '../css/cv.css';

function CV() {

  return (
    <div>
      <div className='segment'>

      <div className='category'>
        <h1>Utdanning</h1>
        <div className='cv-box'>
          <div className='part'>
            <p className = 'title'>
              Master i informatikk: Programmering og systemarkitektur
              </p>
            <p className='small-italic'>Universitet i Oslo / Institutt for informatikk</p>
            <p className='small-italic'>Aug. 2025 - Jun. 2027</p>
          </div>


          <div className='part'>
            <p className = 'title'>
              Bachelor i informatikk: Programmering og systemarkitektur
              </p>
            <p className='small-italic'>Universitet i Oslo / Institutt for informatikk</p>
            <p className='small-italic'>Aug. 2022 - Jun. 2025</p>
          </div>

          <div className='part'>
          <p className = 'title'>
              Studiespesialiserende VGS
              </p>
            <p className='small-italic'>Oslo katedralskole</p>
            <p className='small-italic'>2019 - 2022</p>
          </div>
        </div>
      </div>

      <div className='category'>
        <h1>Arbeidserfaring</h1>
        <div className='cv-box'>
          <div className='part'>
            <p className = 'title'>
              IN1150 gruppelærer
            </p>
            <p className='small-italic'>Vår 2026 - Nå</p>
            <p className='info'>
              Arbeider som gruppelærer i emnet IN1150, logiske metoder. Her så så hadde jeg ansvar for å planlegge og gjennomføre ukentlige undervisningstimer, samt å rette obligatoriske innleveringer.
              Studenter kunne også kontakte meg for hjelp og spørsmål, og jeg var tilgjengelig for å hjelpe dem med eventuelle problemer de måtte ha både under og utenfor gruppetimene.
            </p>
          </div>


          <div className='part'>
            <p className = 'title'>
              IN1000 retter/gruppelærer
            </p>
            <p className='small-italic'>Høst 2023 - Vår 2024</p>
            <p className='info'>
              Arbeidet som retter i emnet IN1000. 
              Ansvar besto hovedsakelig av retting av obligatoriske innleveringer. 
              Var også orakel/hjelpelærer hvor studenter kan be om hjelp og stille spørsmål
            </p>
          </div>
          
          
          <div className='part'>
            <p className = 'title'>
              Mentor for MentorNorge
            </p>
            <p className='small-italic'>Feb. 2025 - nå</p>
            <p className='info'>
              Arbeider som privatlærer. 
              Arbeidsområder kan variere fra planlegging av undervisningstimer til generell leksehjelp.
              Hovedessensen er å ha fleksible undervisninger som er tilpasset hver elev og deres behov. 
            </p>
          </div>

          </div>
      </div>

      </div>

      <div className='category'>

      <h1>Diverse</h1>
        <div className='cv-box'>
          <div className='part'>
            <p className = 'title'>
                Verv i CYB (Cybernetisk-selskap): Teknisk ansvarlig
            </p>
            <p className='small-italic'>Februar 2025 - nå</p>
            <p className='info'>
            Ansvarsområder består hovedsaklig av vedlikehold og innkjøp av diverse utstyr. 
            Andre medlemmer vil rapportere eventuelle tekniske problemer, der jeg enten kontakter korresponderende service, eller fikser problemet
            på egen hånd.
            </p>

          </div>

          <div className='part'>
            <p className = 'title'>
                LA-seminar: Sertifisering
            </p>
            <p className='small-italic'>Mars 2026 - April 2026</p>
            <p className='info'>
              Læringsassistent (LA)-seminaret er et 7-ukers vitenskapelig basert treningsprogram.
              Seminaret er designet for å utruste gruppelærere med effektive undervisningsteknikker, med særlig fokus på aktiv læring og gruppeledelse.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CV