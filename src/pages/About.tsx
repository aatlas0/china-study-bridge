import { useLanguage } from '@/contexts/LanguageContext';
import cityImage from '@/assets/china-city.jpg';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
      ), title: t.about.excellence, desc: language === 'fr' ? 'Nous visons l\'excellence dans tout ce que nous faisons.' : language === 'ar' ? 'نسعى للتميز في كل ما نقوم به.' : 'We strive for excellence in everything we do.' },
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>
      ), title: t.about.trust, desc: language === 'fr' ? 'La confiance est au cœur de notre relation avec les étudiants.' : language === 'ar' ? 'الثقة هي جوهر علاقتنا مع الطلاب.' : 'Trust is at the heart of our relationship with students.' },
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
      ), title: t.about.innovation, desc: language === 'fr' ? 'Nous innovons constamment pour améliorer nos services.' : language === 'ar' ? 'نبتكر باستمرار لتحسين خدماتنا.' : 'We constantly innovate to improve our services.' },
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 text-primary"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
      ), title: t.about.support, desc: language === 'fr' ? 'Un accompagnement personnalisé à chaque étape.' : language === 'ar' ? 'مرافقة شخصية في كل مرحلة.' : 'Personalized support at every step.' },
  ];

  const team = [
    {
      name: 'M. Louridi Omar',
      role: language === 'fr' ? "Directeur Général" : language === 'ar' ? 'المدير العام' : 'General Director',
      image: '👨‍💼',
    },
    {
      name: 'M. Amanssour Khalil',
      role: language === 'fr' ? "Conseiller d'Orientaion" : language === 'ar' ? 'مستشار التأشيرات' : 'Visa Advisor',
      image: '👨‍💻',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t.about.title}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-4xl mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 text-red-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                              </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t.about.mission}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-4xl mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 text-red-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                              </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t.about.vision}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.about.values}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border text-center hover-lift flex flex-col items-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {language === 'fr' ? 'Notre Équipe' : language === 'ar' ? 'فريقنا' : 'Our Team'}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {language === 'fr'
              ? 'Des experts passionnés dédiés à votre réussite académique.'
              : language === 'ar'
                ? 'خبراء متحمسون مكرسون لنجاحك الأكاديمي.'
                : 'Passionate experts dedicated to your academic success.'}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-7xl mb-4">{member.image}</div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {language === 'fr' ? 'Notre Bureau à Meknès' : language === 'ar' ? 'مكتبنا في مكناس' : 'Our Office in Meknes'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'fr'
                  ? 'Situé au cœur de Meknès, notre bureau vous accueille pour des consultations personnalisées. Prenez rendez-vous pour discuter de votre projet d\'études en Chine.'
                  : language === 'ar'
                    ? 'يقع في قلب مكناس، يستقبلكم مكتبنا للاستشارات الشخصية. حدد موعداً لمناقشة مشروعك الدراسي في الصين.'
                    : 'Located in the heart of Meknes, our office welcomes you for personalized consultations. Schedule an appointment to discuss your study project in China.'}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Im 14 Av Ibn Khaldoun V.N, Meknès, Maroc</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Lun - Ven: 09h00 - 18h00 | Sam: 09h00 - 13h00</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={cityImage}
                alt="China cityscape"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
