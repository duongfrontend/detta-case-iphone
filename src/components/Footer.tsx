import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-white h-20 fixed bottom-0 w-full">
      <MaxWidthWrapper>
        <div className="text-center md:text-left pb-2 md:pb-0 h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <p className="text-sm text-muted-foreground w-full text-center">
            &copy; {new Date().getFullYear()} Tất cả các quyền. Thiết kế bởi
            <span className="text-rose-600 font-bold ml-1">
              Detta Stack - Đặng Hoàng Dương
            </span>
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
