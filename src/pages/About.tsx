import { useLanguage } from '@/contexts/LanguageContext';
import cityImage from '@/assets/china-city.jpg';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    { icon: '⭐', title: t.about.excellence, desc: language === 'fr' ? 'Nous visons l\'excellence dans tout ce que nous faisons.' : language === 'ar' ? 'نسعى للتميز في كل ما نقوم به.' : 'We strive for excellence in everything we do.' },
    { icon: '🤝', title: t.about.trust, desc: language === 'fr' ? 'La confiance est au cœur de notre relation avec les étudiants.' : language === 'ar' ? 'الثقة هي جوهر علاقتنا مع الطلاب.' : 'Trust is at the heart of our relationship with students.' },
    { icon: '💡', title: t.about.innovation, desc: language === 'fr' ? 'Nous innovons constamment pour améliorer nos services.' : language === 'ar' ? 'نبتكر باستمرار لتحسين خدماتنا.' : 'We constantly innovate to improve our services.' },
    { icon: '🛡️', title: t.about.support, desc: language === 'fr' ? 'Un accompagnement personnalisé à chaque étape.' : language === 'ar' ? 'مرافقة شخصية في كل مرحلة.' : 'Personalized support at every step.' },
  ];

  const team = [
    {
      name: 'M. Louridi Omar',
      role: language === 'fr' ? 'Directeur Général' : language === 'ar' ? 'المدير العام' : 'General Director',
      image: '👨‍💼',
    },
    {
      name: 'M. Amanssour Khalil',
      role: language === 'fr' ? 'Conseiller Visa' : language === 'ar' ? 'مستشار التأشيرات' : 'Visa Advisor',
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
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-4">{t.about.mission}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-4xl mb-4">🔭</div>
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
              <div key={index} className="bg-card p-6 rounded-xl border border-border text-center hover-lift">
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
