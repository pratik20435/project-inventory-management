import { PasswordInput, TextInput, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router";
import { login } from "../../api/auth";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },
    validate: {
      email: function (value) {
        if (/^\S+@\S+$/.test(value)) {
          return null;
        } else {
          return "email cannot be empty";
        }
      },
      password: function (value) {
        if (value.length) {
          return null;
        } else {
          return "password can not be empty";
        }
      },
    },     
  });
  const navigate = useNavigate();
  const handleLogin = async (values: any) => {


     try{
       const response = await login(values);
       if (response.user.role !== "admin") {
        throw new Error("Unauthorized access");
       }
    console.log(response, "@response");
    if (response.accessToken.length) {
      localStorage.setItem("token", response.accessToken);
      navigate("/dashboard");
    } else {
      console.log("cannnot login");
    }
     }
     catch(error) {
      setError ("Invalid email or password");
      console.log(error ,"@ERROR FROM CATCH");
     }
      finally {
        console.log("finally block executed");
      }
    
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        </h1>
          {error && <div className="text-red-500">{error}</div>}
        <form onSubmit={form.onSubmit(handleLogin)} className="space-y-5">
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
              Submit
            </Button>
          </Group>
        </form>
      </div>
    </div>
  );
}
