import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function HowItWorksSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "01",
      title: "Create a group",
      description:
        "Start by creating a group for your roommates, trip, or event.",
      src: "https://placehold.co/500x300",
    },
    {
      number: "02",
      title: "Add expenses",
      description:
        "Log expenses as they happen. Take photos of receipts for easy reference.",
      src: "https://placehold.co/500x300",
    },
    {
      number: "03",
      title: "Split automatically",
      description:
        "The app calculates who owes what, simplifying even the most complex splits.",
      src: "https://placehold.co/500x300",
    },
    {
      number: "04",
      title: "Settle up",
      description:
        "Pay directly through the app or mark expenses as settled manually.",
      src: "https://placehold.co/500x300",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-gray-800 py-20 md:py-32 flex justify-center"
    >
      <div className="px-4 md:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            How It Works
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Simple, fast, and efficient
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Get started in minutes and say goodbye to awkward money
            conversations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border md:block hidden" />

          <div className="space-y-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <div
                  className={`mb-4 md:mb-0 ${index % 2 === 1 ? "md:order-last" : ""}`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <img
                      src={step.src}
                      width={500}
                      height={300}
                      alt={`Step ${index + 1}`}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`relative ${index % 2 === 1 ? "md:text-right md:pr-16" : "md:pl-16"}`}
                >
                  <div className="absolute hidden md:flex items-center justify-center left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg z-10">
                    {step.number}
                  </div>
                  <div className="md:hidden flex items-center mb-2">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg mr-3">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-left">
                      {step.title}
                    </h3>
                  </div>
                  <h3 className="text-2xl font-bold hidden md:block mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
