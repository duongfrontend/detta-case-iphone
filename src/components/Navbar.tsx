/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
// import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Detta<span className="text-rose-600 mx-2">Case</span>{" "}
            <span>Iphone</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}>
                    Dashboard ✨
                  </Link>
                ) : null}
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  <div className="cursor-default">
                    <span>Xin chào : </span>
                    <span>{user?.given_name}</span>
                    <span className="ml-[5px]">{user?.family_name}</span>
                  </div>
                  <div className="ml-[5px]">
                    <img
                      className="w-[30px] rounded-[100px]"
                      src={user?.picture}
                    />
                  </div>
                </div>
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}>
                  Tạo mẫu mới
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "hidden sm:flex items-center gap-1 bg-red-700 text-white hover:bg-red-400",
                  })}>
                  Đăng xuất
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Đăng ký
                </Link>

                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Đăng nhập
                </Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}>
                  Tạo mẫu mới
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
