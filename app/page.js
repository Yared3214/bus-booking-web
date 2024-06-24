import Image from "next/image";
import HomePage from "./Pages/HomePage";
import SingUpPage from "./Pages/SingUpPage";
import SignInPage from "./Pages/SignInPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* <HomePage/> */}
      {/* <SingUpPage/> */}
      <SignInPage/>
          </main>
  );
}
