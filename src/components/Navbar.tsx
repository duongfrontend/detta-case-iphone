/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants, buttonVariants2 } from "./ui/button";
import { ArrowRight, LogOut, Menu } from "lucide-react";
// import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // console.log(user);

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
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}></div>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      className: "flex items-center gap-1",
                    })}>
                    Trang Admin ✨
                  </Link>
                ) : (
                  <Link
                    href="/profile"
                    className={buttonVariants({
                      size: "sm",
                      className: "flex items-center gap-1",
                    })}>
                    <img
                      className="rounded-full w-[32px]"
                      src={user.picture!}
                      alt="img"
                    />
                    <span className="ml-[5px]">Trang cá nhân</span>
                    <ArrowRight className="ml-1.5 h-5 w-5 " />
                  </Link>
                )}

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
                      "flex items-center gap-1 bg-red-700 text-white hover:bg-red-400",
                  })}>
                  <span className="hidden sm:flex">Đăng xuất</span>
                  <LogOut className="sm:hidden" />
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
