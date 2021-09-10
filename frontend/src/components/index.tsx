const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
     <div className="container d-flex flex-md-row align-items-center">
     <img src="https://avatars.githubusercontent.com/u/34926656?v=4" className="img-responsive" width="40rem" color="red" alt="logopsiu"/>
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <h2 className="text-primary">PSIU - Farol de vendas</h2>
        </nav>
      </div></div> 
    </div>
  );
};

export default NavBar;
