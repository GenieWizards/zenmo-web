import { motion } from "framer-motion";
import {
  CreditCard,
  DollarSign,
  PieChart,
  Smartphone,
  Split,
  Users,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Group Expenses",
      description:
        "Split bills with friends, roommates, or travel groups. Create multiple groups for different occasions.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Instant Payments",
      description:
        "Pay or request money instantly. Connect your bank account or cards for seamless transfers.",
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Expense Analytics",
      description:
        "Track spending patterns and get insights on your expenses with beautiful visualizations.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile First",
      description:
        "Designed for the mobile experience with offline capabilities and real-time syncing.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Currency Support",
      description:
        "Support for multiple currencies with automatic conversion for international trips.",
    },
    {
      icon: <Split className="h-10 w-10 text-primary" />,
      title: "Smart Split",
      description:
        "Split bills equally or unequally. Specify exact amounts or split by percentages.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-gray-900 py-20 md:py-32 flex justify-center"
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
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Everything you need to manage expenses
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Zenmo combines the best features of expense splitting and finance
            management in one seamless experience.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800 p-6 hover:shadow-md hover:shadow-primary/5 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * 0, duration: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
