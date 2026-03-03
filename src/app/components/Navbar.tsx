import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-gray-800 leading-tight">
                Ремонт недвижимости
              </span>
              <span className="text-xs text-[#D4A574] font-medium">
                сопровождение сделки профессиональным риэлтером
              </span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-[#D4A574] transition-colors"
            >
              Услуги
            </a>
            <a
              href="#process"
              className="text-gray-600 hover:text-[#D4A574] transition-colors"
            >
              Процесс
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-[#D4A574] transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-[#D4A574] transition-colors"
            >
              Контакты
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-600 hover:text-[#D4A574] transition-colors"
              >
                Услуги
              </a>
              <a
                href="#process"
                className="text-gray-600 hover:text-[#D4A574] transition-colors"
              >
                Процесс
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-[#D4A574] transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-[#D4A574] transition-colors"
              >
                Контакты
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
