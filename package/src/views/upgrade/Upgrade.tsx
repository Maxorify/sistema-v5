import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";

const features = [
  {
    id: 1,
    icon: "solar:chart-2-bold",
    title: "Analíticas avanzadas",
    description:
      "Visualizaciones en tiempo real, métricas comparativas y reportes automáticos listos para compartir con tu equipo.",
  },
  {
    id: 2,
    icon: "solar:cpu-bolt-bold",
    title: "Automatizaciones inteligentes",
    description:
      "Programá flujos que sincronizan ventas, inventario y tareas críticas sin depender de procesos manuales.",
  },
  {
    id: 3,
    icon: "solar:shield-check-bold",
    title: "Seguridad empresarial",
    description:
      "Controles de acceso por roles, bitácoras de auditoría y copias de respaldo cifradas listas para auditorías.",
  },
  {
    id: 4,
    icon: "solar:widget-3-bold",
    title: "Tableros personalizables",
    description:
      "Construí vistas para cada área con widgets modulares, filtros dinámicos y KPIs a medida.",
  },
  {
    id: 5,
    icon: "solar:users-group-rounded-bold",
    title: "Colaboración integrada",
    description:
      "Comentarios, aprobaciones y asignación de responsables directamente sobre cada módulo operativo.",
  },
  {
    id: 6,
    icon: "solar:cloud-upload-bold",
    title: "Integraciones ilimitadas",
    description:
      "Conecta tu CRM, ERP o herramientas financieras mediante API unificada y webhooks listos para usar.",
  },
];

const plans = [
  {
    id: 1,
    name: "Profesional",
    price: "$49",
    frequency: "por mes",
    description: "Ideal para equipos en expansión que necesitan control en tiempo real.",
    highlights: [
      "5 tableros personalizados",
      "Automatizaciones programadas",
      "Soporte prioritario en español",
    ],
  },
  {
    id: 2,
    name: "Enterprise",
    price: "Hablar",
    frequency: "con ventas",
    description: "Implementación a medida, acompañamiento experto y SLA dedicado.",
    highlights: [
      "Integración con sistemas legados",
      "Onboarding y capacitación",
      "Account manager dedicado",
    ],
  },
];

const Upgrade = () => {
  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top,_#1d3d8f,_#0a193f_65%)] p-10 text-white shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              <Icon icon="solar:crown-star-bold" width={18} />
              Netdash Pro
            </span>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Actualizá tu operación a una plataforma ejecutiva, sin perder la simplicidad que ya conocés.
            </h1>
            <p className="text-base text-white/80 md:text-lg">
              Con Netdash Pro sumás analíticas predictivas, automatizaciones listas para producción y herramientas de gobierno corporativo.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#11275c] transition hover:bg-[#5d87ff] hover:text-white"
              >
                <Icon icon="solar:arrow-left-linear" width={18} />
                Volver al dashboard
              </Link>
              <a
                href="mailto:ventas@netdash.pro"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <Icon icon="solar:chat-square-call-bold" width={18} />
                Agendar demo personalizada
              </a>
            </div>
          </div>
          <div className="hidden h-full min-w-[240px] items-center justify-center rounded-3xl bg-white/5 p-8 backdrop-blur lg:flex">
            <div className="space-y-4 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Panel ejecutivo</p>
              <div className="space-y-2">
                <p className="text-3xl font-semibold">+37%</p>
                <p className="text-sm text-white/70">Productividad media de equipos que migran a Netdash Pro*</p>
              </div>
              <p className="text-[11px] text-white/50">*Datos recolectados de clientes en Latinoamérica durante 2024.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-dark dark:text-white">Todo lo que incluye la versión Pro</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="group h-full rounded-2xl border border-transparent bg-white p-6 shadow-[0_18px_45px_-25px_rgba(10,21,63,0.2)] transition hover:-translate-y-1 hover:border-[#5d87ff] hover:shadow-[0_25px_60px_-30px_rgba(93,135,255,0.45)] dark:bg-dark"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8ecff] text-[#334eff] transition group-hover:bg-[#5d87ff] group-hover:text-white dark:bg-[#1b264f] dark:text-[#5d87ff]">
                <Icon icon={feature.icon} width={22} />
              </span>
              <h3 className="mb-3 text-lg font-semibold text-dark dark:text-white">{feature.title}</h3>
              <p className="text-sm text-dark/70 dark:text-white/70">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <article key={plan.id} className="flex h-full flex-col justify-between rounded-3xl border border-[#d9dffb] bg-white p-8 shadow-[0_18px_45px_-28px_rgba(17,39,92,0.35)] dark:border-dark/40 dark:bg-dark">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-dark dark:text-white">{plan.name}</h3>
              <p className="text-sm text-dark/70 dark:text-white/70">{plan.description}</p>
              <div className="flex items-baseline gap-2 text-[#2741a6] dark:text-[#829bff]">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm font-medium uppercase tracking-[0.25em]">{plan.frequency}</span>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-dark/80 dark:text-white/75">
                  <Icon icon="solar:check-circle-bold" width={18} className="mt-0.5 text-[#5d87ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:ventas@netdash.pro"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#5d87ff] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#3d66ff]"
            >
              <Icon icon="solar:arrow-right-up-linear" width={18} />
              Solicitar propuesta
            </a>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Upgrade;
