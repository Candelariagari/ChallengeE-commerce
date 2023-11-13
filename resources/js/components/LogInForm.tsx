import { MailIcon } from "@/icons/MailIcon";
import { Button } from "./Button";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

export default function LogInForm() {
  return (
    <form className="flex flex-col gap-10 p-10 md:p-14">
      <Input id="mail" label="Mail">
        <MailIcon />
      </Input>
      <PasswordInput id="password" label="Password" />
      <Button text="Log In" />
    </form>
  );
}
