import Image from "next/image";

export default function AboutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-full w-full">
        <Image
          src={"./bg.webp"}
          className="fixed w-full h-full bg-base-200 brightness-[0.2] opacity-90 -z-10"
          alt={"my-profile"}
          sizes="100vw"
          width={0}
          height={0}
          priority
        />
        <div className="w-full flex justify-center items-center">
          <div className="prose prose-lg md:prose-lg font-serif w-full !prose-invert p-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
