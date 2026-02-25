import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ListTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { token } = useContext(AuthContext);
    const url = "http://localhost:8000/tasks";

    async function findTasks() {
        try {
            setLoading(true);
            const res = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error("Erro ao buscar tarefas");
            }

            const data = await res.json();
            setTasks(data.tasks || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function deleteTask(id) {
        const confirmDelete = window.confirm(
            "Tem certeza que deseja excluir esta tarefa?"
        );

        if (!confirmDelete) return;

        try {
            const res = await fetch(`${url}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error("Erro ao excluir tarefa");
            }

            setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
        } catch (err) {
            alert(err.message);
        }
    }



    useEffect(() => {
        findTasks();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Minhas Tarefas</h2>


            {loading && (
                <p className="text-center text-muted">Carregando tarefas...</p>
            )}


            {error && (
                <p className="text-center text-danger">{error}</p>
            )}


            {!loading && tasks.length === 0 && (
                <p className="text-center text-muted">
                    Nenhuma tarefa cadastrada.
                </p>
            )}


            <div className="list-group">
                {tasks.map((t) => (
                    <div key={t.id}
                        className="list-group-item mb-3 shadow-sm">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h5 className="mb-1">{t.title}</h5>
                                <p className="mb-1 small text-muted">
                                    {t.description}
                                </p>
                                <small className="text-secondary">
                                    📅 Prazo: {t.deadline}
                                </small>
                            </div>

                            <div className="d-flex gap-2">


                                <Link to={`/tasks/${t.id}`} className="btn btn-sm btn-outline-primary">Editar</Link>

                                <button
                                    onClick={() => deleteTask(t.id)}
                                    className="btn btn-sm btn-outline-danger">
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link className="btn btn-outline-secondary" to={"/dashboard"}>Voltar</Link>
        </div>
    );
}