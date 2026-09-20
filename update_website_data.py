import re

with open('client/src/data/websiteData.js', 'r') as f:
    content = f.read()

# COMPANY INFO
content = content.replace('tagline: "Design. Develop. Learn. Grow."', 'tagline: "Creative Design & Web Solutions."')
content = content.replace('subtitle: "Creative Design Agency & Technology Training Institute"', 'subtitle: "Professional Creative Design Agency"')
content = content.replace('shortDesc: "We create digital experiences, build web solutions and train the next generation of tech professionals."', 'shortDesc: "We create digital experiences, build modern web solutions, and design high-quality graphics for businesses."')
content = content.replace('address: "142/B, Crosscut Road, Gandhipuram, Coimbatore, Tamil Nadu 641012, India"', 'address: "Gandhipuram, Coimbatore, Tamil Nadu"')
content = content.replace('phone: "+91 98765 43210"', 'phone: "7806888047"')
content = content.replace('whatsapp: "+919876543210"', 'whatsapp: "917806888047"')
content = content.replace('email: "hello@avinzcreatives.in"', 'email: "avinzcreatives@gmail.com"')

# STATS
content = content.replace('label: "Students Trained"', 'label: "Happy Clients"')
content = content.replace('desc: "Trained across MERN, UI/UX, and Data Tech"', 'desc: "Trusted by local and global businesses"')
content = content.replace('label: "Practical Learning"', 'label: "Client Satisfaction"')
content = content.replace('desc: "Real-world project-driven curriculum"', 'desc: "Top-notch quality in every design"')

# CORE SERVICES
content = re.sub(
    r'id: "training-programs".*?linkUrl: "/courses"\n\s+}',
    '''id: "branding",
    title: "Branding & Print Design",
    icon: "bi-printer-fill",
    badgeColor: "#f3e8ff",
    iconColor: "#9333ea",
    features: [
      "Cafe Menu Card Design",
      "Restaurant Menu Design",
      "Food Posters",
      "Business Cards",
      "Promotional Posters",
      "Brochures & Flyers",
      "Stationery Design"
    ],
    linkText: "View All Services",
    linkUrl: "/services"
  }''',
    content,
    flags=re.DOTALL
)

# WHY CHOOSE US
content = content.replace('title: "Expert Mentors"', 'title: "Expert Designers"')
content = content.replace('desc: "Industry-experienced trainers & designers"', 'desc: "Industry-experienced creative professionals."')
content = content.replace('title: "Hands-on Learning"', 'title: "Custom Solutions"')
content = content.replace('desc: "Practical projects for real-world experience."', 'desc: "Tailored designs matching your brand vision."')
content = content.replace('title: "Portfolio Ready"', 'title: "High Quality"')
content = content.replace('desc: "Build a strong portfolio that gets you noticed."', 'desc: "Pixel-perfect, modern and professional outputs."')
content = content.replace('title: "Career Support"', 'title: "Dedicated Support"')
content = content.replace('desc: "Placement assistance & career guidance."', 'desc: "Clear communication and prompt assistance."')
content = content.replace('desc: "High-quality services and training at best prices."', 'desc: "High-quality services at competitive prices."')

# ALL SERVICES
content = re.sub(
    r'id: "mern-stack".*?tools: \["MongoDB", "Express", "React", "Node\.js", "Redux", "Docker"\]\n\s+}',
    '''id: "print-design",
    title: "Print & Menu Design",
    icon: "bi-printer-fill",
    category: "Print",
    desc: "High-quality print ready designs including cafe menus, restaurant cards, and food posters.",
    items: [
      "Cafe Menu Card Design",
      "Restaurant Menu Design",
      "Food Posters",
      "Promotional Posters",
      "Business Cards"
    ],
    tools: ["Adobe Photoshop", "Illustrator", "InDesign", "CorelDRAW"]
  }''',
    content,
    flags=re.DOTALL
)

# COURSES BLOCK
content = re.sub(
    r'// ============================================================================\n// 8 COURSES FROM THE COURSES PAGE MOCKUP\n// ============================================================================\nexport const COURSES_PAGE_DATA = \[.*?export const COURSES_DATA = COURSES_PAGE_DATA;\n',
    '',
    content,
    flags=re.DOTALL
)

# TESTIMONIALS
content = re.sub(
    r'export const TESTIMONIALS = \[.*?\];',
    '''export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sample Review 1",
    role: "Cafe Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Avinz Creatives designed our cafe menu and the final output looked clean and professional. The pricing was also affordable."
  },
  {
    id: 2,
    name: "Sample Review 2",
    role: "Restaurant Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Got our restaurant menu redesigned and the final design came out neat and easy to read. They understood our requirements well."
  },
  {
    id: 3,
    name: "Sample Review 3",
    role: "Small Business Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote: "We needed promotional creatives for our business. The designs were simple, attractive and matched what we had in mind."
  },
  {
    id: 4,
    name: "Sample Review 4",
    role: "Business Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    quote: "Got a logo and a few branding creatives designed for our business. The overall design was clean and professional."
  },
  {
    id: 5,
    name: "Sample Review 5",
    role: "Local Business Owner",
    company: "",
    rating: 0,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "Avinz Creatives helped us with social media creatives for our business. Good design quality and reasonable pricing."
  }
];''',
    content,
    flags=re.DOTALL
)

# TEAM & PURPOSE & VALUES
content = content.replace('role: "Senior UI/UX Designer & Mentor"', 'role: "Senior UI/UX Designer"')
content = content.replace('role: "MERN Stack Specialist & Trainer"', 'role: "Web Developer"')
content = content.replace('role: "Data Science & AI Mentor"', 'role: "Graphic Designer"')

content = content.replace('desc: "To deliver creative digital solutions and practical training that inspire growth and create opportunities."', 'desc: "To deliver creative digital solutions and high-quality designs that inspire growth and elevate brands."')
content = content.replace('desc: "To become a trusted global brand in design services and technology education."', 'desc: "To become a trusted global brand in design services."')
content = content.replace('desc: "Your success is our goal. We are with you from learning to career growth."', 'desc: "Your success is our goal. We partner with you to achieve your business objectives."')

content = content.replace('desc: "We promote continuous learning, practical projects, and real-world skills."', 'desc: "We work closely with clients to ensure their vision is realized perfectly."')
content = content.replace('title: "Learning"', 'title: "Collaboration"')
content = content.replace('icon: "bi-book-half"', 'icon: "bi-people-fill"')
content = content.replace('desc: "We value honesty, transparency, and trust in all our client and student relationships."', 'desc: "We value honesty, transparency, and trust in all our client relationships."')

with open('client/src/data/websiteData.js', 'w') as f:
    f.write(content)
