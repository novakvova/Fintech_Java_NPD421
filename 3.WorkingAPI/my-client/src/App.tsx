import './App.css'
import {useRegisterMutation} from "./services/apiAccount.ts";
import type {IRegister} from "./services/types.ts";
import {useState} from "react";

function App() {
    const [register] = useRegisterMutation();
    const [file, setFile] = useState<File|null>(null);

    const handleRegister = async () => {
        const registerData: IRegister = {
            lastName: "Kozak",
            name: "Kozak",
            email: "kozak@gmail.com",
            phone: "0987654321",
            password: "123456789",
            imageFile: file
        }
        try {
            await register(registerData).unwrap();
            console.log("Register success");
        }
        catch (error) {
            console.log("Register error",error);
        }
    }

    return (
        <>
            <h1 className={"text-3xl font-bold text-center"}>
                Привіт козаки і козачки
            </h1>

            <input onChange={(e) => setFile(e.target.files?.[0] || null)}
                type="file"
                   className="text-sm text-stone-500 file:mr-5 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
            <br/>

            <button onClick={handleRegister}
                    className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                Register
            </button>
        </>
    )
}

export default App
