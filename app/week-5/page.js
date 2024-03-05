import ItemList from "./item-list";

function Page() {
  return (
    <main className="bg-slate-200 text-white mx-auto p-2">
      <h1 className="text-red-500 text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList></ItemList>
    </main>
  );
}

export default Page;
