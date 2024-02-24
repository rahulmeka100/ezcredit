import Image from "next/image";

const PolicyCard = (data) => {
  console.log(data);
  return (
    <div className='w-full lg:max-w-full lg:flex lg:items-center mb-[10px] p-1 border border-black'>
      <div className='' title='Woman holding a mug'>
        <Image src={data.imageFile} width={100} height={100} alt='' />
      </div>
      <div className='bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-wrap justify-between leading-normal'>
        <p className='text-sm text-gray-600 flex items-center px-24'>
          {data.title}
        </p>
        <div className='text-gray-900 font-bold items-center text-xl mb-2 px-24'>
          {data.description}
        </div>
        <div className='flex items-center px-24 py-10'>
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};
export default PolicyCard;
