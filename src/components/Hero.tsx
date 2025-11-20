import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Icon icon="solar:magic-stick-3-bold-duotone" className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-700">Now Available</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl tracking-tight mb-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Infinitely Powerful
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            The productivity app that transforms how you work. Simple, elegant, and incredibly powerful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.button
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Get Started
                <Icon icon="solar:arrow-right-bold-duotone" className="w-5 h-5" />
              </span>
            </motion.button>

            <motion.button
              className="px-8 py-4 text-blue-600 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Watch Demo
            </motion.button>
          </div>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Icon icon="solar:shield-check-bold-duotone" className="w-5 h-5 text-green-600" />
              <span>Secure by design</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:bolt-bold-duotone" className="w-5 h-5 text-yellow-600" />
              <span>Lightning fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:users-group-rounded-bold-duotone" className="w-5 h-5 text-blue-600" />
              <span>Built for teams</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 aspect-video flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-700/50 rounded-xl p-4 backdrop-blur"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-2" />
                      <div className="h-2 bg-gray-600 rounded w-3/4 mb-1" />
                      <div className="h-2 bg-gray-600 rounded w-1/2" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Icon icon="solar:alt-arrow-down-bold-duotone" className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
