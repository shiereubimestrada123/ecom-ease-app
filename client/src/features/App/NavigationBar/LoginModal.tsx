import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiFillCloseSquare } from 'react-icons/ai';
import { LoginForm } from '.';
import { Button } from '@components';
import { logoutUser } from '@store';
import { useAppDispatch } from '@hooks';

type LoginModalProps = {
  closeLoginDialog: () => void;
  isLoginDialogOpen: boolean;
  token: string;
};

export function LoginModal({
  closeLoginDialog,
  isLoginDialogOpen,
  token,
}: LoginModalProps) {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    closeLoginDialog();
  };

  return (
    <>
      <Transition appear show={isLoginDialogOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeLoginDialog}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-full p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                  <Dialog.Title
                    as='h3'
                    className='flex items-center justify-between text-lg font-medium leading-6 text-gray-900'
                  >
                    <p>{token ? 'Are you sure you want to logout' : 'Login'}</p>
                    <AiFillCloseSquare
                      className='w-10 h-10 cursor-pointer fill-tiber-900'
                      onClick={closeLoginDialog}
                    />
                  </Dialog.Title>

                  {token ? (
                    <div className='flex justify-around mt-4'>
                      <Button
                        onClick={closeLoginDialog}
                        type='button'
                        text='No'
                        className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      />
                      <Button
                        onClick={handleLogout}
                        type='button'
                        text='Yes'
                        className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      />
                    </div>
                  ) : (
                    <LoginForm closeLoginDialog={closeLoginDialog} />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
