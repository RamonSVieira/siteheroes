export function StoriesFamous() {
  return (
    <div className="bg-header dark:bg-zinc-800 relative">
      <div className="py-6 px-6 max-w-5xl mx-auto bg-[#9cd4da] flex items-center flex-col gap-10 text-primary-text dark:text-white">
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
