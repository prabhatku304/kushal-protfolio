import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TECHNOLOGIES } from "../../../constants";

const data = [
	{
		title: "Toyota",
		work_exp: [
			' ⁠Accomplished an innovative product recommendation system for Toyota’s buyers utilizing clustering analysis techniques. This system enabled precise customer segmentation to target upselling and cross-selling strategies effectively, resulting in 15% increase in successful sales conversions.',
			' ⁠Conducted deep dive to uncover trends and correlations to investigate analysis for customer churn, recognized opportunities, and led to implementation of the proposed ideas to lower variable costs by 20%, improved operational efficiency.',
			' ⁠Developed dashboards utilizing Tableau and SQL for Toyota’s mobility team that highlighted driver behavior across regions, violation types among drivers and introduced quality checks through scikit-learn'
		],
		project_date: 'July 2023 to Feb 2024'
	},
	{
		title: "⁠LexisNexis Risk Solutions",
		work_exp: [
			' ⁠Generated ad-hoc reports in Excel to convey insights and recommendations to stakeholders and conducted t-tests to extract information on property type comparisons, panned out in 3% improvement in accuracy.',
			' ⁠Redesigned business cases to target SME’s (low and medium enterprises) by employing K-Means Clustering for customer segmentation, resulting in a 5% increase in business performance across targeted enterprise groups.',
			'   ⁠Enhanced project scope for effective implementation and business by redesigning PD (Probability Default) documentation, ensuring alignment with low and medium-income community outreach'
		],
		project_date: 'May 2022 -July 2022'

	},
	{
		title: "Adani",
		work_exp: [
			' ⁠Monitored and analyzed network traffic for Barclays Banking Division in India and Africa, identified bottlenecks and optimized resources to prevent network downtime.',
			'  ⁠Leveraged data related to third-party value-added services (VAS) for Barclays using Excel’s VBA, macros, charts, and graphs to offer strategic business recommendations that led to streamlining the workflow',
			' ⁠Automated sales data pipeline using SQL on multiple datasets with over 160k rows, which reduced the time spent manually creating dashboards by 94%.',
			' ⁠Implemented MS Access to design and build relational databases to manage and analyze fixed income analysis for the operational accounting team, resulting in increased efficiency by 60%.'
		],
		project_date: 'Feb 2019- July 2021'

	}
]
export function TechnologiesSection() {

	return (
		<LazyMotion features={domAnimation}>
			<section id="tech" className="section">
				<HeadingDivider title="Work Experience" />
				
				<div className="my-8">
					{data.map((ele,i)=>(
						<div className="" key={i}>
							<div className="flex justify-between">
								<div className="text-[28px] ">{ele.title}</div>
								<p className="text-gray-400">{ele.project_date}</p>
								</div>
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
