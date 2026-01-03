
import { useState, useEffect } from "react";
import { ChevronDown, Calendar, MapPin, Zap, Users, Award, BookOpen, Cpu, CheckCircle2, Mail, Phone, User, Clock } from "lucide-react";

export default function Index() {
  const [activeDay, setActiveDay] = useState(1);
  const [now, setNow] = useState(Date.now());

  const schedule = {
    1: [
      {
        time: "09:00 AM - 09:30 AM",
        title: "Inauguration of FDP",
        speaker: "",
      },
      {
        time: "09:30 AM - 12:00 PM",
        title: "Session 1: Introduction to Quantum Computing – Mathematical & Physical Foundations",
        speaker: "Mr. Rajasekhar Nannapaneni, Solution Engineering, Dell Technologies",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Session 2: Quantum Hardware Technologies & Industry Ecosystem; Quantum Computing Software Stack and Programming Ecosystems",
        speaker: "Mr. Rajasekhar Nannapaneni, Solution Engineering, Dell Technologies",
      },
    ],
    2: [
      {
        time: "09:00 AM - 12:00 PM",
        title: "Session 3: Mathematical Primer for Quantum Computing Essentials",
        speaker: "Dr. Pallaviram Sure, Ramaiah University",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Session 4: Basics and Applications of Quantum Technologies in Communication",
        speaker: "Dr. Varun Raghunathan, Associate Professor, IISc",
      },
    ],
    3: [
      {
        time: "09:00 AM - 12:00 PM",
        title: "Session 5: Quantum Gates and Circuits – Single-qubit (X, Y, Z, H, S, T) and Multi-qubit (CNOT, Toffoli, SWAP) Gates",
        speaker: "Dr. Jayakumar Vaithiyashankar, Founder and CEO, Anuthantra Private Limited",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Session 6: Quantum Circuits and Simulations; Hands-on: Implementing Quantum Circuits using Qiskit and IBM Quantum Experience",
        speaker: "Dr. Jayakumar Vaithiyashankar, Founder and CEO, Anuthantra Private Limited",
      },
    ],
    4: [
      {
        time: "09:00 AM - 12:00 PM",
        title: "Session 7: Challenges in Quantum Computing",
        speaker: "Dr. Ajmal Ibn Mohammed Althaf, Founder & Scientific Lead, QuantumX",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Session 8: Research Trends, Challenges, and Future of Quantum Computing",
        speaker: "Dr. Mohammed Riyaz Ahmed, Principal, HKBKCE",
      },
    ],
    5: [
      {
        time: "09:00 AM - 01:00 PM",
        title: "Industrial Visit",
        speaker: "",
      },
      {
        time: "02:00 PM - 05:00 PM",
        title: "Session 9: Quantum Machine Learning and Optimisation; Quantum Kernel Methods, Variational Quantum Circuits; Hands-on: Implementing QML Model",
        speaker: "Dr. R. Thilagavathy, Associate Professor, SRM University",
      },
    ],
    6: [
      {
        time: "09:00 AM - 01:00 PM",
        title: "Session 10: Making the Digital World Quantum Safe – Post-quantum Cryptography",
        speaker: "Dr. Jawar Singh, Professor, IIT Patna",
      },
      {
        time: "05:00 PM - 05:30 PM",
        title: "Assessment and Valedictory Function",
        speaker: "",
      },
    ],
  };

  const scheduleDates: Record<number, string> = {
    1: "05-01-2026",
    2: "06-01-2026",
    3: "07-01-2026",
    4: "08-01-2026",
    5: "09-01-2026",
    6: "10-01-2026",
  };

  const speakers = [
    { name: "Dr. Mohammed Riyaz Ahmed", affiliation: "Principal, HKBKCE", specialty: "", photo: "/photos/Dr. Mohammed Riyaz Ahmed.jpg" },
    { name: "Dr. Jawar Singh", affiliation: "Professor, IIT Patna", specialty: "", photo: "/photos/Dr. Jawar Singh.jpg" },
    { name: "Dr. Varun Raghunathan", affiliation: "Associate Professor, ECE, IISc", specialty: "", photo: "/photos/Dr. Varun Raghunathan.jpg" },
    { name: "Mr. Rajasekhar Nannapaneni", affiliation: "Consultant Solutions Architect, Dell Technologies", specialty: "", photo: "/photos/Mr. Rajasekhar Nannapaneni.jpg" },
    { name: "Dr. Jayakumar Vaithiya Shankar", affiliation: "Founder and CEO, Anuthantra Private Limited", specialty: "", photo: "/photos/Dr. Jayakumar Vaithiya Shankar.jpg" },
    { name: "Dr. Ajmal Ibn Mohammed Althaf", affiliation: "Founder and Scientific Lead, QuantumX", specialty: "", photo: "/photos/Dr. Ajmal Ibn Mohammed Althaf.png" },
    { name: "Dr. R. Thilagavathy", affiliation: "Associate Professor, SRM University", specialty: "", photo: "/photos/Dr. R. Thilagavathy.jpg" },
    { name: "Dr. Pallaviram Sure", affiliation: "Professor, Ramaiah University of Applied Sciences", specialty: "", photo: "/photos/Dr. Pallaviram Sure.jpg" },
  ];

  const objectives = [
    { title: "Fundamentals of Quantum Computing", icon: Cpu },
    { title: "Quantum Algorithms & Applications", icon: Zap },
    { title: "Hands-on Quantum Programming", icon: BookOpen },
    { title: "Research Opportunities", icon: Award },
    { title: "Curriculum Integration", icon: Users },
  ];

  const labsAndWorkshops = [
    {
      title: "Quantum Circuit Design Lab",
      description: "Build and simulate quantum circuits using Qiskit and Cirq while optimizing for noise resilience.",
      badge: "Hands-on Lab",
    },
    {
      title: "Quantum Algorithms Workshop",
      description: "Collaborate across teams to prototype Shor’s and Grover’s implementations on simulators and IBM hardware.",
      badge: "Workshop",
    },
    {
      title: "Quantum Software Engineering Sprint",
      description: "Apply DevOps practices to quantum stack deployments and create reproducible experiments.",
      badge: "Sprint",
    },
  ];

  const partners = [
    { name: "National Board of Accreditation", detail: "Accreditation for quality engineering education programs" },
    { name: "Institution's Innovation Council", detail: "Institutional framework to foster innovation and entrepreneurship" },
    { name: "AICTE", detail: "Certification, sponsorship & policy guidance" },
    { name: "VTU Bengaluru", detail: "Academic validation & credit pathways" },
  ];

  const learningOutcomes = [
    "Understand quantum computing principles and quantum mechanics fundamentals",
    "Master quantum gates, circuits, and quantum programming paradigms",
    "Implement quantum algorithms including Shor's and Grover's algorithms",
    "Develop practical quantum machine learning applications",
    "Apply quantum computing to real-world problems in chemistry and optimization",
    "Gain hands-on experience with quantum computing platforms and simulators",
    "Understand NISQ era algorithms and error mitigation strategies",
    "Explore research opportunities in quantum computing",
  ];

  const participants = [
    { name: "Miss Mythri R", organization: "ATME college of Engineering" },
    { name: "Mrs. Shrilakshmi Prasad", organization: "ATME College of Engineering" },
    { name: "Dr. Niranjan E", organization: "BIT" },
    { name: "Mrs. Rekha R", organization: "BNU" },
    { name: "Mrs. Varshini T R", organization: "cambridge institute of technology north campus" },
    { name: "Dr. Yogesh G S", organization: "East point college of Engineering and Technology" },
    { name: "Mr. Devendiran K", organization: "Global Academy of Technology" },
    { name: "Miss Precilla Y", organization: "HKBK Degree college" },
    { name: "Mr. Chandra Shekar", organization: "HKBK Degree college" },
    { name: "Mr. Pavan Av", organization: "HKBK Degree college" },
    { name: "S Vijaya Kumar", organization: "HKBK Degree college" },
    { name: "Abhirami Pp", organization: "HKBK Degree college" },
    { name: "Ajay K V", organization: "HKBK Degree college" },
    { name: "Miss Yashaswini G", organization: "HKBK Degree college" },
    { name: "Mrs. Reshma Jinto", organization: "HKBKCE" },
    { name: "Dr. Dr Mvilasini", organization: "HKBKCE" },
    { name: "Mr. Manup Prasad M P", organization: "HKBKCE" },
    { name: "Mrs. Husna Sabhat", organization: "HKBKCE" },
    { name: "Mrs. Summaiya Almas", organization: "HKBKCE" },
    { name: "Dr.A.Elakkiya", organization: "HKBKCE" },
    { name: "Miss Nelvita Lorraine Fernandes", organization: "HKBKCE" },
    { name: "Miss Arshiya Fathima", organization: "HKBKCE" },
    { name: "Dr. Aryalekshmi B N", organization: "HKBKCE" },
    { name: "Dr. Abdul Azeez", organization: "HKBKCE" },
    { name: "Noor Ayesha", organization: "HKBKCE" },
    { name: "Muskan S", organization: "HKBKCE" },
    { name: "Girija Lakshmi", organization: "HKBKCE" },
    { name: "Aushij Singh", organization: "HKBKCE" },
    { name: "Dr Gayathri R", organization: "HKBKCE" },
    { name: "Mr Arun Kumar", organization: "HKBKCE" },
    { name: "Hashinur Islam", organization: "HKBKCE" },
    { name: "Mrs. Radhika S K", organization: "Jawaharlal Nehru New College of Engineering" },
    { name: "Dr. Shashidhar R", organization: "JSS Science and Technology University, Mysuru" },
    { name: "Mrs. Prathima G", organization: "M.S.Engineering College" },
    { name: "Mrs. Kavitha D D", organization: "MAHE Bangalore" },
    { name: "Dr. Selva Nidhyananthan.S", organization: "Mepco Schlenk Engineering College" },
    { name: "Mr. Arun Raj", organization: "Mepco Schlenk Engineering College" },
    { name: "Dr. Davidson Kamala Dhas", organization: "Mepco Schlenk Engineering College" },
    { name: "Bharath V", organization: "MSRIT" },
    { name: "M. Janaki", organization: "New horizon" },
    { name: "Mrs. Annapoorna M", organization: "NMIT" },
    { name: "Miss Umm E Asma", organization: "PES Institute of Advanced Management Studies" },
    { name: "Mrs. Afreen Kubra", organization: "Presidency university" },
    { name: "Dr. Pacha Shobha Rani", organization: "R.M.K. Engineering College" },
    { name: "Dr. Nayana Hegde", organization: "REVA" },
    { name: "Shruthi B M", organization: "REVA" },
    { name: "Lakshmi Devi D", organization: "SIMATS" },
    { name: "Miss Sandhya", organization: "SJCIT" },
    { name: "Mrs. Rakshitha N T", organization: "SJCIT" },
    { name: "Mrs. Lavanya J", organization: "SJCIT" },
    { name: "Mr. Sreenivas Gollarahalli Seetharamaiah", organization: "SJCIT" },
    { name: "Mr. Narendrasingh Chauhan", organization: "Techsa solutions pvt ltd" },
    { name: "Dr. Deva K", organization: "Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College" },
    { name: "Dr. R Thiagarajan", organization: "VeltechMultitech engineering college" },
  ];

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about-college", label: "About" },
    { id: "department", label: "Department" },
    { id: "objectives", label: "Objectives" },
    { id: "partners", label: "Partners" },
    { id: "schedule", label: "Schedule" },
    { id: "resources", label: "Resource Persons" },
    { id: "outcomes", label: "Outcomes" },
    { id: "contact", label: "Contact" },
  ];

  const participantCountdownTarget = new Date("2025-12-31T23:59:59+05:30").getTime();
  const eventCountdownTarget = new Date("2026-01-05T09:00:00+05:30").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeRemaining = (target: number) => {
    const total = Math.max(target - now, 0);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };

  const participantTime = getTimeRemaining(participantCountdownTarget);
  const eventTime = getTimeRemaining(eventCountdownTarget);

  return (
    <div className="bg-quantum-dark min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 bg-quantum-black/70 backdrop-blur border-b border-quantum-cyan border-opacity-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
          <div className="text-white font-semibold tracking-widest text-lg">BITS TO QUBITS</div>
          <div className="hidden md:flex gap-3 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-3 py-2 rounded-full text-sm font-semibold border border-transparent text-gray-200 hover:text-white hover:border-quantum-cyan transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>
      <div className="pt-24">
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-quantum-navy via-quantum-indigo to-quantum-purple pt-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-quantum-cyan rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-quantum-indigo rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        {/* Quantum Grid Pattern with Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/photos/quantum2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="mb-8">
            <p className="text-quantum-cyan text-4xl sm:text-5xl lg:text-7xl font-semibold mb-4 uppercase tracking-widest">AICTE Sponsored ATAL – FDP</p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              BITS TO QUBITS:<br />
              <span className="bg-gradient-to-r from-quantum-cyan via-blue-400 to-quantum-cyan bg-clip-text text-transparent">
                TRANSFORMING TECHNOLOGY
              </span>
              <br />
              WITH QUANTUM COMPUTING
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-gray-300 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-quantum-cyan" />
              <span>5th - 10th January 2026</span>
            </div>
            <div className="hidden sm:block text-gray-500">•</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-quantum-cyan" />
              <span>HKBK College, Bengaluru</span>
            </div>
          </div>

          <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
            Department of Artificial Intelligence and Machine Learning<br />
            AICTE Approved &amp; VTU Affiliated | 6 Days FDP
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="https://atalacademy.aicte.gov.in/login" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-quantum-cyan to-blue-500 text-quantum-dark font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all duration-300 transform hover:scale-105">
              Register Now
            </a>
            <button className="px-8 py-4 border-2 border-quantum-cyan text-quantum-cyan font-bold rounded-lg hover:bg-quantum-cyan hover:text-quantum-dark transition-all duration-300">
              View Schedule
            </button>
          </div>

          <div className="text-gray-400 text-sm">
            Scroll down to explore the FDP details
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-quantum-cyan" />
        </div>
      </section>

      
      {/* ABOUT COLLEGE */}
      <section id="about-college" className="py-20 px-4 sm:px-6 lg:px-8 bg-quantum-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                About HKBK College
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                HKBK College of Engineering is a premier institution dedicated to fostering innovation and academic excellence. Approved by AICTE and affiliated with VTU, HKBK has established itself as a leader in engineering education.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The Department of Artificial Intelligence and Machine Learning at HKBK is committed to advancing research and education in cutting-edge technologies. This FDP represents our dedication to providing faculty and researchers with opportunities to explore the quantum computing frontier.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Located in Bengaluru's tech hub, HKBK College provides state-of-the-art infrastructure and a vibrant academic community that fosters collaboration and innovation.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-quantum-indigo to-quantum-purple rounded-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-quantum-navy to-quantum-indigo rounded-2xl p-4 sm:p-6 border border-quantum-cyan border-opacity-30 min-h-64 flex items-center justify-center overflow-hidden">
                <img
                  src="/photos/college.jpg"
                  alt="HKBK College of Engineering campus"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '';
                    target.className = 'w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-xl';
                    target.textContent = 'HKBK Campus';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DEPARTMENT */}
      <section id="department" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-quantum-dark to-quantum-navy">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Department of <span className="text-quantum-cyan">Artificial Intelligence and Machine Learning</span>
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
            Artificial Intelligence is an emerging field in computer science, rapidly expanding into areas such as healthcare,
            security, education, autonomous systems, robotics, space exploration, speech processing, and more. HKBK College of
            Engineering, known for introducing cutting-edge programs, launched the AI and Machine Learning (AIML) program in the
            2021 academic year with an initial intake of 120. Approved by AICTE and affiliated by VTU,
            the program aligns with advancements in the field and follows Outcome-Based Education (OBE). Equipped with
            state-of-the-art labs and infrastructure, the department provides hands-on learning in Machine Learning, Deep Learning,
            Cyber security, Data Analytics, IoT and other emerging technologies, attracting top engineering talent nationwide.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl border border-quantum-cyan border-opacity-30 bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-quantum-cyan text-xl font-bold mb-4">Vision</h3>
                <p className="text-gray-300">
                  To be a leading center of excellence in Artificial Intelligence and Machine Learning, driving innovation and research in emerging technologies including quantum computing.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-quantum-cyan border-opacity-30 bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-quantum-cyan text-xl font-bold mb-4">Mission</h3>
                <p className="text-gray-300">
                  To provide transformative education in AI and ML, fostering research excellence, industry collaboration, and preparing students to solve real-world problems using advanced technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section id="objectives" className="py-20 px-4 sm:px-6 lg:px-8 bg-quantum-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            Objectives of <span className="text-quantum-cyan">Faculty Development Program</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {objectives.map((obj, idx) => {
              const IconComponent = obj.icon;
              return (
                <div key={idx} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy via-quantum-indigo to-quantum-dark p-8 border border-quantum-cyan border-opacity-20 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:scale-105 transform">
                  <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mb-4">
                      <IconComponent className="w-12 h-12 text-quantum-cyan" />
                    </div>
                    <h3 className="text-white font-bold text-lg">{obj.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-quantum-dark to-quantum-navy">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Affiliation and <span className="text-quantum-cyan">Accreditation</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-2xl border border-quantum-cyan border-opacity-30 bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 hover:border-opacity-80 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-white text-2xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{partner.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-quantum-dark to-quantum-navy">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            FDP <span className="text-quantum-cyan">Schedule</span>
          </h2>

          {/* Day Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[1, 2, 3, 4, 5, 6].map((day) => (
              <button key={day} onClick={() => setActiveDay(day)} className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${activeDay === day ? "bg-gradient-to-r from-quantum-cyan to-blue-500 text-quantum-dark shadow-[0_0_30px_rgba(0,255,255,0.6)]" : "border border-quantum-cyan border-opacity-50 text-quantum-cyan hover:border-opacity-100"}`}>
                DAY {day}
              </button>
            ))}
          </div>

          {/* Schedule Cards */}
          <div className="space-y-4">
            <p className="flex items-center justify-center gap-2 text-gray-300 mb-2">
              <Calendar className="w-4 h-4 text-quantum-cyan" />
              <span>{scheduleDates[activeDay]}</span>
            </p>
            {schedule[activeDay as keyof typeof schedule].map((session, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-quantum-navy via-quantum-indigo to-quantum-navy p-6 border border-quantum-cyan border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-quantum-cyan font-bold text-lg">{session.title}</p>
                      {session.speaker && <p className="text-gray-300 text-sm mt-1">Speaker: <span className="text-quantum-cyan font-semibold">{session.speaker}</span></p>}
                    </div>
                    <p className="text-gray-400 text-sm font-mono whitespace-nowrap">{session.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIEF GUEST */}
      <section id="chief-guest" className="py-20 px-4 sm:px-6 lg:px-8 bg-quantum-dark">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Chief <span className="text-quantum-cyan">Guest</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="w-40 h-40 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-6 shadow-lg">
                  <img
                    src="/photos/Dr. Manish Bali.jpg"
                    alt="Dr. Manish Bali"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "";
                      target.className = "w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-3xl";
                      target.textContent = "C";
                    }}
                  />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Dr. Manish Bali</h3>
                <p className="text-quantum-cyan text-base font-semibold">Senior Director & Head|Pre-Silicon & Embedded|UST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZING COMMITTEE */}
      <section id="committee" className="py-20 px-4 sm:px-6 lg:px-8 bg-quantum-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            Organizing <span className="text-quantum-cyan">Committee</span>
          </h2>
          
          {/* Chief Patrons */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-quantum-cyan mb-8 text-center">Chief Patrons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-6 shadow-lg">
                    <img 
                      src="/photos/Shri C. M. Ibrahim.jpg" 
                      alt="Shri C. M. Ibrahim"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '';
                        target.className = 'w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-3xl';
                        target.textContent = 'A';
                      }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">Shri C. M. Ibrahim</h3>
                  <p className="text-quantum-cyan text-base font-semibold">Chairman-HKBKGI</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-6 shadow-lg">
                    <img 
                      src="/photos/Shri C. M. Faiz Mohammed.jpg" 
                      alt="Shri C. M. Faiz Mohammed"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '';
                        target.className = 'w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-3xl';
                        target.textContent = 'D';
                      }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">Shri C. M. Faiz Mohammed</h3>
                  <p className="text-quantum-cyan text-base font-semibold">Director-HKBKGI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chairperson */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-quantum-cyan mb-8 text-center">Patron</h3>
            <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-6 shadow-lg">
                    <img 
                      src="/photos/Dr. Mohammed Riyaz Ahmed.jpg" 
                      alt="Dr. Mohammed Riyaz Ahmed"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '';
                        target.className = 'w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-3xl';
                        target.textContent = 'A';
                      }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">Dr. Mohammed Riyaz Ahmed</h3>
                  <p className="text-quantum-cyan text-sm font-semibold mb-2">Principal-HKBKCE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Convener */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-quantum-cyan mb-8 text-center">Convener</h3>
            <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-36 h-36 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-6 shadow-lg">
                    <img 
                      src="/photos/Tabassum ara.jpg" 
                      alt="Dr. Tabassum Ara"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '';
                        target.className = 'w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-2xl';
                        target.textContent = 'A';
                      }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Dr. Tabassum Ara</h3>
                  <p className="text-quantum-cyan text-base font-semibold">
                    Dean-IIC - HKBKCE
                    <br />
                    Professor and Head, Dept. of AIML - HKBKCE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coordinators */}
          <div>
            <h3 className="text-2xl font-bold text-quantum-cyan mb-8 text-center">Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-4 shadow-lg">
                    <img 
                      src="/photos/Prof. Afreen Kubra.jpg" 
                      alt="Prof. Afreen Kubra"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '';
                        target.className = 'w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-xl';
                        target.textContent = 'M';
                      }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Prof. Afreen Kubra</h3>
                  <p className="text-quantum-cyan text-base font-semibold mb-2">Asst. Prof- AIML-HKBKCE</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-4 shadow-lg">
                    <img 
                      src="/photos/Prof. Nelvita Fernandes.jpg" 
                      alt="Prof. Nelvita Fernandes"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '';
                        target.className = 'w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-xl';
                        target.textContent = 'S';
                      }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-lg mb-1 whitespace-nowrap">Prof. Nelvita Fernandes</h3>
                  <p className="text-quantum-cyan text-base font-semibold mb-2">Asst. Prof- AIML-HKBKCE</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-4 shadow-lg">
                    <img 
                      src="/photos/Dr. Abdul Azeez.jpg" 
                      alt="Dr. Abdul Azeez"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '';
                        target.className = 'w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-xl';
                        target.textContent = 'D';
                      }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-lg mb-1 whitespace-nowrap">Dr. Abdul Azeez</h3>
                  <p className="text-quantum-cyan text-base font-semibold mb-2">Assot. Prof- ECE-HKBKCE</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-4 shadow-lg">
                    <img 
                      src="/photos/Dr. Aryalekshmi B N.jpg" 
                      alt="Dr. Aryalekshmi B N"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '';
                        target.className = 'w-full h-full bg-gradient-to-br from-quantum-cyan to-blue-500 flex items-center justify-center text-quantum-dark font-bold text-xl';
                        target.textContent = 'P';
                      }}
                    />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-lg mb-1 whitespace-nowrap">Dr. Aryalekshmi B N</h3>
                  <p className="text-quantum-cyan text-base font-semibold mb-2">Assot. Prof- ECE-HKBKCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE PERSONS */}
      <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-quantum-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            Resource <span className="text-quantum-cyan">Persons</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {speakers.map((speaker, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-quantum-cyan mx-auto mb-6 shadow-lg flex items-center justify-center bg-gradient-to-br from-quantum-cyan to-blue-500">
                    {speaker.photo ? (
                      <img
                        src={speaker.photo}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-quantum-dark">
                        {speaker.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{speaker.name}</h3>
                  <p className="text-quantum-cyan text-base font-semibold mb-2">{speaker.affiliation}</p>
                  {speaker.specialty && (
                    <p className="text-gray-300 text-sm">{speaker.specialty}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICIPANTS */}
      <section id="participants" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-quantum-dark to-quantum-navy">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10 text-center">
            <span className="text-quantum-cyan">Participants</span>
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-quantum-cyan/40 bg-gradient-to-br from-quantum-navy via-quantum-indigo to-quantum-dark shadow-[0_0_30px_rgba(0,255,255,0.25)]">
            <table className="min-w-full text-left text-sm text-gray-200">
              <thead className="bg-quantum-black/60 border-b border-quantum-cyan/40">
                <tr>
                  <th className="px-4 sm:px-6 py-3 font-semibold tracking-wide text-quantum-cyan whitespace-nowrap">#</th>
                  <th className="px-4 sm:px-6 py-3 font-semibold tracking-wide text-quantum-cyan whitespace-nowrap">Name</th>
                  <th className="px-4 sm:px-6 py-3 font-semibold tracking-wide text-quantum-cyan whitespace-nowrap">Organization</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((p, idx) => (
                  <tr
                    key={`${p.name}-${idx}`}
                    className={
                      idx % 2 === 0
                        ? "bg-quantum-dark/60 hover:bg-quantum-dark/80 transition-colors"
                        : "bg-quantum-navy/60 hover:bg-quantum-navy/80 transition-colors"
                    }
                  >
                    <td className="px-4 sm:px-6 py-3 align-top text-gray-400 whitespace-nowrap">{idx + 1}</td>
                    <td className="px-4 sm:px-6 py-3 align-top font-medium text-white whitespace-nowrap">{p.name}</td>
                    <td className="px-4 sm:px-6 py-3 align-top text-gray-200">{p.organization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* LEARNING OUTCOMES */}
      <section id="outcomes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-quantum-dark to-quantum-navy">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Learning <span className="text-quantum-cyan">Outcomes</span>
          </h2>
          <div className="space-y-4">
            {learningOutcomes.map((outcome, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-gradient-to-r from-quantum-navy to-quantum-indigo border border-quantum-cyan border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-quantum-cyan flex-shrink-0 mt-1" />
                <p className="text-gray-300">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-quantum-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-quantum-cyan via-quantum-indigo to-quantum-purple p-12 text-center border border-quantum-cyan border-opacity-30">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-quantum-cyan rounded-full mix-blend-screen filter blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Register for ATAL FDP
              </h2>
              <p className="text-gray-100 mb-8 text-lg">
                Limited seats available. Secure your spot now for this exclusive 6-day professional development program.
              </p>
              <a href="https://atalacademy.aicte.gov.in/login" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-white text-quantum-dark font-bold rounded-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] transition-all duration-300 transform hover:scale-105">
                Register on ATAL Academy Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-quantum-dark to-quantum-navy">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Get in <span className="text-quantum-cyan">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border border-quantum-cyan border-opacity-30">
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold text-lg">Prof. Afreen Kubra</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-300">
                    <Phone className="w-4 h-4 text-quantum-cyan" />
                    <a href="tel:6360080832" className="text-quantum-cyan hover:underline">6360080832</a>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-gray-300">
                    <Mail className="w-4 h-4 text-quantum-cyan" />
                    <a href="mailto:afreen.aiml@hkbk.edu.in" className="text-quantum-cyan hover:underline">afreen.aiml@hkbk.edu.in</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border border-quantum-cyan border-opacity-30">
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold text-lg">Prof. Nelvita Fernandes</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-300">
                    <Phone className="w-4 h-4 text-quantum-cyan" />
                    <a href="tel:9449545632" className="text-quantum-cyan hover:underline">9449545632</a>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-gray-300">
                    <Mail className="w-4 h-4 text-quantum-cyan" />
                    <a href="mailto:nelvita.aiml@hkbk.edu.in" className="text-quantum-cyan hover:underline">nelvita.aiml@hkbk.edu.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENUE & MAP SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-quantum-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Venue <span className="text-quantum-cyan">Details</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Address Card */}
            <div className="rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-quantum-cyan" />
                Our Location
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-bold text-xl mb-2">HKBK College of Engineering</p>
                  <p className="text-gray-300">No.22/1, Opp. Manyata Tech Park,</p>
                  <p className="text-gray-300">Nagawara, Bengaluru – 560045</p>
                  <p className="text-gray-300">Karnataka, India</p>
                </div>
                <div className="pt-4 border-t border-quantum-cyan/20">
                  <p className="text-white font-semibold mb-2">Contact Information:</p>
                  <div className="flex items-center gap-3 text-gray-300 mb-2">
                    <Phone className="w-5 h-5 text-quantum-cyan" />
                    <a href="tel:+918067600600" className="hover:text-quantum-cyan transition-colors">+91 80 6760 0600</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-quantum-cyan" />
                    <a href="mailto:info@hkbk.edu.in" className="hover:text-quantum-cyan transition-colors">info@hkbk.edu.in</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300 h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.862710050106!2d77.625251175174!3d13.046466987368355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1778a6d5b1c7%3A0x2c3e3d3c3e3d3c3e!2sHKBK%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{minHeight: '350px', border: 0}} 
                allowFullScreen 
                loading="lazy"
                title="HKBK College of Engineering Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          
          {/* Additional Contact Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-quantum-cyan" />
                Program Coordinators
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white font-semibold">Prof. Afreen Kubra</p>
                  <p className="text-gray-300 text-sm">Asst. Professor, Dept. of AIML</p>
                  <div className="flex items-center gap-2 mt-1">
                    <a href="tel:6360080832" className="text-quantum-cyan text-sm hover:underline">+91 63600 80832</a>
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold">Prof. Nelvita Fernandes</p>
                  <p className="text-gray-300 text-sm">Asst. Professor, Dept. of AIML</p>
                  <div className="flex items-center gap-2 mt-1">
                    <a href="tel:9449545632" className="text-quantum-cyan text-sm hover:underline">+91 94495 45632</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl bg-gradient-to-br from-quantum-navy to-quantum-indigo p-8 border-2 border-quantum-cyan border-opacity-30 hover:border-opacity-100 transition-all duration-300">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-quantum-cyan" />
                Working Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-medium">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-medium">9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-quantum-cyan border-opacity-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-quantum-cyan font-bold text-lg mb-2">BITS TO QUBITS</h3>
              <p className="text-gray-400 text-sm">AICTE Sponsored ATAL FDP on Quantum Computing</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Organizer</h3>
              <p className="text-gray-400 text-sm">Department of Artificial Intelligence and Machine Learning</p>
              <p className="text-gray-400 text-sm">HKBK College of Engineering</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Duration</h3>
              <p className="text-gray-400 text-sm">5th - 10th January 2026</p>
              <p className="text-gray-400 text-sm">6 Days FDP</p>
            </div>
          </div>
          <div className="border-t border-quantum-cyan border-opacity-20 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2026 HKBK College of Engineering. All rights reserved. | AICTE Approved &amp; VTU Affiliated
            </p>
            <p className="text-center text-gray-500 text-sm mt-4 font-medium">
              Designed and Developed by <span className="text-quantum-cyan font-bold">Fatir</span>, <span className="text-quantum-cyan font-bold">Abbas</span> and <span className="text-quantum-cyan font-bold">Laiba</span> from <span className="text-white font-semibold">AIML - HKBKCE</span>
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

