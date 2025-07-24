const Footer = () => {
  return (
    <footer className="py-4 mt-auto" style={{backgroundColor: "#161616"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 text-white-50">&copy; {new Date().getFullYear()} JOKIIN-AJA. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white-50 mx-2">Instagram</a>
            <a href="#" className="text-white-50 mx-2">WhatsApp</a>
            <a href="#" className="text-white-50 mx-2">Tiktok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
