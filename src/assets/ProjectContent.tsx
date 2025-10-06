import Pic1 from "./Picture1.png";
import Pic2 from "./Picture2.png";
import Pic3 from "./Picture3.png";
import Pic4 from "./Picture4.png";
import Pic5 from "./Picture5.png";
import Pic6 from "./Picture6.jpg";
import Pic7 from "./Picture7.png";
import Pic8 from "./Picture8.png";
import Pic9 from "./Picture9.png";
import Pic10 from "./Picture10.jpg";
import Pic11 from "./Picture11.jpg";
import Pic12 from "./Picture12.png";
import Pic13 from "./Picture13.png";
import Pic14 from "./Picture14.png";
import Pic15 from "./Picture15.png";
import Pic16 from "./Picture16.png";
import Pic17 from "./Picture17.png";
import Pic18 from "./Picture18.png";
import Pic19 from "./Picture19.png";
import Pic19a from "./Picture19a.jpg";
import Pic20 from "./Picture20.png";
import Pic21 from "./Picture21.png";
import Pic22 from "./Picture22.png";
import Pic23 from "./Picture23.jpg";
import Pic24 from "./Picture24.png";
import Pic25 from "./Picture25.png";
import Pic26 from "./Picture26.jpg";
import Pic27 from "./Picture27.jpg";
import Pic28 from "./Picture28.jpg";
import Pic29 from "./Picture29.png";
import Pic29a from "./Picture29a.png";
import Pic30 from "./Picture30.png";
import Pic31 from "./Picture31.png";
import Pic32 from "./Picture32.jpg";
import Pic33 from "./Picture33.png";
import Pic33a from "./Picture33a.png";
import Pic34 from "./Picture34.png";
import Pic35 from "./Picture35.jpg";
type TimelinePhoto = {
  photo: string;
  title: string;
};

export type Project = {
  title: string;
  subtitle?: string;
  link?: string;
  photos: string[];
  timelinePhotos?: TimelinePhoto[];
  bullets: string[];
  narrative: string;
  type: "work" | "personal";
};

// Example project data
export const workProjects: Project[] = [
  {
    title: "“Palladium” Diagnostic System",
    subtitle: "Cito Medical",
    link: "https://citomedical.com/portfolio/cs-8-palladium/",
    photos: [Pic1, Pic2],
    bullets: [
      "Designed injection-molded housing and snap-fit assemblies",
      "Liaised with PCB/electrical team, spec’d motors & components",
      "Supported prototyping and validation of 20+ functional units",
      "Delivered manufacturable design ready for production",
    ],
    narrative:
      "Led the mechanical design of the “Palladium” diagnostic platform, focusing on the housing, assembly, and manufacturability of injection-molded components. Partnered with industrial design to preserve form factor and user workflow, while integrating electronics and mechanical systems for seamless functionality. Oversaw prototyping, testing, and verification to validate reliability and prepare for scaled manufacturing.",
    type: "work",
  },
  {
    title: "Valve Module for MBARI AUVs",
    subtitle: "Cito Medical",
    photos: [Pic3, Pic4],
    bullets: [
      "Designed valve module for compact integration into AUVs",
      "Developed electro-mechanical actuation for seawater flow control",
      "Optimized design to reduce size without sacrificing performance",
      "Delivered a robust, field-tested system now in operational use",
    ],
    narrative:
      "Developed a compact, electro-mechanically actuated valve module as a drop-in upgrade for MBARI’s autonomous underwater vehicles (AUVs). The redesigned module enabled precise seawater flow control through test instruments while fitting within significantly reduced space constraints. This solution is now deployed in active MBARI missions, supporting reliable underwater research operations.",
    type: "work",
  },
  {
    title: "Gear Train Redesign",
    subtitle: "Oxford Instruments",
    photos: [Pic5, Pic6],
    bullets: [
      "Reconfigured gear train to resolve housing clearance issue",
      "Maintained torque/velocity ratios within 1.6% (spec allowed 3%)",
      "Leveraged off-the-shelf components for cost efficiency",
      "Enabled on-time delivery by keeping project on schedule",
    ],
    narrative:
      "Redesigned a gear train to create clearance for a motor within tight housing constraints while preserving system performance. By sourcing off-the-shelf gears and updating the design, I maintained torque and velocity ratios within 1.6% of the original requirement. This redesign minimized production costs and brought the project back on schedule.",
    type: "work",
  },
];

export const personalProjects: Project[] = [
  {
    title: "Folding Hinge Clamshell",
    photos: [Pic7, Pic8],
    timelinePhotos: [
      { photo: Pic9, title: "Original Part" },
      { photo: Pic10, title: "Sketch" },
      { photo: Pic11, title: "Cardboard Mock-Up" },
      { photo: Pic12, title: "CAD" },
      { photo: Pic13, title: "3D Printed Parts" },
      { photo: Pic14, title: "Assembilng Parts" },
      { photo: Pic15, title: "Final Product" },
    ],
    bullets: [
      "Developed hinge mechanism to fold legs flat while preserving play area",
      "Sketched and built cardboard mock-ups to validate design points",
      "Created CAD models and assembly in OnShape to check fits and eliminate interference",
      "3D printed parts with PLA and Birch-style wood for strength and aesthetics",
      "Integrated original thumb screw and M6 nut for simple, durable assembly",
      "Result: Easy to fold, use, and install, freeing up 16 sq-ft of living space",
    ],
    narrative:
      "Designed a folding mechanism for a baby play gym to save space in a  small apartment. The hinge allows the legs to fold flat for storage while maintaining 120° spacing when open so the play mat stays securely in place. The project combined careful measurement, CAD modeling, and hands-on prototyping to ensure functionality and aesthetic appeal.",
    type: "personal",
  },
  {
    title: "Faucet Head Scrubber Brush",
    photos: [Pic19, Pic19a],
    timelinePhotos: [
      { photo: Pic21, title: "Prototype Brush Variants" },
      { photo: Pic20, title: "CAD" },
      { photo: Pic16, title: "Final Product angle 1" },
      { photo: Pic17, title: "Final Product angle 2" },
      { photo: Pic18, title: "Final Product angle 3" },
    ],
    bullets: [
      "Created flexible, one-piece scrubber brush that snaps onto faucet head",
      "Optimized brush geometry for “soft-yet-stiff” performance",
      "Designed relief holes for inner and outer water sprayers",
      "Conducted iterative testing using calipers and 3D printed prototypes",
      "Final parts printed in TPU 90A for durability and flexibility",
      "Result: Efficient, secure, and enjoyable kitchen tool",
    ],
    narrative:
      "Redesigned a kitchen faucet to integrate a flexible scrubber brush, eliminating the need to switch between a faucet head and a separate brush. The one-piece design flexes into tight crevices while maintaining enough stiffness to remove stubborn residue. Through iterative testing and 3D printing, the final design provides a tight, secure fit and delivers an efficient, fun, and practical tool for daily use.",
    type: "personal",
  },
  {
    title: "Under-the-Sink Bin Bracket",
    photos: [Pic22],
    timelinePhotos: [
      { photo: Pic23, title: "Calculations" },
      { photo: Pic24, title: "Design Input Table" },
      { photo: Pic25, title: "CAD" },
      { photo: Pic22, title: "3D Printed Parts" },
      { photo: Pic27, title: "Final Product outside view" },
      { photo: Pic26, title: "Final Product - no bin" },
      { photo: Pic28, title: "Final Product - with bin" },
    ],
    bullets: [
      "Created bracket using existing hook receivers to lift compost bin off cabinet floor",
      "Designed snap-fit buckle connection for multi-piece 3D printing",
      "Applied stress analysis to optimize stiffness and prevent creep under load",
      "3D printed parts in PLA Matte (Black) for strength and aesthetics",
      "Result: Bin is easily accessible, secure, and minimally visible when cabinet is closed",
    ],
    narrative:
      "Designed a bracket to raise a compost bin inside a cabinet, minimizing the need to bend over while holding a child. The bracket presents the bin when the door opens and hides it when closed, while supporting the full load and maintaining minimal wobble. Through measurement, CAD modeling, and stress analysis, the design ensures easy installation, secure attachment, and long-term durability.",
    type: "personal",
  },
  {
    title: "Chair Cupholder",
    photos: [Pic29, Pic29a],
    timelinePhotos: [
      { photo: Pic30, title: "CAD" },
      { photo: Pic31, title: "3D Printed Parts" },
      { photo: Pic32, title: "Final Product" },
    ],
    bullets: [
      "Gathered ergonomic and aesthetic data (reach, color preference, sitting positions)",
      "Measured armrest, water bottle, phone, and AirPods case for precise fit",
      "Designed interference fit with foam compression while preventing fabric damage",
      "Compensated for sag/flex by adding 3° wall angles to achieve level phone surface",
      "3D printed in PLA Matte (White) for clean aesthetics and durability",
      "Result: Improved nighttime comfort and convenience with swappable design",
    ],
    narrative:
      "Designed a multifunctional cupholder to improve comfort while breastfeeding at night. It securely holds a water bottle, provides a stable landing pad for a phone, and keeps AirPods within reach. The cupholder easily swaps between armrests depending on feeding position, while blending with the chair’s aesthetics.",
    type: "personal",
  },
  {
    title: "Fruit washer",
    photos: [Pic33a, Pic35],
    timelinePhotos: [
      { photo: Pic33, title: "CAD" },
      { photo: Pic34, title: "3D Printed Parts" },
      { photo: Pic35, title: "Final Product" },
    ],
    bullets: [
      "Recreated and scaled the bowl from a reference video to fit 3D printer volume (180x180x180mm)",
      "Used sweep extrusions and cuts in OnShape CAD to model curved, functional geometry",
      "Optimized design for smooth swirling action and easy draining",
      "3D printed using BambuLab A1 Mini and PLA Matte (White) with first print working perfectly",
      "Focused on making the design both functional and visually engaging",
    ],
    narrative:
      "Designed a fruit washing bowl that naturally circulates water to clean fruit more efficiently. The bowl’s shape guides faucet water to move fruit around, making the task easier and more engaging. The final design worked perfectly and demonstrates clever, playful, and functional design thinking.",
    type: "personal",
  },
];
