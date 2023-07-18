import ContactForm from "../components/ContactForm";

function ContactUs() {
    let companyPhoneNumber: string = "(763) 123-1234"
    let companyEmail: string = "dinkum@change.me"

    return (
        <div>
            <h1>Contact Us</h1>
            <p>Thanks for your interest in our services!</p>
            <p>Feel free to call us at {companyPhoneNumber}, email us at {companyEmail}, or fill out the form below.</p>

            <ContactForm />
        </div>
    )
}

export default ContactUs;