"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const images = ["/img/cover.jpg", "/img/cover2.jpg"];

export default function Banner() {
  const [idx, setIdx] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const nextImage = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="relative h-[400px] w-full select-none" onClick={nextImage}>
      <Image
        src={images[idx]}
        alt="banner"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-6 py-6 bg-black/60 rounded-xl  mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Where every event finds its venue
          </h1>
          <h3 className="text-xl md:text-2xl">
            เราพร้อมให้บริการสถานที่จัดเลี้ยงสำหรับทุกโอกาสสำคัญของคุณ
          </h3>
        </div>
      </div>

      <button
        className="
          absolute bottom-4 right-4
          bg-white/90 text-gray-800
          px-4 py-2 rounded-lg shadow
          hover:bg-white transition
        "
        onClick={() => router.push("/venue")}
      >
        Select Venue
      </button>

      {session?.user?.name && (
        <div className="absolute top-4 right-6 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-lg shadow">
          Welcome {session.user.name}
        </div>
      )}
    </div>
  );
}
