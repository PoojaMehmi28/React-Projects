export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="www.abc.com">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page"
                href="www.abc.com">Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.abc.com">
                Link
              </a>
            </li>
          </ul>
          {props.searchBar ? (
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            "CLick on Me!!"
          )}
        </div>
      </div>
    </nav>
  );
}
