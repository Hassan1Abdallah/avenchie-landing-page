'use client'

import { motion, type Variants } from 'framer-motion';
import { useSitePreferences } from '@/lib/site-preferences'

const steps = [
  {
    number: 1,
    title: 'اكتشاف الاحتياجات',
    description: 'نحلل عملياتك الحالية ونحدد فرص التحسين والأتمتة.',
  },
  {
    number: 2,
    title: 'تصميم الحل',
    description: 'نصمم حلاً مخصصاً يناسب احتياجاتك وأهدافك التجارية.',
  },
  {
    number: 3,
    title: 'التنفيذ والإطلاق',
    description: 'نطبق الحل بكفاءة مع ضمان سلاسة الانتقال.',
  },
  {
    number: 4,
    title: 'الدعم والتحسين',
    description: 'نقدم دعماً مستمراً وتحسينات لضمان أقصى عائد استثمار.',
  },
]

export function HowItWorksSection() {
  const { t } = useSitePreferences()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('كيف نعمل')}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('عملية واضحة وموثقة لضمان نجاح مشروعك')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative overflow-hidden rounded-[2rem] border border-border bg-card/90 text-card-foreground p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-md md:p-8"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full h-20 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary to-secondary/30"></div>
              )}

              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{t(step.title)}</h3>
                  <p className="mt-3 text-foreground/65 leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
