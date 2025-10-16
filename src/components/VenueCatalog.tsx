import { VenueResponse } from "@/interfaces/interface";
import Card from "@/components/Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueResponse>;
}) {
  const venuesData = await venuesJson;
  const venues = venuesData.data;

  return (
    <div className="flex justify-center gap-10 flex-wrap p-12">
      {venues.map((v) => (
        <Card
          key={v.id}
          venueName={v.name}
          imgSrc={v.picture}
          href={`/venue/${v.id}`}
        />
      ))}
    </div>
  );
}
