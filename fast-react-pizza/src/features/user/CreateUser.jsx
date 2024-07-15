import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));

    navigate('menu');
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      {/* <p className="mb-3 mt-4 text-sm text-white md:text-base">
        Please start by telling us your name:
      </p> */}

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72 border bg-transparent text-center tracking-widest text-white"
      />

      {username && (
        <div>
          <Button type="primary" to="/menu">
            See the menu →
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
