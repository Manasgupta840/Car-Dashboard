const MenuItem = ({label,icon}:{label:string,icon:string}) => {

    return (
        <div className="h-[3.75rem] pl-[1rem] flex gap-3 text-white hover:bg-[#F0F0F0] hover:text-black rounded-l-[2rem] items-center">
          <img src={icon} className="w-5 h-4" />
          {label}
        </div>
    )
}

export default MenuItem;