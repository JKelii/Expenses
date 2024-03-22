type expenseType = {
  expense: string[];
  description: string[];
};

export const History = ({ expense, description }: expenseType) => {
  return (
    <main className="flex flex-col items-end justify-end">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl ">Balance history: </h2>
        <ul className="">
          {expense.map((item, index) => (
            <li key={index}>
              {parseInt(item) > 0 ? (
                <ul className="flex flex-row items-center justify-center gap-2">
                  <li className="text-green-500">{item}</li>{" "}
                  <li>{description[index]}</li>
                </ul>
              ) : (
                <ul className="flex flex-row gap-2">
                  <li className="text-red-500">{item}</li>{" "}
                  <li>{description[index]}</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
