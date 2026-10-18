import { MashqSchoolLandingV3 } from './components/generated/MashqSchoolLandingV3';
export default function App() { return <MashqSchoolLandingV3 heroVersion={new URLSearchParams(window.location.search).get('hero') === 'school' ? 'school' : 'original'} />; }
