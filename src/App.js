import './App.css';
import Character from "./components/Characters";

function App() {
  return (
      <div>
        <Character
            name = {'Bart'}
            info = {'fksdfldsjfsdfk l jlj llsaj ljdl jsld bskbfdk '}
            photo = {'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
        />
        <Character
            name = {'Homer'}
            info = {'fksdfldsjfsdfk l jlj llsaj ljdl jsld bskbfdk '}
            photo = {'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
        />
        <Character
            name = {'Marge'}
            info = {'fksdfldsjfsdfk l jlj llsaj ljdl jsld bskbfdk '}
            photo = {'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
        />
        <Character
            name = {'Liza'}
            info = {'fksdfldsjfsdfk l jlj llsaj ljdl jsld bskbfdk '}
            photo = {'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
        />
        <Character
            name = {'Maggie'}
            info = {'fksdfldsjfsdfk l jlj llsaj ljdl jsld bskbfdk '}
            photo = {'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
        />

      </div>
  );
}

export default App;