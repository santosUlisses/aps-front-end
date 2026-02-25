import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgError, setMsgError] = useState(null);
    const navigate = useNavigate();
    const { persistirDados } = useContext(AuthContext);

    const url = "http://localhost:8000/auth/login";

    async function formulario(e) {
        e.preventDefault();
        console.log(email, password)
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });
            const data = await res.json();
            console.log(data);
            if (data.detail) {
                setMsgError("Login ou senha inválidos");
                return
            }
            persistirDados(data.user.name, data.access_token);
            navigate('/dashboard')

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h3 className="text-center mb-4">Login</h3>

                <form onSubmit={formulario}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input type="password"
                            className="form-control"
                            required
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {msgError ? (
                        <div className="alert alert-danger text-center mt-4 fw-bold" >
                            {msgError}
                        </div>
                    ) : ""}

                    <button className="btn btn-primary w-100">Entrar</button>
                </form>
            </div>
        </div>

    )
}