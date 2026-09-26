'use client'

import { motion, type Variants } from 'framer-motion';
import { Cog, Database, Globe, Link2 } from 'lucide-react'
import { useSitePreferences } from '@/lib/site-preferences'

const services = [
  {
    id: 1,
    title: 'أتمتة الأنظمة',
    description:
      'نبني أنظمة أتمتة ذكية تقلل المهام اليدوية، وتربط العمليات ببعض، وتزيد كفاءة فريقك وإنتاجيته.',
    icon: Cog,
    gradient: 'from-brand-orange to-brand-tangerine',
  },
  {
    id: 2,
    title: 'أنظمة CRM',
    description:
      'نصمم ونخصص أنظمة CRM لإدارة العملاء، متابعة المبيعات، وتنظيم جميع مراحل رحلة العميل في مكان واحد.',
    icon: Database,
    gradient: 'from-brand-tangerine to-brand-rust',
  },
  {
    id: 3,
    title: 'تطوير المواقع الإلكترونية',
    description:
      'نبني مواقع إلكترونية احترافية، سريعة، ومتجاوبة تعكس هوية نشاطك وتساعدك على تحويل الزوار إلى عملاء.',
    icon: Globe,
    gradient: 'from-brand-rust to-brand-brown',
  },
  {
    id: 4,
    title: 'تكامل الأنظمة',
    description:
      'نوصل موقعك، الـ CRM، وأدوات العمل المختلفة في نظام واحد يعمل بسلاسة ويضمن تدفق البيانات تلقائياً.',
    icon: Link2,
    gradient: 'from-brand-gray to-brand-charcoal',
  },
]

export function ServicesSection() {
  const { t } = useSitePreferences()
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
            {t('خدماتنا')}
          </h2>

          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('نقدم حلولاً تقنية متكاملة تساعد الشركات على أتمتة أعمالها، إدارة عملائها، وبناء حضور رقمي احترافي.')}
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
                  boxShadow: '0 20px 40px rgba(255, 75, 27, 0.15)',
                }}
                className="group bg-card text-card-foreground border border-border rounded-[1.75rem] p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {t(service.title)}
                </h3>

                <p className="text-foreground/60 leading-relaxed">
                  {t(service.description)}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}