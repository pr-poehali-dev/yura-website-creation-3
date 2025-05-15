
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

const ServiceCard = ({ icon, title, subtitle, description }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon name={icon} className="h-5 w-5 mr-2 text-[#9b87f5]" />
          {title}
        </CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 font-open-sans">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="text-[#9b87f5] hover:bg-[#9b87f5]/10 border-[#9b87f5]">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#1A1F2C] mb-4">Наши услуги</h2>
          <Separator className="mx-auto w-20 bg-[#9b87f5] h-1" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-open-sans">
            Мы предлагаем полный спектр услуг для реализации ваших проектов от идеи до внедрения.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            icon="Code"
            title="Веб-разработка"
            subtitle="Создание современных веб-сайтов и приложений"
            description="Разрабатываем сайты любой сложности: от лендингов до крупных порталов с использованием современных технологий."
          />
          
          <ServiceCard 
            icon="Smartphone"
            title="Мобильные приложения"
            subtitle="Разработка под iOS и Android"
            description="Создаем нативные и кроссплатформенные приложения для решения бизнес-задач и взаимодействия с клиентами."
          />
          
          <ServiceCard 
            icon="LineChart"
            title="Цифровой маркетинг"
            subtitle="Комплексное продвижение в интернете"
            description="Разрабатываем стратегии продвижения, запускаем рекламные кампании и анализируем результаты."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
