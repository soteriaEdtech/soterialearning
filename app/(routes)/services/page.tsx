"use client";
import { motion } from "framer-motion";
import { 
  BookOpen, Film, Globe, Users, 
  BrainCircuit, Sparkles, ArrowRight
} from "lucide-react";

const services = [
  {
    id: "course-development",
    title: "Custom E-Learning Development",
    icon: BookOpen,
    description: "Move beyond static presentations and create truly engaging learning experiences that drive results.",
    features: [
      "Get courses tailored exactly to your objectives, audience, and brand identity.",
      "We incorporate rich media, animations, and scenarios to hold learner attention.",
      "Boost engagement and retention with competitive elements and safe-to-fail virtual practice environments.",
      "Ensure your courses are fully responsive and accessible on any device, anytime."
    ],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1
  },
  {
    id: "e-learning-outsourcing",
    title: "Strategic E-Learning Outsourcing",
    icon: Film,
    description: "Scale your development capacity instantly without compromising on quality or budget.",
    features: [
      "We handle everything from concept to deployment, freeing up your internal teams.",
      "Quickly access specialized Instructional Designers, graphic artists, and developers to meet tight deadlines.",
      "Implement flexible outsourcing models that optimize your budget and reduce overhead costs.",
      "Receive long-term project stability and a committed team for ongoing content updates and maintenance."
    ],
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    id: "online-cource-development",
    title: "Online Course Development",
    icon: Globe,
    description: "Whether you're building a massive online course (MOOC) or internal training, we provide the building blocks for success.",
    features: [
      "Produce professional, high-quality lessons optimized for digital delivery and consumption.",
      "Design robust evaluation tools and formal certification paths to validate knowledge mastery.",
      "Ensure seamless technical deployment and user tracking with expert integration into your existing Learning Management System."
    ],
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.3
  },
  {
    id: "global-content-localization",
    title: "Global Content Localization",
    icon: Users,
    description: "Make your training accessible and culturally relevant to every employee and learner, no matter their location.",
    features: [
      "Go beyond direct translation; we adapt content to resonate with local customs, contexts, and sensitivities.",
      "Provide professional audio and video tracks in various languages for inclusive learning.",
      "Ensure your materials adhere to local standards, regulations, and reporting requirements.",
      "Rigorous quality assurance to guarantee flawless presentation and functionality in every region."
    ],
    gradient: "from-orange-500 to-amber-500",
    delay: 0.4
  },
  {
    id: "ai-driven-instructional-design",
    title: "AI-Driven Instructional Design",
    icon: BrainCircuit,
    description: "Leverage cutting-edge technology to create highly effective, personalized learning paths with unparalleled efficiency.",
    features: [
      "Use data-driven insights to define objectives and structure the most effective learning journey.",
      "Develop detailed blueprints that align every piece of content with a specific learning outcome.",
      "Apply methodologies that prioritize the user experience, maximizing engagement and practical application of knowledge.",
      "Implement robust systems to measure content effectiveness and continuously iterate for improvement."
    ],
    gradient: "from-indigo-500 to-blue-500",
    delay: 0.5
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/hero-mesh.svg')] bg-cover bg-center bg-no-repeat opacity-30" />
          <div className="absolute inset-0 bg-[url('/noise-texture.svg')] opacity-10" />
          <div className="absolute inset-0 bg-linear-to-b from-white/80 via-blue-50/50 to-white dark:from-gray-900/90 dark:via-gray-900/50 dark:to-gray-800/90" />
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl text-center break-keep"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
             Your End-to-End <br/> {" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                E-Learning Solution Partner
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Transforming traditional content into dynamic, accessible, and measurable digital learning experiences requires specialized expertise. We offer a full spectrum of services to empower your organization, whether you need a single custom course or a scalable, long-term development partner.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all hover:shadow-xl dark:bg-gray-800 dark:ring-gray-800"
            >
              {/* Background Gradient */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rotate-12 transform opacity-0 transition-opacity duration-300 group-hover:opacity-10">
                <div className={`h-full w-full bg-linear-to-br ${service.gradient}`} />
              </div>

              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${service.gradient}`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: service.delay + (index * 0.1) }}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <Sparkles className="h-5 w-5 text-blue-600" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div 
                className="mt-8"
                whileHover={{ x: 4 }}
              >
                <a
                  href={"/contact"}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

          {/* Instructional Design Academy (IDA) table */}
          <div className="mt-16 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="rounded-2xl bg-linear-to-r from-blue-600 to-cyan-600 p-8 shadow ring-1 ring-blue-700">
                <h3 className="text-2xl font-bold text-white">Instructional Design Academy (IDA)</h3>
                <p className="mt-2 text-white/90">Invest in your team’s capability to build and manage world-class digital learning internally.</p>

                <div className="mt-6 overflow-x-auto">
                  <table className="min-w-full table-auto divide-y divide-blue-500/20">
                    <thead className="bg-white">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-blue-600">Academy Focus</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-blue-600">Key Takeaways</th>
                      </tr>
                    </thead>
                    <tbody className="bg-transparent divide-y divide-blue-500/20">
                      <tr>
                        <td className="px-4 py-4 align-top text-sm text-white">E-Learning Development</td>
                        <td className="px-4 py-4 text-sm text-white/90">Hands-on training in industry-leading authoring tools (e.g., Articulate, Captivate, Canva) to create professional digital courses.</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 align-top text-sm text-white">Content Authoring Workshops</td>
                        <td className="px-4 py-4 text-sm text-white/90">Practical sessions on creating and editing powerful multimedia content — video, infographics, and interactive simulations.</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 align-top text-sm text-white">Instructional Technology Integration</td>
                        <td className="px-4 py-4 text-sm text-white/90">Mastery of leveraging LMS features, AI tools, and gamification principles to enhance learning design and delivery.</td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 align-top text-sm text-white">Portfolio Development &amp; Mentorship</td>
                        <td className="px-4 py-4 text-sm text-white/90">Guidance on building a professional instructional design portfolio and a defined career path with coaching and certification.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

         

      {/* Contact CTA Section */}
      <div className="relative isolate bg-linear-to-b from-gray-50 to-white py-16 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ready to Transform Your Learning Programs?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Book a consultation to discuss your specific needs and discover how we can help.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex justify-center gap-4"
            >
              <a
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Book a Consultation
              </a>
              <a
                href="/process"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                View Our Process
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}