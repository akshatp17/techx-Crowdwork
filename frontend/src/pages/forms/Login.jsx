import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../../components/LoginForm";
import { Link } from "react-router";

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState("Volunteer");
    const navigate = useNavigate();

    useEffect(() => {
        const tkn = localStorage.getItem('userToken');
        if (tkn) {
            navigate('/home');
        }
    }, [navigate]);

    return (
        <>

            <nav className="flex justify-between items-center p-4 border-b shadow-sm">
                <Link to={"/home"} className="text-xl font-bold">
                    <span className="text-black">Community</span>
                    <span className="text-black font-bold">Force</span>
                </Link>
            </nav>
            <div className="flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <p className="text-gray-500">Log in to your account to continue</p>

                <div className="flex mt-6 space-x-4 border-b">
                    {["Volunteer", "NGO", "Government"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="mt-6 p-6 border rounded-lg w-96 shadow-lg">
                    {activeTab === "Volunteer" && <LoginForm title="Volunteer Login" placeholder="john.doe@example.com" activeTab={activeTab} />}
                    {activeTab === "NGO" && <LoginForm title="NGO Login" placeholder="contact@organization.org" activeTab={activeTab} />}
                    {activeTab === "Government" && <LoginForm title="Government Login" placeholder="contact@agency.gov" activeTab={activeTab} />}
                </div>

                <p className="mt-4 text-sm text-gray-500">
                    Don't have an account? <Link to={"/register"} className="text-blue-600">Sign up</Link>
                </p>
            </div>
        </>
    );
};

export default LoginPage;
