import { useRef } from "react"
import emailjs from "@emailjs/browser"
import styles from "./ContactModal.module.css"

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const ContactModal = ({ isOpen, onClose }: Props) => {

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_ow42iqk", 
        "template_95u5up6", 
        form.current!,
        "s4QpjkZsnZvsNOlwa" 
      )
      .then(
        () => {
          alert("Message sent!")
          onClose()
        },
        (error) => {
          console.error(error)
          alert("Error sending message")
        }
      )
  }

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >

      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className={styles.close}
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className={styles.title}>
          Contact me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className={styles.form}
        >

          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            required
          />

          <button
            type="submit"
            className={styles.sendButton}
          >
            Send
          </button>

        </form>

      </div>

    </div>
  )
}