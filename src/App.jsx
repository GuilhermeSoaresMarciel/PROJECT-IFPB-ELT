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
        <img className="Profile" src={profile} />

        <h1>
          Minha jornada: Eletromecânica
          <br />
          IFPB - Itabaiana.
        </h1>

        <p>
          Estudante do curso técnico em
          <br />
          Eletromecânica pelo IFPB – Campus
          <br />
          Itabaiana, apaixonado por tecnologia
          <br />e por inovações que conectam
          <br />
          eletricidade e mecânica para
          <br />
          transformar ideias em realidade.
        </p>
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
