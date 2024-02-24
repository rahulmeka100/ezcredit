import Image from "next/image";

const Kyc = () => {
  return (
    <div className='flex flex-col justify-center mt-2'>
      <div className='w-[90%] border border-red  mx-auto mt-3'>
        <Image
          src={"/images/kyc.png"}
          width={1024}
          height={300}
          alt='calculator'
        />
      </div>
      <div className='w-[90%] border border-red  mx-auto mt-3'>
        <Image
          src={"/images/payment.png"}
          width={1024}
          height={300}
          alt='calcular'
        />
      </div>
      <div className='text-center mt-10 mx-auto mb-10'>
        <p className='mb-10'>
          <a
            href='/success'
            className='w-[200px] mt-10 mb-10 bg-[#0663f6] rounded shadow-ms shadow-inner p-4 text-white'>
            Proceed
          </a>
        </p>
      </div>
    </div>
  );
};
export default Kyc;
