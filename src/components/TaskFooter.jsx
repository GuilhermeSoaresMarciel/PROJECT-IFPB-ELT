function TaskFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold text-slate-200">
            Construindo o próximo circuito.
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Portfólio acadêmico · IFPB Campus Itabaiana
          </p>
        </div>
        <p className="text-xs text-slate-500">
          Desenvolvido por{" "}
          <span className="font-bold text-cyan-300">
            Guilherme Soares Marciel
          </span>
        </p>
      </div>
    </footer>
  );
}

export default TaskFooter;
