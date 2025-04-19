function HomePage() {
    return (
        <div >
            <h1>Home Page</h1>
            {/* botones para dirigir login o register  */}
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
        </div>
    );
}

export default HomePage;