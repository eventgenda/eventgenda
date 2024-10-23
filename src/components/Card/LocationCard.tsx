import { LocationType } from "@/types/location.type";
import Image from "next/image";
import Link from "next/link";

type Props = {
  location: LocationType;
};

export default function LocationCard({ location }: Props) {
  return (
    <div className="rounded overflow-hidden flex flex-col border">
      <div className="sm:flex justify-between items-center pt-4 px-5">
        <Link
          href="#"
          className="sm:w-8/12 font-medium text-md  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
        >
          {location.name}
        </Link>
      </div>

      <div className="relative h-1/2">
        <Link href="#">
          <Image
            className="w-full h-1/2"
            src={location.thumbnail}
            alt="location"
            width={1500}
            height={625}
          />
        </Link>
        <Link
          href="#!"
          className="hidden absolute z-10 text-xs bottom-0 left-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"
        >
          <span className="text-lg">|</span>&nbsp;&nbsp;
          <span>{location.location}</span>
        </Link>

        <Link
          href="#!"
          className="hidden absolute z-10 text-xs bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"
        >
          <span className="text-lg">|</span>&nbsp;&nbsp;<span>Read more</span>
        </Link>
      </div>
    </div>
  );
}
