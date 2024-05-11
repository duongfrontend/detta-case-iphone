// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  { label: "Rose", value: "rose", tw: "rose-950" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "IPhone 11 Promax",
      value: "iphone11",
    },
    {
      label: "IPhone 12 Promax",
      value: "iphone12",
    },
    {
      label: "IPhone 13 Promax",
      value: "iphone13",
    },
    {
      label: "IPhone 14 Promax",
      value: "iphone14",
    },
    {
      label: "IPhone 15 Promax",
      value: "iphone15",
    },
  ],
} as const;

export const MATERIALS = {
  names: "Tùy chọn",
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Nhựa dẻo",
      value: "polycarbonate",
      description: "Lớp phủ chống trầy xước",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
    // {
    //   label: "Titanium",
    //   value: "titanium",
    //   description: "Lớp phủ chống trầy xước",
    //   price: PRODUCT_PRICES.material.titanium,
    // },
  ],
} as const;

export const FINISHES = {
  names: "Kiểu dáng",

  name: "finish",
  options: [
    {
      label: "Viền trơn",
      value: "smooth",
      description: "Viền tron 4 góc",
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Bo viền 4 góc",
      value: "textured",
      description: "Bo viền 4 góc bảo vệ máy",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
