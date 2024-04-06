import Image from "next/image";
import React, { useState } from "react";

interface VolumeBarProps {
  initialVolume?: number;
  maxVolume?: number;
}

const VolumeBar: React.FC<VolumeBarProps> = ({
  initialVolume = 5,
  maxVolume = 10,
}) => {
  const [currentVolume, setCurrentVolume] = useState<number>(initialVolume);

  const handleVolumeUp = () => {
    if (currentVolume < maxVolume) {
      setCurrentVolume((prevVolume) => prevVolume + 1);
    }
  };

  const handleVolumeDown = () => {
    if (currentVolume > 0) {
      setCurrentVolume((prevVolume) => prevVolume - 1);
    }
  };

  const renderVolumeIndicators = () => {
    const volumeIndicators: JSX.Element[] = [];
    const numFilledIndicators = currentVolume;

    for (let i = 0; i < maxVolume; i++) {
      const isFilled = i < numFilledIndicators;
      const indicatorColor = isFilled ? "#37B3E2" : "#D9D9D9";

      volumeIndicators.push(
        <div
          key={i}
          className="w-[0.813rem] h-[0.513rem] bg-[#D9D9D9] rounded"
          style={{ backgroundColor: indicatorColor }}
        />
      );
    }

    return volumeIndicators;
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleVolumeDown}>
        {currentVolume === 0 ? (
          <Image
            width={20}
            height={13.82}
            src="/volume-mute-icon-black.svg"
            alt="Muted"
          />
        ) : (
          <Image
            width={20}
            height={13.82}
            src="/volume-down-black.svg"
            alt="Muted"
          />
        )}
      </button>

      <div className="flex gap-1">{renderVolumeIndicators()}</div>

      <button onClick={handleVolumeUp}>
        <Image
          width={20}
          height={13.82}
          src="/volume-icon-black.svg"
          alt="Volume Up"
        />
      </button>
    </div>
  );
};

export default VolumeBar;
