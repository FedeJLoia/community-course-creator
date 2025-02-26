
import { Section } from "@/components/Section";
import { TeacherForm } from "@/components/TeacherForm";
import { TopicCard } from "@/components/TopicCard";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [currentArea, setCurrentArea] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const areas = ["Paid Media", "Estrategias", "Posicionamiento"];
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const targetText = areas[currentArea];
    
    if (currentText !== targetText) {
      timeoutId = setTimeout(() => {
        setCurrentText(current => {
          if (current === targetText) return current;
          const nextChar = targetText.slice(0, current.length + 1);
          return nextChar;
        });
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setCurrentArea((current) => (current + 1) % areas.length);
        setCurrentText("");
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentArea, currentText]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex flex-col justify-center items-center text-center relative">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/3fd1e264-1a63-42a6-b6d8-db975aa19508.png")',
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        
        {/* Logo */}
        <div className="absolute top-8 left-8 z-20">
          <img 
            src="/lovable-uploads/90950888-f272-478a-a3a0-b2ae527899d0.png"
            alt="Julius Logo" 
            className="h-16 w-auto"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block fade-up">
            Comunidad Julius
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-up text-gradient">
            Comparte tus Conocimientos con la Comunidad Julius
          </h1>
          <p className="text-lg text-white/80 mb-8 fade-up mx-auto max-w-2xl">
            ¿Tienes un alto nivel de conocimiento y experiencia en{" "}
            <span className="inline-block min-w-[140px] font-medium text-primary transition-all duration-500">
              {currentText}
            </span>?
            ¿Te gustaría transmitirla a otros profesionistas?
          </p>
          <p className="text-lg font-medium text-white fade-up mx-auto max-w-2xl">
            Te invitamos a impartir un curso de 3 a 4 horas, virtual y/o presencial,
            para los miembros de la comunidad Julius.
          </p>
        </div>
      </Section>

      {/* Community Section */}
      <Section className="bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 fade-up text-gradient">
            ¿Quiénes forman parte de la comunidad Julius?
          </h2>
          <p className="text-lg text-white/90 fade-up leading-relaxed max-w-3xl mx-auto">
            Nos referimos a la comunidad Julius como los colaboradores actuales y pasados, 
            clientes y otras personas que son cercanas a Julius. Es un compromiso de Julius 
            mantener una mejor comunicación y generar más valor a toda su comunidad.
          </p>
        </div>
      </Section>

      {/* Why You Section */}
      <Section className="bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 fade-up text-gradient bg-gradient-to-r from-primary to-primary/80">
            ¿Por Qué Tú?
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-white mb-6 fade-up leading-relaxed">
              Tu experiencia y conocimiento son únicos. La comunidad Julius valora la
              diversidad de perspectivas y la experiencia práctica que profesionales
              como tú pueden aportar.
            </p>
            <p className="text-xl text-white/90 fade-up leading-relaxed">
              Ser instructor en Julius no solo te permite compartir tu conocimiento,
              sino también expandir tu red profesional y dejar una huella duradera
              en otros profesionales.
            </p>
          </div>
        </div>
      </Section>

      {/* Course Dynamics */}
      <Section className="bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center fade-up text-gradient">
            Dinámica del curso
          </h2>
          <h3 className="text-xl font-semibold mb-8 text-center fade-up text-white/90">
            Cómo funcionan los cursos
          </h3>
          <div className="space-y-6 text-white/90 text-lg fade-up">
            <p>
              Puedes diseñar tu curso libremente, de acuerdo con tu estilo.
            </p>
            <p>
              El objetivo es crear un espacio donde se promueva el aprendizaje, la discusión 
              activa y la aplicación práctica de los conocimientos.
            </p>
            <p>
              Visualizamos en bloques de 1 a 2 horas (con un total de 3 a 4 horas), para 
              que no sea cansado para ponentes y participantes.
            </p>
            <p>
              Tienes la opción de proponer un curso diseñado para principiantes, o para 
              personas con conocimientos intermedios o avanzados. Dado el perfil de nuestra 
              comunidad, queremos dar prioridad a los cursos intermedios y avanzados.
            </p>
            <p>
              Los cursos podrían ser virtuales, presenciales o híbridos (presenciales para 
              algunas personas y virtuales para los que no puedan asistir). También buscaremos 
              grabar los cursos para las personas que no puedan empatar sus horarios.
            </p>
          </div>
        </div>
      </Section>

      {/* Priority Topics */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center fade-up text-gradient">
            Temas Prioritarios
          </h2>
          <p className="text-lg text-white/90 mb-8 text-center">
            Aunque estamos abiertos a explorar ideas, hay algunas categorías de temas que quisiéramos priorizar. 
            Por ejemplo:
          </p>
          <ul className="space-y-4 text-white/90">
            <li className="fade-up p-4 glass hover:bg-white/20 transition-colors duration-300">
              Estrategias de generación digital de demanda
            </li>
            <li className="fade-up p-4 glass hover:bg-white/20 transition-colors duration-300">
              Desarrollo de marcas a través de canales digitales
            </li>
            <li className="fade-up p-4 glass hover:bg-white/20 transition-colors duration-300">
              Paid media avanzado
            </li>
            <li className="fade-up p-4 glass hover:bg-white/20 transition-colors duration-300">
              Analítica digital intermedia y avanzada
            </li>
            <li className="fade-up p-4 glass hover:bg-white/20 transition-colors duration-300">
              Aplicaciones prácticas, intermedias y avanzadas, de la inteligencia artificial en algún área de la mercadotecnia digital
            </li>
            <li className="fade-up p-4 glass hover:bg-white/20 transition-colors duration-300">
              Técnicas de organización y productividad personal
            </li>
          </ul>
        </div>
      </Section>

      {/* Registration Form */}
      <Section className="bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-6 fade-up text-gradient">
                ¿Te animas a impartir un curso?
              </h2>
              <p className="text-lg text-white/90 fade-up leading-relaxed">
                Si te interesa impartir un curso completa el formulario a continuación 
                para enviarnos tu propuesta.
              </p>
            </div>
            <Card className="p-8 bg-white/10 backdrop-blur-md border-white/20 fade-up">
              <TeacherForm />
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Index;
