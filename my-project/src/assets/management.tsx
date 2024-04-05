import React, { useState } from "react";

const tabs = [
  { id: 1, name: "Cài đặt shop " },
  { id: 2, name: "Quản lí niêm yết" },
  { id: 3, name: "Quản kí voucher" },
  { id: 4, name: "Sáng tạo" },
  { id: 5, name: "QR dịch vụ" },
];

const management = () => {
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="font-inter mx-auto w-full max-w-5xl">
      <div className=" border-b border-gray-200 mt-4 sm:w-auto border bg-white shadow-sm grid grid-cols-5 gap-2  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` border-b-[3px] border bg-white border-transparent whitespace-nowrap leading-[22px] hover:bg-gray-100 hover:rounded font-normal  text-[#1F1F1F] text-sm sm:px-4 sm:py-2 p-[7px] ${
              activeTab === tab.id
                ? "inline-block p-4 !border-b-blue-600 rounded-t-lg text-blue-600 w-auto "
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2 pt-5">
        <div>
          <form className="max-w-xs mx-auto">
            <div className="relative">
              <div className="absolute  right-2 top-2">
                <svg
                  className="w-4 h-4 text-[#4284F3]  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-1  text-sm text-[#8E8E93] border border-gray-300 rounded-lg bg-white font-normal leading-[22px]"
                placeholder="Tìm kiếm..."
                required
              />
            </div>
          </form>
        </div>
        <div>
          <form className="max-w-xs mx-auto">
            <select
              id="countries"
              className="block w-full p-[5.5px]  text-sm text-[#8E8E93] border border-gray-300 rounded-lg bg-white font-normal leading-[22px] "
            >
              <option selected>Danh mục</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </form>
        </div>
        <div></div>
        <div className="rounded-2xl bg-white border border-[#4284F3] flex items-center justify-center">
          <button className="text-[#4284F3] font-normal text-sm leading-[22px]   ">
            Đăng kí quảng cáo
          </button>
        </div>
        <div className="rounded-2xl bg-[#4284F3]  flex items-center justify-center">
          <button className="text-white font-normal text-sm leading-[22px]">
            Tạo niêm yết
          </button>
        </div>
      </div>
      <div>
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-0  py-6 lg:py-8 md:grid-cols-6">
              <div>
                <h2 className="mb-6 text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D] p-2">
                  tên niêm yết
                </h2>
                <ul className="text-[#1F1F1F]  font-normal text-sm leading-[22px]">
                  <li className="mb-4 flex">
                    <a href="">
                      <img
                        className="rounded-full w-10 h-10"
                        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9dpxy_AjesfOKxyp-lrdjOsXrG7JvHGeved9CbAB5V6u_4zvIBNzE1LwscHKI9PVNechUdM33bfJT0Z_r81KcyqbuIrBV7b4ZMx_Cubd-EOv_aE-1oNvQ&usqp=CAc"
                        alt=""
                      />
                    </a>
                    <a href="#" className=" ">
                      iphone 13 promax
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D] p-2">
                  danh mục
                </h2>
                <ul className="text-[#1F1F1F]  font-normal text-sm leading-[22px]">
                  <li className="mb-4 flex">
                    <a href="">
                      <img
                        className="rounded-full w-10 h-10"
                        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9dpxy_AjesfOKxyp-lrdjOsXrG7JvHGeved9CbAB5V6u_4zvIBNzE1LwscHKI9PVNechUdM33bfJT0Z_r81KcyqbuIrBV7b4ZMx_Cubd-EOv_aE-1oNvQ&usqp=CAc"
                        alt=""
                      />
                    </a>
                    <a href="#" className=" uppercase">
                      pgc market
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D] p-2 ">
                  hình thức bán
                </h2>
                <ul className="text-[#1F1F1F]  font-normal text-sm leading-[22px]">
                  <li className="mb-4">
                    <a href="#" className="uppercase">
                      retail
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D] p-2">
                  loại niêm yết
                </h2>
                <ul className="text-[#1F1F1F]  font-normal text-sm leading-[22px]">
                  <li className="mb-4">
                    <a href="#" className="uppercase">
                      normal
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D] p-2">
                  ngày tạo
                </h2>
                <ul className="text-[#1F1F1F]  font-normal text-sm leading-[22px]">
                  <li className="mb-4">
                    <a href="#" className="">
                      1/24/1024
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-[#1F1F1F] uppercase leading-[22px] bg-[#0000000D] p-2">
                  ngày công khai
                </h2>
                <ul className="text-[#1F1F1F]  font-normal text-sm leading-[22px]">
                  <li className="mb-4">
                    <a href="#" className="">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                      </label>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default management;
