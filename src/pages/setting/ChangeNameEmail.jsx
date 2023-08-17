const ChangeNameEmail = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className=" w-full" onSubmit={handleSubmit}>
      <div className="flex w-full flex-col mt-20">
        <label htmlFor="" className=" text-xl my-2 font-semibold">
          Change Name
        </label>
        <input
          type="text"
          className=" outline-none border-2 p-2"
          // value="Khokon dev"
          placeholder="Change Your Name"
        />
      </div>
      <div className="flex w-full flex-col mt-3">
        <label htmlFor="" className=" text-xl my-2 font-semibold">
          Change Email
        </label>
        <input
          type="text"
          className=" outline-none border-2 p-2"
          // value="Khokon dev"
          placeholder="Change Your Email"
        />
      </div>
      <div className=" w-full flex justify-end mt-4">
        <button className=" text-lg bg-black text-white rounded-sm p-2 px-8">
          Update
        </button>
      </div>
    </form>
  );
};

export default ChangeNameEmail;
