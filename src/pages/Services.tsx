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
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 text-red-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
      ),
    },
    {
      title: t.services.dossier.title,
      desc: t.services.dossier.desc,
      features: language === 'fr'
        ? ['Rédaction et mise en forme du CV', 'Lettre de motivation personnalisée', 'Traduction certifiée des documents', 'Suivi de candidature en temps réel']
        : language === 'ar'
          ? ['كتابة وتنسيق السيرة الذاتية', 'رسالة تحفيز شخصية', 'ترجمة معتمدة للوثائق', 'متابعة الطلب في الوقت الحقيقي']
          : ['CV writing and formatting', 'Personalized motivation letter', 'Certified document translation', 'Real-time application tracking'],
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 text-red-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
      ),
    },
    {
      title: t.services.visa.title,
      desc: t.services.visa.desc,
      features: language === 'fr'
        ? ['Préparation du dossier visa', 'Prise de rendez-vous consulat', 'Simulation d\'entretien', 'Assurance voyage et santé']
        : language === 'ar'
          ? ['إعداد ملف التأشيرة', 'حجز موعد القنصلية', 'محاكاة المقابلة', 'تأمين السفر والصحة']
          : ['Visa file preparation', 'Consulate appointment booking', 'Interview simulation', 'Travel and health insurance'],
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 text-red-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
      ),
    },
    {
      title: t.services.support.title,
      desc: t.services.support.desc,
      features: language === 'fr'
        ? ['Réservation de billet d\'avion', 'Accueil à l\'aéroport', 'Installation dans le logement', 'Support 24/7 pendant vos études']
        : language === 'ar'
          ? ['حجز تذكرة الطيران', 'الاستقبال في المطار', 'الاستقرار في السكن', 'دعم 24/7 خلال دراستك']
          : ['Flight ticket booking', 'Airport pickup', 'Housing settlement', '24/7 support during your studies'],
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 text-red-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
      ),
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
