interface TitleProps {
  name: string;
  text: string;
}

export function Title({ name, text }: TitleProps) {
  return (
    <h1 className="font-extrabold text-text-dark text-2xl text-center max-w-sm mb-5">
      {`${name}, ${text}`}
    </h1>
  );
}
