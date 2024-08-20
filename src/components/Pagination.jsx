const Pagination = ({ data, gamesPerPage, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8 ">
      <ul className="flex w-fit rounded-md overflow-hidden p-1 bg-white ">
        <li
          className=" text-gray-700 cursor-pointer rounded hover:bg-gray-300 w-10 h-10 text-center leading-10"
          onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
        >
          &lsaquo;
        </li>
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={`hover:bg-gray-300 cursor-pointer w-10 h-10 text-center leading-10 rounded ${
                number === currentPage
                  ? "bg-[#f48924] text-white hover:bg-orange-500"
                  : " text-gray-700"
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </li>
          );
        })}
        <li
          className=" text-gray-700 w-10 h-10 text-center leading-10 cursor-pointer rounded hover:bg-gray-300 "
          onClick={() =>
            currentPage < pageNumbers.length &&
            setCurrentPage((prev) => prev + 1)
          }
        >
          &rsaquo;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
