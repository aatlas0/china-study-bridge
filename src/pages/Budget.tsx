import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Budget = () => {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    program: 'bachelor',
    duration: 4,
    city: 'tier2',
    scholarship: 'none',
  });

  const [result, setResult] = useState<null | {
    tuition: number;
    living: number;
    visa: number;
    total: number;
  }>(null);

  const programs = [
    { value: 'bachelor', label: language === 'fr' ? 'Licence' : language === 'ar' ? 'بكالوريوس' : 'Bachelor', cost: 25000 },
    { value: 'master', label: language === 'fr' ? 'Master' : language === 'ar' ? 'ماجستير' : 'Master', cost: 30000 },
    { value: 'phd', label: language === 'fr' ? 'Doctorat' : language === 'ar' ? 'دكتوراه' : 'PhD', cost: 35000 },
    { value: 'medicine', label: language === 'fr' ? 'Médecine (MBBS)' : language === 'ar' ? 'الطب (MBBS)' : 'Medicine (MBBS)', cost: 45000 },
    { value: 'language', label: language === 'fr' ? 'Langue Chinoise' : language === 'ar' ? 'اللغة الصينية' : 'Chinese Language', cost: 18000 },
  ];

  const cities = [
    { value: 'tier1', label: language === 'fr' ? 'Tier 1 (Beijing, Shanghai)' : language === 'ar' ? 'المستوى 1 (بكين، شنغهاي)' : 'Tier 1 (Beijing, Shanghai)', livingCost: 15000 },
    { value: 'tier2', label: language === 'fr' ? 'Tier 2 (Hangzhou, Nanjing)' : language === 'ar' ? 'المستوى 2 (هانغتشو، نانجينغ)' : 'Tier 2 (Hangzhou, Nanjing)', livingCost: 10000 },
    { value: 'tier3', label: language === 'fr' ? 'Tier 3 (Autres villes)' : language === 'ar' ? 'المستوى 3 (مدن أخرى)' : 'Tier 3 (Other cities)', livingCost: 7000 },
  ];

  const scholarships = [
    { value: 'none', label: language === 'fr' ? 'Aucune' : language === 'ar' ? 'بدون' : 'None', discount: 0 },
    { value: 'partial', label: language === 'fr' ? 'Partielle (50%)' : language === 'ar' ? 'جزئية (50%)' : 'Partial (50%)', discount: 0.5 },
    { value: 'full', label: language === 'fr' ? 'Complète (100%)' : language === 'ar' ? 'كاملة (100%)' : 'Full (100%)', discount: 1 },
  ];

  const calculateBudget = () => {
    const selectedProgram = programs.find(p => p.value === formData.program);
    const selectedCity = cities.find(c => c.value === formData.city);
    const selectedScholarship = scholarships.find(s => s.value === formData.scholarship);

    if (!selectedProgram || !selectedCity || !selectedScholarship) return;

    const tuitionPerYear = selectedProgram.cost * (1 - selectedScholarship.discount);
    const livingPerYear = selectedCity.livingCost;
    const visaAndInsurance = 5000;

    setResult({
      tuition: tuitionPerYear * formData.duration,
      living: livingPerYear * formData.duration,
      visa: visaAndInsurance,
      total: (tuitionPerYear + livingPerYear) * formData.duration + visaAndInsurance,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' CNY';
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t.budget.title}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t.budget.subtitle}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-6">
                  {language === 'fr' ? 'Paramètres' : language === 'ar' ? 'الإعدادات' : 'Parameters'}
                </h2>
                
                <div className="space-y-6">
                  {/* Program */}
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.budget.program}</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {programs.map((program) => (
                        <option key={program.value} value={program.value}>{program.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.budget.duration}</label>
                    <input
                      type="number"
                      min="1"
                      max="7"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 1 })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.budget.city}</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {cities.map((city) => (
                        <option key={city.value} value={city.value}>{city.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Scholarship */}
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.budget.scholarship}</label>
                    <select
                      value={formData.scholarship}
                      onChange={(e) => setFormData({ ...formData, scholarship: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {scholarships.map((scholarship) => (
                        <option key={scholarship.value} value={scholarship.value}>{scholarship.label}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={calculateBudget}
                    className="w-full btn-primary"
                  >
                    {t.budget.calculate}
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-6">{t.budget.result}</h2>
                
                {result ? (
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">{t.budget.tuition}</span>
                      <span className="font-semibold">{formatCurrency(result.tuition)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">{t.budget.living}</span>
                      <span className="font-semibold">{formatCurrency(result.living)}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">{t.budget.visa}</span>
                      <span className="font-semibold">{formatCurrency(result.visa)}</span>
                    </div>
                    <div className="flex justify-between py-4 bg-primary/10 rounded-lg px-4 mt-6">
                      <span className="font-bold text-lg">{t.budget.total}</span>
                      <span className="font-bold text-lg text-primary">{formatCurrency(result.total)}</span>
                    </div>

                    <p className="text-xs text-muted-foreground mt-4">
                      {language === 'fr' 
                        ? '* Ces estimations sont indicatives et peuvent varier selon l\'université et le programme choisis.'
                        : language === 'ar'
                        ? '* هذه التقديرات إرشادية وقد تختلف حسب الجامعة والبرنامج المختار.'
                        : '* These estimates are indicative and may vary depending on the university and program chosen.'}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                    <p className="text-center">
                      {language === 'fr' 
                        ? 'Remplissez le formulaire et cliquez sur "Calculer" pour voir votre estimation.'
                        : language === 'ar'
                        ? 'املأ النموذج وانقر على "احسب" لرؤية تقديرك.'
                        : 'Fill in the form and click "Calculate" to see your estimate.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {language === 'fr' ? 'Comprendre les Coûts' : language === 'ar' ? 'فهم التكاليف' : 'Understanding Costs'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="font-semibold mb-2">
                  {language === 'fr' ? 'Frais de Scolarité' : language === 'ar' ? 'الرسوم الدراسية' : 'Tuition Fees'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' 
                    ? 'Varient de 15,000 à 50,000 CNY/an selon le programme et l\'université.'
                    : language === 'ar'
                    ? 'تتراوح بين 15,000 و 50,000 يوان صيني/سنة حسب البرنامج والجامعة.'
                    : 'Range from 15,000 to 50,000 CNY/year depending on program and university.'}
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="font-semibold mb-2">
                  {language === 'fr' ? 'Frais de Vie' : language === 'ar' ? 'تكاليف المعيشة' : 'Living Expenses'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' 
                    ? 'Incluent le logement, la nourriture, le transport et les loisirs.'
                    : language === 'ar'
                    ? 'تشمل السكن والطعام والمواصلات والترفيه.'
                    : 'Include accommodation, food, transportation, and leisure.'}
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="font-semibold mb-2">
                  {language === 'fr' ? 'Bourses Disponibles' : language === 'ar' ? 'المنح المتاحة' : 'Available Scholarships'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' 
                    ? 'CSC, bourses provinciales et universitaires disponibles.'
                    : language === 'ar'
                    ? 'منح CSC والمنح الإقليمية والجامعية متاحة.'
                    : 'CSC, provincial and university scholarships available.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Budget;
