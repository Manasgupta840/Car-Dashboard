import Image from "next/image";
import Card from "../Card/Card";
import { ReactNode } from "react";
import classNames from "classnames";
import ConnectedCard from "../ConnectedCard/ConnectedCard";

const ConnectedDevice = () => {
  return (
    <Card className="p-4">
      <div className="grid gap-1">
        <span className="font-medium text-base">Connected Device</span>
        <span className="font-medium text-xs text-[#6C6C6C]">
          Sathish’s Iphone 13
        </span>
        <div className="flex gap-5 mt-2">
          <ConnectedCard className="bg-gradient-to-bl to-[#0FC100] from-[#6CFF95] !gap-0 ">
            <Image
              src="/battery-icon.svg"
              alt="battery"
              width={24}
              height={14}
            />
            <span className="text-xl font-normal text-white">70%</span>
            <span className="text-[10px] font-medium text-white">Charged</span>
          </ConnectedCard>
          <ConnectedCard className="bg-gradient-to-bl to-[#EE19CC] from-[#FFB3F3] ">
            <Image
              src="/missed-call-icon.svg"
              alt="missed"
              width={19.84}
              height={20}
            />
            <span className="text-[10px] font-medium text-white text-nowrap">
              5 Missed Calls
            </span>
          </ConnectedCard>
          <ConnectedCard className="bg-gradient-to-bl to-[#0943DB] from-[#A2ABF8] ">
            <Image
              src="/notification-bell-icon.svg"
              alt="bell"
              width={20.1}
              height={20}
            />
            <span className="text-[10px] font-medium text-white text-nowrap">
              8 Notifications
            </span>
          </ConnectedCard>
          <ConnectedCard className="bg-gradient-to-bl to-[#E75E4C] from-[#FFA26E] ">
            <Image
              src="/logout-icon.svg"
              alt="logout"
              width={14.51}
              height={20}
            />
            <span className="text-[10px] font-medium text-white">
              Dissconnect
            </span>
          </ConnectedCard>
        </div>
      </div>
    </Card>
  );
};

export default ConnectedDevice;
