import { Link } from "react-router-dom";

function NotFound() {
    return(
        <div className="p-8 text-center">
            <h1 className="text-2xl font-bold">Page introuvable</h1>
            <p className="mt-2 text-gray-500">Cette adresse n'existe pas.</p>
            <Link to="/" className="inline-block mt-4 text-blue-600 underline">
                Retour à l'accueil
            </Link>
        </div>
    );
    
}
export default NotFound;
