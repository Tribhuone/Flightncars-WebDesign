
export default function LoginCard({ label, icon: Icon }) {
  return (
    <button className="flex min-h-14 items-center gap-2 rounded-xl bg-white px-3 py-2 text-left shadow-md ring-1 ring-slate-100">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
        <Icon className="h-6 w-6" strokeWidth={1.9} />
      </div>
      <span className="text-[14px] font-medium leading-4 text-slate-950 whitespace-pre-line overflow-hidden">
        {label}
      </span>
    </button>
  );
}
