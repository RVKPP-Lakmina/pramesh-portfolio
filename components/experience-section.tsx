import { useState, useRef, useEffect } from "react";
import {
  Calendar,
  MapPin,
  TrendingUp,
  Building,
  Users,
  Code,
  Award,
} from "lucide-react";

// Mock WorkplaceBot component since it's not available
const WorkplaceBot = ({ selectedExperience }: any) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
        🤖
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Workplace Assistant</h3>
      <p className="text-gray-300 text-sm">
        Currently viewing: Experience #{selectedExperience + 1}
      </p>
    </div>
  </div>
);

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "XGEN Group",
    period: "APR 2023 - Present",
    location: "Sri Lanka",
    type: "Full-time",
    companyLogo: "🏢",
    companyColor: "from-blue-500 to-cyan-500",
    achievements: [
      {
        icon: <TrendingUp className="w-4 h-4" />,
        text: "Refactored legacy codebase, increasing system performance by 20% and enhancing accuracy through improved algorithms",
        impact: "20% Performance Boost",
        color: "text-green-400",
      },
      {
        icon: <Award className="w-4 h-4" />,
        text: "Participated in live release cycles and handled real-time bug fixes, leading to a 10% boost in system reliability",
        impact: "10% Reliability Increase",
        color: "text-blue-400",
      },
      {
        icon: <Code className="w-4 h-4" />,
        text: "Deployed applications on AWS, managed versioning with package registries, and increased product functionality by 10%",
        impact: "AWS Deployment Expert",
        color: "text-orange-400",
      },
      {
        icon: <Building className="w-4 h-4" />,
        text: "Implemented GitLab CI/CD pipelines, enabling automated and seamless deployment processes",
        impact: "CI/CD Implementation",
        color: "text-purple-400",
      },
      {
        icon: <Users className="w-4 h-4" />,
        text: "Engineered a dynamic ON Form Builder using React.js, Tailwind CSS, and Node.js, automating form generation via modular packages and iframes",
        impact: "Form Builder Innovation",
        color: "text-cyan-400",
      },
      {
        icon: <TrendingUp className="w-4 h-4" />,
        text: "Built a Smart Scorecard Builder with React.js, Tailwind CSS, and NestJS, reducing manual configuration and improving accuracy by 30%",
        impact: "30% Accuracy Improvement",
        color: "text-green-400",
      },
      {
        icon: <Code className="w-4 h-4" />,
        text: "Integrated HookState, ShadCN, and Vue.js to deliver company-wide frontend solutions with modern UI/UX consistency",
        impact: "Modern UI/UX Solutions",
        color: "text-pink-400",
      },
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "XGEN Group",
    period: "DEC 2022 - APR 2023",
    location: "Sri Lanka",
    type: "Internship",
    companyLogo: "🚀",
    companyColor: "from-purple-500 to-pink-500",
    achievements: [
      {
        icon: <Code className="w-4 h-4" />,
        text: "Trained in Full Stack Development using React, Node.js, and Oracle",
        impact: "Full Stack Training",
        color: "text-blue-400",
      },
      {
        icon: <Building className="w-4 h-4" />,
        text: "Built responsive UIs with React and optimized backend APIs in Node.js",
        impact: "React & Node.js Mastery",
        color: "text-green-400",
      },
      {
        icon: <TrendingUp className="w-4 h-4" />,
        text: "Handled Oracle DB queries with performance tuning",
        impact: "Database Optimization",
        color: "text-orange-400",
      },
      {
        icon: <Award className="w-4 h-4" />,
        text: "Applied best practices in RESTful API design and state management",
        impact: "API Design Excellence",
        color: "text-purple-400",
      },
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [coords, setCoords] = useState({ x: 800, y: 600 });
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    // Set coordinates once component mounts
    setCoords({
      x: 800,
      y: 600,
    });
  }, []);

  // Floating animation variants (simplified)
  const floatingElements = [...Array(20)].map((_, i) => ({
    id: i,
    text: ["</>", "{}", "[]", "()", "fn()", "API", "DB", "UI"][
      Math.floor(Math.random() * 8)
    ],
    x: Math.random() * coords.x,
    y: Math.random() * coords.y,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="experience"
      className="py-20 px-4 relative overflow-hidden min-h-screen bg-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10"></div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute text-cyan-400/10 font-mono text-sm animate-pulse"
            style={{
              left: `${element.x}px`,
              top: `${element.y}px`,
              animationDelay: `${element.delay}s`,
            }}
          >
            {element.text}
          </div>
        ))}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My career progression in full-stack development with measurable
            impact and continuous growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Workplace Bot */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <WorkplaceBot selectedExperience={selectedExperience} />
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-20"
                    onMouseEnter={() => setSelectedExperience(index)}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-6 top-8 w-6 h-6 bg-gradient-to-r ${exp.companyColor} rounded-full border-4 border-gray-900 flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform`}
                    >
                      {exp.companyLogo}
                    </div>

                    <div
                      className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:translate-x-2 ${
                        selectedExperience === index
                          ? "border-cyan-400/50 shadow-lg shadow-cyan-400/20"
                          : ""
                      }`}
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <h4
                            className={`text-xl font-semibold bg-gradient-to-r ${exp.companyColor} bg-clip-text text-transparent`}
                          >
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-300">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <span
                            className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${exp.companyColor} text-white font-medium`}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Achievements Grid */}
                      <div className="grid gap-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="group p-4 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:translate-x-1"
                            onMouseEnter={() =>
                              setHoveredAchievement(achIndex as any)
                            }
                            onMouseLeave={() => setHoveredAchievement(null)}
                          >
                            <div className="flex items-start space-x-4">
                              <div
                                className={`p-2 rounded-lg bg-gradient-to-r ${exp.companyColor} text-white group-hover:scale-110 transition-transform duration-200`}
                              >
                                {achievement.icon}
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-200">
                                  {achievement.text}
                                </p>
                                <div
                                  className={`mt-2 text-sm font-semibold ${
                                    achievement.color
                                  } transition-all duration-300 ${
                                    hoveredAchievement === achIndex
                                      ? "opacity-100 translate-y-0"
                                      : "opacity-0 translate-y-2"
                                  }`}
                                >
                                  💡 {achievement.impact}
                                </div>
                              </div>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          </div>
                        ))}
                      </div>

                      {/* Stats Summary */}
                      <div className="mt-6 pt-6 border-t border-gray-600">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div
                              className={`text-2xl font-bold bg-gradient-to-r ${exp.companyColor} bg-clip-text text-transparent`}
                            >
                              {exp.achievements.length}
                            </div>
                            <div className="text-xs text-gray-400">
                              Key Achievements
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">
                              {index === 0 ? "20%" : "100%"}
                            </div>
                            <div className="text-xs text-gray-400">
                              Performance Impact
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">
                              {index === 0 ? "7+" : "4+"}
                            </div>
                            <div className="text-xs text-gray-400">
                              Technologies Used
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">
                              {index === 0 ? "Current" : "Completed"}
                            </div>
                            <div className="text-xs text-gray-400">Status</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
