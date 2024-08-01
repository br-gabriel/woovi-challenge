export function Badge({ text, top }) {
  return (
    <div
      className={`z-50 ${top} left-5 absolute mt-5 min-w-16 px-4 flex items-center justify-center font-extrabold text-lg text-text-dark bg-[#E5E5E5] rounded-full`}
    >
      {text}
    </div>
  );
}
