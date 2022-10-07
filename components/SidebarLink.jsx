import { useRouter } from "next/router";

const SidebarLink = ({ Icon, text, active }) => {
  const router = useRouter();
  return (
    <div
      className={`hoverAnimation flex items-center justify-center space-x-3 text-xl text-[#d9d9d9] xl:justify-start ${
        active && "font-bold"
      }`}
      onClick={() => active && router.push("/")}
    >
      <Icon className={active ? "h-7 text-white" : "h-7"} />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};

export default SidebarLink;
