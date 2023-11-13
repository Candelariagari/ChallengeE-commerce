import LogInForm from "@/components/LogInForm";

export default function LogIn() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-orange-200">
      <div className=" h-fit w-fit  rounded-2xl bg-white drop-shadow-xl">
        <LogInForm />
      </div>
    </div>
  );
}
