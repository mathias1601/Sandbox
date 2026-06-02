import CVEntry from '../components/CVentry';
import '../css/cv.css';
import cvData from '../assets/json/CV.json';

interface Entry {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
}

interface Section {
  id: string;
  title: string;
  entries: Entry[];
}

function CV() {
  return (
    <div className='segment'>
      {cvData.sections.map((section: Section) => (
        <div key={section.id} className="category">
          <h1>{section.title}</h1>
          <div className="cv-box">
            {section.entries.map((entry: Entry, index: number) => (
              <CVEntry
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                period={entry.period}
                description={entry.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CV;