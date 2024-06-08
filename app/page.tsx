import Categories from "./ui/categories";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";

export default function Page() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Categories />
      <Footer />
    </div>
  );
}
