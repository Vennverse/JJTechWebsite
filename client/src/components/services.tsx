import { Code, Cloud, TrendingUp, Shield, Users, Headphones } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke software solutions designed to address your unique business challenges and opportunities.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Solutions"],
    key: "custom-development"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your IT operations.",
    features: ["Cloud Migration", "Infrastructure Management", "DevOps Solutions"],
    key: "cloud-solutions"
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Transform your data into actionable insights with advanced analytics and reporting solutions.",
    features: ["Data Analytics", "Custom Dashboards", "Performance Metrics"],
    key: "business-intelligence"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and maintain compliance.",
    features: ["Security Audits", "Threat Assessment", "Compliance Solutions"],
    key: "cybersecurity"
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology guidance to align your IT infrastructure with business objectives.",
    features: ["Technology Strategy", "System Integration", "Process Optimization"],
    key: "it-consulting"
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance services to ensure optimal system performance.",
    features: ["24/7 Support", "System Monitoring", "Regular Updates"],
    key: "support"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business
            objectives and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link key={index} href={`/services?service=${service.key}`}>
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="text-brand-600 dark:text-brand-400 mb-4">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>

                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
            alt="Digital transformation consulting"
            className="rounded-lg shadow-lg w-full h-40 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
            alt="Technology solutions servers"
            className="rounded-lg shadow-lg w-full h-40 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
            alt="Business analytics dashboard"
            className="rounded-lg shadow-lg w-full h-40 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
            alt="Cloud computing infrastructure"
            className="rounded-lg shadow-lg w-full h-40 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
