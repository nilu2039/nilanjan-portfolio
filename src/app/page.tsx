import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-w-fit flex flex-col items-center justify-center min-h-dvh overflow-x-hidden">
      <div className="w-9/12 h-full grid place-items-center">
        <NavBar />
      </div>
    </div>
  );
}
