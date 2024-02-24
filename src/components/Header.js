const Header = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-[#0663f6] p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>EzCredit</span>
      </div>
      <div className='block lg:hidden'></div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'></div>
    </nav>
  );
};
export default Header;
