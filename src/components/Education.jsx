
const Education = ({ degree, university, graduationDate }) => {
  return (
    <section className="education">
      <h2>Education</h2>
      <p>{degree} - {university}</p>
      <p>Graduated: {graduationDate}</p>
    </section>
  );
};

export default Education;
