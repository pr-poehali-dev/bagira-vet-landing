import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG = 'https://cdn.poehali.dev/projects/1661d12a-2c01-4998-9e1f-37ac2c597b5a/files/d291841e-d387-4321-9e3b-6addfe992872.jpg';
const INTERIOR_IMG = 'https://cdn.poehali.dev/projects/1661d12a-2c01-4998-9e1f-37ac2c597b5a/files/9212ffe9-ed69-49a7-b941-02b6722569f3.jpg';
const CAT_IMG = 'https://cdn.poehali.dev/projects/1661d12a-2c01-4998-9e1f-37ac2c597b5a/files/76dff586-fa87-47a7-b488-c0006857a98b.jpg';
const LOGO_IMG = 'https://cdn.poehali.dev/projects/1661d12a-2c01-4998-9e1f-37ac2c597b5a/bucket/d9df8623-9a31-490e-90b6-8d900537b805.jpg';

const NAV = [
  { id: 'about', label: 'О клинике' },
  { id: 'services', label: 'Услуги' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Stethoscope', title: 'Приём терапевта', desc: 'Полный осмотр, диагностика и назначение лечения для вашего питомца.' },
  { icon: 'Syringe', title: 'Вакцинация', desc: 'Профилактика болезней по индивидуальному графику прививок.' },
  { icon: 'Scissors', title: 'Хирургия', desc: 'Операции любой сложности в стерильной операционной.' },
  { icon: 'HeartPulse', title: 'УЗИ и анализы', desc: 'Современная диагностика для точного и быстрого результата.' },
  { icon: 'Bath', title: 'Груминг', desc: 'Стрижка, мытьё и уход за шерстью с любовью и заботой.' },
  { icon: 'Ambulance', title: 'Вызов на дом', desc: 'Приедем к вам, чтобы не тревожить питомца лишний раз.' },
];

const GALLERY = [HERO_IMG, INTERIOR_IMG, CAT_IMG, INTERIOR_IMG, CAT_IMG, HERO_IMG];

const REVIEWS = [
  { name: 'Анна Соколова', pet: 'хозяйка кота Барсика', text: 'Самая тёплая клиника! Врачи относятся к питомцам как к родным. Барсик перестал бояться визитов.', stars: 5 },
  { name: 'Дмитрий Орлов', pet: 'хозяин лабрадора Рекса', text: 'Спасли нашего Рекса после сложной операции. Внимательные, профессиональные, всегда на связи.', stars: 5 },
  { name: 'Мария Лебедева', pet: 'хозяйка кошки Мурки', text: 'Уютная атмосфера, никакой суеты. Всё объяснили, успокоили и помогли. Огромное спасибо!', stars: 5 },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="Логотип Багира" className="w-12 h-12 rounded-full object-cover ring-1 ring-primary/30" />
            <span className="font-display text-3xl font-bold leading-none">Багира</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="rounded-full">
            <Icon name="Phone" size={16} className="mr-1.5" />
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden paw-pattern">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Icon name="Heart" size={15} className="text-accent" />
              Заботимся о питомцах с 2010 года
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-balance mb-6">
              Здоровье вашего любимца — в добрых руках
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Ветеринарная клиника «Багира» — место, где лечат с любовью. Уютная атмосфера, опытные врачи и забота на каждом шагу.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full text-base px-7" onClick={() => scrollTo('contacts')}>
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-7 bg-card" onClick={() => scrollTo('services')}>
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-accent/15 rounded-[2.5rem] -rotate-3" />
            <img src={HERO_IMG} alt="Ветеринар с питомцами" className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-square" />
            <img src={LOGO_IMG} alt="Логотип Багира" className="absolute -top-5 -right-5 w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-xl ring-4 ring-card bg-card" />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-primary/10 text-primary">
                <Icon name="Clock" size={22} />
              </span>
              <div>
                <p className="font-semibold text-sm">Работаем 24/7</p>
                <p className="text-xs text-muted-foreground">Всегда рядом</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <img src={INTERIOR_IMG} alt="Интерьер клиники" className="rounded-[2rem] shadow-xl w-full object-cover aspect-[4/3]" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-hand text-3xl text-accent">О клинике</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">Тепло, забота и профессионализм</h2>
            <p className="text-muted-foreground mb-6">
              Мы создали «Багиру» как уютный дом, где каждому питомцу комфортно и спокойно. Здесь нет суеты и стресса — только внимательные врачи и мягкая атмосфера.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { num: '15+', label: 'лет опыта' },
                { num: '20k+', label: 'счастливых питомцев' },
                { num: '12', label: 'врачей-экспертов' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-secondary/60 p-5 text-center">
                  <p className="font-display text-4xl font-bold text-primary">{s.num}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-hand text-3xl text-accent">Услуги</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Всё для здоровья питомца</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="group bg-card rounded-3xl p-8 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={s.icon} size={26} />
                </span>
                <h3 className="font-display text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-hand text-3xl text-accent">Галерея</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Атмосфера нашей клиники</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i % 5 === 0 ? 'md:row-span-2' : ''}`}>
                <img src={src} alt={`Фото клиники ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 aspect-square" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-hand text-3xl text-accent">Отзывы</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Что говорят наши клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-card rounded-3xl p-8 border border-border/50">
                <div className="flex gap-1 mb-4 text-accent">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-current" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-primary/10 text-primary font-semibold">
                    {r.name[0]}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 md:py-28">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <span className="font-hand text-3xl text-accent">Контакты</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-8">Запишитесь на приём</h2>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Icon name="MapPin" size={20} />
                </span>
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-muted-foreground text-sm">г. Донецк, ул. Лесная, 14</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Icon name="Phone" size={20} />
                </span>
                <div>
                  <p className="font-semibold">Телефон</p>
                  <a href="tel:+74951234567" className="text-muted-foreground text-sm hover:text-primary transition-colors">+7 (495) 123-45-67</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Icon name="Clock" size={20} />
                </span>
                <div>
                  <p className="font-semibold">Часы работы</p>
                  <p className="text-muted-foreground text-sm">Пн–Пт: 9:00–21:00 · Сб–Вс: 10:00–20:00</p>
                  <p className="text-accent text-sm font-medium">Экстренная помощь — круглосуточно</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="Карта клиники Багира"
                src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=15"
                width="100%"
                height="100%"
                frameBorder="0"
                className="grayscale-[0.2]"
              />
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-lg h-fit">
            <h3 className="font-display text-3xl font-bold mb-6">Оставьте заявку</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться?" className="rounded-xl bg-background h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Телефон</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="rounded-xl bg-background h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Сообщение</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Расскажите о вашем питомце" className="rounded-xl bg-background min-h-28" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-xl text-base">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">Мы перезвоним в течение 15 минут</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="Логотип Багира" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-foreground/30" />
            <span className="font-display text-2xl font-bold">Багира</span>
          </div>
          <p className="text-sm text-primary-foreground/70">Ветеринарная клиника заботы · © 2024</p>
          <div className="flex gap-4">
            {['Instagram', 'Send', 'Phone'].map((ic) => (
              <a key={ic} href="#" className="grid place-items-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Icon name={ic} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;