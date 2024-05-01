import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import Separator from "../ui/separator";
import Image from "next/image";

const navbar_links: { name: string; link: string }[] = [
  {
    name: "New",
    link: "#",
  },
  {
    name: "Catalog",
    link: "#",
  },
  {
    name: "Best Sellers",
    link: "#",
  },
  {
    name: "Track Order",
    link: "#",
  },
  {
    name: "About Us",
    link: "#",
  },
  {
    name: "FAQ",
    link: "#",
  },
  {
    name: "Terms & Conditions",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "Contact Us",
    link: "#",
  },
];

const payment_icons = [
  "/payment_icons/Mastercard.svg",
  "/payment_icons/UnionPay.svg",
  "/payment_icons/Visa.svg",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container bg-teal-800 pb-8 text-white">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Покупателям</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 px-3 underline">
              <Link href="#" className="w-fit">
                Новинки
              </Link>
              <Link href="#" className="w-fit">
                Каталог
              </Link>
              <Link href="#" className="w-fit">
                Бестселлеры
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>О компании</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 px-3 underline">
              <Link href="#" className="w-fit">
                О нас
              </Link>
              <Link href="#" className="w-fit">
                FAQ
              </Link>
              <Link href="#" className="w-fit">
                Условия использования
              </Link>
              <Link href="#" className="w-fit">
                Политика конфиденциальности
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Контакты</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 px-3 underline">
              <Link href="#" className="w-fit">
                Отследить заказ
              </Link>
              <Link href="mailto:email.email@email.com" className="w-fit">
                email.email@email.com
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h4 className="pb-1 pt-8 text-center text-xl font-medium">
        Мы в соцсетях
      </h4>
      <ul className="flex justify-center gap-3 pb-8">
        <li>
          <Link href="#">
            <MdOutlineEmail fontSize={20} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaTiktok fontSize={20} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaInstagram fontSize={20} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaFacebookF fontSize={20} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaYoutube fontSize={20} />
          </Link>
        </li>
      </ul>
      <div className="mb-5 flex flex-wrap justify-center gap-1.5">
        {payment_icons.map((path, index) => (
          <div className="relative h-[24px] w-[35px]" key={index}>
            <Image
              src={path}
              alt="payment icon"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <p className="text-center text-sm">
        &copy;{currentYear} Shabbit. Все права защищены
      </p>
    </footer>
  );
};

export default Footer;
