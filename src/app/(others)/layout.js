import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OthersLayout = ({ children }) => {
    return (
        <>
            <Navbar />

            {children}

            <Footer />
        </>
    )
};

export default OthersLayout;