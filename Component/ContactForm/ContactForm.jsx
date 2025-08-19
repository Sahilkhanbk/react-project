import styles from './ContactForm.module.css'
import Button from '../Button/Button.jsx'
import { MdMessage } from 'react-icons/md';
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import image from '../images/images.jpg'


function ContactForm() {

    const onSubmit = ( e) =>{
        e.preventDefault()
        
        console.log("name",e.target[0].value)
        console.log("text",e.target[1].value)
        console.log("textarea",e.target[2].value)
    }

    const onVia = () => {
        console.log("Here how can i assist you taday bitch")
    }

    const callHelp = () => {
        console.log("please call this number and talk about your problems and we try ours best to deal you basterd")
    }

    return <section className={`${styles.container} container`}>
        <div className={styles.contact_form}>

            <div className={`${styles.top_btn}`}>
                <Button
                    onClick={onVia}
                    text="VIA SUPPORT CHAT"
                    icon={<MdMessage fontSize="24px" />} />

                <Button
                    onClick={callHelp}
                    text="VIA CALL" icon={<MdAddIcCall fontSize="24px" />} />
            </div>
            <Button
                isOutline={true}
                text="Email us"
                icon={<MdOutlineMail fontSize="24px" />}
            />

            <form  onSubmit={onSubmit}>
                <div className={styles.form_container}>
                    <label htmlFor="name"> Name</label>
                    <input type="text" name='name' />
                </div>

                <div className={styles.form_container}>
                    <label htmlFor="email"> Email</label>
                    <input type="email" name='email' />
                </div>

                <div className={styles.form_container}>
                    <label htmlFor="text"> text</label>
                    <textarea type="text" name='name' />
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "end"

                }}>
                    <Button text="Submit" />
                </div>


            </form>

        </div>

        <div className={styles.contact_image}>
            <img src={image} alt="Contqact image" />
        </div>

    </section>
}

export default ContactForm
