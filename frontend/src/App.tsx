import NavBar from "components";
import Footer from "components/Footer";
import "assets/css/styles.css";
import DataTable from "components/DataTable";
import BarChart from "components/BarChat";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Volume/Setor</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">
          Resumo por Rotas
          </h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
