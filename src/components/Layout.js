import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo">R</div>
          <h2>Red Augment</h2>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <div className="dropdown">
            <span>Company ▼</span>
            <div className="dropdown-content">
              <Link to="/about">About</Link>
              <Link to="/blog">Blogs</Link> {/* This links to your blog page */}
              <Link to="/careers">Careers</Link>
            </div>
          </div>
          <Link to="/pricing">Pricing</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        <Outlet /> {/* This will render either Services or Blog */}
      </main>
    </div>
  );
}
