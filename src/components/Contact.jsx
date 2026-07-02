import "../App.css";

function Contact(){
    return(
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className  ="contact-left">
                    <h2>Contact Us</h2>
                    <p>
                        Have questions or  need planning your next adventure? we'd love to hear from you.
                    </p>
                    <div className ="contact-info">
                        <p> Mumbai, India</p>
                        <p> 📞 +91 1234567890</p>
                        <p> 📧 Email: info@tripplanner.com</p>
                    </div>
                </div>

                <div className="contact-right">
                    <form className="contact-form">
                        <input type="text" placeholder= "Your Name" required/>
                        <input type="email" placeholder= "Your Email" required/>
                        <textarea placeholder= "Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
