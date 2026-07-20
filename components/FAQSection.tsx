'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'ما هي الخدمات التي تقدمونها؟',
    answer:
      'نقدم حلولاً متكاملة تشمل أتمتة الأنظمة، تطوير المواقع الإلكترونية، بناء وتخصيص أنظمة CRM، بالإضافة إلى تكامل الأنظمة المختلفة داخل شركتك.',
  },
  {
    id: 2,
    question: 'كم يستغرق تنفيذ المشروع؟',
    answer:
      'تعتمد المدة على حجم المشروع ومتطلباته، وبعد فهم احتياجاتك نحدد جدولاً زمنياً واضحاً قبل بدء التنفيذ.',
  },
  {
    id: 3,
    question: 'هل يمكن تخصيص الحلول حسب طبيعة نشاطي؟',
    answer:
      'بالتأكيد، جميع حلولنا تُصمم بما يتناسب مع طبيعة نشاطك وأهدافك، سواء كنت تدير شركة، أو أي نشاط آخر.',
  },
  {
    id: 4,
    question: 'هل يمكن ربط الموقع مع نظام CRM أو أدوات أخرى؟',
    answer:
      'نعم، نستطيع ربط موقعك مع أنظمة CRM وأدوات إدارة الأعمال، لتوفير سير عمل أكثر كفاءة.',
  },
  {
    id: 5,
    question: 'هل تقدمون دعماً بعد تسليم المشروع؟',
    answer:
      'نعم، نوفر دعماً فنياً ومتابعة بعد التسليم لضمان استقرار النظام والإجابة عن أي استفسارات أو احتياجات مستقبلية.',
  },
  {
    id: 6,
    question: 'كيف أبدأ العمل معكم؟',
    answer:
      'ابدأ بحجز استشارة مجانية، وسنتعرف على احتياجات مشروعك ثم نقدم لك الحل المناسب مع خطة تنفيذ واضحة وعرض سعر.',
  },
]


export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto px-2 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة التي يطرحها عملاؤنا
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-border rounded-[1.5rem] overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors duration-300 group"
              >
                <h3 className="text-lg font-semibold text-foreground text-right group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown
                    size={24}
                    className={`text-primary transition-colors duration-300 ${
                      expandedId === faq.id ? 'text-primary' : 'text-foreground/40'
                    }`}
                  />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedId === faq.id ? 'auto' : 0,
                  opacity: expandedId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 py-4 text-foreground/70 leading-relaxed border-t border-border bg-muted/30">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/60 mb-6">
            هل لديك سؤال آخر؟
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/201017209315?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%0A%D9%85%D8%A7%20%D8%A7%D9%84%D8%A3%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AD%D8%A9%20%D9%84%D9%83%D9%85"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300 inline-block"
          >
            تواصل معنا
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
