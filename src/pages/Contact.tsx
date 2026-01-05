import { useState, useRef, FormEvent, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useApp } from '@/context/AppContext'

interface FormFieldState {
  value: string
  isFocused: boolean
}

interface FormState {
  name: FormFieldState
  email: FormFieldState
  message: FormFieldState
}

const INITIAL_FORM_STATE: FormState = {
  name: { value: '', isFocused: false },
  email: { value: '', isFocused: false },
  message: { value: '', isFocused: false },
}

export default function Contact() {
  const { t, showToast } = useApp()
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE)

  const handleInputChange = (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [field]: { ...prev[field], value: e.target.value }
    }))
  }

  const handleFocus = (field: keyof FormState) => () => {
    setFormState(prev => ({
      ...prev,
      [field]: { ...prev[field], isFocused: true }
    }))
  }

  const handleBlur = (field: keyof FormState) => () => {
    setFormState(prev => ({
      ...prev,
      [field]: { ...prev[field], isFocused: false }
    }))
  }

  const isLabelFloated = (field: keyof FormState): boolean => {
    return formState[field].isFocused || formState[field].value.length > 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setIsLoading(true)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      showToast(t.contact.form.success, 'success')
      setFormState(INITIAL_FORM_STATE)
      formRef.current.reset()
    } catch (error) {
      showToast(t.contact.form.error, 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const inputBaseStyles = `
    w-full bg-transparent border-0 border-b border-slate-200 dark:border-white/10 
    py-4 text-lg text-slate-900 dark:text-white placeholder-transparent 
    transition-colors duration-300
    focus:outline-none focus:ring-0 focus:border-primary dark:focus:border-primary
  `.replace(/\s+/g, ' ').trim()

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 flex flex-col justify-center"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-xl mx-auto"
      >
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
            {t.nav.contact}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight font-display leading-tight">
            {t.contact.title}
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form 
          variants={itemVariants}
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="space-y-8"
        >
          {/* Name Field */}
          <div className="relative">
            <input 
              type="text" 
              name="user_name"
              id="contact-name"
              required
              autoComplete="name"
              value={formState.name.value}
              onChange={handleInputChange('name')}
              onFocus={handleFocus('name')}
              onBlur={handleBlur('name')}
              className={inputBaseStyles}
              placeholder={t.contact.form.name}
            />
            <label 
              htmlFor="contact-name"
              className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                isLabelFloated('name')
                  ? '-top-2.5 text-xs font-medium text-slate-500 dark:text-slate-400'
                  : 'top-4 text-lg text-slate-400 dark:text-slate-500'
              }`}
            >
              {t.contact.form.name}
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input 
              type="email" 
              name="user_email"
              id="contact-email"
              required
              autoComplete="email"
              value={formState.email.value}
              onChange={handleInputChange('email')}
              onFocus={handleFocus('email')}
              onBlur={handleBlur('email')}
              className={inputBaseStyles}
              placeholder={t.contact.form.email}
            />
            <label 
              htmlFor="contact-email"
              className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                isLabelFloated('email')
                  ? '-top-2.5 text-xs font-medium text-slate-500 dark:text-slate-400'
                  : 'top-4 text-lg text-slate-400 dark:text-slate-500'
              }`}
            >
              {t.contact.form.email}
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea 
              name="message"
              id="contact-message"
              required
              rows={4}
              value={formState.message.value}
              onChange={handleInputChange('message')}
              onFocus={handleFocus('message')}
              onBlur={handleBlur('message')}
              className={`${inputBaseStyles} resize-none min-h-[120px]`}
              placeholder={t.contact.form.message}
            />
            <label 
              htmlFor="contact-message"
              className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                isLabelFloated('message')
                  ? '-top-2.5 text-xs font-medium text-slate-500 dark:text-slate-400'
                  : 'top-4 text-lg text-slate-400 dark:text-slate-500'
              }`}
            >
              {t.contact.form.message}
            </label>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-6 items-center sm:justify-between">
            <button 
              type="submit" 
              disabled={isLoading}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-slate-900/10 dark:shadow-none hover:shadow-xl"
            >
              {isLoading ? t.contact.form.sending : t.contact.form.send}
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              )}
            </button>

            {/* Email Tile */}
            <a 
              href="mailto:mateusz.galuszka21@gmail.com"
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all group"
            >
              <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm font-mono">
                mateusz.galuszka21@gmail.com
              </span>
            </a>
          </div>
        </motion.form>



      </motion.div>
    </motion.section>
  )
}
