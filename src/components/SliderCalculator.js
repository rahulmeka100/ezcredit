import Image from "next/image";

const SliderCalculator = () => {
  return (
    <div className='flex flex-col mt-2 h-screen'>
      <div className='calculator w-[90%] border border-red  mx-auto mt-3'>
        <Image
          src={"/images/sliderCalculator.png"}
          width={1024}
          height={300}
          alt='calcular'
        />
      </div>
      <div className='calculator w-[90%] border border-red  mx-auto mt-3'>
        <Image
          src={"/images/selected.png"}
          width={1024}
          height={300}
          alt='calcular'
        />
      </div>
      <div className='text-center mt-10 mx-auto'>
        <p>
          <a
            href='/kyc'
            className='w-[200px] mt-10 mb-10 bg-[#0663f6] rounded shadow-ms shadow-inner p-4 text-white'>
            Disburse Loan
          </a>
        </p>
      </div>
    </div>
  );
};
export default SliderCalculator;
