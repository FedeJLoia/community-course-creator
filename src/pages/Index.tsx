
import { Section } from "@/components/Section";
import { TeacherForm } from "@/components/TeacherForm";
import { TopicCard } from "@/components/TopicCard";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [currentArea, setCurrentArea] = useState(0);
  const areas = ["Paid Media", "Estrategia SEO", "Diseño Gráfico"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArea((current) => (current + 1) % areas.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex flex-col justify-center items-center text-center">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 fade-up">
          Comunidad Julius
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl fade-up">
          Comparte tus Conocimientos con la Comunidad Julius
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8 fade-up">
          ¿Tienes un alto nivel de conocimiento y experiencia en{" "}
          <span className="inline-block min-w-[140px] font-medium text-foreground transition-all duration-500">
            {areas[currentArea]}
          </span>?
          ¿Te gustaría transmitirla a otros profesionistas?
        </p>
        <p className="text-lg font-medium fade-up">
          Te invitamos a impartir un curso de 3 a 4 horas, virtual y/o presencial,
          para los miembros de la comunidad Julius.
        </p>
      </Section>

      {/* Community Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center fade-up">
            ¿Quiénes forman parte de la comunidad Julius?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 fade-up">
              <h3 className="text-xl font-semibold mb-4">Colaboradores Actuales</h3>
              <p className="text-muted-foreground">
                Profesionales activos que comparten su experiencia y conocimiento.
              </p>
            </Card>
            <Card className="p-6 fade-up">
              <h3 className="text-xl font-semibold mb-4">Ex-Colaboradores</h3>
              <p className="text-muted-foreground">
                Personas que han dejado su huella en nuestra comunidad.
              </p>
            </Card>
            <Card className="p-6 fade-up">
              <h3 className="text-xl font-semibold mb-4">Clientes</h3>
              <p className="text-muted-foreground">
                Partners que confían en nuestros servicios y expertise.
              </p>
            </Card>
            <Card className="p-6 fade-up">
              <h3 className="text-xl font-semibold mb-4">Amigos de Julius</h3>
              <p className="text-muted-foreground">
                Personas cercanas que comparten nuestros valores y visión.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why You Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 fade-up">¿Por Qué Tú?</h2>
          <p className="text-lg text-muted-foreground mb-6 fade-up">
            Tu experiencia y conocimiento son únicos. La comunidad Julius valora la
            diversidad de perspectivas y la experiencia práctica que profesionales
            como tú pueden aportar.
          </p>
          <p className="text-lg fade-up">
            Ser instructor en Julius no solo te permite compartir tu conocimiento,
            sino también expandir tu red profesional y dejar una huella duradera
            en otros profesionales.
          </p>
        </div>
      </Section>

      {/* Course Dynamics */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center fade-up">
            ¿Cómo funcionan los cursos?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TopicCard
              title="Flexibilidad"
              description="Adapta la estructura del curso según tu experiencia y el tema a impartir."
            />
            <TopicCard
              title="Duración"
              description="3-4 horas distribuidas en una o varias sesiones."
            />
            <TopicCard
              title="Modalidad"
              description="Virtual, presencial o híbrida, según tu preferencia y disponibilidad."
            />
            <TopicCard
              title="Nivel"
              description="Enfoque en contenido intermedio y avanzado para maximizar el valor."
            />
          </div>
        </div>
      </Section>

      {/* Priority Topics */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center fade-up">
            Temas Prioritarios
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <TopicCard
              title="Marketing Digital"
              description="SEO, SEM, Redes Sociales, Email Marketing"
            />
            <TopicCard
              title="Analítica"
              description="Data Analysis, Business Intelligence, Visualización"
            />
            <TopicCard
              title="IA Aplicada"
              description="Machine Learning, NLP, Computer Vision"
            />
            <TopicCard
              title="Productividad"
              description="Gestión del tiempo, Metodologías ágiles"
            />
            <TopicCard
              title="Desarrollo Web"
              description="Frontend, Backend, Full Stack"
            />
            <TopicCard
              title="Soft Skills"
              description="Liderazgo, Comunicación, Trabajo en equipo"
            />
          </div>
        </div>
      </Section>

      {/* Compensation */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 fade-up">Compensación</h2>
          <p className="text-lg text-muted-foreground mb-6 fade-up">
            Valoramos tu tiempo y experiencia. La compensación se acuerda
            directamente contigo, considerando el tema, formato y duración del curso.
          </p>
          <p className="text-lg fade-up">
            Tú propones los honorarios que consideres justos por compartir tu
            conocimiento con la comunidad.
          </p>
        </div>
      </Section>

      {/* Registration Form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center fade-up">
            ¿Te Animas a impartir un Curso?
          </h2>
          <Card className="p-8 fade-up">
            <TeacherForm />
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Index;
