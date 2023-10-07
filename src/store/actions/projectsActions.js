export const FETCH_PROJECTS = 'FETCH_PROJECTS';
import proje1 from '../../assets/image/proje1.png'
import proje2 from '../../assets/image/proje2.png'
import proje3 from '../../assets/image/proje3.png'
import proje4 from '../../assets/image/proje4.png'
import all from '../../assets/image/all.png'
export const fetchProjects = () => {
    
    const projects = [
        {
            image:proje1,
            name:"Prague",
            to:"https://pragure.000webhostapp.com/"
        },
        {
            image:proje2,
            name:"Pixelcurve",
            to:"https://pixelcurveeeee.000webhostapp.com/"
        },
        {
            image:proje3,
            name:"Chips",
            to:"https://chips-two.vercel.app/"
        },
        {
            image:proje4,
            name:"UsePopcorn",
            to:"https://usepopcorn-two.vercel.app/"
        },
        {
            image:all,
            name:"All",
            to:"https://github.com/abraham171996"
        },
    ];
  
    return {
      type: FETCH_PROJECTS,
      payload: projects,
    };
  };