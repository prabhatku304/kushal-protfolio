import { HeadingDivider } from "components"
import { LazyMotion, domAnimation } from "framer-motion"

const data = [
    {
        title: 'Programming Languages',
        skills: 'Python (Pandas, NumPy, Scikit-learn, Scipy, Statsmodels), R, SQL'
    },
    {
        title: 'Databases',
        skills: 'MySQL, MongoDB, Neo4j, Database Design'
    },
    {
        title: 'Data Visualization Tools',
        skills: 'Tableau, Power BI, Seaborn, Matplotlib Data Engineering: ETL, Hadoop, Apache Spark '
    },
    {
        title: 'Tech Stack',
        skills: 'Azure, AWS, Microsoft Excel, PowerPoint, Linux OS, Docker, Kubernetes Machine Learning & Statistics: Data Mining, Classification, Regression, Clustering Algorithms, Tree-based models, Time Series Analysis, Feature Engineering, Statistical Analysis, Predictive Modeling, Hypothesis Testing, A/B Testing '
    }
]
const Skills = ()=>{
    return (
        <LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Skill Set" />
				
				<div className="my-8">
                {data.map((ele,i)=>(
						<div className="" key={i}>
								<div className="text-[28px] ">{ele.title}</div>
					<div className="px-10 py-4 md:w-[60%] w-[100%]">
						{ele.skills}
					</div>
						</div>
					))}
				</div>

				
			</section>
		</LazyMotion>
    )
}

export default Skills