import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                {/* i forgot this div right here in the video, it's purely visual gradient and looks nice */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <img src="/okkk.png" className="w-full" />
              </div>
              <h1 className="relative w-fit texts tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 md:text-[2.5rem] lg:text-7xl">
                Tạo Ốp Lưng Iphone theo{" "}
                <span className="bg-[#e11d48] px-2 text-white">Hình Ảnh</span>{" "}
                của riêng bạn
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Ghi lại những kỷ niệm yêu thích của bạn bằng chiếc ốp điện thoại
                theo ý tưởng của riêng bạn .{" "}
                <span className="font-bold">
                  Detta <span className="text-rose-600">Case</span> Iphone
                </span>{" "}
                cho phép bạn bảo vệ những kỷ niệm của mình, không chỉ vỏ điện
                thoại.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[#e11d48]" />
                    Chất liệu cao cấp, bền bỉ
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[#e11d48]" />
                    Quy trình in ấn đảm bảo
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-[#e11d48]" />
                    Các mẫu iPhone mới được hỗ trợ
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user.jpg"
                    alt="user image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-[#e11d48] fill-rose-600" />
                    <Star className="h-4 w-4 text-[#e11d48] fill-rose-600" />
                    <Star className="h-4 w-4 text-[#e11d48] fill-rose-600" />
                    <Star className="h-4 w-4 text-[#e11d48] fill-rose-600" />
                    <Star className="h-4 w-4 text-[#e11d48] fill-rose-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> khách hàng tin
                    dùng
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/25.webp" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 grainy-dark py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Khách hàng{" "}
              <span className="relative px-2">
                của chúng tôi{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-rose-500" />
              </span>{" "}
              nói gì
            </h2>
            {/* <img src="/13.png" className="w-24 order-0 lg:order-2" /> */}
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "Vỏ máy cho cảm giác bền và tôi thậm chí còn nhận được lời
                  khen về thiết kế. Đã sử dụng trường hợp này được hai tháng
                  rưỡi và{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    hình ảnh cực kỳ rõ ràng
                  </span>
                  , đối với trường hợp tôi có trước đó, hình ảnh bắt đầu mờ dần
                  sang màu hơi vàng sau một vài tuần. Yêu nó."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Đặng Hoàng Dương</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-[#e11d48]" />
                    <p className="text-sm">Đã xác minh mua hàng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
                <Star className="h-5 w-5 text-[#e11d48] fill-rose-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "Tôi thường giữ điện thoại cùng với chìa khóa trong túi và
                  điều đó dẫn đến một số vết xước khá nặng trên tất cả các ốp
                  điện thoại gần đây nhất của tôi. Điều này, bên cạnh một điều
                  khó nhận thấy xước ở góc,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    trông như mới sau khoảng nửa năm
                  </span>
                  . tôi đào nó."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Dương Thị Hạnh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-[#e11d48]" />
                    <p className="text-sm">Đã xác minh mua hàng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Tạo mẫu thiết kế ngay theo{" "}
                <span className="relative px-2 bg-[#e11d48] text-white">
                  hình ảnh
                </span>{" "}
                của bạn
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/horse.jpeg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>

              <Phone className="w-60" imgSrc="/horse.jpeg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-[#e11d48] inline mr-1.5" />
              Chất liệu silicon cao cấp
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-[#e11d48] inline mr-1.5" />
              Lớp phủ chống trầy xước và dấu vân tay
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-[#e11d48] inline mr-1.5" />
              Tương thích sạc không dây
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-[#e11d48] inline mr-1.5" />5 year
              Bảo hành 2 năm
            </li>

            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload">
                Tạo Mẫu Thiết Kế Của Bạn Ngay Bây Giờ{" "}
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
