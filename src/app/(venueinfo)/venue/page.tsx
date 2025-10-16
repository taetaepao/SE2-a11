import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default async function VenuePage() {
  const venuesJson = getVenues();

  return (
    <main>
      <h1 className="text-2xl font-bold text-center text-black mt-20">Select Your Venue</h1>
      <VenueCatalog venuesJson={venuesJson} />
    </main>
  );
}
