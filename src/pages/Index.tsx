
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Навигация */}
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

      {/* Главная секция */}
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

      {/* О нас */}
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
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#9b87f5]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Icon name="Target" className="text-[#9b87f5] h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Наша миссия</h3>
              <p className="text-gray-600 font-open-sans">Помогать бизнесу развиваться с помощью современных технологий и инновационных решений.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#9b87f5]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Icon name="EyeIcon" className="text-[#9b87f5] h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Наше видение</h3>
              <p className="text-gray-600 font-open-sans">Стать лидером в создании цифровых продуктов, которые меняют жизнь людей к лучшему.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#9b87f5]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Icon name="Heart" className="text-[#9b87f5] h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Наши ценности</h3>
              <p className="text-gray-600 font-open-sans">Качество, инновации, честность и ориентация на результат — вот что движет нашей командой.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
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
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Code" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  Веб-разработка
                </CardTitle>
                <CardDescription>Создание современных веб-сайтов и приложений</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Разрабатываем сайты любой сложности: от лендингов до крупных порталов с использованием современных технологий.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="text-[#9b87f5] hover:bg-[#9b87f5]/10 border-[#9b87f5]">
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Smartphone" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  Мобильные приложения
                </CardTitle>
                <CardDescription>Разработка под iOS и Android</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Создаем нативные и кроссплатформенные приложения для решения бизнес-задач и взаимодействия с клиентами.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="text-[#9b87f5] hover:bg-[#9b87f5]/10 border-[#9b87f5]">
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="LineChart" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  Цифровой маркетинг
                </CardTitle>
                <CardDescription>Комплексное продвижение в интернете</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Разрабатываем стратегии продвижения, запускаем рекламные кампании и анализируем результаты.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="text-[#9b87f5] hover:bg-[#9b87f5]/10 border-[#9b87f5]">
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#1A1F2C] mb-4">Свяжитесь с нами</h2>
            <Separator className="mx-auto w-20 bg-[#9b87f5] h-1" />
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-open-sans">
              Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами в ближайшее время.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                    placeholder="Введите ваш email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                  placeholder="Введите тему сообщения"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>
              <div>
                <Button className="bg-[#9b87f5] hover:bg-[#8b77e5] w-full py-2 text-base">
                  Отправить сообщение
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Компания</h3>
              <p className="text-gray-300 mb-4 font-open-sans">
                Создаем инновационные решения для вашего бизнеса с 2023 года.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Twitter" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Linkedin" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Услуги</h3>
              <ul className="space-y-2 font-open-sans">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Мобильные приложения</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Цифровой маркетинг</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UI/UX дизайн</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Компания</h3>
              <ul className="space-y-2 font-open-sans">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">Контакты</h3>
              <ul className="space-y-2 font-open-sans">
                <li className="flex items-start">
                  <Icon name="MapPin" className="h-5 w-5 mr-2 mt-0.5 text-[#9b87f5]" />
                  <span className="text-gray-300">Москва, ул. Примерная, д. 123</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <span className="text-gray-300">+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                  <span className="text-gray-300">info@company.ru</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 font-open-sans">
            <p>&copy; {new Date().getFullYear()} Компания. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
