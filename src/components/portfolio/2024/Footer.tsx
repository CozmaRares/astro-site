export default function Footer() {
  return (
    <footer className="mx-auto w-3/4 max-w-[30rem] pb-10 text-center text-gray-500">
      <div className="text-xs">
        <p className="pb-2 font-bold">Built With</p>
        <p>Astro, TypeScript, Tailwind CSS</p>
        <p className="font-semibold italic">&amp; deployed on Vercel.</p>
      </div>
    </footer>
  );
}
