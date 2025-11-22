function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="container footer">
      <p>© {currentYear} CreditSmart · IUDigital Solutions</p>
    </footer>
  );
}

export default Footer;
