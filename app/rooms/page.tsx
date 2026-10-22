import RoomsBanner from "@/components/rooms/RoomsBanner";
import RoomsSuites from "@/components/rooms/RoomsSuites";


export default function Rooms() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <RoomsBanner />
      <RoomsSuites />
    </div>
  );
}
