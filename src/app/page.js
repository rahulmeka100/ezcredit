import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <div className='relative flex flex-row items-center max-w-screen-xl px-4 mx-auto'>
        <div className='flex'>
          <div className='text-left px-10'>
            <h2 className='text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl'>
              EzCredit
            </h2>
            <p className='max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl'>
              One Stop Solution to loan against the policy
            </p>
            <div className='sm:flex'>
              <div className='rounded-md shadow'>
                <a
                  href='/loan/'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10'>
                  Getting started
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-lg text-black'>
          <Image src={"/images/paytm.png"} width={350} height={200} />
        </div>
      </div>
    </main>
  );
}
