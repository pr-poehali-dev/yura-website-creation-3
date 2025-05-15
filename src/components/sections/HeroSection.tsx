
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-montserrat text-[#1A1F2C] mb-4">
          Создаем <span className="text-[#9b87f5]">инновационные</span> решения для вашего бизнеса
        </h1>
        <p className="text-lg text-gray-600 mb-6 font-open-sans">
          Мы помогаем компаниям достигать целей с помощью современных технологий и креативного подхода.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#9b87f5] hover:bg-[#8b77e5] px-6 py-2 text-base">
            Начать проект
          </Button>
          <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10">
            Узнать больше
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="Бизнес-команда"
          className="rounded-lg shadow-xl max-w-full h-auto animate-fade-in"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
