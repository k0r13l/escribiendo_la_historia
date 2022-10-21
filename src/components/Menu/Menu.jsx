const Menu = (props) => {
    return (
        <div className="Menu">
            <nav class="navbar navbar-expand-lg bg-light shadow-lg">
                <div class="container">
                    <strong class="navbar-brand">TC-688 Turrialba</strong>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item ">
                                <a class="nav-link active" href={props.menu.opcion1.link}>{props.menu.opcion1.name}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href={props.menu.opcion2.link}>{props.menu.opcion2.name}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href={props.menu.opcion3.link}>{props.menu.opcion3.name}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href={props.menu.opcion4.link}>{props.menu.opcion4.name}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href={props.menu.opcion5.link}>{props.menu.opcion5.name}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;