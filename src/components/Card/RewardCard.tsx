import { RewardType } from "@/types/reward.type";
import Image from "next/image";
import Link from "next/link";

type Props = {
  index: number;
  reward: RewardType;
};

export default function RewardCard(props: Props) {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link href={`/reward/${props.reward._id}`}>
        <Image
          src={props.reward.image}
          alt="Reward"
          className="h-80 w-72 object-cover rounded-t-xl"
          width={500}
          height={500}
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {props.reward.category}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {props.reward.name}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {props.reward.price} ฿
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                {props.reward.price * 2} ฿
              </p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
