import './App.css';
import Character from "./components/character";

function App() {
  return (
      <div>
          <Character
            name = {'Rick Sanchez'}
            status = {'alive '}
            species = {'human'}
            gender = {'male'}
            photo = {'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
          />
          <Character
              name = {'Morty Smith'}
              status = {'alive '}
              species = {'human'}
              gender = {'male'}
              photo = {'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
          />
          <Character
              name = {'Alien Googah'}
              status = {'alive '}
              species = {'uknown'}
              gender = {'uknown'}
              photo = {'https://rickandmortyapi.com/api/character/avatar/13.jpeg'}
          />
          <Character
              name = {'Johnny Depp'}
              status = {'alive '}
              species = {'human'}
              gender = {'male'}
              photo = {'https://rickandmortyapi.com/api/character/avatar/183.jpeg'}
          />
          <Character
              name = {'Alien Morty'}
              status = {'alive '}
              species = {'alien'}
              gender = {'male'}
              photo = {'https://rickandmortyapi.com/api/character/avatar/14.jpeg'}
          />
          <Character
              name = {'Annie'}
              status = {'alive '}
              species = {'human'}
              gender = {'female'}
              photo = {'https://rickandmortyapi.com/api/character/avatar/17.jpeg'}
          />




      </div>
  );
}

export default App;