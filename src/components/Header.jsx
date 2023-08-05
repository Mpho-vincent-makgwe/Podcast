

const Header = ({ name, title }) => {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p>{title}</p>
    </header>
  );
};

export default Header;
