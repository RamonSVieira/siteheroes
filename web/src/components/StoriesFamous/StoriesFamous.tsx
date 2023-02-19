export function StoriesFamous() {
  return (
    <div className="relative">
      <div className="bg-header my-24 rounded-3xl dark:bg-zinc-800 py-6 px-6 max-w-5xl mx-auto flex items-center flex-col gap-10 text-primary-text dark:text-white">
        <h2 className="text-4xl font-bold">Mais famosas</h2>

        <div className="w-full flex gap-6">
          <div className="min-w-[72px] w-full h-[600px] bg-black rounded-[37px] bg-stark bg-cover bg-center"></div>
          <div className="min-w-[72px] h-[600px] bg-black rounded-[37px] bg-cap bg-cover bg-bottom"></div>
          <div className="min-w-[72px] h-[600px] bg-black rounded-[37px] bg-stark bg-cover bg-center"></div>
          <div className="min-w-[72px] h-[600px] bg-black rounded-[37px] bg-cap bg-cover bg-bottom"></div>
        </div>
      </div>
    </div>
  );
}
