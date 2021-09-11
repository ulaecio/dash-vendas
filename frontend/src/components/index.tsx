const NavBar = () => {
  return (
    // <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
    //  <div className="container d-flex flex-md-row align-items-center">
    //  <img src="https://github.com/ulaecio/dash-vendas/blob/main/frontend/src/assets/img/logo64px.png?raw=true" className="img-responsive" width="45rem" alt="logopsiu"/>
    //  <div className="container d-flex flex-md-row align-items-center">
    //     <nav className="">
    //       <h2 className="text-primary m-0 " width="45rem" >PSIU - Farol de vendas</h2>
    //     </nav>
    //   </div>
    //   </div> 
    // </div>

  <div className ="d-flex flex-column flex-md-row align-items-center p-0 mb-3 bg-light border-bottom shadow-sm">
<nav className="container" >
  <a  href="#" className="navbar-brand text-primary m-0 ">
  <img src="https://github.com/ulaecio/dash-vendas/blob/main/frontend/src/assets/img/logo64px.png?raw=true" width="45rem" height="45rem" className="img-responsive d-inline-block align-items-center m-2" alt=""/>
  Farol de vendas
</a>

</nav>
  </div>
    
  );
};

export default NavBar;
