const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-4 text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Recipe Pilot. All rights reserved.</p>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
