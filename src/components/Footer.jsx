import "./Footer.css"
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer w-full text-white">
            <div className="flex justify-center items-center pt-12 w-full text-center">
                <div className="w-1/2 mx-auto  ">
                    <div className=" w-full pb-8 flex justify-center  gap-2 ">
                        <a href="https://www.facebook.com/QtecSolution" target="_blank"><FaFacebook className="text-2xl" /> </a>
                        <a href="https://twitter.com/qtec_solution" target="_blank"><FaSquareXTwitter className="text-2xl" /></a>
                        <a href="https://www.linkedin.com/company/qtec-solution/" target="_blank"><FaLinkedinIn className="text-2xl" /> </a>
                    </div>
                    <p>Copyright &#169;	2024-All right reserved. </p>
                    <p className="py-2">Qtec Solution Limited. </p>

                </div>
            </div>


        </div>
    );
};

export default Footer;