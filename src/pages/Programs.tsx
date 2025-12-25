import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, ChevronLeft, RotateCcw, Search, GraduationCap, Languages, Award } from 'lucide-react';

const Programs = () => {
  const { t, language, direction } = useLanguage();
  const { format, convert, currency } = useCurrency();
  const [step, setStep] = useState(0); // 0: Start, 1: Category, 2: Language, 3: Scholarship, 4: Results

  const [selections, setSelections] = useState({
    category: 'all',
    language: 'both',
    scholarship: 'no'
  });

  const programs = [
    {
      category: 'engineering',
      name: language === 'fr' ? 'Intelligence Artificielle' : language === 'ar' ? 'الذكاء الاصطناعي' : 'Artificial Intelligence',
      university: 'Tsinghua University',
      duration: '4 years',
      price: 30000,
      language: 'English',
      scholarship: true,
    },
    {
      category: 'engineering',
      name: language === 'fr' ? 'Génie Civil' : language === 'ar' ? 'الهندسة المدنية' : 'Civil Engineering',
      university: 'Zhejiang University',
      duration: '4 years',
      price: 25000,
      language: 'English',
      scholarship: true,
    },
    {
      category: 'engineering',
      name: language === 'fr' ? 'Robotique' : language === 'ar' ? 'الروبوتات' : 'Robotics',
      university: 'Harbin Institute of Technology',
      duration: '4 years',
      price: 28000,
      language: 'English',
      scholarship: false,
    },
    {
      category: 'medicine',
      name: 'MBBS',
      university: 'Peking University',
      duration: '6 years',
      price: 45000,
      language: 'English',
      scholarship: true,
    },
    {
      category: 'medicine',
      name: language === 'fr' ? 'Pharmacie' : language === 'ar' ? 'الصيدلة' : 'Pharmacy',
      university: 'Fudan University',
      duration: '5 years',
      price: 35000,
      language: 'English',
      scholarship: false,
    },
    {
      category: 'medicine',
      name: language === 'fr' ? 'Dentaire' : language === 'ar' ? 'طب الأسنان' : 'Dentistry',
      university: 'Wuhan University',
      duration: '5 years',
      price: 40000,
      language: 'English',
      scholarship: true,
    },
    {
      category: 'business',
      name: 'MBA',
      university: 'Shanghai Jiao Tong University',
      duration: '2 years',
      price: 50000,
      language: 'English',
      scholarship: true,
    },
    {
      category: 'business',
      name: language === 'fr' ? 'Finance Internationale' : language === 'ar' ? 'التمويل الدولي' : 'International Finance',
      university: 'Renmin University',
      duration: '4 years',
      price: 28000,
      language: 'English',
      scholarship: false,
    },
    {
      category: 'business',
      name: language === 'fr' ? 'Commerce International' : language === 'ar' ? 'التجارة الدولية' : 'International Trade',
      university: 'Sun Yat-sen University',
      duration: '4 years',
      price: 26000,
      language: 'English/Chinese',
      scholarship: true,
    },
    {
      category: 'languages',
      name: language === 'fr' ? 'Langue Chinoise (HSK)' : language === 'ar' ? 'اللغة الصينية (HSK)' : 'Chinese Language (HSK)',
      university: 'Beijing Language University',
      duration: '1-2 years',
      price: 18000,
      language: 'Chinese',
      scholarship: true,
    },
    {
      category: 'languages',
      name: language === 'fr' ? 'Traduction Anglais-Chinois' : language === 'ar' ? 'الترجمة الإنجليزية-الصينية' : 'English-Chinese Translation',
      university: 'Nanjing University',
      duration: '4 years',
      price: 22000,
      language: 'English/Chinese',
      scholarship: false,
    },
    {
      category: 'science',
      name: language === 'fr' ? 'Physique Quantique' : language === 'ar' ? 'الفيزياء الكمية' : 'Quantum Physics',
      university: 'University of Science and Technology',
      duration: '4 years',
      price: 32000,
      language: 'English',
      scholarship: true,
    },
    {
      category: 'science',
      name: language === 'fr' ? 'Biotechnologie' : language === 'ar' ? 'التكنولوجيا الحيوية' : 'Biotechnology',
      university: 'Xiamen University',
      duration: '4 years',
      price: 27000,
      language: 'English',
      scholarship: false,
    },
  ];

  // Logic for filtering
  const filteredPrograms = programs.filter(program => {
    const categoryMatch = selections.category === 'all' || program.category === selections.category;

    let languageMatch = true;
    if (selections.language === 'english') {
      languageMatch = program.language.includes('English');
    } else if (selections.language === 'chinese') {
      languageMatch = program.language.includes('Chinese');
    }

    const scholarshipMatch = selections.scholarship === 'no' || program.scholarship === true;

    return categoryMatch && languageMatch && scholarshipMatch;
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0));
  const resetWizard = () => {
    setStep(0);
    setSelections({
      category: 'all',
      language: 'both',
      scholarship: 'no'
    });
  };

  const categories = [
    { id: 'all', label: t.programs.filter.all },
    { id: 'engineering', label: t.programs.filter.engineering },
    { id: 'medicine', label: t.programs.filter.medicine },
    { id: 'business', label: t.programs.filter.business },
    { id: 'languages', label: t.programs.filter.languages },
    { id: 'science', label: t.programs.filter.science },
  ];

  const progressValue = (step / 3) * 100;

  return (
    <div className="min-h-screen bg-background pb-20">
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

      <div className="container-custom mx-auto px-4 -mt-10 lg:-mt-12 relative z-10">
        {step < 4 && (
          <Card className="max-w-3xl mx-auto p-6 md:p-10 shadow-xl border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {step > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2 text-sm font-medium text-muted-foreground">
                  <span>Step {step} of 3</span>
                  <span>{Math.round(progressValue)}%</span>
                </div>
                <Progress value={progressValue} className="h-2" />
              </div>
            )}

            {/* Step 0: Start */}
            {step === 0 && (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{t.programs.title}</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  {language === 'fr'
                    ? "Trouvons ensemble le programme parfait pour votre avenir en Chine."
                    : language === 'ar'
                      ? "لنبدأ البحث عن البرنامج المثالي لمستقبلك في الصين."
                      : "Let's find the perfect program for your future in China together."}
                </p>
                <Button onClick={nextStep} size="lg" className="rounded-full px-10 h-14 text-lg">
                  {t.wizard.start}
                  <ChevronRight className={`ml-2 w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            )}

            {/* Step 1: Category */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">{t.wizard.step1.question}</h2>
                </div>
                <p className="text-muted-foreground mb-8">{t.wizard.step1.description}</p>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelections({ ...selections, category: cat.id });
                        nextStep();
                      }}
                      className={`p-4 rounded-xl border-2 transition-all text-center hover:border-primary/50 hover:bg-primary/5 ${selections.category === cat.id ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                    >
                      <span className="font-semibold">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Language */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Languages className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">{t.wizard.step2.question}</h2>
                </div>
                <p className="text-muted-foreground mb-8">{t.wizard.step2.description}</p>

                <div className="grid gap-4">
                  {(['english', 'chinese', 'both'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelections({ ...selections, language: lang });
                        nextStep();
                      }}
                      className={`p-6 rounded-xl border-2 transition-all flex items-center justify-between hover:border-primary/50 hover:bg-primary/5 ${selections.language === lang ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                    >
                      <span className="text-lg font-semibold">{t.wizard.step2.options[lang]}</span>
                      {selections.language === lang && <div className="w-3 h-3 bg-primary rounded-full transition-all scale-125" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Scholarship */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">{t.wizard.step3.question}</h2>
                </div>
                <p className="text-muted-foreground mb-8">{t.wizard.step3.description}</p>

                <div className="grid gap-4">
                  {(['yes', 'no'] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSelections({ ...selections, scholarship: opt });
                      }}
                      className={`p-6 rounded-xl border-2 transition-all flex items-center justify-between hover:border-primary/50 hover:bg-primary/5 ${selections.scholarship === opt ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                    >
                      <span className="text-lg font-semibold">{t.wizard.step3.options[opt]}</span>
                      {selections.scholarship === opt && <div className="w-3 h-3 bg-primary rounded-full transition-all scale-125" />}
                    </button>
                  ))}
                </div>

                <div className="mt-10 flex justify-between gap-4">
                  <Button variant="outline" onClick={prevStep} size="lg">
                    <ChevronLeft className={`mr-2 w-4 h-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                    {t.wizard.previous}
                  </Button>
                  <Button onClick={nextStep} size="lg" className="px-8">
                    {t.wizard.results}
                    <ChevronRight className={`ml-2 w-4 h-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                  </Button>
                </div>
              </div>
            )}

            {step > 0 && step < 3 && (
              <div className="mt-10">
                <Button variant="ghost" onClick={prevStep} className="text-muted-foreground">
                  <ChevronLeft className={`mr-2 w-4 h-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                  {t.wizard.previous}
                </Button>
              </div>
            )}
          </Card>
        )}

        {/* Results */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 bg-card p-6 rounded-2xl border border-border shadow-sm">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  {filteredPrograms.length} {language === 'fr' ? 'Programmes trouvés' : language === 'ar' ? 'برامج تم العثور عليها' : 'Programs found'}
                </h2>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-2">
                  <span className="bg-secondary px-3 py-1 rounded-full">{categories.find(c => c.id === selections.category)?.label}</span>
                  <span className="bg-secondary px-3 py-1 rounded-full">{t.wizard.step2.options[selections.language as keyof typeof t.wizard.step2.options]}</span>
                  {selections.scholarship === 'yes' && <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full font-medium border border-accent/20">{t.wizard.step3.options.yes}</span>}
                </div>
              </div>
              <Button onClick={resetWizard} variant="outline" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                {t.wizard.reset}
              </Button>
            </div>

            {filteredPrograms.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover-lift border-border/50 group"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{program.name}</h3>
                        {program.scholarship && (
                          <span className="bg-accent/10 text-accent-foreground text-xs px-2.5 py-1 rounded-full font-semibold border border-accent/20">
                            {language === 'fr' ? 'Bourse' : language === 'ar' ? 'منحة' : 'Scholarship'}
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-semibold mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {program.university}
                      </p>

                      <div className="space-y-3 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                          </div>
                          {program.language}
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex flex-col">
                              {currency === 'CNY' ? (
                                <span className="font-bold text-foreground">
                                  {format(program.price)} / {t.budget.perYear}
                                </span>
                              ) : (
                                <div className="flex flex-col">
                                  <span className="font-bold text-foreground">
                                    {format(convert(program.price, 'CNY', 'MAD'), 'MAD')}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    (~{format(convert(program.price, 'CNY', 'USD'), 'USD')}) / {t.budget.perYear}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="block w-full btn-primary text-center text-sm py-3"
                      >
                        {language === 'fr' ? 'Postuler Maintenant' : language === 'ar' ? 'تقدم الآن' : 'Apply Now'}
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-2xl border border-dashed border-border shadow-sm">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                <p className="text-xl text-muted-foreground mb-6 max-w-md mx-auto">{t.wizard.noResults}</p>
                <Button onClick={resetWizard} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {t.wizard.reset}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;
