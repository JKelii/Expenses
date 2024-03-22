import { useState } from "react";
import { CurrentBalance } from "./CurrentBalance";
import { History } from "./History";

export function Ballance() {
  const [expense, setExpense] = useState<string[]>([]);
  const [description, setDescription] = useState<string[]>([]);

  const addExpense = (newExpense: string) => {
    setExpense([...expense, newExpense]);
  };

  const addDescription = (newDescription: string) => {
    setDescription([...description, newDescription]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense = e.currentTarget.expense.value;
    const newDescription = e.currentTarget.description.value;
    addExpense(newExpense);
    addDescription(newDescription);
    e.currentTarget.expense.value = "";
    e.currentTarget.description.value = "";
  };

  const total = expense.reduce((acc, item) => (acc += parseInt(item)), 0);

  return (
    <header className="flex flex-row items-start justify-around w-1/2 gap-5 p-4 rounded-lg h-96 bg-gradient-to-r from-zinc-200 to-slate-50">
      <CurrentBalance handleSubmit={handleSubmit} total={total} />
      <History expense={expense} description={description} />
    </header>
  );
}
