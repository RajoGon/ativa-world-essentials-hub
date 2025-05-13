
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    }
  });

  function onSubmit(values: FormData) {
    // In a real application, you would send this data to your server or API
    console.log(values);
    
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });

    // Reset the form
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-metallic-700">Your Name*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="border-gray-300 focus:border-sage-500 focus:ring-sage-500" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-metallic-700">Email Address*</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="border-gray-300 focus:border-sage-500 focus:ring-sage-500" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-metallic-700">Company Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your Company" 
                    className="border-gray-300 focus:border-sage-500 focus:ring-sage-500" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-metallic-700">Subject*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="How can we help?" 
                    className="border-gray-300 focus:border-sage-500 focus:ring-sage-500" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-metallic-700">Your Message*</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us more about your inquiry..." 
                  className="border-gray-300 focus:border-sage-500 focus:ring-sage-500" 
                  rows={5}
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="bg-sage-500 hover:bg-sage-600 w-full md:w-auto"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
