import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Sign in
        </h1>
        <form className="mt-6" autoComplete="new-password" noValidate>
          <Input label="Email" type="email" id="email" required />
          <Input label="Password" type="password" id="password" required />
          <div className="mt-6">
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
