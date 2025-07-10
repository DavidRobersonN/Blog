import clsx from "clsx";

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          "text-4x1/normal font-extrabold py-8",
          "sm:text-5xl/normal sm:py-10",
          "md:text-6xl/normal md:py-12",
          "md:text-7xl/normal lg:py-13"
        )}
      >
        <a href="#">The Blog</a>
      </h1>
    </header>
  );
}
