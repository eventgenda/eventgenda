import { EventType } from "@/types/event.type";
import { calculateDateLeft } from "@/utils/day";
import { formatUppercase } from "@/utils/text";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CategoryChip from "../Chips/CategoryChip";
import ProgressBar from "../Progress/ProgressBar";

type Props = {
  event: EventType;
};

export default function EventCard({ event }: Props) {
  return (
    <Link href={`/event/${event._id}`}>
      <div className="bg-white relative w-[330px] rounded-xl shadow border border-indigo-300 hover:border-indigo-500 duration-100 cursor-pointer">
        <div className="h-36 relative">
          <div className="h-full relative">
            <Image
              src={event.thumbnail}
              alt="events"
              className="h-full absolute object-cover object-top w-full rounded-t-lg"
              width={1000}
              height={1000}
            />
            <div className="absolute -bottom-5 left-3">
              <Image
                className="w-14 h-14 rounded-full"
                src={event.createdBy?.organization?.profileImage as string}
                alt="avatar"
                width={1000}
                height={1000}
              />
            </div>
            <div className="absolute top-0 left-1">
              <div className=" bg-indigo-800 text-white text-sm p-2 px-5 m-2 rounded-lg border border-gray-700 shadow">
                {calculateDateLeft(event.registrationStartDate)} Days Left
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <Typography variant="h5" className="text-indigo-900 pt-4 text-2xl">
            {event.title}
          </Typography>
          <Typography
            variant="h6"
            className="text-gray-600 pt-4 text-base font-light"
          >
            {event.description}
          </Typography>
        </div>
        <div className="w-full px-4">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            {event.categories.map((category) => (
              <CategoryChip key={category._id} category={category.name} />
            ))}
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2.5,
            py: 2,
            pt: 4,
            backgroundColor: "white",
          }}
        >
          <ProgressBar
            width={
              (event.amountRaised / event.amountRequired) * 100 > 100
                ? 100
                : (event.amountRaised / event.amountRequired) * 100
            }
          />
          <Typography variant="body2" className="text-gray-600 pl-2 uppercase">
            {Math.round((event.amountRaised / event.amountRequired) * 100)} %
          </Typography>
        </Box>
        <div className="flex justify-between items-center p-5 border-t border-indigo-300">
          <div className="flex flex-col">
            <p className="font-normal text-black text-xl">Prize</p>
            <div className="flex items-center text-indigo-800 space-x-2 whitespace-nowrap">
              <p className="font-normal text-black text-xl">
                {event.prizes[0]} $
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-center text-indigo-800 space-x-2 whitespace-nowrap">
              <PeopleIcon className="w-5 h-5" />
              <p className="font-normal text-black text-lg">
                {event.participants.length}
              </p>
            </div>
            <div className="flex items-center justify-center text-indigo-800 space-x-2 whitespace-nowrap">
              <EmojiEventsIcon className="w-5 h-5" />
              <p className="font-normal text-black text-lg">
                {formatUppercase(event.status)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
