import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const { t, language } = useLanguage();

  const faqs = [
    {
      question: language === 'fr' 
        ? 'Quels sont les critères d\'admission pour étudier en Chine?'
        : language === 'ar'
        ? 'ما هي معايير القبول للدراسة في الصين؟'
        : 'What are the admission requirements to study in China?',
      answer: language === 'fr'
        ? 'Les critères varient selon le programme. Généralement, vous aurez besoin d\'un diplôme de baccalauréat avec de bonnes notes, un passeport valide, et parfois un certificat HSK pour les programmes en chinois. Pour les programmes en anglais, un test IELTS ou TOEFL peut être requis.'
        : language === 'ar'
        ? 'تختلف المعايير حسب البرنامج. عموماً، ستحتاج إلى شهادة البكالوريا بدرجات جيدة، جواز سفر ساري المفعول، وأحياناً شهادة HSK للبرامج باللغة الصينية. للبرامج بالإنجليزية، قد يُطلب اختبار IELTS أو TOEFL.'
        : 'Requirements vary by program. Generally, you\'ll need a high school diploma with good grades, a valid passport, and sometimes an HSK certificate for Chinese-taught programs. For English-taught programs, IELTS or TOEFL may be required.',
    },
    {
      question: language === 'fr'
        ? 'Combien coûte une année d\'études en Chine?'
        : language === 'ar'
        ? 'كم تكلف سنة دراسية في الصين؟'
        : 'How much does a year of study in China cost?',
      answer: language === 'fr'
        ? 'Les frais de scolarité varient de 15,000 à 50,000 CNY par an selon l\'université et le programme. Les frais de vie sont d\'environ 3,000-5,000 CNY par mois dans les grandes villes. Utilisez notre calculateur de budget pour une estimation personnalisée.'
        : language === 'ar'
        ? 'تتراوح الرسوم الدراسية بين 15,000 و 50,000 يوان صيني سنوياً حسب الجامعة والبرنامج. تكاليف المعيشة حوالي 3,000-5,000 يوان شهرياً في المدن الكبرى. استخدم حاسبة الميزانية للحصول على تقدير شخصي.'
        : 'Tuition fees range from 15,000 to 50,000 CNY per year depending on the university and program. Living costs are about 3,000-5,000 CNY per month in major cities. Use our budget calculator for a personalized estimate.',
    },
    {
      question: language === 'fr'
        ? 'Comment obtenir une bourse pour étudier en Chine?'
        : language === 'ar'
        ? 'كيف يمكنني الحصول على منحة للدراسة في الصين؟'
        : 'How can I get a scholarship to study in China?',
      answer: language === 'fr'
        ? 'Il existe plusieurs types de bourses : la bourse CSC (gouvernement chinois), les bourses provinciales, et les bourses universitaires. Study In Asia vous accompagne dans la recherche et la candidature aux bourses adaptées à votre profil.'
        : language === 'ar'
        ? 'هناك عدة أنواع من المنح: منحة CSC (الحكومة الصينية)، المنح الإقليمية، والمنح الجامعية. Study In Asia تساعدك في البحث والتقديم للمنح المناسبة لملفك.'
        : 'There are several types of scholarships: CSC scholarship (Chinese government), provincial scholarships, and university scholarships. Study In Asia helps you find and apply for scholarships suited to your profile.',
    },
    {
      question: language === 'fr'
        ? 'Combien de temps faut-il pour obtenir un visa étudiant?'
        : language === 'ar'
        ? 'كم من الوقت يستغرق الحصول على تأشيرة طالب؟'
        : 'How long does it take to get a student visa?',
      answer: language === 'fr'
        ? 'Le processus de visa prend généralement 2-4 semaines après avoir reçu votre lettre d\'admission (JW202). Nous vous accompagnons dans la préparation de tous les documents et la prise de rendez-vous au consulat.'
        : language === 'ar'
        ? 'تستغرق عملية التأشيرة عادة 2-4 أسابيع بعد استلام خطاب القبول (JW202). نساعدك في إعداد جميع الوثائق وحجز موعد في القنصلية.'
        : 'The visa process typically takes 2-4 weeks after receiving your admission letter (JW202). We assist you with preparing all documents and booking the consulate appointment.',
    },
    {
      question: language === 'fr'
        ? 'Les diplômes chinois sont-ils reconnus au Maroc?'
        : language === 'ar'
        ? 'هل الشهادات الصينية معترف بها في المغرب؟'
        : 'Are Chinese degrees recognized in Morocco?',
      answer: language === 'fr'
        ? 'Oui, les diplômes des universités chinoises accréditées sont reconnus internationalement et au Maroc. Nous travaillons uniquement avec des universités figurant sur la liste du Ministère de l\'Éducation chinois.'
        : language === 'ar'
        ? 'نعم، الشهادات من الجامعات الصينية المعتمدة معترف بها دولياً وفي المغرب. نحن نعمل فقط مع الجامعات المدرجة في قائمة وزارة التعليم الصينية.'
        : 'Yes, degrees from accredited Chinese universities are recognized internationally and in Morocco. We only work with universities listed by the Chinese Ministry of Education.',
    },
    {
      question: language === 'fr'
        ? 'Est-il nécessaire de parler chinois pour étudier en Chine?'
        : language === 'ar'
        ? 'هل من الضروري التحدث بالصينية للدراسة في الصين؟'
        : 'Is it necessary to speak Chinese to study in China?',
      answer: language === 'fr'
        ? 'Non, de nombreux programmes sont enseignés entièrement en anglais. Cependant, apprendre le chinois est un avantage et certaines universités offrent des cours de langue gratuits. Pour les programmes en chinois, un niveau HSK 4-5 est généralement requis.'
        : language === 'ar'
        ? 'لا، العديد من البرامج تُدرَّس بالكامل باللغة الإنجليزية. ومع ذلك، تعلم الصينية ميزة وبعض الجامعات تقدم دورات لغة مجانية. للبرامج بالصينية، عادة ما يُطلب مستوى HSK 4-5.'
        : 'No, many programs are taught entirely in English. However, learning Chinese is an advantage and some universities offer free language courses. For Chinese-taught programs, HSK level 4-5 is usually required.',
    },
    {
      question: language === 'fr'
        ? 'Comment Study In Asia m\'accompagne-t-il?'
        : language === 'ar'
        ? 'كيف ترافقني Study In Asia؟'
        : 'How does Study In Asia support me?',
      answer: language === 'fr'
        ? 'Nous offrons un accompagnement complet : orientation personnalisée, préparation du dossier, recherche de bourses, assistance visa, réservation de vol, accueil à l\'aéroport, et support continu pendant vos études.'
        : language === 'ar'
        ? 'نقدم مرافقة شاملة: توجيه شخصي، إعداد الملف، البحث عن المنح، المساعدة في التأشيرة، حجز الرحلة، الاستقبال في المطار، والدعم المستمر خلال دراستك.'
        : 'We offer complete support: personalized guidance, application preparation, scholarship search, visa assistance, flight booking, airport pickup, and ongoing support during your studies.',
    },
    {
      question: language === 'fr'
        ? 'Quand dois-je commencer le processus de candidature?'
        : language === 'ar'
        ? 'متى يجب أن أبدأ عملية التقديم؟'
        : 'When should I start the application process?',
      answer: language === 'fr'
        ? 'Nous recommandons de commencer au moins 6-8 mois avant la date de rentrée souhaitée. Pour les bourses CSC, les délais sont généralement en janvier-avril pour une rentrée en septembre.'
        : language === 'ar'
        ? 'نوصي بالبدء قبل 6-8 أشهر على الأقل من تاريخ الدخول المطلوب. لمنح CSC، المواعيد عادة في يناير-أبريل للدخول في سبتمبر.'
        : 'We recommend starting at least 6-8 months before your desired start date. For CSC scholarships, deadlines are typically January-April for September enrollment.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t.faq.title}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA */}
            <div className="mt-12 text-center bg-secondary/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">
                {language === 'fr' 
                  ? 'Vous avez d\'autres questions?'
                  : language === 'ar'
                  ? 'هل لديك أسئلة أخرى؟'
                  : 'Have more questions?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'fr'
                  ? 'Notre équipe est là pour vous aider. Contactez-nous!'
                  : language === 'ar'
                  ? 'فريقنا هنا لمساعدتك. اتصل بنا!'
                  : 'Our team is here to help. Contact us!'}
              </p>
              <Link to="/contact" className="btn-primary">
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
