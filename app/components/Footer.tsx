import icon from "@/app/assets/favicon.webp";
import Image from "next/image";
import Link from "next/link";
import FooterHolder from "./Footer/FooterHolder";
export default function Footer() {
  return (
    <footer className="flex flex-col items-center max-w-full relative border-solid border-t-[10px] border-t-ronio  mt-[96px] p-10 bg-footer">
      <Link
        href="/"
        className="absolute left-2/4 -top-[48px] z-10 -translate-x-2/4 flex items-center"
      >
        <Image src={icon} alt="Ronio" />
        <span className="text-4xl font-bold text-primary">رونیو</span>
      </Link>
      <FooterHolder />
      <div className="flex flex-col md:flex-row w-full text-white md:justify-evenly pt-[120px]">
        <div className="w-1/4">
          <h1 className="text-xl font-semibold mb-4">درباره ما</h1>
          <p>
            وبسایت رونیو با هدف ایجاد دنیایی جدید برای طراحان وب و گرافیک و
            برنامه‌نویسان از سال ۱۳۹۹ وارد این عرصه برای فعالیت شده است و فراهم
            کردن بستری یک‌پارچه برای کمک در راستای طراحی بهتر و اصولی‌تر از
            اهداف بنیادین آن می‌باشد و امیدوار هستیم که با کمک شما، برای شما،
            بهترین ابزارها و راهنمایی‌ها را ارائه کنیم
          </p>
        </div>
        <div className="w-1/4">
          <h1 className="text-xl font-semibold mb-4">لینک مفید</h1>
          <ul>
            <li>وبلاگ</li>
            <li>گالری</li>
            <li>اسموشر</li>
            <li>ابزار</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h1 className="text-xl font-semibold mb-4">پروژه ها</h1>
          <ul>
            <li>دولوپیکس</li>
            <li>میف پول</li>
            <li>کدیلو</li>
            <li>اسموشر</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
