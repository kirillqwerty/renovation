import { motion } from "motion/react";
import { TrendingUp, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F1ED] to-[#E8E4DF] pt-20 overflow-hidden">
      {/* Background image */}
      <img
        src="./renovation/src/assets/header-photo.png"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        alt=""
      />

      {/* Overlay (optional for better readability) */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-sm"
          >
            <TrendingUp className="w-5 h-5 text-[#D4A574]" />
            <span className="text-sm font-medium text-gray-700">
              Увеличиваем стоимость недвижимости на 15-30%
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl mb-8 text-white eading-tight"
          >
            Поможем Вам заработать на ремонте
            {/* <span className="text-[#D4A574]">недвижимость с умом</span> */}
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Продайте квартиру дороже или создайте идеальное пространство для
            жизни с помощью профессионального ремонта. Мы знаем, как превратить
            квадратные метры в высоколиквидный актив.
          </motion.p> */}

          {/* <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#D4A574] text-white rounded-full hover:bg-[#C39563] transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span>Рассчитать стоимость</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-800 rounded-full hover:bg-gray-50 transition-colors shadow-lg"
            >
              Портфолио проектов
            </motion.button>
          </motion.div> */}

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-4xl font-semibold text-[#D4A574] mb-2">
                200+
              </div>
              <div className="text-sm text-gray-600">Проектов</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-[#D4A574] mb-2">
                10+
              </div>
              <div className="text-sm text-gray-600">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-[#D4A574] mb-2">
                98%
              </div>
              <div className="text-sm text-gray-600">Довольных клиентов</div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
