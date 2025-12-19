import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Programs = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t.programs.filter.all },
    { id: 'engineering', label: t.programs.filter.engineering },
    { id: 'medicine', label: t.programs.filter.medicine },
    { id: 'business', label: t.programs.filter.business },
    { id: 'languages', label: t.programs.filter.languages },
    { id: 'science', label: t.programs.filter.science },
  ];

  const programs = [
    {
      category: 'engineering',
      name: language === 'fr' ? 'Intelligence Artificielle' : language === 'ar' ? 'الذكاء الاصطناعي' : 'Artificial Intelligence',
      university: 'Tsinghua University',
      duration: '4 years',
      price: '30,000 CNY/year',
      language: 'English',
      scholarship: true,
    },
    {
      category: 'engineering',
      name: language === 'fr' ? 'Génie Civil' : language === 'ar' ? 'الهندسة المدنية' : 'Civil Engineering',
      university: 'Zhejiang University',
      duration: '4 years',
      price: '25,000 CNY/year',
      language: 'English',
      scholarship: true,
    },
    {
      category: 'engineering',
      name: language === 'fr' ? 'Robotique' : language === 'ar' ? 'الروبوتات' : 'Robotics',
      university: 'Harbin Institute of Technology',
      duration: '4 years',
      price: '28,000 CNY/year',
      language: 'English',
      scholarship: false,
    },
    {
      category: 'medicine',
      name: 'MBBS',
      university: 'Peking University',
      duration: '6 years',
      price: '45,000 CNY/year',
      language: 'English',
      scholarship: true,
    },
    {
      category: 'medicine',
      name: language === 'fr' ? 'Pharmacie' : language === 'ar' ? 'الصيدلة' : 'Pharmacy',
      university: 'Fudan University',
      duration: '5 years',
      price: '35,000 CNY/year',
      language: 'English',
      scholarship: false,
    },
    {
      category: 'medicine',
      name: language === 'fr' ? 'Dentaire' : language === 'ar' ? 'طب الأسنان' : 'Dentistry',
      university: 'Wuhan University',
      duration: '5 years',
      price: '40,000 CNY/year',
      language: 'English',
      scholarship: true,
    },
    {
      category: 'business',
      name: 'MBA',
      university: 'Shanghai Jiao Tong University',
      duration: '2 years',
      price: '50,000 CNY/year',
      language: 'English',
      scholarship: true,
    },
    {
      category: 'business',
      name: language === 'fr' ? 'Finance Internationale' : language === 'ar' ? 'التمويل الدولي' : 'International Finance',
      university: 'Renmin University',
      duration: '4 years',
      price: '28,000 CNY/year',
      language: 'English',
      scholarship: false,
    },
    {
      category: 'business',
      name: language === 'fr' ? 'Commerce International' : language === 'ar' ? 'التجارة الدولية' : 'International Trade',
      university: 'Sun Yat-sen University',
      duration: '4 years',
      price: '26,000 CNY/year',
      language: 'English/Chinese',
      scholarship: true,
    },
    {
      category: 'languages',
      name: language === 'fr' ? 'Langue Chinoise (HSK)' : language === 'ar' ? 'اللغة الصينية (HSK)' : 'Chinese Language (HSK)',
      university: 'Beijing Language University',
      duration: '1-2 years',
      price: '18,000 CNY/year',
      language: 'Chinese',
      scholarship: true,
    },
    {
      category: 'languages',
      name: language === 'fr' ? 'Traduction Anglais-Chinois' : language === 'ar' ? 'الترجمة الإنجليزية-الصينية' : 'English-Chinese Translation',
      university: 'Nanjing University',
      duration: '4 years',
      price: '22,000 CNY/year',
      language: 'English/Chinese',
      scholarship: false,
    },
    {
      category: 'science',
      name: language === 'fr' ? 'Physique Quantique' : language === 'ar' ? 'الفيزياء الكمية' : 'Quantum Physics',
      university: 'University of Science and Technology',
      duration: '4 years',
      price: '32,000 CNY/year',
      language: 'English',
      scholarship: true,
    },
    {
      category: 'science',
      name: language === 'fr' ? 'Biotechnologie' : language === 'ar' ? 'التكنولوجيا الحيوية' : 'Biotechnology',
      university: 'Xiamen University',
      duration: '4 years',
      price: '27,000 CNY/year',
      language: 'English',
      scholarship: false,
    },
  ];

  const filteredPrograms = activeFilter === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t.programs.title}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t.programs.subtitle}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background z-40">
        <div className="container-custom mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl overflow-hidden hover-lift"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold">{program.name}</h3>
                    {program.scholarship && (
                      <span className="bg-accent/20 text-accent-foreground text-xs px-2 py-1 rounded-full">
                        {language === 'fr' ? 'Bourse' : language === 'ar' ? 'منحة' : 'Scholarship'}
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-medium mb-4">{program.university}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      {program.language}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.price}
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="block w-full btn-primary text-center text-sm"
                  >
                    {language === 'fr' ? 'Postuler' : language === 'ar' ? 'تقدم الآن' : 'Apply Now'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
