import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Success from "@/components/Success";
const page = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};
export default page;
