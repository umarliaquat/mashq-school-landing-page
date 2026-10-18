import heroMascot from '../../../assets/hero-mascot-transparent.png';
import teacherAssignment from '../../../assets/teacher-assignment.png';
import parentDashboard from '../../../assets/parent-dashboard.png';
import adminTabDashboard from '../../../assets/admin-tab-dashboard.png';
import paperIllustration from '../../../assets/paper-homework-illustration.svg';
import React, { useEffect, useRef, useState } from 'react';
import adminDesktop from '../../../assets/admin-desktop.png';
import adminMobile from '../../../assets/admin-mobile.png';
import completedNew from '../../../assets/assignment-completed.png';
import practice from '../../../assets/practice.png';
import home from '../../../assets/student-home.png';
import assignments from '../../../assets/assignments.png';
import skills from '../../../assets/skills.png';
import complete from '../../../assets/complete.png';
import progress from '../../../assets/progress.png';
import './MashqSchoolLandingV3.css';
const SafeImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [props.src]);
  return failed ? <span className="v3-image-error" role="img" aria-label={props.alt || 'Image unavailable'} /> : <img {...props} onError={() => setFailed(true)} />;
};
const Phone = ({
  src,
  alt,
  className = ''
}: {
  src: string;
  alt: string;
  className?: string;
}) => <div className={`v2-phone ${className}`}><SafeImage src={src} alt={alt} /></div>;
const Mascot = ({
  className = ''
}: {
  className?: string;
}) => <div className={`v2-mascot ${className}`} role="img" aria-label="Mashq’s celebrating pink brain mascot, from the supplied completion screen"><SafeImage src={complete} alt="" /></div>;
const Demo = ({
  label = 'Book a demo',
  className = ''
}: {
  label?: string;
  className?: string;
}) => <a href="#mashq-v2-demo" className={`v2-btn ${className}`}>{label}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>;
const Brand = () => <a className="v2-brand" href="#mashq-v2-top" aria-label="Mashq home">mashq<span>.</span></a>;
const LineIcon = ({
  type
}: {
  type: number;
}) => <svg viewBox="0 0 32 32" aria-hidden="true" className="v2-icon">{type === 0 ? <><rect x="9" y="3" width="14" height="26" rx="4" /><path d="M14 25h4M13 7h6" /></> : type === 1 ? <><rect x="5" y="12" width="22" height="16" rx="4" /><path d="M10 12V8a6 6 0 0 1 12 0v4M12 20h.1M16 20h.1M20 20h.1" /></> : type === 2 ? <><path d="M4 6h9c3 0 3 3 3 3s0-3 3-3h9v21h-9c-3 0-3 2-3 2s0-2-3-2H4ZM16 9v20M8 12h4M20 12h4M8 17h4M20 17h4" /></> : <><rect x="3" y="5" width="26" height="21" rx="4" /><path d="M3 11h26M8 8h.1M12 8h.1M10 21l3-6 3 6M11 19h4M20 15v6" /></>}</svg>;
const faq = [['Which grades and subjects does Mashq cover?', 'Mashq covers Grades 1–8 in Math and English. Teachers choose skills by subject and topic.'], ['How do students log in?', 'Students use a school-provided username and a 4-digit PIN. No student email address is needed.'], ['How long does school setup take?', 'We’ll walk through your roster, classes and first assignment in the demo, then agree a setup plan for your school.'], ['Can we use our school logo and colours?', 'Yes. Your school branding can appear on login screens, certificates and parent emails.'], ['How is Mashq priced?', 'Priced per school. Book a demo to discuss a plan for your school.']];
const steps = [{
  title: 'Teacher assigns',
  text: 'Choose a class, pick a skill and set a due date. One clear task is ready for every student.',
  src: assignments,
  alt: 'Real Mashq assignments screen with due today and upcoming assignments',
  caption: 'Students see exactly what is due.',
  note: 'Student assignment view'
}, {
  title: 'Students practise',
  text: 'A username, a 4-digit PIN and one question at a time. Ayesha always knows her next step.',
  src: practice,
  alt: 'Real Mashq subtraction practice screen with correct answer feedback',
  caption: 'Practice, feedback, then the next question.',
  note: 'Real student practice screen'
}, {
  title: 'See the final result.',
  text: "Students see their result as soon as they finish. It then reaches the teacher's class view, and parents are updated by email.",
  src: completedNew,
  alt: 'Assignment Completed: confetti, pink brain mascot, 01:30, 5 of 5, 96 percent',
  caption: 'Every practice session leaves a clear result.',
  note: ''
}];
const views = [{
  name: 'Teachers',
  title: 'Less chasing.\nMore teaching.',
  benefits: ['Assign practice in 3 steps.', 'See who needs a little help next.', 'Share progress with parents in one tap.'],
  image: teacherAssignment,
  alt: 'Mashq teacher New Assignment screen with Grade 3 mathematics topics',
  caption: 'Choose skills and create an assignment in three steps.'
}, {
  name: 'Parents',
  title: 'A clear update.\nA familiar inbox.',
  benefits: ['School-branded mastery emails and weekly digests.', 'No app to install.', 'No parent login to remember.'],
  image: parentDashboard,
  alt: 'Parent dashboard showing Ayesha Akram’s assignments, mastered skills, scores and recent activity',
  caption: 'Your child’s practice and progress, in one clear view.'
}, {
  name: 'Admin',
  title: 'Your school.\nA clearer picture.',
  benefits: ['Your logo and colours on login, certificates and emails.', 'Manage class rosters and student credentials.', 'Follow usage across your school.'],
  image: adminTabDashboard,
  alt: 'Bright Futures admin dashboard with school statistics, quick actions and activity',
  caption: 'Your school’s classes, people and activity in one view.'
}];
const HomeworkRow = ({
  paper,
  title,
  body,
  image
}: {
  paper: string;
  title: string;
  body: string;
  image?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEntered(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        setEntered(true);
        observer.disconnect();
      }
    }, {
      threshold: .2
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={'v5-row' + (entered ? ' v5-entered' : '')}>
  <div className="v5-paper-card"><p><span>{paper}</span></p></div>
  <span className="v5-row-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></span>
  <div className="v5-mashq-card"><div className="v5-mashq-copy"><h3>{title}</h3><p>{body}</p></div><div className="v5-screen-crop">{image ? <SafeImage src={image} alt="Uploaded Mashq Due Today assignment list" /> : <span className="v5-missing-crop" aria-hidden="true" />}</div></div>
 </div>;
};
const HomeworkPanels = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEntered(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        setEntered(true);
        observer.disconnect();
      }
    }, {
      threshold: .12
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div className={'v6-panels' + (entered ? ' v6-entered' : '')} ref={ref}>
  <div className="v6-panel v6-paper">
   <span className="v6-pill">Paper homework</span>
   <div className="v6-paper-visual"><SafeImage src={paperIllustration} alt="Uploaded paper homework illustration" /></div>
   <ul>{['Homework written on the board', 'Marked by hand, days later', 'Parents hear at the meeting'].map(text => <li key={text}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17" /></svg><span>{text}</span></li>)}</ul>
  </div>
  <span className="v6-between-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></span>
  <div className="v6-panel v6-mashq">
   <span className="v6-pill">With Mashq</span>
   <div className="v6-product-visual">
    <span className="v6-circle" aria-hidden="true" />
    <Phone src={assignments} alt="Uploaded student assignments list" className="v6-assignments-phone" />
    <div className="v6-mastered-crop"><SafeImage src={skills} alt="Uploaded green Mastered badge" /></div>
    <div className="v6-progress-crop"><SafeImage src={assignments} alt="Uploaded assignment progress bar" /></div>
   </div>
   <Mascot className="v6-mascot" />
   <ul>{['Assigned in a minute, seen by every student', 'Marked instantly, with the worked solution', 'Parents get an email when a skill is mastered'].map(text => <li key={text}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg><span>{text}</span></li>)}</ul>
  </div>
 </div>;
};
export const MashqSchoolLandingV3 = ({ heroVersion = 'original' }: { heroVersion?: 'original' | 'school' }) => {
  const [step, setStep] = useState(0);
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const [formState, setFormState] = useState<'idle' | 'ready'>('idle');
  const howRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const scroll = () => {
      const el = howRef.current;
      if (!el || window.matchMedia('(max-width: 1200px), (max-height: 1000px)').matches) return;
      const box = el.getBoundingClientRect();
      const travel = box.height - window.innerHeight;
      setStep(Math.max(0, Math.min(2, Math.floor(-box.top / Math.max(1, travel) * 3))));
    };
    window.addEventListener('resize', scroll);
    window.addEventListener('scroll', scroll, {
      passive: true
    });
    scroll();
    return () => { window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); };
  }, []);
  return <div className="mashq-v2" id="mashq-v2-top">
  <header className="v2-nav"><div className="v2-container"><Brand /><nav aria-label="Main navigation"><a href="#mashq-v2-how">How it works</a><a href="#mashq-v2-views">For your school</a><a href="#mashq-v2-faq">FAQs</a></nav><Demo /></div></header>
  <main>
   {heroVersion === 'school' ? (
   <section className="v2-hero v7-hero"><div className="v2-container v2-hero-layout"><div className="v2-hero-copy">
    <p className="v7-eyebrow">Digital homework for schools</p>
    <h1>Homework your school<br />can <span>actually see.</span></h1>
    <p className="v7-subheading">Mashq replaces paper homework. Teachers assign Math and English skills, students practise on any phone, and parents and principals see every result.</p>
    <div className="v2-actions"><Demo label="Book a school demo" /><a className="v2-watch" href="#mashq-v2-how">See how it works<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" /></svg></a></div>
    <ul className="v7-chips">{['Math and English','Grades 1-8','Works on any phone'].map((label,i)=><li key={label}><svg viewBox="0 0 24 24" aria-hidden="true">{i===0?<><path d="M3 5h7l2 2 2-2h7v15h-7l-2 2-2-2H3ZM12 7v15" /></>:i===1?<><path d="m2 8 10-5 10 5-10 5ZM6 10v7l6 3 6-3v-7" /></>:i===2?<><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4" /></>:<path d="m5 12 4 4L19 6" />}</svg>{label}</li>)}</ul>
   </div><div className="v7-visual-shell"><div className="v2-hero-visual"><div className="v2-visual-block" /><div className="v2-hero-phone"><Phone src={practice} alt="Mashq’s real practice screen: 15 minus 8, answer 7, with encouraging feedback" /></div><div className="v2-real-mastered"><SafeImage src={skills} alt="Real mastered skill: Addition and Subtraction, 20 out of 20 questions, 96 percent score" /></div><div className="v2-real-progress"><SafeImage src={assignments} alt="Real assignment card with 33 percent progress" /></div><div className="v7-hero-mascot"><SafeImage src={heroMascot} alt="Mashq’s celebrating pink brain mascot" /></div><span className="v2-screen-caption">Real practice. A clear next step.</span></div></div></div></section>
   ) : (
   <section className="v2-hero"><div className="v2-container v2-hero-layout"><div className="v2-hero-copy"><h1>Practice that<br />finishes.<br /><span>Progress you<br />can see.</span></h1><p>Teachers assign. Students practise until they master it. Parents and admins see every result.</p><div className="v2-actions"><Demo /><a className="v2-watch" href="#mashq-v2-how"><span className="v2-play" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="m5 3 7 5-7 5Z" /></svg></span>Watch how it works</a></div><p className="v2-assurance">Grades 1–8 <span>·</span> Works on any phone <span>·</span> No app to install</p></div><div className="v2-hero-visual"><div className="v2-visual-block" /><div className="v2-hero-phone"><Phone src={practice} alt="Mashq’s real practice screen: 15 minus 8, answer 7, with encouraging feedback" /></div><div className="v2-real-mastered"><SafeImage src={skills} alt="Real mastered skill: Addition and Subtraction, 20 out of 20 questions, 96 percent score" /></div><div className="v2-real-progress"><SafeImage src={assignments} alt="Real assignment card with 33 percent progress" /></div><Mascot className="v2-hero-mascot" /><span className="v2-screen-caption">Real practice. A clear next step.</span></div></div></section>
   )}
   <section className="v2-how" id="mashq-v2-how" ref={howRef}><div className="v2-container v2-how-inner"><div className="v2-how-copy"><h2>A school day.<br />Three simple steps.</h2><div className="v2-step-list">{steps.map((s, i) => <button className={`v2-step ${step === i ? 'v2-active-step' : ''}`} key={s.title} onClick={() => setStep(i)} aria-current={step === i ? 'step' : undefined}><span className="v2-step-number">0{i + 1}</span><span><strong>{s.title}</strong><span className="v2-step-text">{s.text}</span></span></button>)}</div><div className="v2-how-progress" aria-label={`Step ${step + 1} of 3`}><i style={{
                transform: `scaleX(${(step + 1) / 3})`
              }} /></div></div><div className="v2-how-screen"><Phone key={steps[step].src} src={steps[step].src} alt={steps[step].alt} /><p>{steps[step].caption}</p>{step === 2 ? <div className="v3-result-route" aria-label="Student to Teacher to Parent"><span><i />Student</span><b>&gt;</b><span><i />Teacher</span><b>&gt;</b><span><i />Parent</span></div> : <small>{steps[step].note}</small>}</div></div></section>
   <section className="v6-homework" id="mashq-homework">
    <div className="v2-container">
     <div className="v6-heading"><h2>Homework,<br /><span>off paper.</span></h2><p>Mashq does the setting, marking and reporting that teachers do by hand today.</p></div>
     <HomeworkPanels />
     <div className="v6-demo"><Demo /></div>
    </div>
   </section>
   <section className="v2-views" id="mashq-v2-views"><div className="v2-container"><div className="v2-views-heading"><h2>One platform.<br /><span>Three clear views.</span></h2><div className="v2-tabs" role="tablist" aria-label="School community views">{views.map((v, i) => <button role="tab" aria-selected={tab === i} aria-controls="mashq-v2-view-panel" className={tab === i ? 'v2-tab-selected' : ''} key={v.name} onClick={() => setTab(i)}>{v.name}</button>)}</div></div><div className="v2-view-panel" role="tabpanel" id="mashq-v2-view-panel" aria-label={views[tab].name}><div className="v2-tab-image"><div className="v2-phone v2-view-phone"><div className="v2-view-phone-scroll" role="region" aria-label={`${views[tab].name} screen`}><SafeImage src={views[tab].image} alt={views[tab].alt} /></div></div><p>{views[tab].caption}</p></div><div className="v2-tab-copy"><h3>{views[tab].title.split('\n').map((line, i) => <React.Fragment key={line}>{i > 0 && <br />}{line}</React.Fragment>)}</h3><ul>{views[tab].benefits.map(b => <li key={b}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>{b}</li>)}</ul></div></div></div></section>

<section className="v3-schools" id="mashq-v3-schools"><div className="v2-container">
 <h2>Run the whole school<br />from one screen.</h2>
 <p className="v3-schools-intro">Add students and teachers, create classes, send credentials and see activity across every class. Your school's name and colours appear throughout.</p>
 <div className="v3-device-stage">
  <div className="v3-laptop"><div className="v3-laptop-lid"><span className="v3-camera" /><div className="v3-laptop-display"><SafeImage src={adminDesktop} alt="Bright Futures school desktop admin dashboard: students, teachers, classes, assignments, quick actions, weekly activity and recent activity" /></div></div><div className="v3-laptop-base"><span /></div><span className="v3-device-tag">Desktop</span></div>
  <div className="v3-admin-mobile"><div className="v3-iphone"><span className="v3-island" /><div className="v3-mobile-display"><SafeImage src={adminMobile} alt="Bright Futures mobile admin dashboard with school statistics, quick actions, weekly activity and recent activity" /></div></div><span className="v3-device-tag">Mobile</span></div>
  <div className="v3-callout v3-stat-callout"><strong>See the whole school</strong><p>Students, teachers, classes and assignments at a glance.</p><span className="v3-callout-line"><i /></span></div>
  <div className="v3-callout v3-quick-callout"><strong>Set up in minutes</strong><p>Add students, import a class list, create classes, send credentials.</p><span className="v3-callout-line"><i /></span></div>
  <div className="v3-callout v3-chart-callout"><strong>Know it's being used</strong><p>Active students and assignments, day by day.</p><span className="v3-callout-line"><i /></span></div>
  <div className="v3-callout v3-feed-callout"><strong>Stay in the loop</strong><p>Submissions, imports and new classes as they happen.</p><span className="v3-callout-line"><i /></span></div>
 </div>
 <p className="v3-brand-caption">Shown with Bright Futures School branding.</p>
 <div className="v3-school-facts"><span>Bulk import your class lists</span><span>Your logo and colours everywhere</span><span>Works on desktop and mobile</span></div>
 <div className="v3-school-action"><Demo /></div>
</div></section>

   <section className="v2-trust" id="mashq-v2-trust"><div className="v2-container v2-trust-layout"><div className="v2-proof"><h2>Made for<br />real schools.</h2></div><div className="v2-facts-grid">{[['Shared phones. School computers.', 'Works wherever a student practises.'], ['Username + 4-digit PIN.', 'Simple sign-in for young learners.'], ['Questions teachers can review.', 'See each question before assigning.'], ['English UI. Mobile-first.', 'A clear experience on a small screen.']].map(([title, body], i) => <div key={title}><LineIcon type={i} /><h3>{title}</h3><p>{body}</p></div>)}</div></div></section>
   <section className="v2-faq" id="mashq-v2-faq"><div className="v2-container v2-faq-layout"><h2>A few things<br />you might<br /><span>be wondering.</span></h2><div className="v2-faq-list">{faq.map(([q, a], i) => <div className="v2-faq-item" key={q}><button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`v2-answer-${i}`}><span>{q}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" />{open !== i && <path d="M12 5v14" />}</svg></button>{open === i && <p id={`v2-answer-${i}`}>{a}</p>}</div>)}</div></div></section>
   <section className="v2-final" id="mashq-v2-demo"><div className="v2-container v2-final-layout"><div className="v2-final-copy"><h2>Your school<br /><span>+</span> Mashq<br /><span>=</span> <u>___</u></h2><p>See how Mashq fits your school.<br />Start with a demo.</p><Mascot className="v2-final-mascot" /></div><form className="v2-form" onSubmit={e => {
            e.preventDefault();
            setFormState('ready');
          }}><h3>Let’s practise<br />a better school day.</h3><label htmlFor="v2-name">Your name<input id="v2-name" name="name" autoComplete="name" required /></label><label htmlFor="v2-school">School name<input id="v2-school" name="school" autoComplete="organization" required /></label><label htmlFor="v2-whatsapp">WhatsApp number<input id="v2-whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" required pattern="[+0-9 ()-]{7,20}" title="Enter a valid WhatsApp number, including your country code if outside Pakistan." /></label><button className="v2-btn" type="submit">Book my demo<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>{formState === 'ready' && <p className="v2-form-status" role="status">Preview only: your details are valid. Demo requests will be sent once the form is connected.</p>}</form></div></section>
  </main>

<footer className="v3-footer"><div className="v2-container">
 <svg className="v3-filter-defs" width="0" height="0" aria-hidden="true"><defs><filter id="v3-white-knockout" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -10 -10 -10 0 28.5" /></filter></defs></svg>
 <div className="v3-footer-top"><div className="v3-footer-summary"><Brand /><p>Math and English practice for Grades 1-8.<br />Built for schools in Pakistan.</p><Demo /></div><Mascot className="v3-footer-mascot" /></div>
 <div className="v3-footer-columns">
  <div><h3>Product</h3><a href="#mashq-v2-how">How it works</a><a href="#mashq-v2-views">For teachers</a><a href="#mashq-v2-views">For parents</a><a href="#mashq-v3-schools">For schools</a><a href="#mashq-v2-faq">FAQs</a></div>
  <div><h3>For schools</h3><a href="#mashq-v2-demo">Book a demo</a><a href="#mashq-v3-schools">School setup</a><a href="#mashq-v3-schools">Your branding</a><a href="#mashq-v2-trust">Question library</a></div>
  <div><h3>Contact</h3><span>WhatsApp</span><span>Email</span><span>City</span></div>
  <div><h3>Legal</h3><span>Privacy policy</span><span>Terms of use</span><span>Student data and privacy</span></div>
 </div>
 <div className="v3-footer-wordmark" aria-hidden="true">mashq</div>
 <div className="v3-footer-bottom"><span>(c) 2026 Mashq</span><span>Made in Pakistan</span></div>
</div></footer>

  <div className="v2-mobile-bar"><span>See Mashq for your school.</span><Demo /></div>
 </div>;
};