import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';

const plans = [
  {
    name: "Starter",
    price: { monthly: 19, annual: 15 },
    description: "Perfect for individuals and small teams getting started",
    features: [
      { text: "Up to 5 team members", included: true },
      { text: "10GB storage", included: true },
      { text: "Basic integrations", included: true },
      { text: "Email support", included: true },
      { text: "Advanced analytics", included: false },
      { text: "Priority support", included: false },
    ],
    icon: "solar:user-bold-duotone",
    popular: false,
  },
  {
    name: "Professional",
    price: { monthly: 49, annual: 39 },
    description: "For growing teams that need more power and flexibility",
    features: [
      { text: "Up to 25 team members", included: true },
      { text: "100GB storage", included: true },
      { text: "Advanced integrations", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom branding", included: true },
    ],
    icon: "solar:users-group-rounded-bold-duotone",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, annual: 79 },
    description: "For large organizations with advanced security needs",
    features: [
      { text: "Unlimited team members", included: true },
      { text: "Unlimited storage", included: true },
      { text: "Enterprise integrations", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Advanced security", included: true },
      { text: "Custom SLA", included: true },
    ],
    icon: "solar:buildings-2-bold-duotone",
    popular: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl tracking-tight mb-4 bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your team. Always know what you'll pay.
          </p>

          {/* Billing toggle */}
          <motion.div
            className="inline-flex items-center gap-4 p-2 bg-gray-100 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-green-600">Save 20%</span>
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full">
                  Most Popular
                </div>
              )}

              {/* Gradient border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl ${
                plan.popular ? 'opacity-100' : 'opacity-0'
              } blur transition-opacity duration-300`} />

              <div className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 ${
                plan.popular ? 'border-blue-200' : 'border-gray-100'
              } h-full flex flex-col ${plan.popular ? 'md:py-12' : ''}`}>
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 ${
                    plan.popular 
                      ? 'from-blue-500 to-purple-500' 
                      : 'from-gray-200 to-gray-300'
                  }`}>
                    <Icon
                      icon={plan.icon}
                      className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-gray-600'}`}
                    />
                  </div>
                  <h3 className="text-2xl mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                    <span className="text-gray-600">/{isAnnual ? 'month' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-600 mt-2">
                      Billed annually (${plan.price.annual * 12}/year)
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon
                        icon={feature.included ? "solar:check-circle-bold-duotone" : "solar:close-circle-bold-duotone"}
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          feature.included ? 'text-green-600' : 'text-gray-300'
                        }`}
                      />
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-4 rounded-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">
            Have questions? We're here to help.
          </p>
          <button className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
            View FAQ
            <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
