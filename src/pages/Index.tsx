import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import heroImage from '@/assets/hero-china.jpg';
import studentsImage from '@/assets/students-study.jpg';
import cityImage from '@/assets/china-city.jpg';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Services Preview */}
      <ServicesPreview />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative container-custom mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-up">
            {t.hero.title}{' '}
            <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-up animation-delay-200">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Link to="/contact" className="btn-primary text-center">
              {t.hero.cta}
            </Link>
            <Link to="/services" className="btn-outline text-center">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 3740, suffix: '+', label: t.stats.students },
    { value: 100, suffix: '%', label: t.stats.success },
    { value: 80, suffix: '+', label: t.stats.universities },
    { value: 8, suffix: '+', label: t.stats.years },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-primary">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
                {isVisible ? <Counter end={stat.value} /> : 0}{stat.suffix}
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
};

const ServicesPreview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: t.services.orientation.title,
      desc: t.services.orientation.desc,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: t.services.dossier.title,
      desc: t.services.dossier.desc,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t.services.visa.title,
      desc: t.services.visa.desc,
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: t.services.support.title,
      desc: t.services.support.desc,
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover-lift group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const { t, language } = useLanguage();
  
  const features = [
    {
      title: language === 'fr' ? 'Gestion Administrative Complète' : language === 'ar' ? 'إدارة إدارية شاملة' : 'Complete Administrative Management',
      desc: language === 'fr' ? 'Nous gérons l\'ensemble du processus de candidature, des documents aux inscriptions.' : language === 'ar' ? 'نحن ندير عملية الترشيح بأكملها، من الوثائق إلى التسجيل.' : 'We manage the entire application process, from documents to enrollment.',
      icon: '📋',
    },
    {
      title: language === 'fr' ? 'Assistance Visa Garantie' : language === 'ar' ? 'مساعدة التأشيرة المضمونة' : 'Guaranteed Visa Assistance',
      desc: language === 'fr' ? 'Taux de réussite de 100% pour l\'obtention du visa étudiant chinois.' : language === 'ar' ? 'معدل نجاح 100% للحصول على تأشيرة الطالب الصينية.' : '100% success rate for obtaining Chinese student visa.',
      icon: '✈️',
    },
    {
      title: language === 'fr' ? 'Logement & Accueil sur Place' : language === 'ar' ? 'السكن والاستقبال في الموقع' : 'On-Site Housing & Welcome',
      desc: language === 'fr' ? 'Réservation du logement et accueil personnalisé dès votre arrivée en Chine.' : language === 'ar' ? 'حجز السكن والاستقبال الشخصي عند وصولك إلى الصين.' : 'Housing reservation and personalized welcome upon your arrival in China.',
      icon: '🏠',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'fr' ? 'Un Accompagnement 360°' : language === 'ar' ? 'مرافقة 360 درجة' : '360° Support'}
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src={studentsImage} 
              alt="Students studying" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">{t.stats.success}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const { t, language } = useLanguage();

  return (
    <section 
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${cityImage})` }}
    >
      <div className="absolute inset-0 bg-primary/90" />
      <div className="relative container-custom mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          {language === 'fr' ? 'Prêt à Commencer Votre Aventure?' : language === 'ar' ? 'مستعد لبدء مغامرتك؟' : 'Ready to Start Your Adventure?'}
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          {language === 'fr' 
            ? 'Contactez-nous dès aujourd\'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider à réaliser vos rêves académiques en Chine.'
            : language === 'ar'
            ? 'اتصل بنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أحلامك الأكاديمية في الصين.'
            : 'Contact us today for a free consultation and discover how we can help you achieve your academic dreams in China.'
          }
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          {t.hero.cta}
        </Link>
      </div>
    </section>
  );
};

export default Index;
