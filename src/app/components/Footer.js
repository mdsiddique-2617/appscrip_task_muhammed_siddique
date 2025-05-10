import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import Gpay from "../images/gpay.jpg";
import MasterCard from "../images/mastercard.jpg";
import Paypal from "../images/paypal.jpg";
import Amex from "../images/amex.jpg";
import Ipay from "../images/ipay.jpg";
import FooterStyles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.footer_top}>
                <div>
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates</p>
                    <div className={FooterStyles.subscribe}>
                        <input type="email" placeholder="Enter your email" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div>
                    <h3>CONTACT US</h3>
                    <h5>+91 63690 28125</h5>
                    <p>siddiquedotmax@gmail.com</p>
                    <h3>CURRENCY</h3>
                    <p>USD</p>
                    <p>Transaction will be completed in Euros and a currency reference is available on hover</p>
                </div>
            </div>
            <div className={FooterStyles.footer_bottom}>
                <div>
                    <h3>Metta Musse</h3>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Botiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                </div>
                <div>
                    <h3>QUICK LINKS</h3>
                    <p>Order & Shipping</p>
                    <p>Join/Login as a seller</p>
                    <p>Payments & Refunds</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>FAQs</p>
                </div>
                <div>
                    <h3>FOLLOW US</h3>
                    <div>
                        <TiSocialLinkedinCircular />
                        <FaGithub />
                    </div>
                    <div>
                        <h3>muste musse ACCEPTS</h3>
                        <div className={FooterStyles.payment_methods}>
                            <Image src={Gpay} alt="G-Pay" width={75} height={45} />
                            <Image src={MasterCard} alt="MasterCard" width={75} height={45} />
                            <Image src={Paypal} alt="PayPal" width={75} height={45} />
                            <Image src={Amex} alt="American Express" width={75} height={45} />
                            <Image src={Ipay} alt="I-Pay" width={75} height={45} />
                        </div>
                    </div>
                </div>
            </div>
            <p className={FooterStyles.copyrights}>copyright @ 2023 India. All Rights reserved</p>
        </footer>
    );
}