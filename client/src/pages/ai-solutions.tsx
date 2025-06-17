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

            {/* Chatbots */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI Chatbots</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Intelligent conversational AI solutions that enhance customer service, 
                automate support, and provide 24/7 assistance across multiple channels.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Customer service automation</li>
                <li>• Multi-platform integration</li>
                <li>• Natural language processing</li>
                <li>• Personalized interactions</li>
              </ul>
            </div>

            {/* AI Brains */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI Brains</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced neural network systems that power intelligent decision-making, 
                pattern recognition, and complex problem-solving capabilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Deep learning models</li>
                <li>• Cognitive computing solutions</li>
                <li>• Predictive analytics engines</li>
                <li>• Intelligent automation systems</li>
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

            {/* AI Solutions for Higher Ed */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI Solutions for Higher Ed</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized AI tools designed for universities and colleges to enhance 
                academic operations, research capabilities, and student outcomes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Student performance analytics</li>
                <li>• Research data analysis tools</li>
                <li>• Administrative automation</li>
                <li>• Campus resource optimization</li>
              </ul>
            </div>

            {/* AI Solutions for Schools */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">AI Solutions for Schools</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Educational AI solutions tailored for K-12 schools to improve learning 
                outcomes, streamline operations, and support educators.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Personalized learning platforms</li>
                <li>• Teacher productivity tools</li>
                <li>• Student progress tracking</li>
                <li>• School safety and monitoring</li>
              </ul>
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
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Transform Your Business with AI?</h3>
          <div className="space-y-3 text-lg text-gray-700">
            <div>📧 <strong>Email:</strong> Info@jj-tech.co or JJ.tech.us.corp@gmail.com</div>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}