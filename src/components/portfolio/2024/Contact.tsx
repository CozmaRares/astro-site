import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section max-w-[40rem] space-y-4 pb-32 text-center sm:pb-40"
    >
      <h2 className="text-heading font-heading">Contact me</h2>
      <p>
        <span>Contact me directly at </span>
        <a
          className="inline-flex flex-row items-center gap-0.5 text-lg underline sm:text-xl"
          href="mailto:cozmarares11@gmail.com"
        >
          cozmarares11@gmail.com
          <Mail />
        </a>
      </p>
    </section>
  );
}
