
import { useState } from "react";
import { ArrowDown, ArrowUp, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "Cyberbullying Threat Analysis",
      description: "Analyzes text & images for bullying, sends reports to parents.",
      tech: ["Flask", "Tesseract", "VADER", "Maps API"],
      type: "AI/ML Project"
    },
    {
      title: "Driver Drowsiness Detection",
      description: "Alerts drivers and suggests rest stops when drowsiness is detected.",
      tech: ["OpenCV", "Google Maps", "AI Speech Recognition"],
      type: "Computer Vision"
    },
    {
      title: "Parkinson's Detection",
      description: "ML model for early detection of Parkinson's using voice features.",
      tech: ["Python", "SVM", "Biomedical Data"],
      type: "Healthcare AI"
    },
    {
      title: "Rock, Paper, Scissors Game",
      description: "Gesture-recognition game using computer vision.",
      tech: ["Python", "OpenCV", "ML"],
      type: "Fun Project"
    }
  ];

  const skills = {
    "Languages": ["C++", "Python", "HTML", "CSS", "JavaScript"],
    "Frameworks": ["React"],
    "Tools": ["MySQL", "DBMS", "Tesseract", "OpenCV"],
    "Concepts": ["Data Structures", "OOPs", "Cloud Computing", "ML"]
  };

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Google Cloud Digital Leader",
    "IBM Data Science Certificates"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-20 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
        
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600">Gaurav Mathur</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Final Year CSE Student | Aspiring Software Developer & ML Enthusiast
            </p>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
              I build intelligent systems that solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-600" />
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
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a responsible and committed final-year B.Tech student at VIT Vellore, passionate about developing impactful tech solutions. I specialize in AI, ML, and full-stack web development, with experience in real-world projects from driver safety to disease prediction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-700">Noida, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <span className="text-gray-700">mathurgaurav1742@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <a href="#" className="text-blue-600 hover:underline">LinkedIn Profile</a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Sky Scanner</h4>
                  <p className="text-blue-600 font-medium">Front-End Software Engineer Intern</p>
                  <p className="text-gray-600 mt-2">Developed a flight scheduling UI with modern JS & CSS.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">HEARTS-UHET Club</h4>
                  <p className="text-blue-600 font-medium">Poster Designer</p>
                  <p className="text-gray-600 mt-2">Led visual design efforts for social awareness events.</p>
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
            <p className="text-xl text-gray-600 mt-6">Innovative solutions that make a difference</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {project.type}
                    </Badge>
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
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-blue-600 hover:bg-blue-700 text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6">Have a project in mind? Let's discuss how we can work together.</p>
          </div>
          
          <Card className="p-8 border-0 shadow-xl bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="mt-1 min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Gaurav Mathur</h3>
            <p className="text-gray-400 mb-6">Building the future, one line of code at a time.</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">&copy; 2025 Gaurav Mathur | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
