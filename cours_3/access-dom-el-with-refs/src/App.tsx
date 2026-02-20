import './App.css'
import { useRef } from 'react';

function App() {
  const filePickerRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    filePickerRef.current?.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={filePickerRef} data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;