import { Link, useLocation } from "wouter";
import { ArrowLeft, Code, Cloud, TrendingUp, Shield, Users, Headphones, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const servicesData = {
  "custom-development": {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke software solutions designed to address your unique business challenges and drive innovation.",
    features: [
      "Full-stack web applications",
      "Mobile app development (iOS/Android)",
      "Enterprise software solutions",
      "API development and integration",
      "Database design and optimization",
      "Legacy system modernization"
    ],
    benefits: [
      "Tailored to your specific business needs",
      "Scalable architecture for future growth",
      "Modern technology stack",
      "Comprehensive testing and quality assurance",
      "Ongoing support and maintenance",
      "Agile development methodology"
    ],
    technologies: ["React", "Node.js", "Python", "Java", "React Native", "Flutter", "PostgreSQL", "MongoDB"],
    process: [
      "Requirements analysis and planning",
      "UI/UX design and prototyping",
      "Development and testing",
      "Deployment and launch",
      "Post-launch support and optimization"
    ]
  },
  "cloud-solutions": {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Comprehensive cloud infrastructure and migration services to modernize your IT operations and reduce costs.",
    features: [
      "Cloud migration strategy",
      "Infrastructure as Code (IaC)",
      "Containerization with Docker/Kubernetes",
      "CI/CD pipeline setup",
      "Cloud security implementation",
      "Performance monitoring and optimization"
    ],
    benefits: [
      "Reduced operational costs",
      "Improved scalability and flexibility",
      "Enhanced security and compliance",
      "Automatic backups and disaster recovery",
      "Global accessibility",
      "Pay-as-you-scale pricing model"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI"],
    process: [
      "Current infrastructure assessment",
      "Cloud strategy development",
      "Migration planning and execution",
      "Security and compliance setup",
      "Monitoring and optimization"
    ]
  },
  "business-intelligence": {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Transform your data into actionable insights with advanced analytics and custom reporting solutions.",
    features: [
      "Data warehouse design",
      "ETL pipeline development",
      "Interactive dashboards",
      "Predictive analytics",
      "Real-time reporting",
      "Data visualization"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Identify trends and opportunities",
      "Real-time business insights",
      "Automated reporting processes",
      "Better resource allocation"
    ],
    technologies: ["Power BI", "Tableau", "Apache Spark", "Python", "R", "SQL Server", "Snowflake", "Databricks"],
    process: [
      "Data audit and requirements gathering",
      "Data architecture design",
      "ETL development and testing",
      "Dashboard and report creation",
      "User training and deployment"
    ]
  },
  "cybersecurity": {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and maintain regulatory compliance.",
    features: [
      "Security audits and assessments",
      "Penetration testing",
      "Security policy development",
      "Employee security training",
      "Incident response planning",
      "Compliance management"
    ],
    benefits: [
      "Protection against cyber threats",
      "Regulatory compliance assurance",
      "Reduced risk of data breaches",
      "Enhanced customer trust",
      "Business continuity protection",
      "Cost savings from prevented incidents"
    ],
    technologies: ["SIEM tools", "Firewall management", "Antivirus solutions", "VPN setup", "Multi-factor authentication", "Encryption"],
    process: [
      "Security assessment and gap analysis",
      "Risk identification and prioritization",
      "Security solution implementation",
      "Employee training and awareness",
      "Ongoing monitoring and maintenance"
    ]
  },
  "it-consulting": {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology guidance to align your IT infrastructure with business objectives and drive growth.",
    features: [
      "Technology strategy development",
      "Digital transformation planning",
      "System integration consulting",
      "Vendor evaluation and selection",
      "IT governance and compliance",
      "Technology roadmap creation"
    ],
    benefits: [
      "Aligned IT and business strategy",
      "Optimized technology investments",
      "Improved operational efficiency",
      "Future-ready technology stack",
      "Expert guidance and best practices",
      "Reduced technology risks"
    ],
    technologies: ["Enterprise architecture", "ITIL framework", "Agile methodologies", "DevOps practices", "Cloud platforms", "Security frameworks"],
    process: [
      "Current state assessment",
      "Future state vision development",
      "Gap analysis and roadmap creation",
      "Implementation planning",
      "Change management and training"
    ]
  },
  "support": {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance services to ensure optimal system performance and minimize downtime.",
    features: [
      "24/7 system monitoring",
      "Proactive maintenance",
      "Bug fixes and updates",
      "Performance optimization",
      "User support and training",
      "Documentation and knowledge transfer"
    ],
    benefits: [
      "Minimized system downtime",
      "Improved system performance",
      "Predictable maintenance costs",
      "Access to expert support",
      "Regular updates and improvements",
      "Peace of mind"
    ],
    technologies: ["Monitoring tools", "Ticketing systems", "Remote access solutions", "Backup systems", "Update management", "Documentation platforms"],
    process: [
      "Service level agreement setup",
      "Monitoring and alerting configuration",
      "Regular maintenance scheduling",
      "Issue resolution and reporting",
      "Continuous improvement planning"
    ]
  }
};

export default function ServicesPage() {
  const [location] = useLocation();
  const serviceId = new URLSearchParams(location.split('?')[1] || '').get('service') || 'custom-development';
  const service = servicesData[serviceId as keyof typeof servicesData] || servicesData['custom-development'];
  const IconComponent = service.icon;

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/">
              <Button variant="ghost" className="mb-8 text-brand-600 hover:text-brand-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-brand-600 rounded-lg p-4 mr-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h1>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Button
                  onClick={scrollToContact}
                  className="bg-brand-600 text-white hover:bg-brand-700"
                  size="lg"
                >
                  Get Started Today
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt={service.title}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What We Offer</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-brand-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Step {index + 1}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
            </p>
            <Button
              onClick={scrollToContact}
              variant="secondary"
              size="lg"
              className="bg-white text-brand-600 hover:bg-gray-50"
            >
              Contact Us Today
            </Button>
          </div>
        </section>

        {/* Service Navigation */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Explore Our Other Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(servicesData)
                .filter(([key]) => key !== serviceId)
                .slice(0, 3)
                .map(([key, otherService]) => {
                  const OtherIconComponent = otherService.icon;
                  return (
                    <Link key={key} href={`/services?service=${key}`}>
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex items-center mb-3">
                          <div className="bg-brand-600 rounded-lg p-2 mr-3">
                            <OtherIconComponent className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {otherService.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {otherService.description.substring(0, 120)}...
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}