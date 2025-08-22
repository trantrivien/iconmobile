import React from "react";
import { Truck, RefreshCcw, DollarSign, Users } from "lucide-react";

const BenefitsSection = ({ textCenter }: { textCenter: boolean }) => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {!textCenter ? (
          <div className="flex flex-wrap items-center justify-center md:justify-between mb-12">
            <h2 className="text-3xl md:text-5xl !text-center md:text-start font-bold text-gray-900 dark:text-white border-l-0 p-2 border-l-rose-500">
              Ưu Đãi Khi Mua Hàng Tại iConMobile
            </h2>
          </div>
        ) : (
          <h2 className="text-3xl md:text-5xl font-bold text-start md:text-center text-gray-900 dark:text-white mb-12 border-l-0 border-l-rose-500 w-fit mx-auto p-2">
            Ưu Đãi Khi Mua Hàng Tại iConMobile
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <Truck size={48} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Ship COD Toàn Quốc
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Nhận hàng kiểm tra trước khi thanh toán, giao nhanh tận nơi toàn quốc.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <DollarSign size={48} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Hỗ Trợ Trả Góp
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Trả góp lãi suất 0% qua thẻ tín dụng, thủ tục nhanh chóng, duyệt online.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <RefreshCcw size={48} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Thu Cũ Đổi Mới
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Đổi iPhone cũ lấy iPhone mới chính hãng, định giá minh bạch, hỗ trợ tốt nhất.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
            <Users size={48} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bảo Hành 1 Đổi 1
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Cam kết bảo hành chính hãng Apple, lỗi đổi máy mới trong 12 tháng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
