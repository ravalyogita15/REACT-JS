import React, { useState } from 'react';

const styles = 
{

  container: 
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor:'black',
    color:'white',
    height:'550px',
    width:'150%',
    
    
    
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  buttonDisabled: {
    backgroundColor: '#6c757d',
    cursor: 'not-allowed',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginBottom: '20px',
    transition: 'background-color 0.3s',
  }
};

function Counter() {
  const [count, setCount] = useState(0);

  function checkPrime() {
    if (count <= 1) return "false";
    for (let i = 2; i < count; i++) {
      if (count % i === 0) {
        return "false";
      }
    }
    return "true";
  }

  return (
    <div style={styles.container}>
      <h2>Welcome to Counter 2.0</h2>
      <div style={styles.buttonContainer}>
        <button
          style={count === 0 ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
          disabled={count === 0}
          onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button
          style={styles.button}
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
      </div>
      <button style={styles.resetButton} onClick={() => setCount(0)}>
        Reset Count
      </button>
      <h2>Count: {count}</h2>
      <h3>This Number is: {count % 2 === 0 ? "Even" : "Odd"}</h3>
      <h3>Prime Number is: {checkPrime()}</h3>
    </div>
  );
}

export default Counter;