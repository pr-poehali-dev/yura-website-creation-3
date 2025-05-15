
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
