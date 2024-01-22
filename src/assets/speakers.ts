export interface ISpeaker {
  name: string
  language?: string
  type: string
  jobTitle?: string
  organization?: string
  image: string
  shortBio: string
}

export const keynoteSpeakers: ISpeaker[] = [
  {
    name: 'Lukasz Langa',
    language: 'English',
    type: 'Keynote',
    jobTitle: 'CPython Developer in Residence',
    image: 'https://ik.imagekit.io/p9bsqmrho/landing/tr:w-300,h-300,fo-face,z-0.7,r-max/lukasz.jpg',
    shortBio:
      'CPython Developer in Residence, Python 3.8 release manager, original creator of Black, pianist, dad. Likes analog modular synthesizers, immersive single-player role-playing games (Fallout, Elder Scrolls), and single malt Scotch whisky.',
  },
  {
    name: 'Naomi Ceder',
    language: 'English',
    type: 'Keynote',
    jobTitle: 'Author of Quick Python Book and Ex-chair of Python Software Foundation',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Naomi_Ceder.jpg',
    shortBio: `Naomi Ceder earned a Ph.D in Classics several decades ago, but switched from ancient human languages to computer languages sometime in the last century. Since 2001, she has been learning, teaching, writing about, and using Python.  
  Naomi is the author of The Quick Python Book, and  a past chair of the Python Software Foundation, and in 2022 became the seventh person selected to recieve the PSF Distinguished Service Award. A founder of Trans*Code, a hackday centered on the trans and non-binary community, she also speaks internationally about the Python community and inclusion and diversity in technology in general.  
  Now that she's (mostly) retired, Naomi enjoys sketching, reading detective novels in Spanish and Portuguese, and playing the guitar.`,
  },
  {
    name: 'Anthony Shaw',
    language: 'English',
    type: 'Keynote',
    jobTitle: 'Developer Advocate',
    organization: 'Microsoft',
    image: 'https://ik.imagekit.io/p9bsqmrho/keynote/tr:w-300,h-300,fo-face,z-0.7,r-max/anthony.png',
    shortBio:
      'Anthony Shaw is from Sydney, Australia and is a contributor to many open-source communities. He runs and contributes to several popular open-source tools for DevOps, Security, Automation, and Code Quality. Anthony been recognized for his contribution to open source, including as Fellow of the Python Software Foundation. Anthony runs a Python blog and YouTube channel and has recently published a book on the Python compiler.',
  },
  {
    name: 'Chia-liang Kao',
    language: 'English',
    type: 'Keynote',
    jobTitle: 'CEO',
    organization: 'InfuseAI',
    image: 'https://ik.imagekit.io/p9bsqmrho/landing/tr:w-300,h-300,fo-face,z-0.7,r-max/chia-liang-kao.png',
    shortBio: `clkao (Chia-liang Kao) has been an open source software developer since 2000. He believes that good collaboration model and tools drive innovation.  
  In 2013, he created SVK, a distributed version control system that helps developers collaborate. He co-founded the g0v.tw community in 2012, advocating information transparency and digital-activism through open source model. g0v.tw was awarded as "Digital Communities: Award of Distinction" by Prix Ars Electronica 2018.  
  He started InfuseAI in 2018 to enable data scientists to thrive, and to help wider adoption of AI across industries.`,
  },
]

export const workshopSpeakers: ISpeaker[] = [
  {
    name: 'Jozsef Csaba Stempel',
    language: 'English',
    type: 'Workshop',
    jobTitle: 'Freelancer programmer',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Jozsef%20Csaba%20Stempel.png',
    shortBio:
      "I'm a programming enthusiast with a BSc in Computer Science, deeply passionate about Python and science. I derive joy from pushing my boundaries and expanding my introverted programmer persona by helping others. My primary interests revolve around backend programming, artificial intelligence, and genetic algorithms.",
  },
  {
    name: 'Aby M Joseph',
    language: 'English',
    type: 'Workshop',
    jobTitle: 'Product Engineer',
    organization: 'UST',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Aby%20M%20Joseph.jpg',
    shortBio: `Aby is a Product Engineer at UST working in the travel domain. With a keen eye for detail and a desire to improve, he is currently exploring more on the Python microservices and the GraphQL ecosystem.  
  Aby has been a speaker at several Python conferences and remains actively involved in the Trivandrum Python Community's activities. He also has experience in resolving various business problems by combining purpose-led research and digital technology innovation with rapid prototyping.`,
  },
  {
    name: 'Vishrut Kohli',
    type: 'Workshop',
    jobTitle: 'Senior Software Engineer.',
    organization: 'Indian grocery ecommerce',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Vishrut_Kohli.jpeg',
    shortBio:
      "I am Vishrut, a 26-year-old Senior Software Engineer at one of India's most popular grocery e-commerce platforms. My Python adventure started back in college, from tinkering with a Raspberry Pi server to building a data center, and now I'm crafting highly efficient software for our organization. I live for building high-performance software, and I'm all about sharing my journey and learnings with fellow tech enthusiasts.",
  },
  {
    name: 'Pitchayut Chitsinpchayakun',
    type: 'Workshop',
    jobTitle: 'Software Engineer',
    organization: 'Thoughtworks',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Pitchayut%20Chitsinpchayakun.jpg?updatedAt=1702345630072',
    shortBio:
      "Pitchayut formerly worked as a machine learning engineer, and is currently a software / data engineer at Thoughtworks. Even though he has not always worked in a data-related project, he has always kept his interests in Data and AI and always been following the progress of the Data and AI field.",
  },
]

export const speakers: ISpeaker[] = [
  {
    name: 'Prem Chotepanit',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Financial Data Analyst',
    organization: 'Thairath Group',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Prem%20Chotepanit_cropped.jpg',
    shortBio:
      "Ex data engineer and data scientist, and currently I'm a financial data analyst who enjoy coding with Python",
  },
  {
    name: 'Mark Hollow',
    language: 'English',
    type: 'Conference',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Mark%20Hollow.jpg',
    shortBio:
      'Mark has worked in software, data and infrastructure engineering for many years. Originally from the UK, he lived in Thailand for a decade where he developed an interest in the Thai language and history. A keen Python programmer, Mark was a member of the organising team for the first PyCon Thailand in 2018.',
  },
  {
    name: 'Aniruddha Adhikary (Ani)',
    type: 'Conference',
    jobTitle: 'Software Engineer',
    organization: 'GovTech Singapore',
    image:
      'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Aniruddha%20Adhikary%20(Ani).jpg',
    shortBio:
      'A Software Engineer with roots from the startup scene. Now, safely integrating AI to empower the Singapore Public Service. Contributor to open-source communities: Mozilla, Android and Linux through developer engagement, code contributions and translations. Obsessed with Personal Finance, Behavioural Economics and Automation!',
  },
  {
    name: 'Yael Daihes',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Head of Machine Learning',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Yael%20Daihes.jpg',
    shortBio:
      "Yael Daihes is the Head of Machine Learning for SignalPET, and a data science leadership, strategy and research consultant helping businesses from all sectors build and manage successful DS/AI organizations and projects. Starting with an 8 years service in the Israeli defense forces, Yael pursued a successful data science career within the cybersecurity sector that included heading major R&D Data Science organizations both in the defense forces as well as in the private sector (the most recent of which sold for 560M$). Yael holds a BS.c in computer science from the Hebrew University and a MS.c in Software and Information systems engineering from Ben Gurion university with a specialty in machine learning and big data systems. In her spare time she volunteers with “Baot”, Israel's largest “females in R&D” community, managing one of their programs as well as mentoring fellow females in the industry.",
  },
  {
    name: 'Lina Katayose',
    type: 'Conference',
    jobTitle: 'PyCon APAC 2023',
    organization: 'PyCon JP',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Lina%20Katayose.jpg',
    shortBio: `I started a company related to GIS in Japan and am currently working there. I like airplanes.
    I was the chairperson of PyCon APAC 2023.
    I attended PyCon US for the first time in 2018 and regularly attend PyCons in Thailand, Taiwan, and other Asian countries.
    I am also a staff member of PyLadies Tokyo, helping to organize and manage the event.
    In 2018, we supported the launch of PyLadies Bangkok and expanded the opportunities to interact with each other. Thanks to this, I was able to meet many Asian Python community activists.`,
  },
  {
    name: 'Twin Panitsombat',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Software Stylist',
    organization: 'ODDS',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/twin.png',
    shortBio:
      'An adept software engineer, accomplished author, and engaging speaker in the realm of Software Development, My expertise spans back to 2000. Throughout my career, I have consistently pursued improved methodologies in software development, dedicating significant time as a journeyman in search of more effective approaches.',
  },
  {
    name: 'Supasate Vorathammathorn',
    type: 'Conference',
    jobTitle: 'Computer Engineer Student',
    organization: 'KMUTT',
    image:
      'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Supasate%20Vorathammathorn.jpg',
    shortBio: `Supasate is a dedicated developer and engineer who harnesses the power of the Python programming language to tackle diverse challenges. He firmly believes that simplicity and fostering a strong community in Python can empower individuals who are not traditionally developers to utilize this programming language effectively for problem-solving. While Python may pose time-processing challenges compared to other programming languages, Supasate showcases its versatility by replacing various libraries to solve a wide range of tasks efficiently.  
    As a prominent contributor to the tech ecosystem, Supasate proudly serves as one of the three Gold Microsoft Learn Student Ambassadors in Thailand. In this role, he actively shares knowledge and hosts technical events catering to both seasoned technicians and newcomers. His passion lies in optimizing and enhancing code for improved speed and efficiency.  
    Supasate also runs an influential Quantum Computing [Blog](https://medium.com/@ksupasate) and maintains a vibrant presence on [Facebook](https://www.facebook.com/quantumblueth), where he engages with a diverse audience interested in the fascinating world of quantum computing.`,
  },
  {
    name: 'Kasidis Satangmongkol',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Content Developer',
    organization: 'DataRockie',
    image: 'https://ik.imagekit.io/p9bsqmrho/landing/tr:w-300,h-300,fo-face,z-0.7,r-max/data-rockie.png',
    shortBio:
      'Kasidis has a passion for data and believes that everyone should have the opportunity to learn how to use it. He is a strong advocate for open-source tools and software, and he is always looking for ways to make data science more accessible to people of all backgrounds.',
  },
  {
    name: 'Teerasej Jiraphatchandej',
    language: 'Thai',
    type: 'Conference',
    jobTitle: 'Microsoft AI MVP',
    organization: 'Nextflow.in.th',
    image:
      'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Teerasej%20Jiraphatchandej.jpg',
    shortBio: 'Technology consultant on AI technology, Microsoft AI MVP, and the owner of the 7 cats.',
  },

  {
    name: 'Promphorn Chaichirawiwat',
    type: 'Conference',
    jobTitle: 'Thailand Country Manager',
    organization: 'Thinking Machines Data Science',
    image:
      'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Promphorn%20Chaichirawiwat.JPG',
    shortBio: `As the Country Manager, Mook leads Thinking Machines, a global data science consultancy, in expanding its presence in Thailand. She draws from years of experience in digital and data transformation internationally. Prior to joining Thinking Machines, she worked with Temasek Singapore as a Product Manager for AI and Big Data Products.
    Mook holds a master’s degree with the highest distinction award in Information Systems Management from Carnegie Mellon University and a bachelor’s degree from the Faculty of Engineering, Chulalongkorn University.`,
  },
  {
    name: 'Dima Maharika Dinama',
    type: 'Conference',
    jobTitle: 'Event Organizer',
    organization: 'PyCon Indonesia',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Dima%20Maharika%20Dinama.jpeg',
    shortBio:
      "I'm just a regular person who likes Formula 1, Tech Stuff, and some Python Programming. Contributing in PyCon Indonesia since 2019 and still loving it",
  },
  {
    name: 'Tetsuya Hirata',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Software Engineer',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Tetsuya%20Hirata.jpg',
    shortBio: `My name is Tetsuya Hirata, though I go by "Jesse". I am passionate about addressing challenges within the educational domain and have been utilizing Python as a tool to achieve this. For more insight into my professional journey and accomplishments, I invite you to visit my [LinkedIn profile](https://www.linkedin.com/in/tetsuya-hirata/) and [X account](https://twitter.com/JesseTetsuya). I am eagerly looking forward to engaging with everyone at the conference!`,
  },
  {
    name: 'Nutchanon Ninyawee',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Software Engineer',
    organization: 'Codustry',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Nutchanon%20Ninyawee.jpg',
    shortBio: `🐍 Python enthusiast in his 20s, with expertise in crafting 20+ PyPI libraries. 📚  
    🤔 Passionate about chess ♟️, kayaking 🛶, and meditation 🧘.  
    🎧 Avid follower of PythonBytes 🎙️, ThePrimeagen 💻, and a strong advocate for FastAPI 🚀.`,
  },
  {
    name: 'Chakrit Wichian',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Founder',
    organization: 'PRODIGY 9 Co., Ltd.',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Chakrit%20Wichian.jpg',
    shortBio: 'Software Maker who runs multiple software teams over the years.',
  },
  {
    name: 'Kesia Mary Joies',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Product Engineer',
    organization: 'Strollby (UST)',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Kesia%20Mary%20Joies.jpg',
    shortBio:
      'Kesia Mary Joies is a passionate Python developer, working as a Product Engineer in Strollby, UST. At present, she is focused on developing Strollby - a travel platform that utilises Python microservices with GraphQL backend. She was awarded the Grace Hopper Scholarship for the year 2021, awarded annually to women in Technology, and was also recognised recently as the Top 5 Best Women Outgoing Students from India, conducted by IEEE Pune Section and Hope Foundation India. She has won various hackathons, and has taken various talks and workshops. She was a speaker in PyConf Hyderabad 2022, EuroPython Conference 2023 and PyCon India 2023.',
  },
  {
    name: 'Supaseth Wongondee',
    language: 'Thai',
    type: 'Conference',
    jobTitle: 'Data Scientist',
    organization: 'Nanameue',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Supaseth%20Wongondee.jpg',
    shortBio:
      'An Electrical Engineer by training, a Data Engineer by trade. Currently a Data Scientist at a start-up in Japan. Building data products to help young people connect with other like-minded. An Editor at Weekend Analyst, a football analytics community in Thai language. Contribute to open-source projects in free time. Used to retweet a lot on Twitter when it was good.',
  },
  {
    name: 'Nithiroj Tripatarasit',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Developer',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Nithiroj%20Tripatarasit.jpeg',
    shortBio:
      'I have a background as a developer with experience in Machine Learning and Deep Learning. The Large Language Model (LLM) has captured my attention with its potential to revolutionize application development.  In this exciting journey, LangChain, a robust Python framework, has been a true companion, enabling me to craft LLM applications and test the idea with ease. I would be thrilled to share my knowledge and once again be a part of our fantastic PyCon community.',
  },
  {
    name: 'Abhinand C',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Product Engineer',
    organization: 'UST',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Abhinand%20C.jpg',
    shortBio:
      'Abhinand C is a Product Engineer at the Strollby team in UST, building a travel platform, utlising Python-based GraphQL microservices.\\n\\nBeyond the office, Abhinand actively volunteers with the Kerala Police Cyberdome & Trivandrum Python Community. He also nurtures personal hobby projects and contributes to the open-source community. He even had the privilege of delivering talks at renowned international conferences like PyCon India, EuroPython, and PyConf Hyderabad.',
  },
  {
    name: 'Sanjiban Sengupta',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Software Engineer',
    organization: 'Voltron Data',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Sanjiban%20Sengupta.jpg',
    shortBio: `Sanjiban works at Voltron Data on open-source data engineering, primarily focusing on the development of Apache Arrow, Substrait, and Velox by Meta. He co-created Substrait Fiddle, a tool to prototype, visualize, and share data relational plans based on the Substrait specification.  
    He has been participating in various open-source data (science, engineering, and analytics) development. Previously a Google Summer of Code Developer at CERN-HSF, he was also a CERN Summer Student and continues his association for the development of CERN's ROOT Data Analysis Framework.  
    As a part of Voltron Data, he collaborated with the Meta open-source team for developing PyVelox, particularly implementing the support for Arrow-Velox conversion, complex data types, etc.`,
  },
  {
    name: 'Jean Jordaan',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Technical Process Manager',
    organization: 'ScreenCloud',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Jean%20Jordaan.jpg',
    shortBio:
      "Jean spent 15 years building websites using Plone, an advanced Python-based CMS. Since then, he's been helping to keep the lights on at various Bangkok tech companies. ",
  },
  {
    name: 'Dyland Jay',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Founder',
    organization: 'PretaGov',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/dyland.png',
    shortBio:
      'Founder of PretaGov: Digital Transformation for industries where data security is critical. Long term Plone community member and contributor. Founder of ThaiPy and PyCon Thailand.',
  },
  {
    name: 'Thu Ya Kyaw',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Senior Developer Relations Engineer',
    organization: 'Google',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Thu%20Ya%20Kyaw.jpg',
    shortBio:
      'Thu Ya Kyaw is a Senior Developer Relations Engineer for Google Cloud. At Google, he helps to make learning, developing, deploying, and scaling applications on Google Cloud a delightful experience for everyone. He is also a curious person who enjoys sci-fi, fantasy, and documentaries. He is fascinated by the unknown and the possibilities of other worlds. He often wonders if aliens built the pyramids, or if we live in a simulated world.',
  },
  {
    name: 'Anton Caceres',
    type: 'Conference',
    jobTitle: 'CEO ',
    organization: 'Tech-5',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Anton%20Caceres.jpg',
    shortBio:
      'Python developer and event organizer, running a software agency in Munich. With a history of organizing PyCons and leading the PyMunich meetup, also proud to be a Python Software Foundation fellow. My journey is all about continuous learning and knowledge sharing.',
  },
  {
    name: 'Pongsakorn Songsuroj',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Software Engineer',
    organization: 'DENSO',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Pongsakorn%20Songsuroj.jpg',
    shortBio:
      'Pongsakorn is a dedicated professional who combines innovation with a deep passion for technology. As a software engineer at Denso International Asia with over 6 years of experience in manufacturing, he is the driving force behind cutting-edge IoT platforms and actively contributes to the Python open-source community.',
  },
  {
    name: 'Laetitia Hoquetis',
    language: 'English',
    type: 'Conference',
    jobTitle: 'Head of data intelligence ',
    organization: 'EZ tech',
    image: 'https://ik.imagekit.io/p9bsqmrho/speakers/tr:w-300,h-300,fo-face,z-0.7,r-max/Laetitia%20Hoquetis.jpeg',
    shortBio: `As head of data my role is to deliver actionable insights from a whole ecosystem of data and softwares, to internal and external stakeholders, business and our clients.  
    I transform raw material data to impact the strategy, decision making. Everything is Measurable.`,
  },
]
