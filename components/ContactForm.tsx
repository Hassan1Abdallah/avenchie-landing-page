'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useSitePreferences } from '@/lib/site-preferences'

export function ContactForm() {
  const { consultationUrl, t } = useSitePreferences()

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('تواصل معنا اليوم')}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('احجز استشارتك المجانية وابدأ رحلة تحول عملك')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card text-card-foreground border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">{t('الهاتف')}</h3>
            <p className="text-foreground/60">201017209315+</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card text-card-foreground border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">{t('البريد الإلكتروني')}</h3>
            <p className="text-foreground/60">hello@Autoagen.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card text-card-foreground border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">{t('العنوان')}</h3>
            <p className="text-foreground/60">{t('القاهرة، مصر')}</p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-card text-card-foreground border border-border rounded-[1.75rem] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">{t('احجز استشارتك عبر واتساب')}</h3>
          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            {t('تواصل عبر واتساب لحجز الاستشارة')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
