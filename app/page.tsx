import Footer from "./ui/footer";
import Navbar from "./ui/navbar";

export default function Page() {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Navbar />
      <Footer />
    </div>
  );
}
