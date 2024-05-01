import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import Separator from "@/components/ui/separator";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const navbar_links: { name: string; link: string }[] = [
  {
    name: "Новинки",
    link: "#",
  },
  {
    name: "Каталог",
    link: "#",
  },
  {
    name: "Бестселлеры",
    link: "#",
  },
  {
    name: "Отследить заказ",
    link: "#",
  },
  {
    name: "О нас",
    link: "#",
  },
  {
    name: "FAQ",
    link: "#",
  },
  {
    name: "Условия использования",
    link: "#",
  },
  {
    name: "Политика конфиденциальности",
    link: "#",
  },
  {
    name: "Контакты",
    link: "#",
  },
];

const SideMenu = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="bg-teal-800 p-1 text-gray-100">
        <RxHamburgerMenu fontSize={24} />
      </DrawerTrigger>
      <DrawerContent
        className="h-full w-[289px] rounded-none bg-gray-100"
        showBar={false}
      >
        <DrawerHeader className="p-2">
          <DrawerClose className="ml-auto mt-1 w-fit">
            <AiOutlineClose fontSize={24} strokeWidth={1} />
          </DrawerClose>
          <div className="mt-2 flex items-center justify-between gap-0">
            <span className="inline-flex flex-col justify-center text-start text-xs font-medium">
              Войдите, чтобы получить{" "}
              <strong className="font-bold text-red-700">
                {" "}
                Предложения и Скидки
              </strong>
            </span>

            {/* Login button */}
            <Button variant="outline" size="sm" className="gap-1 p-2">
              <IoMdPerson fontSize={18} />
              <span>Войти</span>
            </Button>
          </div>
        </DrawerHeader>

        {/* <Separator className="my-4" /> */}

        {/* Language and country buttons */}
        {/* <div className="flex items-center justify-between">
          <strong className="text-sm">Language / اللغة</strong>
          <Button
            variant="outline"
            size="sm"
            className="border-custom-red h-[30px] w-[69px] bg-red-600/5 hover:bg-black/5"
          >
            <span className="leading-[21px] tracking-widest">عربي</span>
          </Button>
        </div>
        <div className="flex items-center justify-between p-2">
          <span className="text-sm font-medium">Shipping to:</span>
          <Select defaultValue="usd">
            <SelectTrigger className="w-fit gap-1.5">
              <SelectValue placeholder="🇺🇸 USA | USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                <SelectItem value="aud">🇦🇺 Australia | AUD</SelectItem>
                <SelectItem value="cad">🇨🇦 Canada | CAD</SelectItem>
                <SelectItem value="euro">🇩🇪 Germany | EUR</SelectItem>
                <SelectItem value="rub">🇷🇺 Russia | RUB</SelectItem>
                <SelectItem value="usd">🇺🇸 USA | USD</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
        {/* End of language and country buttons */}

        {/* <Separator className="mt-4" /> */}

        {/* Navigation bar with icons */}
        <div className="p-2">
          {navbar_links.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="flex items-center gap-2 py-3.5 hover:bg-black/5 hover:text-accent-foreground hover:underline"
            >
              <span className="text-sm font-medium">{item.name}</span>
              {item.name === "Новинки" && (
                <div className="ml-3 bg-red-600 px-1 text-[10px] font-bold uppercase leading-4 text-white">
                  new
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* End of navigation bar */}
      </DrawerContent>
    </Drawer>
  );
};

export default SideMenu;
