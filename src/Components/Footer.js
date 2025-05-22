const Footer = () => {
  const today = new Date()

  return (
    <footer className="bg-dark text-white text-center py-2 mt-auto">
      <p>React Blog &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer