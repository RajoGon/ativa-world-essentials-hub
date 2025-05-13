
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

// Product Data
const products = [
  {
    id: 'cork-yoga-mat',
    name: 'Cork Yoga Mat',
    category: 'yoga',
    tags: ['eco-friendly', 'non-slip', 'yoga', 'cork'],
    description: 'Eco-friendly, non-slip yoga mats made from sustainable cork with natural rubber base.',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'yoga-block-cork',
    name: 'Cork Yoga Block',
    category: 'yoga',
    tags: ['eco-friendly', 'yoga', 'cork', 'yoga accessories'],
    description: 'Supportive yoga blocks made from sustainable cork for stability in poses.',
    price: '$18.00',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bamboo-decor',
    name: 'Bamboo Wall Art',
    category: 'home-decor',
    tags: ['eco-friendly', 'bamboo', 'decor', 'sustainable'],
    description: 'Elegant wall art pieces handcrafted from sustainable bamboo.',
    price: '$35.00',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bamboo-shelf',
    name: 'Bamboo Floating Shelf',
    category: 'home-decor',
    tags: ['eco-friendly', 'bamboo', 'furniture', 'storage'],
    description: 'Minimalist floating shelf made from premium bamboo wood.',
    price: '$28.00',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jute-baskets',
    name: 'Jute Storage Baskets (Set of 3)',
    category: 'sustainable-living',
    tags: ['eco-friendly', 'jute', 'storage', 'handmade'],
    description: 'Handwoven storage baskets made from natural jute fibers.',
    price: '$40.00',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coconut-bowls',
    name: 'Coconut Shell Bowls (Set of 2)',
    category: 'sustainable-living',
    tags: ['eco-friendly', 'coconut', 'kitchenware', 'sustainable'],
    description: 'Eco-friendly bowls handcrafted from reclaimed coconut shells.',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

// Get all unique tags
const allTags = Array.from(new Set(products.flatMap(product => product.tags)));

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // Filter products based on search, category, and tags
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => product.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-metallic-900">Our Products</h1>
          <p className="text-metallic-600 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our range of sustainable, eco-friendly products designed with care for both people and planet.
          </p>
        </div>
      </section>

      {/* Product Filtering */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={selectedCategory === 'all' ? "default" : "outline"} 
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? "bg-sage-500 hover:bg-sage-600" : "text-sage-500 border-sage-500 hover:bg-sage-50"}
              >
                All Products
              </Button>
              <Button 
                variant={selectedCategory === 'yoga' ? "default" : "outline"}
                onClick={() => setSelectedCategory('yoga')}
                className={selectedCategory === 'yoga' ? "bg-sage-500 hover:bg-sage-600" : "text-sage-500 border-sage-500 hover:bg-sage-50"}
              >
                Yoga Products
              </Button>
              <Button 
                variant={selectedCategory === 'home-decor' ? "default" : "outline"}
                onClick={() => setSelectedCategory('home-decor')}
                className={selectedCategory === 'home-decor' ? "bg-sage-500 hover:bg-sage-600" : "text-sage-500 border-sage-500 hover:bg-sage-50"}
              >
                Home Decor
              </Button>
              <Button 
                variant={selectedCategory === 'sustainable-living' ? "default" : "outline"}
                onClick={() => setSelectedCategory('sustainable-living')}
                className={selectedCategory === 'sustainable-living' ? "bg-sage-500 hover:bg-sage-600" : "text-sage-500 border-sage-500 hover:bg-sage-50"}
              >
                Sustainable Living
              </Button>
            </div>
            
            <div className="w-full md:w-64">
              <Input
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
              />
            </div>
          </div>
          
          {/* Tags Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-metallic-800 mb-3">Product Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedTags.includes(tag) 
                      ? "bg-sage-500 hover:bg-sage-600" 
                      : "text-sage-700 border-sage-200 hover:border-sage-300"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/products/${product.id}`} className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-sage-500 text-white text-sm px-3 py-1 rounded-full">
                      {product.price}
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-metallic-800 mb-2">{product.name}</h3>
                    <p className="text-metallic-500 mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.tags.map(tag => (
                        <Badge key={`${product.id}-${tag}`} variant="outline" className="text-xs bg-sage-50 text-sage-700 border-sage-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <span className="inline-flex items-center font-medium text-sage-500 group-hover:text-sage-600 transition-colors">
                      View Details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-metallic-600">No products found</h3>
              <p className="text-metallic-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Wholesale CTA */}
      <section className="py-16 bg-sage-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-metallic-900">Interested in Wholesale?</h2>
          <p className="text-metallic-600 mb-8 max-w-2xl mx-auto">
            We offer competitive wholesale pricing for businesses. Contact our team to discuss bulk orders and customize products to your specifications.
          </p>
          <Button asChild className="bg-sage-500 hover:bg-sage-600">
            <Link to="/contact">Contact for Wholesale</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
