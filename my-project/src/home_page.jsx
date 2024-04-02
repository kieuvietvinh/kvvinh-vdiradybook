import React, { useState, useEffect } from "react";

const home = () => {
  const [data, setData] = useState([]);
  console.log("data", data);

  const loadData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/autor`).then((response) =>
        response.json()
      );
      setData(res);
      console.log("res", res);
    } catch (error) {}
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="font-roboto lg:max-w-screen-xl  mx-auto w-full max-w-screen-xl bg-white ">
      <div className="flex justify-between items-center p-4">
        <div>
          <img
            src="https://ocopmart.org/static/media/images/siteinfo/2021_07_30/s150_150/logo-web-1627642464.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>
        <div className="flex">
          <form className="max-w-sm mx-auto ">
            <select
              id="countries"
              className="bg-gray-50 border-2 border-[#2f80ed] text-gray-900 text-sm   block w-full p-2.5 "
            >
              <option>Sản phẩm</option>
              <option value="US">Doanh nghiệp</option>
            </select>
          </form>

          <input
            type="text"
            placeholder="Nhập vị trí của bạn"
            className="border-2 border-[#2f80ed]  px-2 py-1"
          />
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
            className="border-2 border-[#2f80ed] px-2 py-1"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
            Tìm kiếm
          </button>
        </div>
      </div>
      <div className="mt-[10px]">
        <div className="text-sm font-normal text-center text-[#2f80ed] border-b border-[#2f80ed] uppercase">
          <ul className="flex flex-wrap  pt-[0.6rem]">
            <li className="me-2">
              <a
                href="#"
                className="inline-block  pl-[1.6rem] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              >
                SỰ KIỆN - TUYỂN DỤNG
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block pl-[1.6rem] text-blue-600  rounded-t-lg active "
                aria-current="page"
              >
                Mua - Bán
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block pl-[1.6rem] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              >
                TIN TỨC OCOP
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block pl-[1.6rem] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              >
                Diễn đàn
              </a>
            </li>
            <li>
              <a className="inline-block pl-[1.6rem] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                TÀI LIỆU - VĂN BẢN
              </a>
            </li>
            <li>
              <a className="inline-block pl-[1.6rem] border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
                Video
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" h-64 p-2 grid grid-rows-3 grid-flow-col gap-2">
        <div className=" ">
          <img
            className="rounded-md h-64 w-full"
            src="https://ocopmart.org/static/media/files/banners/s800_800/874_1672725493_90363b3c3f5e2b85.jpg"
            alt=""
          />
        </div>
        <div className=" pl-[5px]">
          <div>
            <img
              className="w-full h-32 rounded-md"
              src="https://ocopmart.org/static/media/files/banners/s800_800/555_1657348473_42462c92179db2b1.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-32 w-full rounded-md"
              src="https://ocopmart.org/static/media/files/banners/s800_800/848_1634452050_979616bc252a0d32.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex  p-2">
        <div className="w-[65%] flex justify-between py-[15px]">
          <div className="text-[#2f80ed] font-semibold text-[17px] flex items-center justify-center">
            Trang chu
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://ocopmart.org/static/media/files/banners/286_1650352902_1000625e630614097.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://ocopmart.org/static/media/files/banners/791_1650352892_378625e62fc31094.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[35%] pl-[5px] pt-[5px]">
          <div>
            <img
              className="w-full h-32 rounded-md"
              src="https://ocopmart.org/static/media/files/banners/s800_800/953_1657167413_39562c65e35cfad6.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full flex ">
        {data.map((item, index) => (
          <div
            key={index}
            className="lg:px-2 px-0.5 bg-white border shadow-md w-[154px] h-[154px] "
          >
            <div className=" flex items-center justify-center p-[10px]">
              <img
                className="rounded-md w-[80px] h-[80px]"
                src={item.img}
                alt=""
              />
            </div>
            <div className="mt-[3px] ">
              <div className="lg:text-sm text-[0.76rem] text-[#555770] font-normal  text-center">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 bg-white relative shadow-md w-full ">
        <div className="bg-[#4284f3]  px-4 w-auto h-16  absolute top-0 flex justify-center items-center">
          <p className=" text-white text-[15px] font-medium uppercase">
            Sản phẩm hot
          </p>
        </div>
      </div>
    </div>
  );
};
export default home;
