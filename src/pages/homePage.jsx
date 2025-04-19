import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{
            height: "100vh",
            background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            padding: "1rem"
        }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Bienvenido a mi Portafolio</h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                Descubre mis proyectos de desarrollo web.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
                <button
                    onClick={() => navigate("/login")}
                    style={{
                        padding: "0.75rem 1.5rem",
                        fontSize: "1rem",
                        backgroundColor: "#fff",
                        color: "#1e3c72",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "transform 0.2s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                    Iniciar sesión
                </button>
                <button
                    onClick={() => navigate("/register")}
                    style={{
                        padding: "0.75rem 1.5rem",
                        fontSize: "1rem",
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "2px solid #fff",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "transform 0.2s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                    Registrarse
                </button>
            </div>
        </div>
    );
}

export default HomePage;
