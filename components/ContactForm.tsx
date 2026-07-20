'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactForm() {

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
            تواصل معنا اليوم
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            احجز استشارتك المجانية وابدأ رحلة تحول عملك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">الهاتف</h3>
            <p className="text-foreground/60">201017209315+</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">البريد الإلكتروني</h3>
            <p className="text-foreground/60">hello@avenchie.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-border rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">العنوان</h3>
            <p className="text-foreground/60">القاهرة، مصر</p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-border rounded-[1.75rem] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">احجز استشارتك عبر واتساب</h3>
          <a
            href="https://wa.me/201017209315?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%0A%D9%85%D8%A7%20%D8%A7%D9%84%D8%A3%D9%88%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AD%D8%A9%20%D9%84%D9%83%D9%85"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            تواصل عبر واتساب لحجز الاستشارة
          </a>
        </motion.div>
      </div>
    </section>
  )
}
