import "./App.css";
import profile from "./assets/profile.gif";

function App() {
  return (
    <>
      <header>
        <h2>Instituto Federal da Paraíba</h2>

        <h1>Portfólio de Eletromecânica</h1>

        <h3>Campos - Itabaiana</h3>
      </header>

      <main>
        <div id="Inicio">
          <img className="Profile" src={profile} />

          <h1>
            Minha jornada: Eletromecânica
            <br />
            IFPB - Itabaiana.
          </h1>

          <p>
            Estudante do curso técnico em Eletromecânica pelo IFPB – Campus
            Itabaiana, apaixonado por tecnologia e por inovações que conectam
            eletricidade e mecânica para transformar ideias em realidade.
          </p>
        </div>
      </main>

      <footer>
        <h6>
          Developed by: <u>Guilherme Soares Marciel</u>
        </h6>
      </footer>
    </>
  );
}

export default App;
