function TaskHeader() {
  return (
    <header className="relative overflow-hidden border-b border-slate-800/80 bg-slate-950/80">
      <div className="absolute -left-24 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300 shadow-lg shadow-cyan-950/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 2 4.5 13h6L10 22l8.5-11h-6L13 2Z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300/80">
              IFPB · Itabaiana
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-100 sm:text-base">
              Portfólio de Eletromecânica
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-300 sm:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          Em constante evolução
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 pt-4 sm:px-8 sm:pb-14 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Tecnologia · Prática · Futuro
          </p>
          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Energia para criar.
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-amber-200 bg-clip-text text-transparent">
              Precisão para transformar.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Uma jornada de aprendizagem que conecta eletricidade, mecânica e
            inovação para transformar ideias em soluções reais.
          </p>
        </div>
      </div>
    </header>
  );
}

export default TaskHeader;
