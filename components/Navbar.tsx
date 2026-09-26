'use client'

import { useState } from 'react'
import { Languages, Menu, Moon, Sun, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useSitePreferences } from '@/lib/site-preferences'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, theme, consultationUrl, toggleLanguage, toggleTheme, t } = useSitePreferences()
  const languageLabel = language === 'ar' ? 'English' : 'العربية'
  const languageAction = language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'
  const themeAction = language === 'ar'
    ? theme === 'light' ? 'تفعيل الوضع الداكن' : 'تفعيل الوضع الفاتح'
    : theme === 'light' ? 'Enable dark mode' : 'Enable light mode'

  const navLinks = [
    { label: t('الخدمات'), href: '#services' },
    { label: t('كيف نعمل'), href: '#how-it-works' },
    { label: t('تجربة تفاعلية'), href: '#DemoChatSection' },
    { label: t('الأسئلة الشائعة'), href: '#faq' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center gap-3 min-w-fit">
            <div className="w-15 h-15 flex items-center justify-center">
              <Image
                src="/logoAutoagen.png"
                alt="Autoagen Logo"
                width={50}
                height={50}
                className="w-15 h-15 object-contain"
                priority
              />
            </div>

            <span className="font-bold text-xl text-foreground hidden sm:inline">
              Autoagen
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={languageAction}
                title={languageAction}
                className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                <Languages size={18} />
                <span>{languageLabel}</span>
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={themeAction}
                title={themeAction}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
              </button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={consultationUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              {t('احجز استشارتك')}
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground/70 hover:bg-muted hover:text-primary transition-colors duration-300 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={consultationUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full mt-4 inline-flex px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold hover:shadow-lg transition-shadow duration-300 justify-center"
            >
              {t('احجز استشارتك')}
            </a>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button type="button" onClick={toggleLanguage} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted">
                <Languages size={18} /> {languageLabel}
              </button>
              <button type="button" onClick={toggleTheme} aria-label={themeAction} title={themeAction} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted">
                {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
