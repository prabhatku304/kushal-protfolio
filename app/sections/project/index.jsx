import { domAnimation, LazyMotion } from "framer-motion";

import { HeadingDivider } from "components";

const data = [
	{
		title: "Project-Customer Value Optimization",
		work_exp: [
			' ⁠Engineered real-time fraud detection system using Logistic Regression for finance dataset targeting AMEX credit card, reduced fraud rate by 12% with thorough documentation and re-evaluation with professor.',
			'Led the final presentation with ad-hoc analysis in credit insurance, leveraged fraud detection skills to optimize and mitigate risks.',
			"Engineered a data-driven approach focused on understanding consumer preferences and behavior patterns for Abbott Nutrition's healthcare products and explained it to the stakeholders."
		]
	},
	{
		title: "Project-Truck Fleet Management",
		work_exp: [
			' Directed a data-driven initiative to analyze driver behavior and mitigate accident risks among large commercial trucks in California. Implemented targeted measures resulting in a 25% reduction in accident frequency within the first year, to focus on enhancing road safety.',
			'Applied Decision tree based ensembled model to assess risk factors associated with drivers, including events, total distance traveled, average speed, and mileage. Achieved a notable 30% decrease in high-risk driving behaviors among identified drivers, contributing to decrease in accidents statewide.',
			'Developed a real-time big data analytics platform for California truck emissions using Apache Spark and Hadoop, leading to a 20% reduction in emissions violations.'
		]
	}
]
export function ProjectsSection() {
	
	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Academic Projects" />
				
				<div className="my-8">
					{data.map((ele,i)=>(
						<div className="" key={i}>
								<div className="text-[28px] ">{ele.title}</div>
					<ul style={{listStyle:'disc'}} className="px-10 py-1">
						{ele.work_exp.map((exp,ind)=>(
							<li key={ind} className="my-2">{exp}</li>
						))}
						
					</ul>
						</div>
					))}
				
				</div>

				
			</section>
		</LazyMotion>
	);
}
