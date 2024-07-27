export function Title({ name, text }) {
  return (
    <h1 className="font-extrabold text-[#4D4D4D] text-2xl text-center max-w-sm mb-5">
      {`${name}, ${text}`}
    </h1>
  );
}
