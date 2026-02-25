import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function CreateTask() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState("")
    const [msg, setMsg] = useState("");
    const { token } = useContext(AuthContext)
    const url = "http://localhost:8000/tasks";

    async function formulario(e) {
        e.preventDefault();

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title, description, deadline
                })
            });
            const data = await res.json();

            if (data.detail) {
                setMsg(data.detail);
                return
            }
            setMsg("Tarefa criada com sucesso!");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm">

                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">
                                Criar Nova Tarefa
                            </h3>

                            <form onSubmit={formulario}>

                                <div className="mb-3">
                                    <label className="form-label">Título da tarefa</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="Ex: Estudar React"
                                        onChange={((e) => setTitle(e.target.value))}
                                    />
                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Descrição</label>
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        rows="3"
                                        placeholder="Descreva a tarefa"
                                        onChange={((e) => setDescription(e.target.value))}></textarea>
                                </div>


                                <div className="mb-4">
                                    <label className="form-label">Data limite</label>
                                    <input
                                        type="date"
                                        name="deadline"
                                        className="form-control" onChange={((e) => setDeadline(e.target.value))} />
                                </div>


                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary">
                                        Salvar Tarefa
                                    </button>

                                    <button type="reset" className="btn btn-outline-secondary">
                                        Limpar
                                    </button>
                                </div>

                            </form>
                        </div>

                        {msg ? (
                            <>
                                <div className="alert alert-success text-center mt-4 fw-bold" >
                                    {msg}
                                </div></>
                        ) : ""}

                    </div>
                    <Link to={"/dashboard"} className="btn btn-secondary mt-2">Voltar</Link>
                </div>

            </div>
        </div>
    );
}