import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarpassword, setConfirmarpassword] = useState("");
    const [msgSucess, setMsgSuccess] = useState(null);
    const navigate = useNavigate();

    const url = "http://localhost:8000/auth/signup";

    function mostrarDiv(mensagem) {
        setMsgSuccess(mensagem);
    }

    async function formulario(e) {
        e.preventDefault();
        if (password !== confirmarpassword) {
            mostrarDiv("As senhas não coincidem");
            return
        }

        try {

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        name,
                        email,
                        password,
                    })
            })
            const data = await res.json();
            console.log(data.user);
            if (data.user) {
                mostrarDiv("Conta criada com sucesso!");
                alert("Conta criada com sucesso!")
                navigate("/login")
                return
            }
            mostrarDiv(data.detail);

        } catch (error) {
            console.log(error);
        }


    }

    return (
        <>

            <div className="container my-5 d-flex justify-content-center">
                <div className="card shadow w-100" >
                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">Criar conta</h5>
                    </div>

                    <div className="card-body">
                        <form onSubmit={formulario} method="post" id="form">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" name="name" required
                                    value={name} onChange={((e) => { setName(e.target.value) })}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input type="email" className="form-control" id="email" name="email" required value={email}
                                    onChange={((e) => setEmail(e.target.value))}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label"> Senha</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Digite uma senha" required min={4}
                                    value={password} onChange={((e) => setPassword(e.target.value))}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Confirme a password</label>
                                <input type="password" className="form-control" name="confirmarpassword" placeholder="Confirme a nova password" required min={4}
                                    value={confirmarpassword} onChange={((e) => setConfirmarpassword(e.target.value))}></input>
                            </div>



                            {msgSucess ? (
                                <div className="alert alert-success text-center mt-4 fw-bold" >
                                    <p>{msgSucess}! </p>
                                </div>
                            ) : ""}




                            <div className="d-grid">
                                <button type="submit" className="btn btn-success"> Cadastrar</button>
                            </div>
                        </form>
                    </div>

                    <div className="card-footer text-end">
                        <a href="/home" className="btn btn-outline-secondary btn-sm"> Voltar</a>
                    </div>
                </div>
            </div>




        </>
    )
}