import { useState } from "react";
import { ArrowDown, ArrowUp, Github, Linkedin, Code, Sparkles, Zap, Award, BookOpen, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import emailjs from '@emailjs/browser';
const Index = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Initialize EmailJS with your public key
      emailjs.init("gS38EOnqKnHjGdnph");

      // Send email using EmailJS
      await emailjs.send("service_oi18c5k",
      // Service ID
      "template_lcac572",
      // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "mathurgaurav1742@gmail.com"
      });
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!"
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const projects = [{
    title: "Rock, Paper, Scissors Game",
    description: "Gesture-recognition game using computer vision with published research paper.",
    tech: ["Python", "OpenCV", "ML", "Computer Vision"],
    type: "Published Research",
    highlight: true,
    githubUrl: "https://github.com/GitGaurav1/Rock.-Paper-Scissor-using-OpenCV-and-ML",
    publishedUrl: "https://goldncloudpublications.com/index.php/irjaem/article/view/520"
  }, {
    title: "Parkinson's Disease Detection",
    description: "ML model for early detection of Parkinson's using voice features and biomedical data.",
    tech: ["Python", "SVM", "Machine Learning", "Biomedical Data"],
    type: "Healthcare AI",
    githubUrl: "https://github.com/GitGaurav1/Parkinson-s-Disease-Detection"
  }, {
    title: "Drowsiness Detection System",
    description: "Real-time system to detect driver drowsiness and enhance road safety.",
    tech: ["Python", "OpenCV", "Computer Vision", "OpenStreetMap"],
    type: "Computer Vision and OpenStreetMap",
    githubUrl: "https://github.com/GitGaurav1/Driver-Drowsiness-Detection-System"
  }, {
    title: "Cyberbullying Threat Analysis",
    description: "Analyzes text & images for bullying, sends reports to parents.",
    tech: ["Flask", "Tesseract", "VADER", "Maps API"],
    type: "Full Stack and AI",
    githubUrl: "https://github.com/GitGaurav1/Cyberbullying-Threat-Analysis"
  }];
  const skills = {
    "Languages": ["C++", "Python", "HTML", "CSS", "JavaScript"],
    "Frameworks": ["React"],
    "Tools": ["MySQL", "DBMS", "Tesseract", "OpenCV"],
    "Concepts": ["Data Structures", "OOPs", "Cloud Computing", "ML"]
  };
  const certifications = ["AWS Certified Cloud Practitioner", "Google Cloud Digital Leader", "IBM Data Science Certificates"];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/10"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 animate-bounce" style={{
          animationDelay: '0s',
          animationDuration: '3s'
        }}></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-30 animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl opacity-25 animate-bounce" style={{
          animationDelay: '2s',
          animationDuration: '4s'
        }}></div>
          <div className="absolute bottom-20 right-40 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-35 animate-pulse" style={{
          animationDelay: '0.5s'
        }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <Avatar className="w-32 h-32 border-4 border-white shadow-2xl">
                <AvatarImage src="https://i.postimg.cc/NK14mBkF/image.jpg" alt="Gaurav Mathur" className="object-cover" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  GM
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Recently Graduated & Available</span>
            </div>

            {/* Main Headline with enhanced typography */}
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 mb-6 leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                  Gaurav
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg -z-10"></div>
              </span>
            </h1>
            
            {/* Subtitle with better hierarchy */}
            <div className="space-y-4 mb-8">
              <p className="text-2xl md:text-3xl font-bold text-slate-700 mb-2">
                B.Tech CSE Graduate from VIT Vellore
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-100">
                  <Code className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">Software Developer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-100">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-slate-700">ML Enthusiast</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-green-100">
                  <Award className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-slate-700">Published Researcher</span>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                I build intelligent systems that solve real-world problems through{" "}
                <span className="font-semibold text-blue-700">AI & Machine Learning</span>, with a{" "}
                <span className="font-semibold text-purple-700">published research paper</span> to my name
              </p>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300 border-0" onClick={() => document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                <span className="mr-2">Explore My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 hover:bg-white hover:border-blue-300 hover:text-blue-700 px-8 py-4 rounded-full text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300" onClick={() => window.open("https://drive.google.com/file/d/1762fo402UmAtvEsQa2F5PBh6r1G5-6Y2/view", "_blank")}>
                <span className="mr-2">Download Resume</span>
                <BookOpen className="w-5 h-5" />
              </Button>
            </div>

            {/* Stats or quick highlights */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg">
                <div className="text-3xl font-black text-blue-600 mb-2">4+</div>
                <div className="text-sm font-semibold text-slate-600">Projects</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-lg">
                <div className="text-3xl font-black text-purple-600 mb-2">1</div>
                <div className="text-sm font-semibold text-slate-600">Published Paper</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg">
                <div className="text-3xl font-black text-green-600 mb-2">3+</div>
                <div className="text-sm font-semibold text-slate-600">Certifications</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
                <div className="text-3xl font-black text-orange-600 mb-2">VIT</div>
                <div className="text-sm font-semibold text-slate-600">Graduate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm font-medium text-slate-500">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                I'm Gaurav Mathur from Noida, Uttar Pradesh, and I have recently completed my B.Tech degree in Computer Science and Engineering from Vellore Institute of Technology, Vellore. I've developed intermediate programming skills with particular strength in C++, focusing on data structures and algorithms.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed text-justify">My core coursework has equipped me with comprehensive understanding of Object-Oriented Programming and Database Management Systems. I've explored machine learning and Python extensively, building impactful projects and even publishing a research paper on my Rock, Paper, Scissors project in the International Research Journal on Advanced Engineering and Management.



I also possess intermediate knowledge in Cloud Computing, which has enhanced my understanding of modern technologies.</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl mx-[5px]">📍</span>
                  <span className="text-gray-700">Noida, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl mx-0">📧</span>
                  <span className="text-gray-700">mathurgaurav1742@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎓</span>
                  <span className="text-gray-700">B.Tech CSE - VIT Vellore</span>
                </div>
                <div className="flex items-center space-x-3 mx-[5px]">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <a href="https://www.linkedin.com/in/gaurav-mathur-56759924b/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience & Achievements</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Published Research</h4>
                  <p className="text-blue-600 font-medium">International Research Journal</p>
                  <p className="text-gray-600 mt-2">Rock, Paper, Scissors project using OpenCV and ML accepted for publication.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">HEARTS-UHET Club</h4>
                  <p className="text-blue-600 font-medium">Poster Designer</p>
                  <p className="text-gray-600 mt-2">Contributed to social awareness initiatives helping underprivileged students.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Academic Foundation</h4>
                  <p className="text-blue-600 font-medium">RAI School (10th & 12th)</p>
                  <p className="text-gray-600 mt-2">RAI School (CBSE Board) – Scored 86% in 10th and 91% in 12th, providing a solid academic foundation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6">Innovative solutions with real-world impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={index} className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white ${project.highlight ? 'ring-2 ring-orange-200' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className={`${project.highlight ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}>
                      {project.type}
                    </Badge>
                    {project.highlight && <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        Published
                      </Badge>}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className="text-sm">
                        {tech}
                      </Badge>)}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2" onClick={() => window.open(project.githubUrl, "_blank")}>
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </Button>
                    {project.publishedUrl && <Button size="sm" className="bg-green-600 hover:bg-green-700 flex items-center space-x-2" onClick={() => window.open(project.publishedUrl, "_blank")}>
                        <Award className="w-4 h-4" />
                        <span>Published</span>
                      </Button>}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill, skillIndex) => <Badge key={skillIndex} className="bg-blue-600 hover:bg-blue-700 text-white">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Certifications</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{cert}</h3>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Create Something Amazing!</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Get in Touch Section */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                    <p className="text-lg font-semibold text-gray-900">mathurgaurav1742@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                    <p className="text-lg font-semibold text-gray-900">+91 9043075952</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/gaurav-mathur-56759924b/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:underline">
                      Gaurav Mathur
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">GitHub</p>
                    <a href="https://github.com/GitGaurav1" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-600 hover:underline">
                      Username - GitGaurav1
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                    <p className="text-lg font-semibold text-gray-900">Noida, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Send a Message Section */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">Name</Label>
                  <Input id="name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name" required />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">Subject</Label>
                  <Input id="subject" value={formData.subject} onChange={e => setFormData({
                  ...formData,
                  subject: e.target.value
                })} className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="What's this about?" required />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">Message</Label>
                  <Textarea id="message" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="min-h-[120px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none" placeholder="Tell me about your project or idea..." required />
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Gaurav Mathur</h3>
            <p className="text-gray-400 mb-6">Building intelligent solutions, one project at a time.</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/in/gaurav-mathur-56759924b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/GitGaurav1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">&copy; 2025 Gaurav Mathur | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;