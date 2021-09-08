import NavBar from "components";
import Footer from "components/Footer";
import 'assets/css/styles.css';
import DataTable from "components/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
