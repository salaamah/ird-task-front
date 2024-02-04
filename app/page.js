import DuaCategories from "@/components/DuaCategories";
import DuaContainer from "@/components/DuaContainer";
import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";

export default function Home() {
  return (
    <main className="mt-10">
      <Header />
      <MenuBar />
      <div className="flex flex-row justify-center w-4/5   mx-auto   p-10 absolute left-1/2 -translate-x-1/2 top-[110px]">
        <DuaCategories />
        <DuaContainer />
      </div>
    </main>
  );
}
