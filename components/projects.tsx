
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"
import { motion } from "framer-motion"
export function Projects() {
const projects = [
{
title: "VERITAS",
description: "Blockchain-based document attestation and verification.",
image: "assets/aron-visuals-bZZp1PmHI0E-unsplash.jpg",
link: "https://veritas-green.vercel.app/",
},
{
title: "Trustwork",
description: "A decentralized freelancing platform powered by blockchain.",
image: "assets/mitchell-luo-FWoq_ldWlNQ-unsplash.jpg",
link: "#",
},
{
title: "MediConnect",
description: "Web app for booking appointments at nearby hospitals.",
image: "assets/p1.jpeg",
link: "#",
},
{
title: "iluvcoofee Backend",
description: "A backend system for the iluvcoofee website, dockerized for deployment.",
image: "assets/signed.png",
link: "#",
},
{
title: "Custom QnA System",
description: "Azure AI-powered question-answering system for optimized search and retrieval.",
image: "assets/p4.jpeg",
link: "#",
},
]

return (
<div id="projects" className="flex flex-col items-center space-y-1 px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-white mt-16 mb-8">PROJECTS</h2>

{/* Updated grid layout to display two cards per row */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
{projects.map((project, index) => (
<motion.div
key={index}
initial="hidden"
whileInView="visible"
viewport={{ once: false, amount: 0.2 }}
variants={{
hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}}
>
<CardContainer className="w-full">
<CardBody className="bg-black relative group/card border-2 border-gray-600 w-full rounded-xl p-6 transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]">
<CardItem translateZ="50" className="text-xl font-bold text-white">
{project.title}
</CardItem>
<CardItem as="p" translateZ="60" className="text-gray-300 text-sm mt-2">
{project.description}
</CardItem>
<CardItem translateZ="100" className="w-full mt-4">
<Image
src={project.image || "/placeholder.svg"}
height={240}
width={384}
className="h-48 w-full object-cover rounded-lg border border-gray-600"
alt={project.title}
/>
</CardItem>
<div className="flex justify-between items-center mt-6">
{project.link !== "#" ? (
<CardItem
translateZ={20}
as={Link}
href={project.link}
target="_blank"
className="px-4 py-2 rounded-xl text-xs font-normal text-white"
>
Visit Now →
</CardItem>
) : (
<span className="px-4 py-2 rounded-xl text-xs font-normal text-gray-500 cursor-not-allowed">
Visit Now
</span>
)}
</div>
</CardBody>
</CardContainer>
</motion.div>
))}
</div>
</div>
)
}