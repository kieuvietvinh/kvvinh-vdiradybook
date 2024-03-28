const home = () => {
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
          <form class="max-w-sm mx-auto ">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm   block w-full p-2.5 "
            >
              <option selected>Sản phẩm</option>
              <option value="US">Doanh nghiệp</option>
            </select>
          </form>

          <input
            type="text"
            placeholder="Nhập vị trí của bạn"
            className="border  px-2 py-1"
          />
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
            className="border px-2 py-1"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
};
export default home;
