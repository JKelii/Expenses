type ButtonType = {
  text: string;
};

export default function ButtonComponent({ text }: ButtonType) {
  return (
    <button
      type="submit"
      className="w-full p-2 text-sm text-white duration-150 bg-purple-900 rounded-lg border-1 hover:font-bold hover:bg-purple-800"
    >
      {text}
    </button>
  );
}
