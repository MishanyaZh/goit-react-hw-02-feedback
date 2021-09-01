import css from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={css.section}>
    <p className={css.titleSection}>{title}</p>
    {children}
  </div>
);

export default Section;
