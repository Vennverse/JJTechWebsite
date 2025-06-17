import JJTechNavigation from "@/components/jjtech-navigation";
import { Brain, Zap, Target, Shield, Database, Bot, Cpu, Eye } from "lucide-react";
import { Link } from "wouter";

export default function AISolutions() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Harness the power of artificial intelligence to transform your business operations, 
            enhance decision-making, and unlock new opportunities for growth.
          </p>
        </div>
      </section>

      {/* Services Banner */}
      <div className="bg-sky-600 py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white text-lg">
            Cutting-edge AI solutions tailored to your business needs
          </p>
        </div>
      </div>

      {/* AI Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our AI Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From machine learning implementation to intelligent automation, we deliver AI solutions 
              that drive measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Essentials Package for Small Businesses */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI Essentials Package for Small Businesses</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Affordable, ready-to-deploy AI solutions tailored for small businesses 
                to compete effectively in the digital marketplace.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Customer service chatbots</li>
                <li>• Basic automation tools</li>
                <li>• Social media management AI</li>
                <li>• Simple analytics dashboards</li>
              </ul>
            </div>

            {/* AI Growth Package */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI Growth Package (Mid Tier – for Growing Businesses)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Scaled AI solutions designed for growing businesses ready to expand 
                their operations and optimize performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Scalable automation solutions</li>
                <li>• Performance optimization tools</li>
                <li>• Growth analytics and insights</li>
                <li>• Integration with existing systems</li>
              </ul>
            </div>

            {/* AI Business Pro Suite */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI Business Pro Suite</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive AI platform combining multiple advanced tools for 
                established businesses seeking competitive advantage.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Advanced analytics and forecasting</li>
                <li>• Multi-channel AI integration</li>
                <li>• Custom workflow automation</li>
                <li>• Enterprise-grade security features</li>
              </ul>
            </div>

            {/* AI for Consulting Services */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI for Consulting Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized AI solutions designed to enhance consulting practices with 
                data-driven insights and automated analysis capabilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Client data analysis and insights</li>
                <li>• Automated report generation</li>
                <li>• Market research automation</li>
                <li>• Strategic planning support tools</li>
              </ul>
            </div>

            {/* AI Strategy & Consulting */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI Strategy & Consulting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Develop comprehensive AI strategies aligned with your business objectives 
                and technical capabilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI readiness assessment</li>
                <li>• Strategic roadmap development</li>
                <li>• Technology selection guidance</li>
                <li>• ROI analysis and planning</li>
              </ul>
            </div>

            {/* AI Custom Development */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Cpu className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI Custom Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tailored AI solutions built from the ground up to meet your specific business 
                requirements and operational workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Custom AI model development</li>
                <li>• Bespoke algorithm design</li>
                <li>• Integration with existing systems</li>
                <li>• Scalable AI architecture</li>
              </ul>
            </div>

            {/* Marketing, Lead Generation and Sales Cycle */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Marketing, Lead Generation and Sales Cycle</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI-powered marketing solutions to optimize campaigns, identify prospects, 
                and accelerate your complete sales pipeline from lead to close.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Predictive lead scoring</li>
                <li>• Automated campaign optimization</li>
                <li>• Sales cycle acceleration tools</li>
                <li>• Customer journey optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Industry Applications</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our AI solutions span across various industries, delivering tailored approaches 
              for unique business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600">
                Medical imaging, patient data analysis, and predictive diagnostics
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Cpu className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Manufacturing</h3>
              <p className="text-sm text-gray-600">
                Predictive maintenance, quality control, and supply chain optimization
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Target className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Finance</h3>
              <p className="text-sm text-gray-600">
                Risk assessment, fraud detection, and algorithmic trading
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Brain className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
              <p className="text-sm text-gray-600">
                Personalized learning, student performance analytics, and curriculum optimization
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Zap className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Social Media</h3>
              <p className="text-sm text-gray-600">
                Content moderation, user engagement analytics, and trend prediction
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Database className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">IT Consulting</h3>
              <p className="text-sm text-gray-600">
                Infrastructure optimization, automated testing, and performance monitoring
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Bot className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Retail</h3>
              <p className="text-sm text-gray-600">
                Customer analytics, inventory optimization, and personalization
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Eye className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">And More</h3>
              <p className="text-sm text-gray-600">
                Custom AI solutions tailored to your specific industry and business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8">
            Let's discuss how our AI solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Schedule Consultation
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors text-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 JJ-Tech. All rights reserved. | Email: contact@jj-tech.co
          </p>
        </div>
      </footer>
    </div>
  );
}