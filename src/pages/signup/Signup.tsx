import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { signUp } from "../../api/auth";
import { useNavigate } from "react-router";

export default function Signup() {

const form = useForm({
    initialValues: {
        firstName: "",
        lastName: "",
        email:"",
        password:"",

    }
});

const  navigate = useNavigate();


async function handleSignUp(values:any){
    await signUp(values);
    navigate("/login");
}
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          SignUp
        </h1>
        <form onSubmit={form.onSubmit(handleSignUp)} className="space-y-5">
         <TextInput
            label="FirstName"
            placeholder="Enter your firstname"
            className="my-2.5"
            key={form.key("firstname")}
            {...form.getInputProps("firstName")}
          />
           <TextInput
            label="LastName"
            placeholder="Enter your Lastname"
            className="my-2.5"
            key={form.key("lastname")}
            {...form.getInputProps("lastName")}
          />
          <TextInput
            label="Email"
            placeholder="Enter your Email"
            className="my-2.5"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            className="my-2.5"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <Group justify="flex-end" mt="md">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-1200 text-white font-semibold py-2 rounded"
            >
              SignUp
            </Button>
          </Group>
        </form>
      </div>
    </div>
  );
}
