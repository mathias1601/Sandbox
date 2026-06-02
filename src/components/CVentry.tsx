import '../css/cv.css';

interface Props {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
}

function CVEntry({ title, subtitle, period, description }: Props) {
  return (
    <div className="part">
      <p className="title">{title}</p>
      {subtitle && <p className="small-italic">{subtitle}</p>}
      {period && <p className="small-italic">{period}</p>}
      {description && <p className="info">{description}</p>}
    </div>
  );
}

export default CVEntry;