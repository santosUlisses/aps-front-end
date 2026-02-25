import { useContext, useEffect, useState } from "react";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



export default function Task() {
    const { id } = useParams();
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const url = "http://localhost:8000/tasks";

    const [task, setTask] = useState({
        title: "",
        description: "",
        deadline: ""
    });


    async function findTask() {
        try {
            const res = await fetch(`${url}/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error("Erro ao buscar tarefa");
            }

            const data = await res.json();


            setTask(data.task || data);

        } catch (err) {
            alert(err.message);
        }
    }


    async function formulario(e) {
        e.preventDefault();

        try {
            const res = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(task),
            });

            if (!res.ok) {
                throw new Error("Erro ao atualizar tarefa");
            }

            const data = await res.json();
            alert("Tarefa atualizada com sucesso!");
            navigate('/tasks')

        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        findTask();
    }, [id, token]);

    return (
        <div className="container mt-5">
            <h3 className="mb-4 text-center">Editar Tarefa</h3>

            <form onSubmit={formulario}>

                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input
                        type="text"
                        className="form-control"
                        value={task.title}
                        onChange={(e) =>
                            setTask({ ...task, title: e.target.value })
                        }
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">Descrição</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        value={task.description}
                        onChange={(e) =>
                            setTask({ ...task, description: e.target.value })
                        }
                    ></textarea>
                </div>


                <div className="mb-4">
                    <label className="form-label">Data limite</label>
                    <input
                        type="date"
                        className="form-control"
                        value={task.deadline}
                        onChange={(e) =>
                            setTask({ ...task, deadline: e.target.value })
                        }
                    />
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                        Salvar
                    </button>

                    <button
                        type="reset"
                        className="btn btn-outline-secondary"
                        onClick={findTask}
                    >
                        Resetar
                    </button>
                </div>
            </form>
            <Link to={"/tasks"} className="btn btn-secondary mt-2">Voltar</Link>
        </div>
    );
}