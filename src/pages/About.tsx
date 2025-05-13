
import React from 'react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-metallic-900">About Ativa World</h1>
          <p className="text-metallic-600 text-lg max-w-2xl mx-auto">
            Our mission is to provide world-class sustainable products to businesses around the globe.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Sustainable materials" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded shadow-lg">
                <p className="text-sage-500 font-bold text-xl">Since 2015</p>
                <p className="text-metallic-500 text-sm">Exporting Sustainability</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-metallic-900">Our Story</h2>
              <p className="text-metallic-600 mb-4">
                Ativa World was founded in 2015 with a simple yet powerful vision: to showcase India's finest sustainable products to the world. What began as a small export initiative has grown into a respected name in sustainable trade.
              </p>
              <p className="text-metallic-600 mb-4">
                Our founders recognized the untapped potential of India's artisans and manufacturers who were creating remarkable eco-friendly products. By connecting these skilled creators with global markets, we've been able to promote sustainability while preserving traditional craftsmanship.
              </p>
              <p className="text-metallic-600">
                Today, Ativa World partners with businesses across Europe, North America, Australia, and Asia, supplying premium sustainable products that meet international standards while honoring our commitment to the planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Values */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-metallic-900">Our Mission & Values</h2>
            <p className="text-metallic-600 max-w-2xl mx-auto">
              We're guided by principles that prioritize people, planet, and sustainable prosperity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-sage-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-metallic-800">Sustainability First</h3>
              <p className="text-metallic-600">
                We believe business can be a force for positive environmental impact. Every product in our catalog is evaluated for its sustainability credentials and ecological footprint.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-sage-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-metallic-800">Community Impact</h3>
              <p className="text-metallic-600">
                We partner with producers who provide fair wages, good working conditions, and support local communities. Our supply chain prioritizes social responsibility alongside quality.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-sage-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-metallic-800">Quality Assurance</h3>
              <p className="text-metallic-600">
                Sustainable doesn't mean compromising on quality. We rigorously test all our products to ensure they meet international standards while maintaining their eco-friendly credentials.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section id="leadership" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-metallic-900">Our Leadership Team</h2>
            <p className="text-metallic-600 max-w-2xl mx-auto">
              Meet the passionate individuals guiding Ativa World's mission to promote sustainable products globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Amit Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-metallic-800">Amit Sharma</h3>
              <p className="text-sage-500 mb-3">CEO & Founder</p>
              <p className="text-metallic-600 max-w-xs mx-auto">
                With 15 years in sustainable trade, Amit leads Ativa World's vision and global strategy.
              </p>
            </div>
            
            {/* Leader 2 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Priya Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-metallic-800">Priya Patel</h3>
              <p className="text-sage-500 mb-3">Chief Sustainability Officer</p>
              <p className="text-metallic-600 max-w-xs mx-auto">
                Priya ensures our product portfolio maintains the highest standards of sustainability and ethics.
              </p>
            </div>
            
            {/* Leader 3 */}
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Rajiv Mehta" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-metallic-800">Rajiv Mehta</h3>
              <p className="text-sage-500 mb-3">Head of Global Operations</p>
              <p className="text-metallic-600 max-w-xs mx-auto">
                Rajiv oversees our supply chain and ensures smooth delivery of products to clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-metallic-900">Our Certifications</h2>
            <p className="text-metallic-600 max-w-2xl mx-auto">
              We adhere to international standards to ensure the highest quality and sustainability credentials.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Certification 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-sage-100 rounded-full flex items-center justify-center">
                <span className="text-sage-500 font-bold text-2xl">FSC</span>
              </div>
              <h3 className="font-bold text-metallic-800">Forest Stewardship Council</h3>
            </div>
            
            {/* Certification 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-sage-100 rounded-full flex items-center justify-center">
                <span className="text-sage-500 font-bold text-2xl">GOTS</span>
              </div>
              <h3 className="font-bold text-metallic-800">Global Organic Textile Standard</h3>
            </div>
            
            {/* Certification 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-sage-100 rounded-full flex items-center justify-center">
                <span className="text-sage-500 font-bold text-2xl">FT</span>
              </div>
              <h3 className="font-bold text-metallic-800">Fair Trade Certified</h3>
            </div>
            
            {/* Certification 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-sage-100 rounded-full flex items-center justify-center">
                <span className="text-sage-500 font-bold text-2xl">ISO</span>
              </div>
              <h3 className="font-bold text-metallic-800">ISO 14001 Environmental Management</h3>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
