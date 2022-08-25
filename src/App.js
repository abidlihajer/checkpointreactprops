
import './App.css';
import Profile from './Profile/Component/Profile';

function App() {
  const handleName = (user)=>{
     alert(user);
  }
  
  return (
    <div className="App">
      <Profile fullName="Abidli Hajer" bio="Développeur full stack certifié GOMYCODE,
      Mordu d’informatique, j’ai appris à coder dès mon plus jeune âge dans divers langages informatiques
       (Javascript, ReactS…) et ai créé des projets personnels."  handleName={handleName} profession="web developper">
        <img class= "avatar" src='./imghajer.jpg' alt=''/>
      </Profile>
    </div>
  );
}

export default App;
