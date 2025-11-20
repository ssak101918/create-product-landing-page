import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Icon } from '@iconify/react';

const testimonials = [
  {
    quote: "This app has completely transformed how our team collaborates. The interface is so intuitive, it feels like magic.",
    author: "Sarah Chen",
    role: "Head of Product",
    company: "google",
    rating: 5,
  },
  {
    quote: "Finally, a productivity tool that doesn't get in the way. It's fast, beautiful, and just works.",
    author: "Michael Rodriguez",
    role: "Engineering Lead",
    company: "microsoft",
    rating: 5,
  },
  {
    quote: "The attention to detail is remarkable. Every interaction feels polished and thoughtful.",
    author: "Emily Watson",
    role: "Design Director",
    company: "apple",
    rating: 5,
  },
  {
    quote: "We've tried dozens of tools. This is the first one that the entire team actually loves using.",
    author: "David Kim",
    role: "CTO",
    company: "meta",
    rating: 5,
  },
  {
    quote: "Incredible performance and reliability. It handles everything we throw at it with ease.",
    author: "Jessica Martinez",
    role: "Operations Manager",
    company: "netflix",
    rating: 5,
  },
  {
    quote: "The best investment we've made in our workflow. ROI was immediate and significant.",
    author: "Alex Thompson",
    role: "VP of Engineering",
    company: "amazon",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl tracking-tight mb-4 bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Loved by teams everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of teams who have transformed their workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      icon="solar:star-bold-duotone"
                      className="w-5 h-5 text-yellow-500"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <Icon
                    icon={`logos:${testimonial.company}`}
                    className="w-6 h-6 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-gray-500 mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            <Icon icon="logos:google-icon" className="w-8 h-8" />
            <Icon icon="logos:microsoft-icon" className="w-8 h-8" />
            <Icon icon="logos:apple" className="w-8 h-8" />
            <Icon icon="logos:meta-icon" className="w-8 h-8" />
            <Icon icon="logos:netflix-icon" className="w-8 h-8" />
            <Icon icon="logos:amazon" className="w-8 h-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
