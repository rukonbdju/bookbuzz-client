import Contact from "../../components/About/Contact";
import HowItWork from "../../components/About/HowItWork";
import FAQ from "../../components/Common/FAQ";

const About=()=>{
    return(
        <div className="w-4/5 mx-auto">
            <HowItWork></HowItWork>
            <Contact></Contact>
            <FAQ></FAQ>
        </div>
    )
}
export default About;