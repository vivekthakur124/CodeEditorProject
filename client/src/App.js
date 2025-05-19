import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import './App.css';

function App() {
  const [code, setCode] = useState('// Write your Python code here');
  const [output, setOutput] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleRun = async () => {
    try {
      const response = await fetch('http://localhost:5000/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, inputs: userInput.split('\n') })

      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      setOutput('Error connecting to server.');
    }
  };

  return (
    <div className="App">
      <h2 className="title">Code Editor</h2>

      <Editor
        height="400px"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onChange={(value) => setCode(value)}
      />

      {inputVisible && (
        <textarea
          rows="3"
          placeholder="Enter input here (if needed)"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="input-box"
        />
      )}

      <div className="buttons">
        <button onClick={handleRun}>Run Code</button>
        <button onClick={() => setInputVisible(!inputVisible)}>
          {inputVisible ? 'Hide Input' : 'Add Input'}
        </button>
      </div>

      <div className="output">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;
