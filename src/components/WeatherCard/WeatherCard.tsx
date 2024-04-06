import Image from "next/image";
import Card from "../Card/Card";
import ConnectedCard from "../ConnectedCard/ConnectedCard";
import PowerOffSlider from "../PowerOffSlider/PowerOffSlider";

const WeatherCard = () => {
  return (
    <Card className="p-4">
      <div className="grid gap-5">
        <span className="text-base font-medium">Today, 25 November 2022</span>
        <div className="flex gap-2">
          <Image
            width={16.01}
            height={16.01}
            src="/compass-icon-grey.svg"
            alt="compass"
          />
          <span className="text-sm font-medium text-[#474747]">Perambur</span>
          <Image
            width={16}
            height={16}
            src="/down-icon-grey.svg"
            alt="compass"
          />
        </div>
        <div className="flex gap-5">
          <span className="text-base font-medium">Climate</span>
          <div className="flex gap-2 items-center">
            <div>
              <span className="text-sm font-medium text-[#676767]">
                Cloudless:
              </span>
              <span>
                <span className="text-sm font-medium">17°</span>
              </span>
            </div>
            <span className="text-sm font-medium text-[#676767]">C</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#E4F4FA]">
            <Image
              width={54}
              height={54}
              src="/snowflake-icon-blue.svg"
              alt="compass"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex gap-2">
              <span className="text-4xl font-medium">16°</span>
              <span className="text-[#DA4848] text-4xl font-medium">C</span>
            </div>
            <div>
              <span className="text-base font-medium text-[#6C6C6C]">
                Window
              </span>{" "}
              <span className="text-base font-medium">Closed</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <ConnectedCard className="!w-[4.25rem] !h-[5.063] !bg-[#BBF9F1] ">
            <Image
              src="/cool-icon-black.svg"
              alt="cool"
              width={32}
              height={32}
            />
            <span className="text-sm font-medium">Cool</span>
          </ConnectedCard>
          <ConnectedCard className="!w-[4.25rem] !h-[5.063] !bg-[#C9FFD8] ">
            <Image src="/dry-icon-black.svg" alt="dry" width={32} height={32} />
            <span className="text-sm font-medium">Dry</span>
          </ConnectedCard>
          <ConnectedCard className="!w-[4.25rem] !h-[5.063] !bg-[#FFC7C7] ">
            <Image
              src="/heat-icon-black.svg"
              alt="heat"
              width={32}
              height={32}
            />
            <span className="text-sm font-medium">Heat</span>
          </ConnectedCard>
        </div>
        <div>
          <PowerOffSlider />
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
