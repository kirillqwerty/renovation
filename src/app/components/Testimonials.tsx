import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Инвестиционный ремонт",
    text: "Невероятный результат! Квартиру продали на 25% дороже рыночной цены. Ремонт окупился полностью, и мы остались в большом плюсе. Спасибо команде!",
    rating: 5,
  },
  {
    name: "Дмитрий Соколов",
    role: "Ремонт квартиры",
    text: "Делали ремонт для себя. Качество работы на высоте, все материалы согласовывали, сроки соблюдены. Теперь живем в квартире мечты!",
    rating: 5,
  },
  {
    name: "Екатерина Волкова",
    role: "Инвестиционный ремонт",
    text: "Отличная работа и профессиональный подход. Ремонт был выполнен качественно и в срок, благодаря чему квартиру удалось продать значительно выгоднее.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Нам доверяют сотни довольных клиентов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#D4A574] text-[#D4A574]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <div className="font-medium text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
