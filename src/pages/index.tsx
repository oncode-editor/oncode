import Link from "next/link";
import React from "react";
const HomePage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center gap-2 text-xl text-red-500 font-semibold">
      You are on{" "}
      <Link href={"https://github.com/oncode-editor"} target="_blank">
        <span className="underline underline-offset-2 text-blue-500">Oncode Editor</span>
      </Link>
    </div>
  );
};

export default HomePage;
