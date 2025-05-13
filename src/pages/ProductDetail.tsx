
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Product Data
const products = [
  {
    id: 'cork-yoga-mat',
    name: 'Cork Yoga Mat',
    category: 'yoga',
    description: 'Eco-friendly, non-slip yoga mats made from sustainable cork with natural rubber base. These premium yoga mats offer excellent grip, stability, and are naturally antimicrobial. Perfect for all yoga styles.',
    price: '$45.00',
    images: [
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    details: [
      'Made from sustainable cork and natural rubber',
      'Dimensions: 72" × 24" × 5mm thick',
      'Non-slip surface provides excellent grip',
      'Naturally antimicrobial - resistant to mold and bacteria',
      'Free from PVC, phthalates, and toxic glues',
      'Biodegradable at end of life',
    ],
    sustainability: 'Our Cork Yoga Mats are made from the bark of cork oak trees - a renewable resource that regenerates every 9 years without harming the trees. The harvesting process actually helps absorb CO2 from the atmosphere, making this one of the most eco-friendly yoga mats available.'
  },
  {
    id: 'yoga-block-cork',
    name: 'Cork Yoga Block',
    category: 'yoga',
    description: 'Supportive yoga blocks made from sustainable cork for stability in poses. These dense cork blocks provide firm support while being lightweight and comfortable to grip during practice.',
    price: '$18.00',
    images: [
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    details: [
      'Made from 100% sustainable cork',
      'Dimensions: 9" × 6" × 4"',
      'Firm and stable support for yoga poses',
      'Naturally antimicrobial surface',
      'Rounded edges for comfort',
      'Lightweight yet durable design',
    ],
    sustainability: 'Our Cork Yoga Blocks are made from solid cork harvested from the bark of cork oak trees in a sustainable process that allows the trees to regenerate their bark. This makes cork an environmentally friendly material that is both renewable and biodegradable.'
  },
  {
    id: 'bamboo-decor',
    name: 'Bamboo Wall Art',
    category: 'home-decor',
    description: 'Elegant wall art pieces handcrafted from sustainable bamboo. Each piece is uniquely designed to bring natural beauty and artistic flair to any space in your home or office.',
    price: '$35.00',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    details: [
      'Made from sustainably sourced bamboo',
      'Size: 24" × 18" (multiple sizes available)',
      'Handcrafted by skilled artisans',
      'Unique natural patterns in each piece',
      'Lightweight yet durable design',
      'Easy to mount with included hardware',
    ],
    sustainability: 'Bamboo is one of the fastest-growing plants on Earth, making it an incredibly sustainable material. It requires no chemicals to grow, minimal water, and produces 35% more oxygen than equivalent trees. Our bamboo is sourced from managed forests that maintain biodiversity.'
  },
  {
    id: 'bamboo-shelf',
    name: 'Bamboo Floating Shelf',
    category: 'home-decor',
    description: 'Minimalist floating shelf made from premium bamboo wood. These sleek shelves add natural warmth and functionality to any room while showcasing your favorite items.',
    price: '$28.00',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    details: [
      'Made from solid bamboo wood',
      'Size: 24" × 6" × 1.5" (multiple sizes available)',
      'Hidden mounting brackets for floating look',
      'Holds up to 20 pounds evenly distributed',
      'Sealed with eco-friendly, water-resistant finish',
      'Complete with mounting hardware',
    ],
    sustainability: 'Our bamboo shelves utilize rapidly renewable bamboo, which matures in just 3-5 years compared to hardwoods that take 20-120 years. The bamboo is harvested without killing the plant, allowing it to regrow, and our finishing process uses only non-toxic, water-based sealants.'
  },
  {
    id: 'jute-baskets',
    name: 'Jute Storage Baskets (Set of 3)',
    category: 'sustainable-living',
    description: 'Handwoven storage baskets made from natural jute fibers. This set of three nested baskets offers versatile storage solutions while adding natural texture and style to your home.',
    price: '$40.00',
    images: [
      'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    details: [
      'Set of 3 nesting baskets in different sizes',
      'Small: 8" × 8" × 6", Medium: 10" × 10" × 7", Large: 12" × 12" × 8"',
      'Handwoven from natural jute fibers',
      'Sturdy construction with integrated handles',
      'Versatile for storage in any room',
      'Each piece unique due to handcrafted nature',
    ],
    sustainability: 'Jute is a sustainable, biodegradable fiber that requires minimal water and no pesticides to grow. It absorbs CO₂ and releases oxygen at a rate much higher than most trees. Our jute baskets are made by skilled artisans using traditional techniques, supporting rural communities in India.'
  },
  {
    id: 'coconut-bowls',
    name: 'Coconut Shell Bowls (Set of 2)',
    category: 'sustainable-living',
    description: 'Eco-friendly bowls handcrafted from reclaimed coconut shells. These unique bowls give new life to coconut waste and provide a natural, beautiful way to serve food or display small items.',
    price: '$24.00',
    images: [
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    details: [
      'Set of 2 bowls made from real coconut shells',
      'Approximate dimensions: 5-6" diameter, 2-3" depth',
      'Each bowl is unique with natural variations',
      'Polished with coconut oil for food-safe finish',
      'Perfect for açai bowls, smoothies, or decor',
      'Hand wash recommended',
    ],
    sustainability: 'Our coconut bowls repurpose coconut shells that would otherwise be discarded as waste. Each bowl is crafted from a real coconut shell, hand-sanded, and polished with coconut oil. By using these discarded shells, we help reduce waste while creating functional, beautiful products.'
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    // Find the product based on the URL parameter
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(0); // Reset selected image when product changes
    }
  }, [productId]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-metallic-800">Product not found</h2>
          <p className="mt-4 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-sage-500 hover:bg-sage-600">
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-metallic-500">
            <Link to="/" className="hover:text-sage-500">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-sage-500">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-sage-500">{product.name}</span>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="mb-6">
          <Button 
            asChild 
            variant="outline" 
            className="text-sage-500 border-sage-500 hover:bg-sage-50"
            size="sm"
          >
            <Link to="/products" className="flex items-center">
              <ArrowLeft size={16} className="mr-2" /> Back to Products
            </Link>
          </Button>
        </div>
        
        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="flex space-x-3 overflow-auto pb-2">
              {product.images.map((image: string, index: number) => (
                <div 
                  key={index} 
                  className={`cursor-pointer border-2 rounded overflow-hidden flex-shrink-0 ${
                    selectedImage === index ? 'border-sage-500' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - Image ${index + 1}`} 
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-metallic-900 mb-2">{product.name}</h1>
              <p className="text-2xl text-sage-500 font-medium">{product.price}</p>
            </div>
            
            <div className="prose prose-sage mb-8 text-metallic-700">
              <p>{product.description}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-metallic-800 mb-3">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-baseline">
                    <span className="bg-sage-400 rounded-full w-1.5 h-1.5 mr-2 flex-shrink-0 mt-2"></span>
                    <span className="text-metallic-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8 p-5 bg-sage-50 rounded-lg border border-sage-100">
              <h3 className="text-lg font-semibold text-metallic-800 mb-3">Sustainability</h3>
              <p className="text-metallic-700">{product.sustainability}</p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <Button className="bg-sage-500 hover:bg-sage-600">
                Request Wholesale Information
              </Button>
              <Button variant="outline" className="border-sage-500 text-sage-500 hover:bg-sage-50">
                Download Product Specification
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-metallic-900">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="group">
                  <Link to={`/products/${relatedProduct.id}`} className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-metallic-800">{relatedProduct.name}</h3>
                      <p className="text-sage-500 mt-1">{relatedProduct.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
