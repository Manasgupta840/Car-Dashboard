import Image from "next/image";
import Card from "../Card/Card";
import VolumeBar from "../VolumeBar/VolumeBar";
import { useState } from "react";

const MusicCard = () => {
  const [isMusicOn, setIsMusicOn] = useState<boolean>(false);
  const handlePlay = () => {
    setIsMusicOn(!isMusicOn);
  };
  return (
    <Card className="p-4 w-[19.5rem]">
      <div className="w-[16.875rem] grid gap-5 mb-5">
        <div className="w-full flex justify-between">
          <div className="flex gap-2">
            <Image
              src="/music-icon-black.svg"
              alt="music"
              width={20}
              height={14.98}
            />
            <span className="text-base font-medium text-black">
              Now Playing
            </span>
          </div>
          <Image
            src="circle-dots-icon-grey.svg"
            alt="circle"
            width={20}
            height={20}
          />
        </div>
        <div className="flex gap-5 items-center content-center">
          <Image
            src="music-card-icon.svg"
            alt="circle"
            width={100}
            height={100}
          />
          <div className="w-[9.75rem] h-[3.25rem] grid gap-4">
            <div className="flex justify-between">
              <span className="text-black text-sm">Look At Me</span>
              <Image
                src="heart-icon-grey.svg"
                alt="heart"
                width={20}
                height={20}
              />
            </div>
            <div className="text-[#858181] text-sm">XXX Tentacion</div>
          </div>
        </div>
        <div className="w-full grid justify-between">
          <input type="range" className="w-[16.875rem]" />
          <div className="flex w-full justify-between text-[#37B3E2] font-medium text-[10px]">
            <span>02:44</span>
            <span>04:40</span>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[11.229rem] h-[1.875rem] flex justify-between">
            <Image
              width={13.33}
              height={21.33}
              alt="left"
              src="/left-arrow-icon-black.svg"
            />
            {isMusicOn ? (
              <Image
                onClick={handlePlay}
                width={24.09}
                height={30}
                alt="pause"
                src="/play-icon-black.svg"
              />
            ) : (
              <Image
                onClick={handlePlay}
                width={24.09}
                height={30}
                alt="pause"
                src="/pause-icon-blue.svg"
              />
            )}
            <Image
              width={13.33}
              height={21.33}
              alt="right"
              src="/right-arrow-icon-black.svg"
            />
          </div>
        </div>
        <div className="grid w-full gap-2">
          <span className="ml-2 font-medium text-base">Volume</span>
          <div className="flex justify-center w-full items-center">
            <VolumeBar maxVolume={13} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MusicCard;
