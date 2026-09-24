import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaFolderOpen, FaPython, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import '../css/cv.css';

const ICONS: Record<string, IconType> = {
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
  github: FaGithub,
  projects: FaFolderOpen,
  python: FaPython,
  java: FaJava,
  javascript: IoLogoJavascript,
};

export interface SideItem {
  icon?: string;
  label: string;
  value: string;
  href?: string;
}

interface Props {
  title: string;
  items: SideItem[];
}

function ItemValue({ value, href }: SideItem) {
  if (!href) return <span>{value}</span>;
  if (href.startsWith('/')) return <Link to={href}>{value}</Link>;
  const external = href.startsWith('http');
  return (
    <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
      {value}
    </a>
  );
}

function CVSideBox({ title, items }: Props) {
  // Skip items without a value so unfilled fields in CV.json don't render as empty rows
  const visibleItems = items.filter((item) => item.value);
  if (visibleItems.length === 0) return null;

  return (
    <section className="side-category">
      {/* .h1 gives the heading the same line box as the main section headings, so the boxes line up */}
      <h2 className="h1 side-heading"><span>{title}</span></h2>
      <ul className="cv-box side-box">
        {visibleItems.map((item) => {
          const Icon = item.icon ? ICONS[item.icon] : undefined;
          return (
            <li key={item.label} className="side-item">
              {Icon && <Icon className="side-icon" aria-hidden />}
              <div>
                <p className="small-italic">{item.label}</p>
                <ItemValue {...item} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CVSideBox;
