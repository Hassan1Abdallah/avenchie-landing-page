'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, type Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react'
import { useSitePreferences } from '@/lib/site-preferences'


export function HeroSection() {
  const { consultationUrl, t } = useSitePreferences()
  const containerRef = useRef<HTMLDivElement>(null)
  const [displayedText, setDisplayedText] = useState('')
  const fullText = t('حوّل عملك بالذكاء الاصطناعي')


  


  // Typing animation
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [fullText])

  // Floating animation for 3D element
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 400
    canvas.height = 400
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rotation = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate(rotation)

      // Draw rotating cube-like shape with gradient
      const gradient = ctx.createLinearGradient(-100, -100, 100, 100)
      gradient.addColorStop(0, 'rgba(37, 99, 235, 0.6)')
      gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.6)')
      gradient.addColorStop(1, 'rgba(37, 99, 235, 0.6)')

      ctx.fillStyle = gradient
      ctx.fillRect(-80, -80, 160, 160)

      // Draw glow
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.3)'
      ctx.lineWidth = 3
      ctx.strokeRect(-80, -80, 160, 160)

      ctx.restore()
      rotation += 0.01
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-2000"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl w-full grid gap-10 items-center relative z-10 md:max-w-5xl md:grid-cols-2"
      >
        <div className="flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-balance text-foreground">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto md:mx-0 text-balance"
          >
            {t('نبني حلولًا رقمية متكاملة تجمع بين أتمتة الأنظمة، أنظمة CRM، وتطوير المواقع الإلكترونية، لنساعد شركتك على العمل بكفاءة أعلى، وتقديم تجربة أفضل لعملائك، والاستعداد للنمو بثقة.')}
            {/* The complete translated copy is kept in the locale dictionary. */}
            {/* The original line breaks are intentionally replaced by one responsive paragraph. */}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              href={consultationUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
            >
              {t('احجز استشارتك المجانية الآن')}
              <ChevronRight size={20} />
            </motion.a>
            {/* <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-primary text-primary rounded-full font-semibold transition-all duration-300 hover:bg-primary/10"
            >
              اطلب عرض أسعار
            </motion.button> */}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
              <span className="text-sm text-foreground/60">{t('حلول مخصصة لاحتياجك')}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
              <span className="text-sm text-foreground/60">{t('تكامل مع أنظمتك الحالية')}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
              <span className="text-sm text-foreground/60">{t('دعم فني مستمر')}</span>
            </div>

          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="hidden md:flex items-center justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-2xl border border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-xl border border-secondary/20"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                AI
              </div>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
