import Container from "@/components/Common/Container";
import AddEvent from "./AddEvent";
import EventsTable from "./EventsTable";
import { getAllEventsData } from "@/lib/data/getEventData";
import { Events } from "@/types";

const Settings = async () => {
  const Events = await getAllEventsData();

  return (
    <Container>
      <div>
        <div className=" my-4 py-6 rounded-md bg-white dark:bg-black">
          <h2 className="text-xl text-center font-extrabold leading-tight  lg:text-2xl">
            Event Settings
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <AddEvent />
          <div className="col-span-2">
            <EventsTable events={Events as Events[]} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Settings;
