import { useSelector } from 'react-redux';
import './App.css';


function HomePage() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome {user.username}!</h2>
          <a href='/Invoice'>
            <button type="submit">Continue</button>
          </a>
        </div>
      ) : (
        <div>
          <h2>Please login to continue.</h2>
          <a href='/Login' >
            <button type="submit">Back to login</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default HomePage;