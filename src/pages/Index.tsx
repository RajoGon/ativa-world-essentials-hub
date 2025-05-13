
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-sage-100 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-sage-400/20 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Sustainable landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
              Sustainable Products for a Better World
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 drop-shadow">
              Ativa World brings India's finest eco-friendly products to global markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-sage-500 hover:bg-sage-600 text-white">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/80 hover:bg-white text-sage-500 border-sage-500">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sage-500 uppercase tracking-wider font-medium text-sm">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-metallic-900">Featured Sustainable Products</h2>
            <div className="mx-auto w-24 h-1 bg-sage-400 mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group">
              <Link to="/products/cork-yoga-mat" className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Cork Yoga Mat" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-metallic-800 mb-2">Cork Yoga Mats</h3>
                  <p className="text-metallic-500 mb-4">Eco-friendly, non-slip yoga mats made from sustainable cork.</p>
                  <span className="inline-flex items-center font-medium text-sage-500 group-hover:text-sage-600 transition-colors">
                    Explore <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Product 2 */}
            <div className="group">
              <Link to="/products/bamboo-decor" className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Bamboo Decor" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-metallic-800 mb-2">Bamboo Decor Items</h3>
                  <p className="text-metallic-500 mb-4">Elegant home decor crafted from sustainable bamboo materials.</p>
                  <span className="inline-flex items-center font-medium text-sage-500 group-hover:text-sage-600 transition-colors">
                    Explore <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Product 3 */}
            <div className="group">
              <Link to="/products/jute-baskets" className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Jute Baskets" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-metallic-800 mb-2">Jute Storage Baskets</h3>
                  <p className="text-metallic-500 mb-4">Handcrafted storage solutions made from natural jute fibers.</p>
                  <span className="inline-flex items-center font-medium text-sage-500 group-hover:text-sage-600 transition-colors">
                    Explore <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-sage-500 hover:bg-sage-600">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sage-500 uppercase tracking-wider font-medium text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-metallic-900">About Ativa World</h2>
              <p className="text-metallic-600 mb-4">
                Founded with a vision to promote sustainable living globally, Ativa World has become a leading exporter of eco-friendly products from India to businesses worldwide.
              </p>
              <p className="text-metallic-600 mb-6">
                Our mission is to showcase India's commitment to sustainability while providing high-quality products that meet global standards. We carefully source materials that are renewable, biodegradable, and ethically harvested.
              </p>
              <Button asChild className="bg-sage-500 hover:bg-sage-600">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Sustainable materials" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded shadow-lg">
                <p className="text-sage-500 font-bold text-xl">10+ Years</p>
                <p className="text-metallic-500 text-sm">Of Sustainable Export Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sage-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Go Sustainable?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join businesses around the world who are making the shift towards eco-friendly products. Contact us today to discuss your requirements.
          </p>
          <Button asChild className="bg-white text-sage-600 hover:bg-sage-50">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
