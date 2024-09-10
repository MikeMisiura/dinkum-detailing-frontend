import Form from 'react-bootstrap/Form'
import './ContactUsPage.css'

function ContactUs() {
	let companyPhoneNumber: string = '(320) 496-6010'
	let companyEmail: string = 'dinkumdetailing@gmail.com'

	return (
		<div className='ContactPageContainer'>
			<Form className='ContactForm'>
				<div className='FormContent'>
					<h3 className='ContactTitle'>CONTACT US</h3>
					<h5 style={{ textAlign: 'center' }}>
						Thanks for your interest in our services!
					</h5>
					<h5 style={{ textAlign: 'center' }}>
						Please call us at {companyPhoneNumber} to schedule an appointment.
					</h5>
					<h5 style={{ textAlign: 'center' }}>
						You may also email us at {companyEmail}.
					</h5>
				</div>
			</Form>
		</div>
	)
}

export default ContactUs
