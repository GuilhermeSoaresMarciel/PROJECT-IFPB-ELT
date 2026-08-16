import profile from "../assets/profile.png";

function TaskMain() {
  return (
    <main
      id="jornada"
      className="relative flex-1 overflow-hidden bg-slate-900 px-5 py-10 sm:px-8 sm:py-14 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(245,158,11,0.08),transparent_25%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="glass-card group relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[2rem] p-6 shadow-2xl shadow-slate-950/30 sm:p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/20" />
          <div className="relative flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
              Perfil em destaque
            </span>
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              Disponível
            </span>
          </div>

          <div className="relative mx-auto my-8">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-300/70 via-sky-400/20 to-amber-200/60 opacity-70 blur-sm transition duration-500 group-hover:opacity-100" />
            <div className="relative h-56 w-56 overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-800 shadow-2xl shadow-cyan-950/30 sm:h-64 sm:w-64">
              <img
                src={profile}
                alt="Retrato de Guilherme Soares Marciel"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="relative">
            <p className="text-2xl font-black tracking-tight text-white">
              Guilherme Soares Marciel
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Estudante técnico em Eletromecânica
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center rounded-[2rem] border border-slate-800 bg-slate-950/55 p-6 shadow-2xl shadow-slate-950/20 sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              Minha jornada
            </p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              Aprender fazendo,{" "}
              <span className="text-slate-400">evoluir criando.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Sou estudante do curso técnico em Eletromecânica pelo IFPB —
              Campus Itabaiana. Tenho interesse em tecnologia e em inovações que
              unem eletricidade e mecânica para transformar ideias em realidade.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 border-y border-slate-800 py-5 sm:gap-5">
            <div>
              <p className="text-2xl font-black text-cyan-300">01</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Curiosidade
                <br />
                técnica
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-amber-200">02</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Áreas que
                <br />
                se conectam
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-emerald-300">03</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Foco em
                <br />
                prática
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-sm font-bold text-slate-200">
              Áreas de interesse
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-4 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5 text-cyan-300"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2 4.5 13h6L10 22l8.5-11h-6L13 2Z"
                  />
                </svg>
                <p className="mt-3 text-sm font-bold text-slate-100">
                  Eletricidade
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Energia e controle
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200/15 bg-amber-200/[0.06] p-4 transition hover:-translate-y-1 hover:border-amber-200/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5 text-amber-200"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8.5" />
                  <path strokeLinecap="round" d="M12 7.5v9M7.5 12h9" />
                </svg>
                <p className="mt-3 text-sm font-bold text-slate-100">
                  Mecânica
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Movimento e precisão
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4 transition hover:-translate-y-1 hover:border-emerald-300/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5 text-emerald-300"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"
                  />
                </svg>
                <p className="mt-3 text-sm font-bold text-slate-100">
                  Inovação
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Ideias em ação
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default TaskMain;
