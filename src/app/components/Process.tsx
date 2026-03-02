import { motion } from "motion/react";
import { FileText, Lightbulb, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Консультация и замер",
    description: "Бесплатно выезжаем на объект, оцениваем потенциал.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Разработка концепции",
    description: "Создаем план работ и смету.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Реализация",
    description: "Проводим ремонт под ключ с авторским надзором.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Результат",
    description: "Вы получаете готовую квартиру для продажи или жизни.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800">
            Как мы работаем
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Прозрачный и понятный процесс работы от первой встречи до сдачи объекта
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-[#D4A574]/30" />
              )}

              <div className="relative bg-[#F5F1ED] rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="text-6xl font-bold text-[#D4A574]/20 mb-4">
                  {step.number}
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-[#D4A574] rounded-2xl flex items-center justify-center mb-6"
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}