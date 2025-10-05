import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ModalProvider from "@/providers/ModalProvider";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "iConMobile - Chuyên bán iPhone",
  description:
    "iConMobile - Chuyên bán iPhone trả góp, uy tín số 1 Việt Nam - Bảng giá iPhone cập nhật hằng ngày.",
  keywords: [
    // Địa điểm chung
    "iPhone Hồ Chí Minh",
    "iPhone HCM",
    "iPhone TP.HCM",
    "mua iPhone Hồ Chí Minh",
    "iPhone trả góp Hồ Chí Minh",

    // Các quận trọng điểm
    "iPhone Gò Vấp",
    "iPhone Quận 1",
    "iPhone Quận 3",
    "iPhone Quận 5",
    "iPhone Quận 7",
    "iPhone Quận 10",
    "iPhone Quận 12",
    "iPhone Tân Bình",
    "iPhone Tân Phú",
    "iPhone Bình Thạnh",
    "iPhone Phú Nhuận",
    "iPhone Thủ Đức",
    "iPhone Bình Tân",
    "iPhone Nhà Bè",
    "iPhone Hóc Môn",
    "iPhone Củ Chi",

    // Sản phẩm theo dòng máy
    "iPhone trả góp",
    "iPhone giá rẻ",
    "bảng giá iPhone",
    "iPhone chính hãng",
    "iPhone cũ Hồ Chí Minh",
    "iPhone mới Hồ Chí Minh",
    "iPhone 11",
    "iPhone 11 Pro",
    "iPhone 11 Pro Max",
    "iPhone 12",
    "iPhone 12 Pro",
    "iPhone 12 Pro Max",
    "iPhone 13",
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 14",
    "iPhone 14 Pro",
    "iPhone 14 Pro Max",
    "iPhone 15",
    "iPhone 15 Plus",
    "iPhone 15 Pro",
    "iPhone 15 Pro Max",
    "iPhone 16",
    "iPhone 17",

    "mua iPhone trả góp HCM",
    "cửa hàng iPhone Hồ Chí Minh",
    "iPhone trả góp lãi suất thấp",
    "iPhone trả góp nhanh",
    "iPhone khuyến mãi HCM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased hide-scrollbar",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <ModalProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
