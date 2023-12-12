
const MenuItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Contact",
        path: "/contact",
    },
 
];

function Menu({ onHover }: { onHover: boolean }) {
  return (
    <div
      className={`h-[320px]  w-[200px] bg-white opacity-0  transition  duration-700  ${
        onHover ? "opacity-100 translate-y-[30px] " : "opacity-0"
      }
     absolute top-[20px] -left-[108px] border-t-[5px]  border-t-[#005826] transform    `}
    >
      <div className=" w-full  text-right ">
        {MenuItems.map((item, index) => (
          <div
            className="w-full border-b pb-1 px-3 text-black opacity-75"
            key={index}
          >
            <a href={'asd'} className="py-3 text-[16px]">
               {item.name}
            </a>
          </div>
        ))}
       
      </div>
    </div>
  );
}

export default Menu;
