import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <Image
        src="/loading.png"
        alt="Loading..."
        width={270}
        height={154}
        priority
      />
    </div>
  );
}
