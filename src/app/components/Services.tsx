import { motion } from "motion/react";
import {
  TrendingUp,
  Home,
  BarChart3,
  DollarSign,
  Eye,
  CheckCircle2,
  Package,
  Award,
  ShieldCheck,
  Clock,
  Handshake,
} from "lucide-react";
import { getImageURL } from "../../utils/image-url";

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Профессиональный подход к каждому проекту — от концепции до
            реализации
          </p>
        </motion.div>

        {/* Service 1: Инвестиционный ремонт */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#F5F1ED] px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-[#D4A574]" />
                <span className="text-sm font-medium text-gray-700">
                  Увеличение стоимости на 15-30%
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl mb-6 text-gray-800">
                Инвестиционный ремонт
                <br />
                <span className="text-[#D4A574]">(Ремонт под продажу)</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Мы делаем ремонт, который окупается. Наша цель — максимизировать
                рыночную стоимость вашей квартиры и обеспечить быструю сделку.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F1ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Анализ рынка
                    </h4>
                    <p className="text-gray-600">
                      Подбираем стиль и решения, востребованные у покупателей.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F1ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Экономика проекта
                    </h4>
                    <p className="text-gray-600">
                      Минимизируем затраты без потери качества, чтобы увеличить
                      вашу прибыль.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F1ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Хоумстейджинг
                    </h4>
                    <p className="text-gray-600">
                      Готовим квартиру так, чтобы в нее влюбились с первого
                      взгляда.
                    </p>
                  </div>
                </div>
              </div>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#D4A574] text-white rounded-full hover:bg-[#C39563] transition-colors shadow-lg"
              >
                Узнать стоимость
              </motion.button> */}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={getImageURL("before-after.png")}
                  alt="Пример качественного преображения пространства"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-gray-800">
                    До / После
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Service 2: Ремонт для жизни */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={getImageURL("invest-ren.png")}
                  alt="Гармония и стиль в каждой детали"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5F1ED] px-4 py-2 rounded-full mb-6">
                <Home className="w-5 h-5 text-[#8B7355]" />
                <span className="text-sm font-medium text-gray-700">
                  Создаем дом вашей мечты
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl mb-6 text-gray-800">
                Качественный ремонт
                <br />
                <span className="text-[#8B7355]">для жизни</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Создаем уютный и современный интерьер для вашего комфорта.
                Ремонт, который будет радовать вас долгие годы.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F1ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#8B7355]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Индивидуальный подход
                    </h4>
                    <p className="text-gray-600">
                      Учитываем все ваши пожелания и образ жизни.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F1ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-[#8B7355]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Проверенные материалы
                    </h4>
                    <p className="text-gray-600">
                      Используем только надежные и экологичные решения.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F1ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#8B7355]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Гарантия качества
                    </h4>
                    <p className="text-gray-600">
                      Строгий контроль на каждом этапе работ.
                    </p>
                  </div>
                </div>
              </div>
              {/* 
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#8B7355] text-white rounded-full hover:bg-[#7A6348] transition-colors shadow-lg"
              >
                Заказать консультацию
              </motion.button> */}
            </div>
          </div>
        </motion.div>

        {/* Service 3: Сопровождения сделки купли-продажи Вашего объекта профессиональным риэлтером(стаж 15 лет). */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#F5F1ED] px-4 py-2 rounded-full mb-6">
                <Handshake className="w-5 h-5 text-[#D4A574]" />
                <span className="text-sm font-medium text-gray-700">
                  Полное сопровождение сделки купли-продажи
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl mb-6 text-gray-800">
                Сопровождения сделки купли-продажи Вашего объекта <br />
                <span className="text-[#D4A574]">
                  профессиональным риэлтером(стаж 15 лет)
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Мы делаем ремонт, который окупается. Наша цель — максимизировать
                рыночную стоимость вашей квартиры и обеспечить быструю сделку.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F1ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Продажа по максимальной рыночной цене
                    </h4>
                    <p className="text-gray-600">
                      Помогаем реализовать объект по максимально выгодной
                      стоимости на рынке.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F1ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Юридическая безопасность и конфиденциальность
                    </h4>
                    <p className="text-gray-600">
                      Полное сопровождение сделки с соблюдением всех юридических
                      норм и защитой ваших данных.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5F1ED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Комфортные сроки продажи
                    </h4>
                    <p className="text-gray-600">
                      Организуем процесс так, чтобы продажа прошла максимально
                      быстро и удобно для вас.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={getImageURL("handshake.png")}
                  alt="Пример качественного преображения пространства"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
