import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <div className="col-md-10 col-lg-8">


                    <div className="mb-4 text-center">
                        <h1 className="fw-bold">Dashboard</h1>
                        <p className="text-muted">
                            Bem-vindo(a), <strong>{user}</strong>
                        </p>
                    </div>


                    <div className="row">

                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title">📌 Cadastrar Tarefa</h5>
                                    <p className="card-text small">
                                        Adicione uma nova tarefa ao sistema e organize suas atividades.
                                    </p>
                                    <Link to="/create/task" className="btn btn-primary">
                                        Nova Tarefa
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title">📋 Minhas Tarefas</h5>
                                    <p className="card-text small">
                                        Visualize, edite ou exclua suas tarefas cadastradas.
                                    </p>
                                    <Link to="/tasks" className="btn btn-outline-secondary">
                                        Ver Tarefas
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}