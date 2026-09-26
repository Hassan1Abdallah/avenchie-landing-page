'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

type Language = 'ar' | 'en'
type Theme = 'light' | 'dark'

const englishTranslations: Record<string, string> = {
  'الخدمات': 'Services',
  'كيف نعمل': 'How It Works',
  'تجربة تفاعلية': 'Interactive Demo',
  'الأسئلة الشائعة': 'FAQ',
  'احجز استشارتك': 'Book a consultation',
  'حوّل عملك بالذكاء الاصطناعي': 'Transform your business with AI',
  'نبني حلولًا رقمية متكاملة تجمع بين أتمتة الأنظمة، أنظمة CRM، وتطوير المواقع الإلكترونية، لنساعد شركتك على العمل بكفاءة أعلى، وتقديم تجربة أفضل لعملائك، والاستعداد للنمو بثقة.': 'We build integrated digital solutions across workflow automation, CRM systems, and website development, helping your company work more efficiently, deliver better customer experiences, and grow with confidence.',
  'احجز استشارتك المجانية الآن': 'Book your free consultation',
  'حلول مخصصة لاحتياجك': 'Solutions tailored to your needs',
  'تكامل مع أنظمتك الحالية': 'Integrates with your existing systems',
  'دعم فني مستمر': 'Ongoing technical support',
  'خدماتنا': 'Our Services',
  'نقدم حلولاً تقنية متكاملة تساعد الشركات على أتمتة أعمالها، إدارة عملائها، وبناء حضور رقمي احترافي.': 'We provide integrated technology solutions that help companies automate operations, manage customers, and build a professional digital presence.',
  'أتمتة الأنظمة': 'Workflow Automation',
  'نبني أنظمة أتمتة ذكية تقلل المهام اليدوية، وتربط العمليات ببعض، وتزيد كفاءة فريقك وإنتاجيته.': 'We build intelligent automation that reduces manual work, connects processes, and improves your team’s efficiency and productivity.',
  'أنظمة CRM': 'CRM Systems',
  'نصمم ونخصص أنظمة CRM لإدارة العملاء، متابعة المبيعات، وتنظيم جميع مراحل رحلة العميل في مكان واحد.': 'We design and customize CRM systems to manage customers, track sales, and organize every stage of the customer journey in one place.',
  'تطوير المواقع الإلكترونية': 'Website Development',
  'نبني مواقع إلكترونية احترافية، سريعة، ومتجاوبة تعكس هوية نشاطك وتساعدك على تحويل الزوار إلى عملاء.': 'We build professional, fast, responsive websites that reflect your brand and turn visitors into customers.',
  'تكامل الأنظمة': 'System Integration',
  'نوصل موقعك، الـ CRM، وأدوات العمل المختلفة في نظام واحد يعمل بسلاسة ويضمن تدفق البيانات تلقائياً.': 'We connect your website, CRM, and business tools in one seamless system that keeps data flowing automatically.',
  'لماذا تختارنا؟': 'Why Choose Us?',
  'نساعد الشركات على بناء حلول تقنية حديثة تجمع بين المواقع الإلكترونية، أنظمة CRM، وأتمتة العمليات لتحقيق تجربة عمل أكثر كفاءة.': 'We help companies build modern technology solutions combining websites, CRM systems, and process automation for more efficient operations.',
  'حلول مخصصة': 'Tailored Solutions',
  'نصمم كل مشروع بما يتناسب مع طبيعة نشاطك وأهدافك، بعيدًا عن الحلول الجاهزة.': 'Every project is designed around your business and goals, not a one-size-fits-all template.',
  'تنفيذ احترافي': 'Professional Delivery',
  'نلتزم بتقديم مشاريع بجودة عالية وفي الوقت المتفق عليه لضمان أفضل تجربة.': 'We deliver high-quality projects on schedule for a dependable experience.',
  'تقنيات موثوقة': 'Reliable Technology',
  'نعتمد على أحدث التقنيات لبناء مواقع وأنظمة CRM وحلول Automation قابلة للتوسع.': 'We use modern technologies to build scalable websites, CRM systems, and automation solutions.',
  'دعم مستمر': 'Ongoing Support',
  'علاقتنا لا تنتهي بعد التسليم، بل نوفر دعمًا ومتابعة لضمان نجاح مشروعك.': 'Our partnership continues after delivery with support and follow-up to help your project succeed.',
  'جاهز تحول فكرتك إلى نظام متكامل يدير أعمالك بكفاءة؟': 'Ready to turn your idea into an integrated system that runs your business efficiently?',
  'احجز استشارة مجانية': 'Book a free consultation',
  'اكتشاف الاحتياجات': 'Discover Your Needs',
  'نحلل عملياتك الحالية ونحدد فرص التحسين والأتمتة.': 'We analyze your current operations and identify opportunities for improvement and automation.',
  'تصميم الحل': 'Design the Solution',
  'نصمم حلاً مخصصاً يناسب احتياجاتك وأهدافك التجارية.': 'We design a tailored solution for your needs and business goals.',
  'التنفيذ والإطلاق': 'Implementation and Launch',
  'نطبق الحل بكفاءة مع ضمان سلاسة الانتقال.': 'We implement the solution efficiently and ensure a smooth transition.',
  'الدعم والتحسين': 'Support and Optimization',
  'نقدم دعماً مستمراً وتحسينات لضمان أقصى عائد استثمار.': 'We provide ongoing support and improvements to maximize your return on investment.',
  'عملية واضحة وموثقة لضمان نجاح مشروعك': 'A clear, documented process to help your project succeed',
  'ما هي الخدمات التي تقدمونها؟': 'What services do you offer?',
  'نقدم حلولاً متكاملة تشمل أتمتة الأنظمة، تطوير المواقع الإلكترونية، بناء وتخصيص أنظمة CRM، بالإضافة إلى تكامل الأنظمة المختلفة داخل شركتك.': 'We provide integrated solutions including workflow automation, website development, CRM setup and customization, and integration of your company’s systems.',
  'كم يستغرق تنفيذ المشروع؟': 'How long does a project take?',
  'تعتمد المدة على حجم المشروع ومتطلباته، وبعد فهم احتياجاتك نحدد جدولاً زمنياً واضحاً قبل بدء التنفيذ.': 'Timing depends on the project’s scope and requirements. Once we understand your needs, we set a clear schedule before work begins.',
  'هل يمكن تخصيص الحلول حسب طبيعة نشاطي؟': 'Can solutions be tailored to my business?',
  'بالتأكيد، جميع حلولنا تُصمم بما يتناسب مع طبيعة نشاطك وأهدافك، سواء كنت تدير شركة، أو أي نشاط آخر.': 'Absolutely. Every solution is tailored to your business and goals, whether you run a company or another type of organization.',
  'هل يمكن ربط الموقع مع نظام CRM أو أدوات أخرى؟': 'Can you connect my website to a CRM or other tools?',
  'نعم، نستطيع ربط موقعك مع أنظمة CRM وأدوات إدارة الأعمال، لتوفير سير عمل أكثر كفاءة.': 'Yes. We can connect your website to CRM systems and business tools to create a more efficient workflow.',
  'هل تقدمون دعماً بعد تسليم المشروع؟': 'Do you provide support after delivery?',
  'نعم، نوفر دعماً فنياً ومتابعة بعد التسليم لضمان استقرار النظام والإجابة عن أي استفسارات أو احتياجات مستقبلية.': 'Yes. We provide technical support and follow-up after delivery to keep the system running smoothly and help with future questions or needs.',
  'كيف أبدأ العمل معكم؟': 'How do I get started?',
  'ابدأ بحجز استشارة مجانية، وسنتعرف على احتياجات مشروعك ثم نقدم لك الحل المناسب مع خطة تنفيذ واضحة وعرض سعر.': 'Book a free consultation. We’ll learn about your needs and recommend a suitable solution with a clear delivery plan and quote.',
  'إجابات على أكثر الأسئلة التي يطرحها عملاؤنا': 'Answers to questions our clients often ask',
  'هل لديك سؤال آخر؟': 'Have another question?',
  'تواصل معنا': 'Contact Us',
  'تواصل معنا اليوم': 'Get in Touch',
  'احجز استشارتك المجانية وابدأ رحلة تحول عملك': 'Book your free consultation and start transforming your business',
  'الهاتف': 'Phone',
  'البريد الإلكتروني': 'Email',
  'العنوان': 'Address',
  'القاهرة، مصر': 'Cairo, Egypt',
  'احجز استشارتك عبر واتساب': 'Book your consultation on WhatsApp',
  'تواصل عبر واتساب لحجز الاستشارة': 'Contact us on WhatsApp to book',
  'وكالة متخصصة في حلول أتمتة الذكاء الاصطناعي لتحويل عملك وزيادة كفاءتك.': 'An AI automation agency helping transform your business and improve efficiency.',
  'روابط سريعة': 'Quick Links',
  'جميع الحقوق محفوظة.': 'All rights reserved.',
  'ليست مجرد محادثة... بل نظام يعمل نيابة عنك': 'More than a conversation... a system that works for you',
  'هذا العرض التفاعلي يمثل جزءاً من حلولنا المتكاملة التي تشمل أتمتة العمليات، إدارة العملاء (CRM)، وتطوير المواقع.': 'This interactive demo is part of our integrated solutions for process automation, customer management (CRM), and website development.',
  'متصل': 'Online',
  'أنت': 'You',
  'إرسال الطلب': 'Send Request',
  'تم إرسال الطلب بنجاح': 'Request sent successfully',
  'سيتواصل معك فريقنا قريباً.': 'Our team will contact you shortly.',
  'الطلب رقم': 'Order',
  'Website Development': 'Website Development',
  'CRM System': 'CRM System',
  'Automation': 'Automation',
  'مرحبًا 👋\nأهلًا بك في Autoagen.\nكيف يمكنني مساعدتك اليوم؟': 'Hello 👋\nWelcome to Autoagen.\nHow can I help you today?',
  'أحتاج موقع إلكتروني لشركة عقارات.': 'I need a website for a real estate company.',
  'ممتاز.\nهل لديك هوية بصرية أو لوجو حالي؟': 'Great.\nDo you already have a visual identity or logo?',
  'نعم': 'Yes',
  'هل الموقع سيكون باللغة العربية فقط أم عربي وإنجليزي؟': 'Should the website be in Arabic only, or in both Arabic and English?',
  'اللغتين': 'Both languages',
  'من فضلك اكتب اسمك ورقم هاتفك\nوسيتواصل معك أحد المختصين.': 'Please enter your name and phone number.\nA specialist will contact you.',
  'مرحبًا 👋\nكيف يمكنني مساعدتك؟': 'Hello 👋\nHow can I help you?',
  'أحتاج نظام CRM لإدارة فريق المبيعات.': 'I need a CRM system to manage my sales team.',
  'كم عدد موظفي المبيعات لديك؟': 'How many sales representatives do you have?',
  '15 موظف.': '15 employees.',
  'هل لديكم نظام حالي أم سيتم إنشاء نظام جديد؟': 'Do you have an existing system, or should we build a new one?',
  'سيتم إنشاء نظام جديد.': 'We need a new system.',
  'من فضلك اترك بيانات التواصل الخاصة بك.': 'Please leave your contact details.',
  'مرحبًا 👋\nكيف يمكنني مساعدتك اليوم؟': 'Hello 👋\nHow can I help you today?',
  'Ahmed Mohamed': 'Ahmed Mohamed',
  'تجربة المساعد التفاعلي': 'Interactive Assistant Demo',
}

const arabicTranslations: Record<string, string> = {
  'Website Development': 'تطوير المواقع الإلكترونية',
  'CRM System': 'أنظمة CRM',
  'Automation': 'أتمتة الأنظمة',
  'Hello 👋\nWelcome to Autoagen.\nHow can I help you today?': 'مرحبًا 👋\nأهلًا بك في Autoagen.\nكيف يمكنني مساعدتك اليوم؟',
  'I need a website for a real estate company.': 'أحتاج موقع إلكتروني لشركة عقارات.',
  'Great.\nDo you already have a visual identity or logo?': 'ممتاز.\nهل لديك هوية بصرية أو لوجو حالي؟',
  'Yes': 'نعم',
  'Should the website be in Arabic only, or in both Arabic and English?': 'هل الموقع سيكون باللغة العربية فقط أم عربي وإنجليزي؟',
  'Both languages': 'اللغتين',
  'Please enter your name and phone number.\nA specialist will contact you.': 'من فضلك اكتب اسمك ورقم هاتفك\nوسيتواصل معك أحد المختصين.',
  'Hello 👋\nHow can I help you?': 'مرحبًا 👋\nكيف يمكنني مساعدتك؟',
  'I need a CRM system to manage my sales team.': 'أحتاج نظام CRM لإدارة فريق المبيعات.',
  'How many sales representatives do you have?': 'كم عدد موظفي المبيعات لديك؟',
  '15 employees.': '15 موظف.',
  'Do you have an existing system, or should we build a new one?': 'هل لديكم نظام حالي أم سيتم إنشاء نظام جديد؟',
  'We need a new system.': 'سيتم إنشاء نظام جديد.',
  'Please leave your contact details.': 'من فضلك اترك بيانات التواصل الخاصة بك.',
  'Hello 👋\nHow can I help you today?': 'مرحبًا 👋\nكيف يمكنني مساعدتك اليوم؟',
  'I want to automate customer support.': 'أرغب في أتمتة خدمة العملاء.',
  'Great!\nDo you currently use WhatsApp Business?': 'ممتاز!\nهل تستخدم واتساب للأعمال حاليًا؟',
  'Would you like AI to answer customer questions automatically?': 'هل ترغب أن يجيب الذكاء الاصطناعي عن أسئلة العملاء تلقائيًا؟',
  'Please enter your name and phone number.': 'من فضلك اكتب اسمك ورقم هاتفك.',
  'Online': 'متصل',
  'You': 'أنت',
  'Send Request': 'إرسال الطلب',
  'Request Sent Successfully': 'تم إرسال الطلب بنجاح',
  'Our team will contact you shortly.': 'سيتواصل معك فريقنا قريباً.',
  'Order': 'الطلب رقم',
}

interface SitePreferences {
  language: Language
  theme: Theme
  consultationUrl: string
  toggleLanguage: () => void
  toggleTheme: () => void
  t: (arabicText: string) => string
}

const PreferencesContext = createContext<SitePreferences | null>(null)

export function SitePreferencesProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')
  const [theme, setTheme] = useState<Theme>('light')
  const translate = useCallback((text: string) => {
    if (language === 'en') return englishTranslations[text] ?? text
    return arabicTranslations[text] ?? text
  }, [language])

  useEffect(() => {
    const savedLanguage = localStorage.getItem('site-language')
    const savedTheme = localStorage.getItem('site-theme')
    if (savedLanguage === 'ar' || savedLanguage === 'en') setLanguage(savedLanguage)
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.lang = language
    root.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.title = language === 'ar'
      ? 'حوّل عملك بالذكاء الاصطناعي | وكالة أتمتة الذكاء الاصطناعي'
      : 'Transform Your Business with AI | AI Automation Agency'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      language === 'ar'
        ? 'نصمم وننفذ حلول أتمتة متكاملة بالذكاء الاصطناعي لزيادة كفاءة عملك ومبيعاتك.'
        : 'We design and deliver integrated AI automation solutions to improve business efficiency and sales.',
    )
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    localStorage.setItem('site-language', language)
    localStorage.setItem('site-theme', theme)
  }, [language, theme])

  const value: SitePreferences = {
    language,
    theme,
    consultationUrl: `https://wa.me/201017209315?text=${encodeURIComponent(language === 'ar'
      ? 'مرحباً، أرغب في حجز استشارة. ما الأوقات المتاحة لكم؟'
      : 'Hello, I would like to book a consultation. What times are available?')}`,
    toggleLanguage: () => setLanguage((current) => current === 'ar' ? 'en' : 'ar'),
    toggleTheme: () => setTheme((current) => current === 'light' ? 'dark' : 'light'),
    t: translate,
  }

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function useSitePreferences() {
  const preferences = useContext(PreferencesContext)
  if (!preferences) throw new Error('useSitePreferences must be used within SitePreferencesProvider')
  return preferences
}