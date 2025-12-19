import { useLanguage } from '@/contexts/LanguageContext';
import studentsImage from '@/assets/students-study.jpg';

const Services = () => {
  const { t, language } = useLanguage();

  const mainServices = [
    {
      title: t.services.orientation.title,
      desc: t.services.orientation.desc,
      features: language === 'fr' 
        ? ['Bilan personnalisé des compétences', 'Sélection des meilleures universités', 'Analyse des critères d\'admission', 'Conseil stratégique personnalisé']
        : language === 'ar'
        ? ['تقييم شخصي للمهارات', 'اختيار أفضل الجامعات', 'تحليل معايير القبول', 'نصائح استراتيجية شخصية']
        : ['Personalized skills assessment', 'Best university selection', 'Admission criteria analysis', 'Personalized strategic advice'],
      icon: '🎯',
    },
    {
      title: t.services.dossier.title,
      desc: t.services.dossier.desc,
      features: language === 'fr'
        ? ['Rédaction et mise en forme du CV', 'Lettre de motivation personnalisée', 'Traduction certifiée des documents', 'Suivi de candidature en temps réel']
        : language === 'ar'
        ? ['كتابة وتنسيق السيرة الذاتية', 'رسالة تحفيز شخصية', 'ترجمة معتمدة للوثائق', 'متابعة الطلب في الوقت الحقيقي']
        : ['CV writing and formatting', 'Personalized motivation letter', 'Certified document translation', 'Real-time application tracking'],
      icon: '📁',
    },
    {
      title: t.services.visa.title,
      desc: t.services.visa.desc,
      features: language === 'fr'
        ? ['Préparation du dossier visa', 'Prise de rendez-vous consulat', 'Simulation d\'entretien', 'Assurance voyage et santé']
        : language === 'ar'
        ? ['إعداد ملف التأشيرة', 'حجز موعد القنصلية', 'محاكاة المقابلة', 'تأمين السفر والصحة']
        : ['Visa file preparation', 'Consulate appointment booking', 'Interview simulation', 'Travel and health insurance'],
      icon: '✈️',
    },
    {
      title: t.services.support.title,
      desc: t.services.support.desc,
      features: language === 'fr'
        ? ['Réservation de billet d\'avion', 'Accueil à l\'aéroport', 'Installation dans le logement', 'Support 24/7 pendant vos études']
        : language === 'ar'
        ? ['حجز تذكرة الطيران', 'الاستقبال في المطار', 'الاستقرار في السكن', 'دعم 24/7 خلال دراستك']
        : ['Flight ticket booking', 'Airport pickup', 'Housing settlement', '24/7 support during your studies'],
      icon: '🤝',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Benali',
      program: 'MBBS - Peking University',
      text: language === 'fr' 
        ? 'Grâce à Study In Asia, j\'ai pu intégrer une des meilleures universités de médecine en Chine. Leur accompagnement a été exceptionnel du début à la fin.'
        : language === 'ar'
        ? 'بفضل Study In Asia، تمكنت من الالتحاق بواحدة من أفضل جامعات الطب في الصين. كانت مرافقتهم استثنائية من البداية إلى النهاية.'
        : 'Thanks to Study In Asia, I was able to join one of the best medical universities in China. Their support was exceptional from start to finish.',
      image: '👨‍⚕️',
    },
    {
      name: 'Fatima Zahra',
      program: 'Business - Shanghai Jiao Tong',
      text: language === 'fr'
        ? 'Le processus était simple et transparent. L\'équipe m\'a guidée à chaque étape et j\'ai obtenu une bourse complète!'
        : language === 'ar'
        ? 'كانت العملية بسيطة وشفافة. أرشدني الفريق في كل خطوة وحصلت على منحة كاملة!'
        : 'The process was simple and transparent. The team guided me every step of the way and I got a full scholarship!',
      image: '👩‍💼',
    },
    {
      name: 'Youssef El Amrani',
      program: 'Engineering - Tsinghua University',
      text: language === 'fr'
        ? 'Étudier en Chine a changé ma vie. Study In Asia m\'a permis de réaliser mon rêve d\'intégrer Tsinghua.'
        : language === 'ar'
        ? 'الدراسة في الصين غيرت حياتي. Study In Asia مكنتني من تحقيق حلمي بالالتحاق بجامعة تسينغهوا.'
        : 'Studying in China changed my life. Study In Asia helped me achieve my dream of joining Tsinghua.',
      image: '👨‍🔬',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t.services.title}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover-lift">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'fr' ? 'Témoignages de nos Étudiants' : language === 'ar' ? 'شهادات طلابنا' : 'Student Testimonials'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.program}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
