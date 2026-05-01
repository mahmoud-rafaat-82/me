import data from "@/data/portfolio.json";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Stats } from "@/components/portfolio/Stats";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Clients } from "@/components/portfolio/Clients";
import { Industries } from "@/components/portfolio/Industries";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useEffect } from "react";

const Index = () => {
  const { personal, stats, expertise, skills, experience, clients, industries, education } = data;

  useEffect(() => {
    document.title = `${personal.name} | ${personal.title}`;
  }, [personal.name, personal.title]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar name={personal.name} available={personal.available_for_work} />
      <Hero
        name={personal.name}
        title={personal.title}
        tagline={personal.tagline}
        initials={personal.avatar_initials}
      />
      <Stats stats={stats} />
      <About
        about={personal.about}
        location={personal.location}
        phones={personal.phone}
        behance={personal.behance}
      />
      <Expertise items={expertise} />
      <Skills skills={skills} />
      <Experience items={experience} />
      <Clients egypt={clients.egypt} libya={clients.libya} />
      <Industries industries={industries} />
      <Education items={education} />
      <Contact phones={personal.phone} behance={personal.behance} location={personal.location} />
      <Footer name={personal.name} title={personal.title} />
    </main>
  );
};

export default Index;
