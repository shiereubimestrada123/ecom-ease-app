export function Footer() {
  return (
    <>
      <div className='md:flex justify-evenly gap-2 bg-[#212934] text-[#cfd6e1] py-14 md:px-40 px-2'>
        <div className='flex flex-col gap-4 mb-10'>
          <h2 className='border-b pb-4'>Zay Shop</h2>
          <p>123 Consectetur at ligula 10660</p>
          <p>010-020-0340</p>
          <p>info@company.com</p>
        </div>
        <div className='flex flex-col gap-4 mb-10'>
          <h2 className='border-b pb-4'>Products</h2>
          <p>Luxury</p>
          <p>Sport Wear</p>
          <p>Men's Shoes</p>
          <p>Women's Shoes</p>
          <p>Popular Dress</p>
          <p>Gym Accessories</p>
          <p>Sport Shoes</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='border-b pb-4'>Further Info</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Shop Locations</p>
          <p>FAQs</p>
          <p>Contact</p>
        </div>
      </div>

      <div className='bg-[#1d242d] text-[#cfd6e1]'>
        <p className='text-center py-4'>Copyright © 2023 Company Name</p>
      </div>
    </>
  );
}
