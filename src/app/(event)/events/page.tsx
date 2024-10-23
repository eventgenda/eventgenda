"use client";

import Banner from "@/components/Banner/Banner";
import EventCard from "@/components/Card/EventCard";
import SelectOptions from "@/components/Select/SelectOption";
import { useEvent } from "@/hooks/useEvent";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { Fragment } from "react";

export default function EventsPage() {
  const { events } = useEvent();
  return (
    <Fragment>
      <Banner title="Events" />
      <div className="bg-gray-200 h-20 w-full flex items-center justify-center">
        <SelectOptions
          title="Type"
          icon={<SortByAlphaIcon />}
          options={["All", "Webinar", "Meetup", "Workshop"]}
          width="200px"
        />
        <SelectOptions
          title="Category"
          icon={<FlagRoundedIcon />}
          options={["All", "Tech", "Business", "Design"]}
          width="200px"
        />
      </div>
      <div className="flex justify-center container mx-auto py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {events &&
            events.map((event) => {
              return <EventCard key={event._id} event={event} />;
            })}
        </div>
      </div>
    </Fragment>
  );
}
