import './App.css';
import React from 'react';

function App() {
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    fetch('https://randomuser.me/api').then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error();
      }
    }).then(data => {
      setUser(data)
    }
    )
  }, [])

  React.useEffect(() => {
    if (user) {
        performance.mark('RenderCompleteNaive');
    }
  }, [user]);

  return (
    <div>
      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>
    </div>
  );
}

export default App;
