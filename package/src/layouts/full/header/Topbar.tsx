import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";

const Topbar = () => {
    return (
        <div className="sticky top-0 z-40 bg-[linear-gradient(90deg,_#08153a_0%,_#14306e_100%)] px-6 py-4 shadow-[0_18px_45px_-25px_rgba(8,21,58,0.65)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-3 text-white md:flex-row md:items-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                        <Icon icon="solar:rocket-outline" width={22} />
                    </span>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Netdash Pro Suite</p>
                        <h2 className="text-xl font-semibold leading-tight">Eleva tu panel con una experiencia premium</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-white/80 sm:flex-row sm:items-center sm:justify-end">
                    <p className="text-sm leading-relaxed sm:max-w-md">
                        Automatiza reportes, recibe analíticas en tiempo real y personaliza cada tablero con módulos avanzados.
                    </p>
                    <Link
                        to="/upgrade"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#132b68] transition hover:bg-[#5d87ff] hover:text-white"
                    >
                        <Icon icon="solar:flash-bold" width={18} />
                        Ver versión Pro
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topbar;