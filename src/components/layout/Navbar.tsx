
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="font-bold text-xl text-primary hover:text-primary/90 transition-colors">
          <span className="text-[#9b87f5]">Компания</span>
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-600 hover:text-[#9b87f5] transition-colors">О нас</a>
          <a href="#services" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Услуги</a>
          <a href="#contact" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Контакты</a>
          <Button className="bg-[#9b87f5] hover:bg-[#8b77e5]">
            Связаться
          </Button>
        </div>
        <button className="md:hidden">
          <Icon name="Menu" className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
