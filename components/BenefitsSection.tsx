'use client'

import { motion, type Variants } from 'framer-motion';
import { Cog, Clock, Headphones, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    id: 1,
    icon: Cog,
    title: 'حلول مخصصة',
    description:
      'نصمم كل مشروع بما يتناسب مع طبيعة نشاطك وأهدافك، بعيدًا عن الحلول الجاهزة.',
  },
  {
    id: 2,
    icon: Clock,
    title: 'تنفيذ احترافي',
    description:
      'نلتزم بتقديم مشاريع بجودة عالية وفي الوقت المتفق عليه لضمان أفضل تجربة.',
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: 'تقنيات موثوقة',
    description:
      'نعتمد على أحدث التقنيات لبناء مواقع وأنظمة CRM وحلول Automation قابلة للتوسع.',
  },
  {
    id: 4,
    icon: Headphones,
    title: 'دعم مستمر',
    description:
      'علاقتنا لا تنتهي بعد التسليم، بل نوفر دعمًا ومتابعة لضمان نجاح مشروعك.',
  },
]

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            لماذا تختارنا؟
          </h2>

          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            نساعد الشركات على بناء حلول تقنية حديثة تجمع بين المواقع
            الإلكترونية، أنظمة CRM، وأتمتة العمليات لتحقيق تجربة عمل أكثر
            كفاءة.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon

            return (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.12)',
                }}
                className="bg-white border border-border rounded-[1.75rem] p-6 sm:p-8 text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>

                <p className="text-foreground/60 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            جاهز تحول فكرتك إلى نظام متكامل يدير أعمالك بكفاءة؟
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            احجز استشارة مجانية
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}