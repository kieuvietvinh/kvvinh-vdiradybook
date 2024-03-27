import React, { useState } from "react";

const tabs = [
  { id: 1, name: "Tất cả" },
  { id: 2, name: "Chuyển đổi kỹ thuật số" },
];
//
const tools = [
  {
    id: 1,
    img: "https://file.vdiarybook.com/api/files/admin/20231020/fb02ef41-685c-4d34-bdb7-3faa5b47cfcf.png",
    name: "Vdiarybook Project",
  },
  {
    id: 2,
    img: "https://file.vdiarybook.com/api/files/admin/a34e1741-31e5-44cc-a4f5-3298957e89d3.png",
    name: "Tải Video Facebook",
  },
  {
    id: 3,
    img: "https://file.vdiarybook.com/api/files/admin/11b5725b-3cb8-4b98-8eaf-d0b41c9af7fc.jpg",
    name: "  Tải video Youtube",
  },
  {
    id: 4,
    img: "https://file.vdiarybook.com/api/files/admin/1140f3b0-4792-439e-9c97-a638021b5ceb.jpg",
    name: "Tải Video Twitter",
  },
  {
    id: 5,
    img: "https://file.vdiarybook.com/api/files/admin/ea6b5f7a-bcdf-4e11-8549-863fce2acf0c.png",
    name: "   Tải video instagram",
  },
];
//shop
const shops = [
  {
    id: 1,
    img: "https://file.vdiarybook.com/api/files/admin/08cc2216-af0f-4e89-9d95-42f5e8776a51.png",
    name: "Học lái xe",
  },
  {
    id: 2,
    img: "https://file.vdiarybook.com/api/files/admin/ddb9eaca-5026-44a0-b432-67cb281ba38e.gif",
    name: "Báo Đảng Cộng Sản",
  },
  {
    id: 3,
    img: "https://file.vdiarybook.com/api/files/admin/285ae8ba-2a90-4e51-b7a6-b89d53f9f8ee.gif",
    name: " Idea Project",
  },
  {
    id: 4,
    img: "https://file.vdiarybook.com/api/files/admin/07c9053f-f776-4125-ac9c-046ec4c9cd59.png",
    name: "VTV",
  },
  {
    id: 5,
    img: "https://file.vdiarybook.com/api/files/admin/8cc2ccec-141a-4ffc-ab15-bc8b493e911f.png",
    name: " Fry Rada",
  },
  {
    id: 6,
    img: "https://file.vdiarybook.com/api/files/admin/d3810647-cb84-41af-b21d-38113e17fb5a.png",
    name: " Báo Chính Phủ",
  },
  //
  {
    id: 7,
    img: "https://file.vdiarybook.com/api/files/admin/e392d1ae-43bd-4167-a4b1-672bfbfd9e4d.gif",
    name: "Ảnh bài 63 tỉnh",
  },
  {
    id: 8,
    img: "https://file.vdiarybook.com/api/files/admin/112c4d13-03cc-442d-b88d-aad94b7492c8.png",
    name: "Bộ giáo dục và đào tạo",
  },
  {
    id: 9,
    img: "https://file.vdiarybook.com/api/files/admin/d1c020d1-efbf-4f50-973c-7bc54146de85.png",
    name: " An ninh thủ đô",
  },
  {
    id: 10,
    img: "https://file.vdiarybook.com/api/files/admin/4faaf9a1-74f1-4c18-b3b2-9b5439f12515.png",
    name: "Thời tiết",
  },
  {
    id: 11,
    img: "https://file.vdiarybook.com/api/files/admin/e682afb3-284b-4fe3-8f5d-bd0ae745cbb8.png",
    name: "Thuế",
  },
  {
    id: 12,
    img: "https://file.vdiarybook.com/api/files/admin/5931c9e1-8ee6-4b58-90be-cf2a86517944.png",
    name: "Qrmart",
  },
  {
    id: 13,
    img: "https://file.vdiarybook.com/api/files/admin/7dd6e825-3d44-4b96-83aa-cd0d1fa4d3df.png",
    name: "Smart life",
  },
  {
    id: 14,
    img: "https://file.vdiarybook.com/api/files/admin/78a2576a-fd88-47d9-9988-d55da356785c.png",
    name: "Kiểm tra phạt nguội",
  },
];
//Digital
const digitals = [
  {
    id: 1,
    img: "https://file.vdiarybook.com/api/files/admin/c051b32e-48cd-496a-8206-03a8adf2b595.png",
    name: "Thư viện tri thức",
  },
  {
    id: 2,
    img: "https://file.vdiarybook.com/api/files/admin/8eb6f377-836d-411c-9f4a-361a893b889c.jpg",
    name: "Thư viện Quốc gia Việt Nam",
  },
];
//Life
const lifes = [
  {
    id: 1,
    img: "https://file.vdiarybook.com/api/files/admin/771b1048-039a-4b59-8b67-bb325cda515e.png",
    name: "Smart school",
  },
  {
    id: 2,
    img: "https://file.vdiarybook.com/api/files/admin/dbe2986a-9261-46fd-9e5f-c2ec173ce733.jpg",
    name: "Smart move",
  },
  {
    id: 3,
    img: "https://file.vdiarybook.com/api/files/admin/d68698e0-7a40-4ba3-9f04-7237d79425f0.png",
    name: " Smart hospital",
  },
  {
    id: 4,
    img: "https://file.vdiarybook.com/api/files/admin/23dd96b5-f379-43b7-b960-d56953f5f4e7.png",
    name: "Smart mart",
  },
  {
    id: 5,
    img: "https://file.vdiarybook.com/api/files/admin/5cca5721-4700-496c-b854-fa425eebd6a1.jpeg",
    name: "Smart building",
  },
  {
    id: 6,
    img: "https://file.vdiarybook.com/api/files/admin/d730daa5-f1a5-4dd7-9a2e-e97ff55a0c61.png",
    name: "Smart building",
  },
  {
    id: 7,
    img: "https://file.vdiarybook.com/api/files/admin/0ffb13b0-85db-409d-b0b1-9a858e35e4cf.png",
    name: "  Smart charity",
  },
];
//Insurance
const insurances = [
  {
    id: 1,
    img: "https://file.vdiarybook.com/api/files/admin/3e60cc68-7da7-433b-9a60-6f560825d9b0.svg",
    name: "Bảo hiểm ô tô",
  },
  {
    id: 2,
    img: "https://file.vdiarybook.com/api/files/admin/ab3bec4d-c324-41d7-afdf-dd5034997873.jpg",
    name: "Ví trả sau",
  },
  {
    id: 3,
    img: "https://file.vdiarybook.com/api/files/admin/3e018ff3-31b7-425f-9a35-8c10ccdd3076.jpg",
    name: "Bảo hiểm nhân thọ",
  },
  {
    id: 4,
    img: "https://file.vdiarybook.com/api/files/admin/464ff271-e6db-489c-9b10-180e5e8ca21e.jpg",
    name: "Thanh toán khoản vay",
  },
  {
    id: 5,
    img: "https://file.vdiarybook.com/api/files/admin/40171f9a-4e03-432f-8964-d75287ecb669.jpg",
    name: "Bảo hiểm xa máy",
  },
  {
    id: 6,
    img: "https://file.vdiarybook.com/api/files/admin/f399d999-c5d7-4d52-8efb-680418a0b570.jpg",
    name: "Vay nhanh",
  },
  {
    id: 7,
    img: "https://file.vdiarybook.com/api/files/admin/0e9a393b-8f1a-4a09-91a0-a60ff3f7115b.svg",
    name: "Túi thần tài",
  },
];

const Utilities = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className=" mt-10   mx-auto w-full max-w-[952px] font-roboto bg-white p-4">
      <div className=" border-b border-gray-200 mt-4 sm:w-auto bg-white shadow-sm sm:grid sm:grid-cols-2 sm:gap-2  ">
        {tabs.map((tab, a) => (
          <button
            key={a}
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
            <div className=" flex relative items-center  ">
              <div className="bg-[#4284f3]  px-8 w-auto h-[30px]  absolute bottom-0 flex justify-center items-center">
                <div className="w-1 h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-3 top-0"></div>
                <div className="w-1 h-[11.99px] -rotate-0 bg-[#4284f3] absolute -right-1 bottom-0 "></div>
                <div className="w-[5px] h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-1 top-0 "></div>
                <p className="mt-[1.5px] text-white lg:text-sm text-[0.77rem] font-normal ">
                  Công cụ thông minh
                </p>
              </div>
            </div>
            <div className=" border-b-[3px] border-[#4284f3] w-full"></div>
            <div className="lg:grid lg:grid-cols-6 lg:gap-2 grid grid-cols-3 gap-1 mt-8 mb-8 ">
              {tools.map((tool, i) => (
                <div key={i} className="lg:px-2 px-0.5">
                  <div className="bg-white rounded-lg border shadow-md w-[3.74rem] h-[3.74rem] flex items-center justify-center m-auto">
                    <img
                      className="rounded-md w-12 h-12"
                      src={tool.img}
                      alt=""
                    />
                  </div>
                  <div className=" ">
                    <div className="lg:text-sm text-[0.76rem] text-[#555770] font-normal flex justify-center my-2">
                      {tool.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-8">
              <div className=" flex relative items-center  ">
                <div className="bg-[#4284f3]  px-8 w-auto h-[30px]  absolute bottom-0 flex justify-center items-center">
                  <div className="w-1 h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-3 top-0"></div>
                  <div className="w-1 h-[11.99px] -rotate-0 bg-[#4284f3] absolute -right-1 bottom-0 "></div>
                  <div className="w-[5px] h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-1 top-0 "></div>
                  <p className="mt-[1.5px] text-white lg:text-sm text-[0.77rem] font-normal ">
                    Cửa hàng tiện ích
                  </p>
                </div>
              </div>
              <div className=" border-b-[3px] border-[#4284f3] w-full"></div>
              <div className="lg:grid lg:grid-cols-6 lg:gap-2 grid grid-cols-3 gap-1 mt-8 mb-8 ">
                {shops.map((shop, b) => (
                  <div key={b} className="lg:px-2 px-0.5">
                    <div className="bg-white rounded-lg border shadow-md w-[3.74rem] h-[3.74rem] flex items-center justify-center m-auto">
                      <img
                        className="rounded-md w-12 h-12"
                        src={shop.img}
                        alt=""
                      />
                    </div>
                    <div className=" ">
                      <div className="lg:text-sm text-[0.76rem] text-[#555770] font-normal flex justify-center my-2">
                        {shop.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-8">
              <div className=" flex relative items-center  ">
                <div className="bg-[#4284f3]  px-8 w-auto h-[30px]  absolute bottom-0 flex justify-center items-center">
                  <div className="w-1 h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-3 top-0"></div>
                  <div className="w-1 h-[11.99px] -rotate-0 bg-[#4284f3] absolute -right-1 bottom-0 "></div>
                  <div className="w-[5px] h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-1 top-0 "></div>
                  <p className="mt-[1.5px] text-white lg:text-sm text-[0.77rem] font-normal ">
                    Thư viện tri thức số
                  </p>
                </div>
              </div>
              <div className=" border-b-[3px] border-[#4284f3] w-full"></div>
              <div className="lg:grid lg:grid-cols-6 lg:gap-2 grid grid-cols-3 gap-1 mt-8 mb-8 ">
                {digitals.map((digital, c) => (
                  <div key={c} className="lg:px-2 px-0.5">
                    <div className="bg-white rounded-lg border shadow-md w-[3.74rem] h-[3.74rem] flex items-center justify-center m-auto">
                      <img
                        className="rounded-md w-12 h-12"
                        src={digital.img}
                        alt=""
                      />
                    </div>
                    <div className=" ">
                      <div className="lg:text-sm text-[0.76rem] text-[#555770] font-normal flex justify-center my-2">
                        {digital.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-8">
              <div className=" flex relative items-center  ">
                <div className="bg-[#4284f3]  px-8 w-auto h-[30px]  absolute bottom-0 flex justify-center items-center">
                  <div className="w-1 h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-3 top-0"></div>
                  <div className="w-1 h-[11.99px] -rotate-0 bg-[#4284f3] absolute -right-1 bottom-0 "></div>
                  <div className="w-[5px] h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-1 top-0 "></div>
                  <p className="mt-[1.5px] text-white lg:text-sm text-[0.77rem] font-normal ">
                    Cuộc sống thông minh
                  </p>
                </div>
              </div>
              <div className=" border-b-[3px] border-[#4284f3] w-full"></div>
              <div className="lg:grid lg:grid-cols-6 lg:gap-2 grid grid-cols-3 gap-1 mt-8 mb-8 ">
                {lifes.map((life, d) => (
                  <div key={d} className="lg:px-2 px-0.5">
                    <div className="bg-white rounded-lg border shadow-md w-[3.74rem] h-[3.74rem] flex items-center justify-center m-auto">
                      <img
                        className="rounded-md w-12 h-12"
                        src={life.img}
                        alt=""
                      />
                    </div>
                    <div className=" ">
                      <div className="lg:text-sm text-[0.76rem] text-[#555770] font-normal flex justify-center my-2">
                        {life.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-8">
              <div className=" flex relative items-center  ">
                <div className="bg-[#4284f3]  px-8 w-auto h-[30px]  absolute bottom-0 flex justify-center items-center">
                  <div className="w-1 h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-3 top-0"></div>
                  <div className="w-1 h-[11.99px] -rotate-0 bg-[#4284f3] absolute -right-1 bottom-0 "></div>
                  <div className="w-[5px] h-[32.99px] -rotate-12 bg-[#4284f3] absolute -right-1 top-0 "></div>
                  <p className="mt-[1.5px] text-white lg:text-sm text-[0.77rem] font-normal ">
                    Tài chính - Bảo hiểm
                  </p>
                </div>
              </div>
              <div className=" border-b-[3px] border-[#4284f3] w-full"></div>
              <div className="lg:grid lg:grid-cols-6 lg:gap-2 grid grid-cols-3 gap-1 mt-8 mb-8 ">
                {insurances.map((insurance, e) => (
                  <div key={e} className="lg:px-2 px-0.5">
                    <div className="bg-white rounded-lg border shadow-md w-[3.74rem] h-[3.74rem] flex items-center justify-center m-auto">
                      <img
                        className="rounded-md w-12 h-12"
                        src={insurance.img}
                        alt=""
                      />
                    </div>
                    <div className=" ">
                      <div className="lg:text-sm text-[0.76rem] text-[#555770] font-normal flex justify-center my-2">
                        {insurance.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && <div></div>}
      </div>
    </div>
  );
};
export default Utilities;
