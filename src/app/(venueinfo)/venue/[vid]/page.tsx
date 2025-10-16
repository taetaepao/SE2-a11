import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function Page({ 
  params 
}: { 
  params: Promise<{ vid: string }> 
}) {
  const { vid } = await params;
  const singleVenueResponse = await getVenue(vid);

  return (
    <main className="max-w-3xl mx-auto p-10 text-black">
      <h1 className="text-3xl font-bold mb-6">{singleVenueResponse.data.name}</h1>

      <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={singleVenueResponse.data.picture}
          alt={singleVenueResponse.data.name}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-6 space-y-2 text-gray-700 leading-relaxed">
        <p>
          <strong>Address:</strong> {singleVenueResponse.data.address}, {singleVenueResponse.data.district},{" "}
          {singleVenueResponse.data.province} {singleVenueResponse.data.postalcode}
        </p>
        <p>
          <strong>Contact:</strong> {singleVenueResponse.data.tel}
        </p>
        <p>
          <strong>Daily Rate:</strong> ฿{singleVenueResponse.data.dailyrate.toLocaleString()}
        </p>
      </div>
    </main>
  );
}

