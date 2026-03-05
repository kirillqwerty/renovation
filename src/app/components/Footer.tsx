import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  BadgeCheck,
} from "lucide-react";
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
                  Ремонт недвижимости
                </span>
                <span className="text-xs text-[#D4A574] font-medium">
                  сопровождение сделки профессиональным риэлтером
                </span>
              </div>
            </motion.a>
            <p className="text-gray-400 leading-relaxed mb-4">
              Профессиональный ремонт квартир под продажу и для жизни
            </p>
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
                  href="tel:+375291521380"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  +375(29)152-13-80
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:stroymminsk@gmail.com"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  stroymminsk@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span>г. Минск, ул. Ванеева 26</span>
              </li>
              <li className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span>ИП Маджуга Михаил Владимирович</span>
              </li>
              <li className="flex items-start gap-3">
                <BadgeCheck className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span>УНП - 191099353</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2026 Ремонт недвижимости. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
