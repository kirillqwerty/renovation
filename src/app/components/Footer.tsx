import { motion } from "motion/react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <Logo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-xl font-semibold leading-tight">
                  Недвижимость
                </span>
                <span className="text-xs text-[#D4A574] font-medium">
                  Риэлторские услуги & Ремонт
                </span>
              </div>
            </motion.a>
            <p className="text-gray-400 leading-relaxed mb-4">
              Профессиональный ремонт квартир под продажу и для жизни
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D4A574] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#D4A574] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Услуги</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#D4A574] transition-colors">
                  Инвестиционный ремонт
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A574] transition-colors">
                  Ремонт для жизни
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A574] transition-colors">
                  Консультация
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Компания</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-[#D4A574] transition-colors">
                  О нас
                </a>
              </li>
              {/* <li>
                <a
                  href="#portfolio"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Портфолио
                </a>
              </li> */}
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Контакты</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+79991234567"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  +375 (44) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@renovation.ru"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  info@renovation.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span>г. Минск, ул. Октябрьская, д. 10</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2026 Renovation. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D4A574] transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-[#D4A574] transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
