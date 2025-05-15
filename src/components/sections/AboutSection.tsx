
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#1A1F2C] mb-4">О нас</h2>
          <Separator className="mx-auto w-20 bg-[#9b87f5] h-1" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-open-sans">
            Мы команда профессионалов, объединенных общей целью — создавать качественные цифровые продукты для наших клиентов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <AboutCard 
            icon="Target" 
            title="Наша миссия" 
            description="Помогать бизнесу развиваться с помощью современных технологий и инновационных решений."
          />
          
          <AboutCard 
            icon="EyeIcon" 
            title="Наше видение" 
            description="Стать лидером в создании цифровых продуктов, которые меняют жизнь людей к лучшему."
          />
          
          <AboutCard 
            icon="Heart" 
            title="Наши ценности" 
            description="Качество, инновации, честность и ориентация на результат — вот что движет нашей командой."
          />
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: string;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-[#9b87f5]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon name={icon} className="text-[#9b87f5] h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 font-montserrat">{title}</h3>
      <p className="text-gray-600 font-open-sans">{description}</p>
    </div>
  );
};

export default AboutSection;
