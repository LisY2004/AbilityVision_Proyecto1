import Header from "../components/Header";
import Section from "../components/Section";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 p-8 sm:p-20 font-sans">
      <Header />

      <main>
        <Section title="¿Qué es la Inteligencia Artificial?">
          <p>
            La inteligencia artificial es un campo que combina ciencia de la computación, matemáticas y estadística para desarrollar algoritmos que permiten a las máquinas aprender, razonar y tomar decisiones (Russell & Norvig, 2020). Algunos ejemplos comunes incluyen reconocimiento facial, asistentes virtuales y vehículos autónomos.
          </p>
        </Section>

        <Section title="Tipos de Inteligencia Artificial">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>IA débil:</strong> Sistemas diseñados para realizar tareas específicas, como Siri o Alexa.</li>
            <li><strong>IA fuerte:</strong> Sistemas con capacidades cognitivas generales similares a las humanas, aún en desarrollo.</li>
            <li><strong>Aprendizaje automático:</strong> Técnica que permite a las máquinas aprender de datos sin programación explícita.</li>
          </ul>
        </Section>

        <Section title="Aplicaciones actuales">
          <p>
            La IA está presente en múltiples sectores: salud (diagnóstico asistido), finanzas (análisis de riesgos), industria (robots autónomos) y entretenimiento (recomendadores de contenido), transformando la forma en que interactuamos con la tecnología.
          </p>
        </Section>
      </main>

      <footer className="max-w-4xl mx-auto text-center mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} Página informativa creada con Next.js y Tailwind CSS
      </footer>
    </div>
  );
}
