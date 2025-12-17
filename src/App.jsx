import Header from "./components/Header";
import HeroTextSection from "./components/HeroTextSection";
import HeroVideoSection from "./components/HeroVideoSection";

function App() {
  return (
    <>
      <Header
         brandName="STUDIO X"
  headlineText="Crafting interactive experiences through design and technology"
  ctaText="START A PROJECT"
  menuItems={[
    "Home",
    "About Us",
    "Projects",
    "Contact",
    "Labs",
  ]}
      />
<HeroVideoSection/>
<HeroTextSection/>
      
    </>
  );
}

export default App;
