import { useSelector } from 'react-redux';

function HomePage(props) {
  const user = useSelector(state => state.user);

  return (
    <div>
      {user ? (
        <div>
        <h2>Welcome {user.username}!</h2>
        <p>You are logged in with token: {user.token}</p>
        </div>
      ) : (
        <h2>Please login to continue.</h2>
      )}
    </div>
  );
}

export default HomePage;