'use client'

import { motion, type Variants } from 'framer-motion';
import { Cog, Database, Globe, Link2 } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'أتمتة الأنظمة',
    description:
      'نبني أنظمة أتمتة ذكية تقلل المهام اليدوية، وتربط العمليات ببعض، وتزيد كفاءة فريقك وإنتاجيته.',
    icon: Cog,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'أنظمة CRM',
    description:
      'نصمم ونخصص أنظمة CRM لإدارة العملاء، متابعة المبيعات، وتنظيم جميع مراحل رحلة العميل في مكان واحد.',
    icon: Database,
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    id: 3,
    title: 'تطوير المواقع الإلكترونية',
    description:
      'نبني مواقع إلكترونية احترافية، سريعة، ومتجاوبة تعكس هوية نشاطك وتساعدك على تحويل الزوار إلى عملاء.',
    icon: Globe,
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 4,
    title: 'تكامل الأنظمة',
    description:
      'نوصل موقعك، الـ CRM، وأدوات العمل المختلفة في نظام واحد يعمل بسلاسة ويضمن تدفق البيانات تلقائياً.',
    icon: Link2,
    gradient: 'from-pink-500 to-pink-600',
  },
]

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            خدماتنا
          </h2>

          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            نقدم حلولاً تقنية متكاملة تساعد الشركات على أتمتة أعمالها، إدارة
            عملائها، وبناء حضور رقمي احترافي.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const IconComponent = service.icon

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                }}
                className="group bg-white border border-border rounded-[1.75rem] p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}