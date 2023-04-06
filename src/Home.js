import { useSelector } from 'react-redux';

function HomePage() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user ? (
        <h2>Welcome {user.username}!</h2>
      ) : (
        <h2>Please login to continue.</h2>
      )}
    </div>
  );
}
