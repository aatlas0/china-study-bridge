import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, Info, Calculator, CheckCircle2 } from 'lucide-react';

const Budget = () => {
  const { t, language } = useLanguage();
  const { format, convert, currency } = useCurrency();

  const [level, setLevel] = useState('bachelor');
  const [scholarship, setScholarship] = useState('full');

  const levels = [
    { value: 'bachelor', label: language === 'fr' ? 'Licence' : language === 'ar' ? 'بكالوريوس' : 'Bachelor', tuitionValue: 25000, housingValue: 12000, stipend: 0 },
    { value: 'master', label: language === 'fr' ? 'Master' : language === 'ar' ? 'ماجستير' : 'Master', tuitionValue: 30000, housingValue: 15000, stipend: 36000 },
    { value: 'phd', label: language === 'fr' ? 'Doctorat' : language === 'ar' ? 'دكتوراه' : 'PhD', tuitionValue: 40000, housingValue: 20000, stipend: 42000 },
    { value: 'language', label: language === 'fr' ? 'Langue Chinoise' : language === 'ar' ? 'اللغة الصينية' : 'Chinese Language', tuitionValue: 18000, housingValue: 10000, stipend: 0 },
  ];

  const currentLevel = levels.find(l => l.value === level) || levels[0];

  const scholarshipMultipliers = {
    full: 1,
    partial: 0.5,
    none: 0
  };

  const mult = scholarshipMultipliers[scholarship as keyof typeof scholarshipMultipliers];
  const totalBenefitsValue = (currentLevel.tuitionValue + currentLevel.housingValue + currentLevel.stipend) * mult;
  const remainingInvestment = (currentLevel.tuitionValue * (1 - mult)) + 15000 + 5000;

  const globalComparisons = [
    { country: 'USA', cost: 450000, icon: '🇺🇸', color: 'bg-blue-500/10 text-blue-600' },
    { country: 'UK', cost: 280000, icon: '🇬🇧', color: 'bg-red-500/10 text-red-600' },
    { country: 'France', cost: 150000, icon: '🇫🇷', color: 'bg-indigo-500/10 text-indigo-600' },
    { country: 'China', cost: 30000, icon: '🇨🇳', color: 'bg-primary/20 text-primary', highlight: true },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <TrendingDown className="w-96 h-96 absolute -bottom-20 -right-20 rotate-12" />
        </div>
        <div className="container-custom mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none px-6 py-1.5 text-sm font-bold uppercase tracking-wider">
            {t.budget.investmentTitle}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
            {t.budget.valueHeroTitle}
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-xl leading-relaxed">
            {t.budget.valueHeroSubtitle}
          </p>
        </div>
      </section>

      <div className="container-custom mx-auto px-4 relative z-10 py-20 space-y-24">

        {/* Global Comparison Section */}
        <section className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">{t.budget.comparisonTitle}</h2>
            <p className="text-muted-foreground">{t.budget.comparisonSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalComparisons.map((c, i) => (
              <Card key={i} className={`relative overflow-hidden border-border/50 hover-lift ${c.highlight ? 'border-primary ring-2 ring-primary/20 shadow-xl' : 'shadow-sm'}`}>
                {c.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter">
                    {t.budget.chinaBestValue}
                  </div>
                )}
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${c.color} flex items-center justify-center text-3xl mb-6 shadow-sm`}>
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{c.country}</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{language === 'fr' ? 'Coût Moyen / An' : language === 'ar' ? 'متوسط التكلفة / سنة' : 'Avg. Cost / Year'}</p>
                    <p className={`text-2xl font-extrabold ${c.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {format(convert(c.cost, 'MAD', currency), currency)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Scholarship Value Discovery Tool */}
        <section className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-none">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 bg-card border-r border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{t.budget.valueToolTitle}</h2>
                </div>
                <p className="text-muted-foreground mb-10 text-lg">
                  {t.budget.valueToolDescription}
                </p>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold block uppercase tracking-wider text-muted-foreground">
                      {t.budget.program}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {levels.map((l) => (
                        <button
                          key={l.value}
                          onClick={() => setLevel(l.value)}
                          className={`px-4 py-3 rounded-xl border-2 transition-all text-sm font-semibold ${level === l.value ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-primary/30'}`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold block uppercase tracking-wider text-muted-foreground">
                      {t.budget.scholarship}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {(['full', 'partial', 'none'] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => setScholarship(s)}
                          className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all text-sm font-semibold ${scholarship === s ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:border-primary/30'}`}
                        >
                          {s === 'full' ? (language === 'fr' ? 'Complète' : language === 'ar' ? 'كاملة' : 'Full') :
                            s === 'partial' ? (language === 'fr' ? 'Partielle' : language === 'ar' ? 'جزئية' : 'Partial') :
                              (language === 'fr' ? 'Aucune' : language === 'ar' ? 'بدون' : 'None')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-primary flex flex-col justify-center relative overflow-hidden">
                <TrendingDown className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 pointer-events-none" />

                <div className="space-y-10 relative z-10">
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <p className="text-primary-foreground/60 text-sm font-bold uppercase tracking-[0.2em] mb-3">
                      {t.budget.totalBenefits}
                    </p>
                    <p className="text-5xl md:text-6xl font-black text-primary-foreground leading-tight">
                      +{format(convert(totalBenefitsValue, 'CNY', currency), currency)}
                    </p>
                    <p className="text-primary-foreground/60 text-xs mt-2 italic">
                      {language === 'fr' ? '* Comprend Frais de Scolarité + Logement + Allocation' : language === 'ar' ? '* تشمل الرسوم الدراسية + السكن + الراتب' : '* Includes Tuition + Housing + Allowance'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10 animate-in fade-in slide-in-from-right-4 duration-700">
                    <div>
                      <p className="text-primary-foreground/60 text-[10px] font-bold uppercase tracking-wider mb-1">
                        {t.budget.realInvestment}
                      </p>
                      <p className="text-xl font-bold text-primary-foreground">
                        {format(convert(remainingInvestment, 'CNY', currency), currency)}
                      </p>
                    </div>
                    <div>
                      <p className="text-primary-foreground/60 text-[10px] font-bold uppercase tracking-wider mb-1">
                        {t.budget.savingsVsEurope}
                      </p>
                      <p className="text-xl font-bold text-green-300">
                        {scholarship === 'full' ? '90%' : scholarship === 'partial' ? '70%' : '50%'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* ROI Section */}
        <section className="bg-secondary/30 rounded-[3rem] p-12 md:p-20 text-center max-w-5xl mx-auto">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20">
            <Info className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            {t.budget.roiTitle}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            {t.budget.roiDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                ),
                title: language === 'fr' ? 'Placement Carrière' : language === 'ar' ? 'التوظيف المهني' : 'Career Placement',
                desc: language === 'fr' ? 'Accès direct aux entreprises chinoises au Maroc.' : language === 'ar' ? 'وصول مباشر للشركات الصينية في المغرب.' : 'Direct access to Chinese companies in Morocco.'
              },
              {
                icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                ),
                title: language === 'fr' ? 'Réseau Mondial' : language === 'ar' ? 'شبكة عالمية' : 'Global Network',
                desc: language === 'fr' ? 'Connectez-vous avec des leaders mondiaux à Shanghai et Pékin.' : language === 'ar' ? 'تواصل مع قادة العالم في شنغهاي وبكين.' : 'Connect with world leaders in Shanghai and Beijing.'
              },
              {
                icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
                ),
                title: language === 'fr' ? 'Mandarin & Compétences' : language === 'ar' ? 'الماندرين والمهارات' : 'Mandarin & Skills',
                desc: language === 'fr' ? 'Maîtrisez la langue du futur (Atout #1 pour le CV).' : language === 'ar' ? 'أتقن لغة المستقبل (الميزة #1 في السيرة الذاتية).' : 'Master the language of the future (Asset #1 for the CV).'
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="text-3xl">{item.icon}</div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Budget;
