import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 text-center">

                    <h1 className="display-5 fw-bold mb-3">
                        APS Front-end <br></br> Gerenciamento de Tarefas
                    </h1>

                    <p className="lead mb-4">
                        Sistema desenvolvido para organização e controle de tarefas,
                        permitindo cadastro, autenticação e gerenciamento de atividades
                        de forma simples e eficiente.
                    </p>

                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/cadastro" className="btn btn-primary btn-lg">
                            Cadastre-se
                        </Link>

                        <Link to="/login" className="btn btn-outline-secondary btn-lg">
                            Login
                        </Link>
                    </div>

                    <hr className="my-5" />

                    <div className="row text-start">
                        <div className="col-md-4 mb-3">
                            <h5>📋 Organize</h5>
                            <p className="small">
                                Crie, edite e acompanhe suas tarefas em um único lugar.
                            </p>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5>⚡ Produtividade</h5>
                            <p className="small">
                                Aumente sua produtividade com um sistema simples e intuitivo.
                            </p>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5>🔐 Segurança</h5>
                            <p className="small">
                                Acesso restrito por login para manter suas informações protegidas.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}