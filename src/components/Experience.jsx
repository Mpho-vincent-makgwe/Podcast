

const Experience = ({ title, startDate, endDate, responsibilities }) => {
  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <h3>{title}</h3>
      <p>{startDate} - {endDate}</p>
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
