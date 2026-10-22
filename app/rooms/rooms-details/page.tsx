import AmenitiesFacilities from "@/components/rooms-details/AmenitiesFacilities";
import OceanViewSuite from "@/components/rooms-details/OceanViewSuite";
import RoomsDetailsBanner from "@/components/rooms-details/RoomsDetailsBanner";
import StayToRemember from "@/components/rooms-details/StayToRemember";


export default function RoomsDetails() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <RoomsDetailsBanner />
      <OceanViewSuite />
      <AmenitiesFacilities />
      <StayToRemember />
    </div>
  );
}
