import CVEntry from '../components/CVentry';
import CVSideBox, { SideItem } from '../components/CVSideBox';
import '../css/cv.css';
import cvData from '../assets/json/CV.json';

interface Entry {
  title: string;
  org?: string;
  period?: string;
  description?: string;
}

interface Section {
  id: string;
  title: string;
  entries: Entry[];
}

interface SideSection {
  id: string;
  title: string;
  items: SideItem[];
}

function CV() {
  return (
    <div className="cv-layout">
      <div className='segment'>
        {cvData.sections.map((section: Section) => (
          <div key={section.id} className="category">
            <h1>{section.title}</h1>
            <div className="cv-box">
              {section.entries.map((entry: Entry, index: number) => (
                <CVEntry
                  key={index}
                  title={entry.title}
                  organization={entry.org}
                  period={entry.period}
                  description={entry.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <aside className="cv-aside">
        {cvData.sidebar.map((box: SideSection) => (
          <CVSideBox key={box.id} title={box.title} items={box.items} />
        ))}
      </aside>
    </div>
  );
}

export default CV;
