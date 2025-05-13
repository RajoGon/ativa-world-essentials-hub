
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const Leadership = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-metallic-900">Our Leadership Team</h1>
          <p className="text-metallic-600 text-lg max-w-2xl mx-auto">
            Meet the passionate individuals guiding Ativa World's mission to promote sustainable products globally.
          </p>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {/* Leader 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Amit Sharma" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-metallic-900 mb-2">Amit Sharma</h2>
                <p className="text-sage-500 font-medium text-xl mb-4">CEO & Founder</p>
                <div className="prose prose-sage text-metallic-600 max-w-none mb-6">
                  <p>
                    Amit founded Ativa World with a vision to bridge the gap between Indian sustainable manufacturers and global markets. With over 15 years of experience in international trade and sustainable business practices, he has built Ativa World into a recognized leader in eco-friendly exports.
                  </p>
                  <p>
                    Prior to founding Ativa World, Amit worked with several multinational corporations, helping them develop sustainable sourcing strategies. His deep understanding of both global markets and Indian manufacturing capabilities has been instrumental in identifying unique product opportunities.
                  </p>
                  <p>
                    Amit holds an MBA in International Business and is a certified expert in Sustainable Supply Chain Management. He regularly speaks at industry conferences about the future of sustainable trade and India's growing role in the global eco-friendly products market.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-sage-500 hover:text-sage-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-sage-500 hover:text-sage-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Leader 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Priya Patel" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:col-span-2 md:order-1">
                <h2 className="text-3xl font-bold text-metallic-900 mb-2">Priya Patel</h2>
                <p className="text-sage-500 font-medium text-xl mb-4">Chief Sustainability Officer</p>
                <div className="prose prose-sage text-metallic-600 max-w-none mb-6">
                  <p>
                    Priya brings her extensive background in environmental science and sustainable product development to her role at Ativa World. As Chief Sustainability Officer, she leads the company's efforts to identify, evaluate, and source products that meet rigorous environmental and social standards.
                  </p>
                  <p>
                    With a Ph.D. in Environmental Science and a decade of experience in sustainability certification, Priya has developed Ativa World's comprehensive sustainability framework. This framework evaluates products across their entire lifecycle, from raw material sourcing to production processes and end-of-life considerations.
                  </p>
                  <p>
                    Priya collaborates with manufacturers across India to enhance their sustainability practices and develop innovative eco-friendly products. Her work has been recognized with several industry awards for excellence in sustainable business practices.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-sage-500 hover:text-sage-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-sage-500 hover:text-sage-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Leader 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Rajiv Mehta" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-metallic-900 mb-2">Rajiv Mehta</h2>
                <p className="text-sage-500 font-medium text-xl mb-4">Head of Global Operations</p>
                <div className="prose prose-sage text-metallic-600 max-w-none mb-6">
                  <p>
                    Rajiv oversees Ativa World's global operations, ensuring seamless logistics and delivery for exports to over 30 countries. His expertise in international trade regulations, customs procedures, and supply chain optimization has been crucial to the company's efficient operation.
                  </p>
                  <p>
                    With a background in international logistics spanning 12 years, Rajiv has developed Ativa World's robust supply chain that balances sustainability with efficiency. He's implemented carbon-offset shipping programs and plastic-free packaging initiatives across all product lines.
                  </p>
                  <p>
                    Rajiv holds a master's degree in Supply Chain Management and is certified in International Trade Operations. He regularly collaborates with logistics providers to develop more sustainable shipping methods for eco-friendly products.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-sage-500 hover:text-sage-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-sage-500 hover:text-sage-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Values */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-metallic-900">Our Team Values</h2>
            <p className="text-metallic-600 max-w-2xl mx-auto">
              The principles that unite our leadership and drive our commitment to sustainable business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-sage-500 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-metallic-800">Sustainability</h3>
              <p className="text-metallic-600">
                We make business decisions that prioritize environmental health and long-term ecological balance.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-sage-500 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-metallic-800">Integrity</h3>
              <p className="text-metallic-600">
                We operate with transparency and honesty in all our business relationships and practices.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-sage-500 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-metallic-800">Innovation</h3>
              <p className="text-metallic-600">
                We continuously seek new sustainable materials, processes, and products to expand our offering.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-sage-500 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-metallic-800">Community</h3>
              <p className="text-metallic-600">
                We support the craftspeople, manufacturers, and communities that make our products possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-metallic-900">Join Our Journey</h2>
          <p className="text-metallic-600 mb-8 max-w-2xl mx-auto">
            Interested in contributing to our mission of promoting sustainable products globally? We're always looking for passionate individuals to join our team.
          </p>
          <Link to="/contact" className="inline-block bg-sage-500 hover:bg-sage-600 text-white py-3 px-6 rounded-md font-medium transition-colors">
            Contact Us About Opportunities
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
