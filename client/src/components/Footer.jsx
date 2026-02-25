export default function Footer() {
    return (
        <footer className="bg-dark text-light mt-5">
            <div className="container py-4">
                <div className="row">


                    <div className="col-md-4 mb-3">
                        <h5>APS Front End</h5>
                        <p className="small">
                            Projeto acadêmico desenvolvido com React para fins educacionais.
                        </p>
                    </div>


                    <div className="col-md-4 mb-3">
                        <h5>Navegação</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="/login" className="text-light text-decoration-none">Login</a></li>
                            <li><a href="/cadastro" className="text-light text-decoration-none">Cadastro</a></li>
                        </ul>
                    </div>


                    <div className="col-md-4 mb-3">
                        <h5>Contato</h5>
                        <p className="small mb-1">📧 email@hotmail.com</p>
                        <p className="small mb-0">📍 Brasil</p>
                    </div>

                </div>

                <hr className="border-secondary" />

                <div className="text-center small">
                    © {new Date().getFullYear()} APS Front End — Todos os direitos reservados
                </div>
            </div>
        </footer>
    );
}