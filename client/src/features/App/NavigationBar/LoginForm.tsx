import { useState } from 'react';
import { Button } from '@components';
import { useAppDispatch } from '@hooks';
import { loginUser } from '@store';

type LoginFormProps = {
  closeLoginDialog: () => void;
};

export function LoginForm({ closeLoginDialog }: LoginFormProps) {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleForm = (event: React.FormEvent<HTMLInputElement>) =>
    setForm({
      ...form,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginUser(form));

    setForm({
      username: '',
      password: '',
    });

    closeLoginDialog();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2'
      autoComplete='off'
      noValidate
    >
      <div>
        <label htmlFor=''>Username</label>
        <input
          type='text'
          value={form.username}
          name='username'
          autoCorrect='off'
          autoCapitalize='off'
          className='block w-full py-3 text-gray-900 border-0 rounded shadow-sm select-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tiber-900 sm:text-sm sm:leading-6'
          required
          onChange={(event) => handleForm(event)}
        />
      </div>
      <div>
        <label htmlFor=''>Password</label>
        <input
          type='text'
          value={form.password}
          name='password'
          autoCorrect='off'
          autoCapitalize='off'
          className='block w-full py-3 text-gray-900 border-0 rounded shadow-sm select-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tiber-900 sm:text-sm sm:leading-6'
          required
          onChange={(event) => handleForm(event)}
        />

        <div className='flex justify-around mt-4'>
          <Button
            type='submit'
            text='Send'
            className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          />
        </div>
      </div>
    </form>
  );
}
