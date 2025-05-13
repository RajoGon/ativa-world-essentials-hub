
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-metallic-900">Contact Us</h1>
          <p className="text-metallic-600 text-lg max-w-2xl mx-auto">
            Get in touch with our team to discuss sustainable export opportunities.
          </p>
        </div>
      </section>
      
      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-metallic-900">Get In Touch</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-metallic-800">Address</h3>
                    <address className="mt-2 text-metallic-600 not-italic">
                      123 Sustainability Road<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </address>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-metallic-800">Email</h3>
                    <p className="mt-2 text-metallic-600">info@ativaworld.com</p>
                    <p className="mt-1 text-metallic-600">sales@ativaworld.com (For business inquiries)</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-metallic-800">Phone</h3>
                    <p className="mt-2 text-metallic-600">+91 12345 67890 (General)</p>
                    <p className="mt-1 text-metallic-600">+91 98765 43210 (Business Development)</p>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-metallic-800">Business Hours</h3>
                    <p className="mt-2 text-metallic-600">Monday - Friday: 9:30 AM - 6:00 PM</p>
                    <p className="mt-1 text-metallic-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="mt-1 text-metallic-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-metallic-900">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white">
        <div className="h-96 w-full bg-gray-200">
          {/* Placeholder for map - in a real implementation, you would embed Google Maps or similar here */}
          <div className="w-full h-full flex items-center justify-center bg-sage-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-metallic-800 mb-2">Ativa World Headquarters</h3>
              <p className="text-metallic-600">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
