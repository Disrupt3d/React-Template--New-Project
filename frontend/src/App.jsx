import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Voici Un Template de base pour démarrer un nouveau Projet React</h1>
      <p>AXIOS et React-Router-Dom sont déjà installés</p>

      <p>
        {" "}
        Il intègre une structure complète et comprend les Dev dépendencies
        suivantes:
        <ul>
          <li>Husky</li>
          <li>EslInt ( avec une config sur modèle Air BnB)</li>
          <li>Prettier </li>
          <li> Vite.js</li>
        </ul>
        Attention, si le pluggin Eslint, est activé sur votre CLI il faut le
        désactiver pour ne pas avoir de conflits avec la dependence installée.
      </p>
      <p>Plus de details ,dans les fichiers README</p>
    </div>
  );
}

export default App;
