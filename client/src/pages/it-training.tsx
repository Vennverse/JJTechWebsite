import JJTechNavigation from "@/components/jjtech-navigation";

export default function ITTraining() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Main Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              JJ-TECH - IT TRAINING
            </h1>
          </div>
        </section>

        {/* Sky Blue Banner */}
        <div className="bg-sky-600 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-white text-lg font-medium">
              Training Service - We Enable, Equip and Empower (e3)
            </h2>
          </div>
        </div>

        {/* Content Section with Training Information */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex justify-center">
            <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-lg max-w-4xl">
              {/* Left side - Key image */}
              <div className="bg-gray-300 p-8 flex items-center justify-center w-1/3">
                <div className="relative">
                  <div className="w-32 h-20 bg-yellow-600 rounded-full flex items-center justify-center transform -rotate-12">
                    <div className="text-white text-center">
                      <div className="text-xs font-bold">WE GUARANTEE</div>
                      <div className="text-lg font-bold">YOUR SUCCESS</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                    <div className="text-2xl font-bold text-green-600">$</div>
                  </div>
                  <div className="absolute top-8 -left-8 text-gray-600 text-xs font-bold transform rotate-12">
                    JJ-TECH
                  </div>
                </div>
              </div>

              {/* Right side - Training details */}
              <div className="bg-sky-600 p-6 w-2/3">
                <div className="text-white text-sm space-y-4">
                  <div className="font-bold text-center mb-4">Training will be provided on the following:</div>
                  
                  <div className="space-y-2">
                    <div><strong>PMP</strong> - Project Management Practitioner</div>
                    <div><strong>ITIL</strong> - ITIL Practitioner</div>
                    <div><strong>ACP</strong> - Agile Certified Practitioner</div>
                    <div><strong>CSM</strong>- Scrum Master Certification</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>PMO</strong> Program Management - Program Governance, Delivery, Budget/Planning, Forecasting, Cost variance, P&L, Capex/Opex</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>Project Management Skills</strong> for Beginners and Mid to Senior level exec's. Practical Project management Lessons, PMBOK, Resource, Utilization Free Project Management eBook, Templates for Practical use - RAID log</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>IT operations</strong>- KPI's/Metrics and Operational Reporting, Dashboards</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>Business Analysis Training</strong> - Requirements Gathering, AS-IS, TO-BE, GAP Analysis, Business transformation, Creation of Process flow Diagrams, Graphs and Charts,</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>Interview prep, Resume Critique and many more</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mt-8 space-y-2">
            <div className="text-sm text-gray-700">EMAIL US AT JJ.TECH.US.CORP@GMAIL.COM OR REACH US 214.699.1761</div>
            <div className="text-sm text-gray-700">Email: jj.tech.us.corp@gmail.com</div>
            <div className="text-sm text-gray-700">Phone - 214.699.1761</div>
          </div>
        </div>
      </main>
    </div>
  );
}