export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with learning new Technologies",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Real-Estate managing Website",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "This Portfolio",
      des: "This portfolio leverages cutting-edge technologies to create a unique, interactive experience.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/nyahav/Portfolio-NextJS",
    },
    {
      id: 2,
      title: "Given'Take - Social network App",
      des: "By connecting people who need help with those willing to provide it, creating communities through acts of kindness.",
      img: "/h2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/nyahav/GiveNTake",
    },
    {
      id: 3,
      title: "E2E encrypted client-server model",
      des: "It leverages Socket and Pycryptodome libraries to build secure communication.",
      img: "/h3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/nyahav/E2E-encrypted-client-server-model",
    },
    {
      id: 4,
      title: "Animated Path finder",
      des: "Showcase popular pathfinding like A*, Dijkstra's, BFS, and DFS work on a visual grid.",
      img: "/h4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/nyahav/PathFinder-python",
    },
  ];
  
  export const testimonials = [
    {
      quote:"I remember when he was just a kid, staying up late, tapping away on that old computer. I thought he was playing games, but turns out he was chasing his dream to become a software wizard! I always said he’d be successful, even if it meant I had to keep bringing him snacks at 3 a.m. ",
      name: "Miriam Nir",
      title: "Yahav's mother",
      img: "/mom.svg",
    },
    {
      quote:"He doesn’t just think outside the box—he reprogrammed the box, optimized it, and then sold it as a service. His approach is a perfect fusion of simplicity and brilliance. If I were still around, I’d definitely want to steal, I mean, ‘borrow’ a few of his ideas!",
      name: "Steve Jobs",
      title: "CEO Apple Computers Inc",
      img: "/stevejobs.svg",
    },
    {
      quote:"I’ve seen many developers, but his way of creating solutions is like running Windows in safe mode—no fluff, just focus. He thinks like a cloud architect but codes like he's still having fun in his garage. I wouldn’t be surprised if Microsoft called him one day… and asked for advice.",
      name: "Satya Nadella",
      title: "CEO of Microsoft",
      img: "/satya.svg",
    },
    {
      quote: "Yahav is the kind of developer who could probably debug the Matrix if given enough coffee. His work ethic is like Facebook’s algorithm—constantly evolving and always making an impact. If I were building Facebook today, I’d probably hire him to fix all those features people keep complaining about. Don’t miss out on the chance to have Yahav on your team... before the Metaverse tries to steal him!",
      name: "Mark Zuckerberg",
      title: "Founder & CEO of Meta",
      img: "/Mark_Zuckerberg.svg",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Bezeq",
      img: "/Bezeq.svg",
      //nameImg: "/bezeqName.svg",
    },
    {
      id: 2,
      name: "HRSignal",
      img: "/hrsignalLogo.svg",
      //nameImg: "/HRSignalName.svg",
    },
    {
      id: 3,
      name: "CheckPoint",
      img: "/CHKP.svg",
      //nameImg: "/checkPointName.svg",
    },
    {
      id: 4,
      name: "Github",
      img: "/githubLogo.svg",
      //nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "Open Source",
      img: "/openSource.svg",
      //nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "BigData Analyst",
      desc: "Contributed to the development of data-driven applications using Python and BigQuery SQL, improving data processing efficiency.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "System Administrator & NOC",
      desc: "Monitored Linux and network infrastructure. Utilized scripting languages such as Python and Bash to streamline operations. Led incident response and root cause analysis, minimizing downtime.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Frontend Developer Voluntering Project",
      desc: "Developed  user-facing features using modern frontend technologies such as ReactJS,MongoDB and more.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Technical Customer Represntive",
      desc: "Solved problems in a smooth and efficient way, establish relations with customers and teach my co-workers how to use technical software such as CRM and Monday.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/nyahav",
    },
    {
      id: 2,
      img: "/link.svg",
      link:"www.linkedin.com/in/nir-yahav",
    },
    {
      id: 3,
      img: "/download.svg",
      download:"/YAHAVNIR.pdf",
    },
  ];