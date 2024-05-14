import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/db";
import { cn, formatPrice } from "@/lib/utils";
import {
  getKindeServerSession,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import StatusDropdown from "./StatusDropdown";
import PhonePreview from "@/components/PhonePreview";
import Phone from "@/components/Phone";
import { COLORS } from "@/validators/option-validator";
import { color } from "framer-motion";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const okeClick = () => {
    alert("hi");
  };

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!user || user.email !== ADMIN_EMAIL) {
    return notFound();
  }

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
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Doanh số tuần</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(lastWeekSum._sum.amount ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Mục tiêu {formatPrice(WEEKLY_GOAL)}
                </div>
              </CardContent>
              <CardFooter>
                <Progress
                  value={((lastWeekSum._sum.amount ?? 0) * 100) / WEEKLY_GOAL}
                />
              </CardFooter>
            </Card>
            <Card>
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
            </Card>
          </div>

          <h1 className="text-4xl font-bold tracking-tight capitalize">
            tổng số đơn đặt hàng -{" "}
            <span className="text-primary">{orders.length}</span>
          </h1>

          <div>
            <div>
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="relative bg-gray-200 border-b-[1px] border-gray-300 py-[20px]">
                  <div className="p-[20px] flex justify-between items-center">
                    <p>Mã đơn hàng: {order.id}</p>
                    <StatusDropdown id={order.id} orderStatus={order.status} />
                  </div>
                  <div>
                    {order.status === "fulfilled" && (
                      <div className="animation-item absolute top-[30%] left-[40%] rotate-[-11deg]">
                        <img width="200px" src="./dau-do.png" alt="" />
                      </div>
                    )}
                    {order.status === "shipped" && (
                      <div className="animation-item-2 absolute top-[30%] left-[40%] rotate-[-11deg]">
                        <img width="200px" src="./dau-den-1.png" alt="" />
                      </div>
                    )}
                    {order.status === "awaiting_shipment" && (
                      <div className="animation-item-1 absolute top-[30%] left-[40%] rotate-[-11deg]">
                        <img width="200px" src="./dau-xac-nhan.png" alt="" />
                      </div>
                    )}
                  </div>

                  {/* {formatPrice(order.amount)} */}

                  <div className="flex justify-around pt-[20px] h-[max-content] max-[767px]:items-center">
                    <Phone
                      className={
                        `bg-${order.configuration.color}-500 max-w-[150px] rounded-[20px] ml-[20px]`
                        // "max-w-[150px] md:max-w-full"
                      }
                      imgSrc={order.configuration.croppedImageUrl!}
                    />
                    <div className="p-[20px] flex justify-center max-[767px]:flex-col border-b-[1px] border-gray-300 h-[max-content]">
                      {" "}
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
                      <div className="flex-1 pl-[2%] pr-[2%] flex gap-[20px] flex-col max-[767px]:mt-[20px]">
                        <div className="font-bold capitalize">
                          Thông tin giao hàng
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Họ và tên:
                          </span>{" "}
                          <span>{order.shippingAddress?.name}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Email:
                          </span>{" "}
                          <span>{order.user?.email}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Số điện thoại:
                          </span>{" "}
                          <span>
                            {order.shippingAddress?.phoneNumber ||
                              "085.835.8586"}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Địa chỉ:
                          </span>{" "}
                          <span>{order.shippingAddress?.street}</span>,{" "}
                          <span>{order.shippingAddress?.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <TableHeader>
              <TableRow>
                <TableHead>Tên khách hàng</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Trạng thái
                </TableHead>
                <TableHead className="hidden sm:table-cell">
                  Ngày đặt hàng
                </TableHead>
                <TableHead className="text-right">Tổng</TableHead>
                <TableHead className="text-right">Chi tiết</TableHead>
              </TableRow>
            </TableHeader> */}

          {/* <TableBody>
              {orders.map((order) => (
                <>
                  <TableRow key={order.id} className="bg-accent">
                    <TableCell>
                      <div className="font-medium">
                        {order.shippingAddress?.name}
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {order.user.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <StatusDropdown
                        id={order.id}
                        orderStatus={order.status}
                      />
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {order.createdAt.toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatPrice(order.amount)}
                    </TableCell>
                    <div>ok</div>
                  </TableRow>
                </>
              ))}
            </TableBody> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
