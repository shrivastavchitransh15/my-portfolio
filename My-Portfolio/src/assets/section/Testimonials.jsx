import { motion } from "framer-motion";


import m1 from "../m1.PNG";
import m2 from "../m2.PNG";
import w1 from "../w1.PNG";
import w2 from "../w2.PNG";

const testimonials = [
  {
  name: "Yash Sahu",
  role: "Software Engineer",
  review:
  "Chitransh is passionate about development and has a great eye for detail. His dedication to learning and building modern applications really stands out.",
  image: m1,
  },
  {
  name: "Sarthak Dubey",
  role: "Managing Director",
  review:
  "Working with Chitransh was a great experience. He values clean design, responsive interfaces, and creating smooth user experiences.",
  image: w1,
  },
  {
  name: "Domnic Anthony",
  role: "Co-Owner & Director",
  review:
  "Chitransh approaches challenges with curiosity and a willingness to learn. His focus on improving his skills and turning ideas into practical solutions is impressive.",
  image: m2,
  },
  {
  name: "Krishna Raj Shrivastava",
  role: "Creative Director",
  review:
  "Chitransh is enthusiastic about modern web technologies and enjoys transforming ideas into interactive digital experiences. His commitment to learning and improving is admirable.",
  image: w2,
  },
  ];
  

export default function Testimonials(){
  return(
    <section id="testimonials" className="relative m-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
     <motion.h2 className="text-4xl font-bold mb-16"
     initial={{opacity:0 , y: -50}}
     animate={{opacity:1 , y:0}}
     transition={{duration:0.6}}
     >
      What People Say
      </motion.h2>  
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t,i) => (
          <motion.div
           key={t.name +1}
           initial={{opacity:1 ,y:50}}
           whileInView={{opacity:1 ,y:0}}
           transition={{duration:0.5 , delay: i*0.2}}
           viewport={{once:true}}
           className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transition duration-500
           hover:scale-105 hover:-rotate-1">
            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"  
            loading="lazy"/>
            <p className="text-gray-200 italic mb-4">
              {t.review}
            </p>
            <h3 className="text-lg font-semibold">
              {t.name}
            </h3>
            <p className="text-sm text-gray-400">
              {t.role}
            </p>
          </motion.div>
        ))}
        </div> 

    </section>
  )
}