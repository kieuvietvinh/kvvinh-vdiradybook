import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { id: 1, name: "Tất cả " },
  { id: 2, name: "Chuyển đổi kỹ thuật số" },
];

const Utilities = () => {
  const [data, setData] = useState([]);
  console.log("data", data);

  const loadData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/utilities`).then(
        (response) => response.json()
      );
      setData(res);
      console.log("res", res);
    } catch (error) {}
  };

  useEffect(() => {
    loadData();
  }, []);

  const list = [
    { id: 1, label: "Công cụ thông minh", items: data.tools },
    { id: 2, label: "Cửa hàng tiện ích", items: data.shops },
    { id: 3, label: "Thư viện tri thức số", items: data.digitals },
    { id: 4, label: "Cuộc sống thông minh", items: data.lifes },
    { id: 5, label: "Tài chính - Bảo hiểm", items: data.insurances },
    { id: 6, label: "Thanh toán hóa đơn", items: data.bills },
    { id: 7, label: "Du lịch - đi lại", items: data.travels },
    { id: 8, label: "Chuyển khoản - Nhận tài sản", items: data.transfers },
    { id: 9, label: "Thương mại điện tử", items: data.ecommerces },
    { id: 10, label: "Mua thẻ điện thoại", items: data.phonecards },
    { id: 11, label: "Trò chơi - Ứng dụng", items: data.games },
    { id: 12, label: "Thanh toán tại quầy", items: data.pays },
    { id: 13, label: "Demo", items: data.demos },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className=" mt-10   mx-auto w-full max-w-[952px] font-roboto bg-white p-4">
      <Link to="/home">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Chuyển hướng tới trang khác
        </button>
      </Link>
      <div className=" border-b border-gray-200 mt-4 sm:w-auto bg-white shadow-sm sm:grid sm:grid-cols-2 sm:gap-2  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` border-b-[3px] border bg-white border-transparent whitespace-nowrap hover:bg-gray-100 hover:rounded  text-[#777d74] text-xs sm:px-4 sm:py-2 p-[7px] ${
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

      <div className="pt-14 font-roboto">
        {activeTab === 1 && (
          <div className="">
            <div className="  ">
              {list.map(({ id, label, items }) => (
                <div className="pt-8" key={id}>
                  <div className=" flex relative items-center  ">
                    <div className="bg-[#4284f3]  px-8 w-auto h-[30px]  absolute bottom-0 flex justify-center items-center">
                      <div className="w-1 h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-3 top-0"></div>
                      <div className="w-1 h-[11.99px] -rotate-0 bg-[#4284f3] absolute -right-1 bottom-0 "></div>
                      <div className="w-[5px] h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-1 top-0 "></div>
                      <p className="mt-[1.5px] text-white lg:text-sm text-[0.77rem] font-normal ">
                        {label}
                      </p>
                    </div>
                  </div>
                  <div className=" border-b-[3px] border-[#4284f3] w-full"></div>
                  <div className="lg:grid lg:grid-cols-6 lg:gap-2 grid grid-cols-3 gap-1 mt-8 mb-8 ">
                    {items?.map((item) => (
                      <div key={item.id} className="lg:px-2 px-0.5">
                        <div className="bg-white rounded-lg border sidhadow-md w-[3.74rem] h-[3.74rem] flex items-center justify-center m-auto">
                          <img
                            className="rounded-md w-12 h-12"
                            src={item.img}
                            alt=""
                          />
                        </div>
                        <div className=" ">
                          <div className="lg:text-sm text-[0.76rem] text-[#555770] font-normal flex justify-center my-2">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 2 && <div></div>}
      </div>
    </div>
  );
};
export default Utilities;
