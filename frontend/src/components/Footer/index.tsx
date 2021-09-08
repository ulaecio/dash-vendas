const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/ulaecio"
            target="_blank"
            rel="noreferrer"
          >
            Ulaecio do Carmo
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Projeto Dash Vendas</strong>
            <br />
            Criado pela Ulasoftware - Tecnologia:{" "}
            <a
              href="https://instagram.com/ulasoftware"
              target="_blank"
              rel="noreferrer"
            >
              @ulasoftware
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
