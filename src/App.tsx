import "./App.css";

import { Button } from "@pavel-dmitriev/ui-kit-library";

function App() {
  return (
    <>
      <div className="card">
        <h1>Тест кнопки из библиотеки компонентов</h1>
        <Button label="Я кнопка из библиотеки" textColor="red" />
      </div>
    </>
  );
}

export default App;
