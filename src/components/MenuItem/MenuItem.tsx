import Image from "next/image";
import Link from "next/link";

const MenuItem = ({
  label,
  inActiveIcon,
  activeIcon,
  path,
}: {
  label: string;
  inActiveIcon: string;
  activeIcon: string;
  path: string;
}) => {
  return (
    <Link
      href={path}
      className="h-[3.75rem] pl-[1rem] flex gap-3 cursor-pointer text-white hover:bg-[#F0F0F0] hover:text-black rounded-l-[2rem] items-center"
    >
      <div className="relative">
        <Image alt={label} width={20} height={16} src={activeIcon} />
      </div>
      {label}
    </Link>
  );
};

export default MenuItem;
