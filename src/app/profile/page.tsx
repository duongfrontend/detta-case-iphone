import { db } from "@/db";
import { cn, formatPrice } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Phone from "@/components/Phone";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);

  const okeClick = () => {
    alert("hi");
  };

  const orders = await db.order.findMany({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      shippingAddress: true,
      configuration: true,
    },
  });

  console.log(orders);

  // const tw = COLORS.find(
  //   (supportedColor) => supportedColor.value === orders.configuration.color
  // )?.tw;

  const lastWeekSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    _sum: {
      amount: true,
    },
  });

  const lastMonthSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)),
      },
    },
    _sum: {
      amount: true,
    },
  });

  const WEEKLY_GOAL = 5000000;
  const MONTHLY_GOAL = 25000000;

  return (
    <div className="flex min-h-screen w-full bg-muted/40 fixed p-[10px]">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-8">
          <div className="">
            <h1 className="text-4xl max-[664px]:text-2xl font-bold tracking-tight capitalize">
              thông tin cá nhân
            </h1>
            <div className="flex max-[567px]:flex-col justify-start items-center gap-5 pt-[20px] px-[20px]">
              <div className="rounded-[100%]">
                <img
                  className="rounded-[100%]"
                  src={user?.picture!}
                  alt="img"
                />
              </div>
              <div className="max-[567px]:text-[14px] max-[567px]:border-t-[1px] max-[567px]:border-l-[0px] gap-4 flex flex-col border-l-[1px] border-[#ccc] p-[20px]">
                <div>
                  <span className="text-black font-bold">Họ và tên: </span>
                  <span className="text-primary">{user?.family_name}</span>
                  <span className="text-primary">{user?.given_name}</span>
                </div>
                <div>
                  <span className="text-black font-bold">Email: </span>{" "}
                  <span className="text-primary">{user?.email}</span>
                </div>
              </div>
            </div>
            {/* <Card>
              <CardHeader className="pb-2">
                <CardDescription>Doanh số tháng</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(lastMonthSum._sum.amount ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Mục tiêu {formatPrice(MONTHLY_GOAL)}
                </div>
              </CardContent>
              <CardFooter>
                <Progress
                  value={((lastMonthSum._sum.amount ?? 0) * 100) / MONTHLY_GOAL}
                />
              </CardFooter>
            </Card> */}
          </div>

          <h1 className="max-[664px]:text-2xl text-4xl font-bold tracking-tight capitalize">
            đơn hàng đã đặt
          </h1>

          <div>
            <div className="max-h-[55vh] max-[567px]:max-h-[45vh] overflow-auto grid grid-cols-2 gap-8 max-[1024px]:grid-cols-1">
              {orders.map((order) => (
                <>
                  {user?.email === order.user.email ? (
                    <>
                      <div>
                        <div
                          className="cursor-default bg-gray-200 py-[20px] px-[10px] rounded-[10px]"
                          key={order.userId}>
                          <div className="flex justify-around items-center gap-16">
                            <Phone
                              className={`bg-${order.configuration.color}-500 max-w-[150px] rounded-[20px] `}
                              imgSrc={order.configuration.croppedImageUrl!}
                            />
                            <div className="flex-1 pl-[3%] flex gap-[20px] flex-col">
                              <div className="font-bold capitalize">
                                Thông tin sản phẩm
                              </div>
                              <div>
                                <span className="font-semibold text-gray-800">
                                  Tên case:
                                </span>
                                <span className="capitalize">
                                  {order.configuration.model}
                                </span>{" "}
                                Promax
                              </div>
                              <div>
                                <span className="font-semibold text-gray-800">
                                  Màu sắc:
                                </span>{" "}
                                <span>{order.configuration.color}</span>
                              </div>
                              <div>
                                <span className="font-semibold text-gray-800">
                                  Chất liệu:
                                </span>{" "}
                                <span>{order.configuration.material}</span>
                              </div>

                              <div className="text-rose-800 font-semibold">
                                <span>Tổng:</span>{" "}
                                <span>{formatPrice(order.amount)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
