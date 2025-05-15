
import Icon from "@/components/ui/icon";

interface FooterLinkColumnProps {
  title: string;
  links: { text: string; href: string }[];
}

const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 font-montserrat">{title}</h3>
      <ul className="space-y-2 font-open-sans">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ContactItemProps {
  icon: string;
  text: string;
  isMultiline?: boolean;
}

const ContactItem = ({ icon, text, isMultiline = false }: ContactItemProps) => (
  <li className={`flex ${isMultiline ? 'items-start' : 'items-center'}`}>
    <Icon name={icon} className={`h-5 w-5 mr-2 ${isMultiline ? 'mt-0.5' : ''} text-[#9b87f5]`} />
    <span className="text-gray-300">{text}</span>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
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
          
          <FooterLinkColumn 
            title="Услуги"
            links={[
              { text: "Веб-разработка", href: "#" },
              { text: "Мобильные приложения", href: "#" },
              { text: "Цифровой маркетинг", href: "#" },
              { text: "UI/UX дизайн", href: "#" }
            ]}
          />
          
          <FooterLinkColumn 
            title="Компания"
            links={[
              { text: "О нас", href: "#" },
              { text: "Команда", href: "#" },
              { text: "Карьера", href: "#" },
              { text: "Блог", href: "#" }
            ]}
          />
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Контакты</h3>
            <ul className="space-y-2 font-open-sans">
              <ContactItem 
                icon="MapPin" 
                text="Москва, ул. Примерная, д. 123" 
                isMultiline={true}
              />
              <ContactItem 
                icon="Phone" 
                text="+7 (999) 123-45-67" 
              />
              <ContactItem 
                icon="Mail" 
                text="info@company.ru" 
              />
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 font-open-sans">
          <p>&copy; {currentYear} Компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
