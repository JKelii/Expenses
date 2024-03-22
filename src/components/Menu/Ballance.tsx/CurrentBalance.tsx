import { LayersIcon } from "lucide-react";
import { FormEventHandler } from "react";

type CurrentBalanceProps = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  total: number;
};

export const CurrentBalance = ({
  handleSubmit,
  total,
}: CurrentBalanceProps) => {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-center gap-1">
        <LayersIcon />
        <h1 className="text-xl"> Current Ballance: </h1>
        {total >= 0 ? (
          <h2 className="text-xl font-bold text-green-500">${total}</h2>
        ) : (
          <h2 className="text-xl font-bold text-red-500">${total}</h2>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
        <label>Add transaction: </label>
        <input
          type="text"
          name="expense"
          className="w-32 border-2 border-black rounded-lg"
        />
        <label>Description: </label>
        <input
          type="text"
          name="description"
          className="w-32 border-2 border-black rounded-lg"
        />
        <button
          type="submit"
          className="w-24 p-2 text-sm text-white duration-150 bg-purple-900 rounded-lg text-smite border-1 hover:font-bold hover:bg-purple-800"
        >
          Click to add
        </button>
      </form>
    </main>
  );
};
