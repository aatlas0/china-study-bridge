import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const Contact = () => {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs = [
    { value: '', label: language === 'fr' ? 'Sélectionner un programme' : language === 'ar' ? 'اختر برنامجاً' : 'Select a program' },
    { value: 'engineering', label: language === 'fr' ? 'Ingénierie' : language === 'ar' ? 'الهندسة' : 'Engineering' },
    { value: 'medicine', label: language === 'fr' ? 'Médecine' : language === 'ar' ? 'الطب' : 'Medicine' },
    { value: 'business', label: language === 'fr' ? 'Business' : language === 'ar' ? 'الأعمال' : 'Business' },
    { value: 'languages', label: language === 'fr' ? 'Langues' : language === 'ar' ? 'اللغات' : 'Languages' },
    { value: 'science', label: language === 'fr' ? 'Sciences' : language === 'ar' ? 'العلوم' : 'Science' },
    { value: 'other', label: language === 'fr' ? 'Autre' : language === 'ar' ? 'آخر' : 'Other' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success(
      language === 'fr' 
        ? 'Message envoyé avec succès! Nous vous contacterons bientôt.'
        : language === 'ar'
        ? 'تم إرسال الرسالة بنجاح! سنتصل بك قريباً.'
        : 'Message sent successfully! We\'ll contact you soon.'
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t.contact.title}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                {language === 'fr' ? 'Envoyez-nous un message' : language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.name}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={language === 'fr' ? 'Votre nom complet' : language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.email}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={language === 'fr' ? 'votre@email.com' : language === 'ar' ? 'بريدك@الإلكتروني.com' : 'your@email.com'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.phone}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.program}</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    {programs.map((program) => (
                      <option key={program.value} value={program.value}>{program.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.message}</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder={language === 'fr' ? 'Décrivez votre projet...' : language === 'ar' ? 'صف مشروعك...' : 'Describe your project...'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting 
                    ? (language === 'fr' ? 'Envoi en cours...' : language === 'ar' ? 'جاري الإرسال...' : 'Sending...')
                    : t.contact.send
                  }
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">{t.footer.contactInfo}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.address}</h3>
                      <p className="text-muted-foreground">Im 14 Av Ibn Khaldoun V.N<br />Meknès, Maroc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.phone}</h3>
                      <p className="text-muted-foreground">+212 6 64 63 55 70</p>
                      <p className="text-muted-foreground">+212 6 69 56 64 04</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.email}</h3>
                      <p className="text-muted-foreground">admissions@studyinasia.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.hours}</h3>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Lun - Ven: 09h00 - 18h00' : language === 'ar' ? 'الإثنين - الجمعة: 09:00 - 18:00' : 'Mon - Fri: 09:00 - 18:00'}
                      </p>
                      <p className="text-muted-foreground">
                        {language === 'fr' ? 'Sam: 09h00 - 13h00' : language === 'ar' ? 'السبت: 09:00 - 13:00' : 'Sat: 09:00 - 13:00'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold mb-2">
                  {language === 'fr' ? 'Chat WhatsApp' : language === 'ar' ? 'دردشة واتساب' : 'WhatsApp Chat'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'fr' 
                    ? 'Réponse rapide garantie!'
                    : language === 'ar'
                    ? 'رد سريع مضمون!'
                    : 'Quick response guaranteed!'}
                </p>
                <a 
                  href="https://wa.me/212664635570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-secondary">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.3845789254454!2d-5.5458!3d33.8935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044c6b42e6f27%3A0x7f8b6b9c8a8b8b8b!2sMekn%C3%A8s%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Study In Asia Location"
        />
      </section>
    </div>
  );
};

export default Contact;
