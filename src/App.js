import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Discount from "./components/Discount/Discount";

function App() {
  const navbarLinks = [
    { title: "FAQ", url: "#" },
    { title: "Оплата и доставка", url: "#" },
    { title: "Возврат", url: "#" },
    { title: "Исследования", url: "#" },
    { title: "Личный кабинет", url: "#" },
    { title: "8 8(800) 600 09 90", url: "#" },
  ];
  return (
    <>
      <Navbar navbarLinks={navbarLinks} />
      <Hero />
      <Discount />
    </>
  );
}

export default App;
