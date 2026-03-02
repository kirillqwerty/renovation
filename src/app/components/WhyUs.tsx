import { motion } from "motion/react";
import { Sparkles, Clock, FileText, CheckCircle } from "lucide-react";
// import interiorImage from "";

const features = [
  {
    icon: Sparkles,
    title: "Аттестованный риэлтор с 15 летним стажем",
    description:
      "Профессионально сопровождаем сделки с недвижимостью и помогаем выгодно купить или продать объект.",
  },
  {
    icon: Clock,
    title: "Соблюдение сроков",
    description: "Четкое планирование и своевременная сдача объекта.",
  },
  {
    icon: FileText,
    title: "Прозрачная смета",
    description: "Никаких скрытых платежей и неожиданных расходов.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800">
            Почему выбирают нас?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Превращаем типовое жилье в эталон стиля
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4A574] to-[#C39563] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#D4A574]" />
                <h4 className="font-medium text-gray-800">Наше обещание</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Каждый проект — это уникальное решение, созданное с учетом ваших
                целей. Мы гарантируем результат, который превзойдет ваши
                ожидания.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="src/assets/header-photo.png"
                alt="Мы превращаем типовое жилье в эталон стиля"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-800">
                    Мы превращаем типовое жилье в эталон стиля
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", duration: 1 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4A574] rounded-full opacity-20 blur-2xl"
            />
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring", duration: 1 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8B7355] rounded-full opacity-20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
