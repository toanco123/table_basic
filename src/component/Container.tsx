import TableBody from "./TableBody";
// import TableFooter from "./TableFooter";
import TableTop from "./TableTop";

const Contents = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <h1 className="text-3xl py-4 border-b mb-10 text-center">Table-Basic</h1>
      <div className="flex flex-col container h-[500px] mx-auto py-6 px-4 bg-white">
        <TableTop />
        <TableBody />
        {/* <TableFooter /> */}
      </div>
    </div>
  );
};

export default Contents;
