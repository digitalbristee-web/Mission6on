import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thanks",
  description:
    "Watch the next-step video before your free digital marketing consultation.",
};

const vimeoUrl = "";
const whatsappUrl = "";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-[#f7faff] px-5 py-8 text-[#0f1c2e]">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col items-center justify-center text-center">
        <Image
          src="/consultant-logo.png"
          alt="Digital Marketing Consultation"
          width={260}
          height={120}
          priority
          className="mb-8 h-auto w-48 sm:w-64"
        />
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#071423] sm:text-5xl">
          Wait... watch the video before you go
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4d6175]">
          Before your consultation, please watch this short video so you know
          what to do next.
        </p>

        <div className="mt-10 w-full overflow-hidden rounded-md border border-[#dbe6f1] bg-white p-3 shadow-sm">
          {vimeoUrl ? (
            <iframe
              src={vimeoUrl}
              title="Consultation next steps video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full rounded-md"
            />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center rounded-md bg-[#e9f2fb] px-6 text-center">
              <p className="max-w-md text-base font-bold leading-7 text-[#123a62]">
                Vimeo video will be added here after you provide the link.
              </p>
            </div>
          )}
        </div>

        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-8 inline-flex min-h-14 items-center justify-center rounded-md bg-[#123a62] px-8 text-base font-bold text-white shadow-lg shadow-[#123a62]/20 transition hover:bg-[#081c32]"
          >
            Chat with me on WhatsApp
          </a>
        ) : (
          <Link
            href="/"
            className="focus-ring mt-8 inline-flex min-h-14 items-center justify-center rounded-md bg-[#123a62] px-8 text-base font-bold text-white shadow-lg shadow-[#123a62]/20 transition hover:bg-[#081c32]"
          >
            Back to consultation page
          </Link>
        )}
      </section>
    </main>
  );
}
