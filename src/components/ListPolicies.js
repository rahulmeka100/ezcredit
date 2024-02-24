import Image from "next/image";

const ListPolicies = () => {
  return (
    <div className='w-full mt-8 h-screen'>
      <a href='/calculate'>
        <Image
          className='mx-8'
          src={"/images/listPolicies.png"}
          width={1024}
          height={400}
        />
      </a>
    </div>
  );
};
export default ListPolicies;
