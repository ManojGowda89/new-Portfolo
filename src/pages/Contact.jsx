import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'mail@manojgowda.in',
      link: 'mailto:mail@manojgowda.in'
    },
    {
      icon: '🌐',
      title: 'Website',
      value: 'manojgowda.in',
      link: 'https://www.manojgowda.in'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'manojgowdabr89',
      link: 'https://linkedin.com/in/manojgowdabr89'
    },
    {
      icon: '⚡',
      title: 'GitHub',
      value: 'ManojGowda89',
      link: 'https://github.com/ManojGowda89'
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="fade-in">
          <div className="section-header">
            <h1 className="section-title">
              📫 <span className="gradient-text">Get In Touch</span>
            </h1>
            <p className="section-subtitle">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div className="contact-grid grid grid-2">
            <div className="contact-info-section">
              <div className="card">
                <h3 className="card-title">Let's Connect</h3>
                <p className="contact-intro">
                  I'm always interested in new opportunities, interesting projects, 
                  and great conversations. Whether you have a question or just want 
                  to say hello, feel free to reach out!
                </p>

                <div className="contact-methods">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method"
                    >
                      <div className="contact-icon">{info.icon}</div>
                      <div className="contact-details">
                        <h4>{info.title}</h4>
                        <p>{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="availability-status">
                  <div className="status-indicator">
                    <div className="status-dot available"></div>
                    <span>Available for new projects</span>
                  </div>
                  <p className="status-description">
                    Currently open to discussing new opportunities and collaborations.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <div className="card">
                <h3 className="card-title">Send Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="form-message success">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;