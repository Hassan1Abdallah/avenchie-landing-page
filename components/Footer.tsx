'use client'

import { motion, type Variants } from 'framer-motion';
import { Mail, Globe, Heart, Eye } from 'lucide-react'
import { useSitePreferences } from '@/lib/site-preferences'

export function Footer() {
  const { t } = useSitePreferences()
  const currentYear = new Date().getFullYear()

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
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-lg">
                AI
              </div>
              <h3 className="font-bold text-lg">Avenchie</h3>
            </div>
            <p className="text-white/60 leading-relaxed">
              {t('وكالة متخصصة في حلول أتمتة الذكاء الاصطناعي لتحويل عملك وزيادة كفاءتك.')}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-6 text-lg">{t('روابط سريعة')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/60 hover:text-primary transition-colors duration-300">
                  {t('الخدمات')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/60 hover:text-primary transition-colors duration-300">
                  {t('كيف نعمل')}
                </a>
              </li>
              <li>
                <a href="#DemoChatSection" className="text-white/60 hover:text-primary transition-colors duration-300">
                 {t('تجربة تفاعلية')}
                </a>
              </li>
              
            </ul>
          </motion.div>

          {/* Services */}
          {/* <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-6 text-lg">خدماتنا</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300">
                  أتمتة خدمة العملاء
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300">
                  توليد العملاء
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300">
                  أتمتة العمليات
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300">
                  تكامل الأنظمة
                </a>
              </li>
            </ul>
          </motion.div> */}

          {/* Contact  */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-6 text-lg">{t('تواصل معنا')}</h4>
            <div className="space-y-3 mb-6">
              <p className="text-white/60">
                <span className="block text-sm font-semibold mb-1">{t('البريد الإلكتروني')}</span>
                hello@Autoagen.tech
              </p>
              <p className="text-white/60">
                <span className="block text-sm font-semibold mb-1">{t('الهاتف')}</span>
                201017209315+
              </p>
            </div>

            {/* Social Links */}
            {/* <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              >
                <Globe size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              >
                <Eye size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              >
                <Heart size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@aiautomation.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
              >
                <Mail size={18} />
              </motion.a>
            </div> */}
          </motion.div>
        </motion.div>

        {/* <div className="border-t border-white/10 pt-8">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm"
          >
            <p>
              &copy; {currentYear} Avenchie. {t('جميع الحقوق محفوظة.')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                شروط الخدمة
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                سياسة ملفات تعريف الارتباط
              </a>
            </div>
          </motion.div>
        </div> */}

        <div className="border-t border-white/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center text-center text-white/60 text-sm"
          >
            <p>
              &copy; {currentYear} Avenchie. جميع الحقوق محفوظة.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
