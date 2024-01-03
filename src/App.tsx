import About from './components/About';
import HeaderBackground from './components/HeaderBackground';
import Hero from './components/Hero';
import IntelligenceSteps from './components/IntelligenceSteps';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <main className="relative overflow-x-hidden">
      <HeaderBackground />

      <div className="w-full pb-24 relative">
        <NavBar />

        <Hero />

        <Wrapper>
          <About />

          <IntelligenceSteps />
        </Wrapper>
      </div>
    </main>
  );
}

export default App;
