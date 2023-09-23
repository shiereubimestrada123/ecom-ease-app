export function EmailUs() {
  return (
    <div className='px-10 py-20 md:px-80'>
      <form className='flex flex-col gap-2'>
        <div className='items-center justify-center gap-4 md:flex'>
          <div className='flex flex-col flex-1 gap-1'>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Name' className='border' />
          </div>
          <div className='flex flex-col flex-1 gap-1'>
            <label htmlFor=''>Email</label>
            <input type='text' placeholder='Email' className='border' />
          </div>
        </div>

        <div className='flex flex-col justify-center flex-2'>
          <label htmlFor=''>Subject</label>
          <input type='text' placeholder='Subject' className='border' />
        </div>

        <div className='flex flex-col justify-center flex-2'>
          <label htmlFor=''>Message</label>
          <textarea rows={10} placeholder='Message' className='border' />
        </div>
      </form>
    </div>
  );
}
