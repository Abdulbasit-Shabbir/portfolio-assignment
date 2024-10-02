import Header from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="portfolio">
      <Header />
      <div className="content">
        <h1>Hi,</h1>
        <h2>I'M ABDUL BASIT</h2>
        <p>
        a front-end web developer passionate about creating interactive, user-friendly web applications. With skills in HTML, CSS, and TypeScript, I aim to build responsive and accessible websites that offer a seamless user experience. <br />
        <h2>SKILLS</h2>
        <p><b>HTML5:</b> Crafting well-structured, semantic markup to create the foundation for dynamic </p>
        <p><b>CSS3:</b>Styling websites with modern layouts, animations, and design principles for both desktop and mobile platforms.</p> 
       <p><b>TypeScript:</b>Writing clean, scalable, and type-safe JavaScript code to enhance website functionality.</p>
 
        </p>
      </div>
      <Footer />
    </div>
  );
}
