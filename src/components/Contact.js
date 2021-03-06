import React, { useState, useEffect } from 'react';
import NavSuggestion from './NavSuggestion.js'
import emailjs from 'emailjs-com';


const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [popUpVisible, setPopUpvisible] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState({})
    const [showMissingFields, setShowMissingFields] = useState(false)

    const [verifiedField, setVerifiedField] = useState({name: false, email: false, message: false})
    //checks if all fields in verifiedField are true, if yes it is equal to false 
    let formIsNotCompleted = Object.keys(verifiedField).some(k => !verifiedField[k]);

    const validateField = (e) => {
        let fieldValue = e.target.value
        let fieldName = e.target.name

        if (fieldValue.length >= 3) {
            setVerifiedField({...verifiedField, [fieldName]: true})
        } else {
            setVerifiedField({...verifiedField, [fieldName]: false})
        }
    }

    const popUpTemplate = () => {

        return (
            <div className='contact__pop-up-wrapper'>
                <div className={`contact__pop-up ${popUpMessage.style}`}>
                    <h3>{popUpMessage.title}</h3>
                    <p>{popUpMessage.paragraph} <a href='https://www.linkedin.com/in/constantine-nam/'>LinkedIn</a>
                    </p>
                    <button className='btn-outline' onClick={()=>setPopUpvisible(false)}>close</button>
                </div>
            </div>
        )
    }

    const popUp = (result) => {
        if (result) {
            setPopUpMessage({   
                title: 'Thank you! I will reply as soon as possible', 
                paragraph: 'Also feel free to connect and message me on ',
                style: 'success'});

        } else {
            setPopUpMessage({   
                title: 'Something went wrong, please try again later', 
                paragraph: 'If problem persists, let me know on ',
                style: 'error'})
        }
        setPopUpvisible(true)
    }

    const sendEmail = e => {
        e.preventDefault();

        if (!formIsNotCompleted) {
            emailjs.sendForm('service_ra17n6e', 'template_opbhgo3', e.target, 'user_0RGgtlV2vPZGMkdnWaPAt')
            .then((result) => {
                popUp(true);
                setShowMissingFields(false)
                e.target.reset();
                console.log(result.text);
            }, (error) => {
                popUp(false)
                console.log(error.text);
            });

        } else {
            setShowMissingFields(true)
        }
  
    }
    

    return (
        <>
            {popUpVisible ? popUpTemplate() : null}

            <section className='contact'>
                <h2>Thank you for taking time to reach out!</h2>
                    <form className='contact__form' onSubmit={sendEmail}>
                        <div className='contact__name-email'>
                            <label>
                                Name 
                                <p>
                                    {showMissingFields && !verifiedField.name ? 'missing' : null}
                                </p>
                            </label>
                            <input onChange={validateField} type='text' name='name' />
                        </div>

                        <div className='contact__name-email'>
                            <label>
                                Email 
                                <p>{
                                    showMissingFields && !verifiedField.email ? 'missing' : null}
                                </p>
                            </label>
                            <input onChange={validateField} type='email' name='email' />
                        </div>
    
                        <div className='contact__message'>
                            <label>
                                Message 
                                <p>
                                {showMissingFields && !verifiedField.message ? 'missing' : null}
                                </p>
                            </label>
                            <textarea rows='10' onChange={validateField} name='message' />
                        </div>

                        <button type='submit' value='Send' className='btn-outline'>submit</button>

                    </form>
            </section>

            <section className='nav-suggestions__wrapper'>
                <NavSuggestion prev={'about'}/>
            </section>

        </>
)}

export default Contact;
