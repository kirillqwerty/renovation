import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "investment",
    message: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Здесь будет обработка отправки формы
  //   alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
  // };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-800">
              Начните свой
              <br />
              <span className="text-[#D4A574]">проект сегодня</span>
            </h2>
            {/* <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Оставьте заявку, и мы свяжемся с вами в течение 30 минут для
              бесплатной консультации и расчета стоимости.
            </p> */}

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Телефон</h3>
                <a
                  href="tel:+79991234567"
                  className="text-lg text-[#D4A574] hover:underline"
                >
                  +375 (44) 123-45-67
                </a>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Email</h3>
                <a
                  href="mailto:info@renovation.ru"
                  className="text-lg text-[#D4A574] hover:underline"
                >
                  info@renovation.ru
                </a>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Адрес</h3>
                <p className="text-gray-600">г. Минск, ул. Октябрьская, д. 10</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Режим работы</h3>
                <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F5F1ED] rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl mb-6 text-gray-800">
              Заказать консультацию
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm text-gray-700 mb-2">
                  Тип услуги *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all"
                >
                  <option value="investment">Инвестиционный ремонт</option>
                  <option value="personal">Ремонт для жизни</option>
                  <option value="consultation">Консультация</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A574] transition-all resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-[#D4A574] text-white rounded-lg hover:bg-[#C39563] transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Отправить заявку</span>
                <Send className="w-5 h-5" />
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
