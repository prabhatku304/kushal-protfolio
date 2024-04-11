/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
						As a Data Scientist, I apply my Machine Learning and Cloud Technology skills to solve challenging business problems and deliver data-driven solutions. I have developed product strategies, detected anomalies, and designed A/B testing models to optimize user experience and revenue growth. I am passionate about exploring Data Science and learning new tools and techniques to enhance my analytical capabilities.

						</p>
						<br />
						<p>
						I have a Master's degree in Business Analytics from The University of Texas at Dallas, where I graduated with recognition for my academic excellence. I also have a Bachelor's degree in Computer Science from the International Institute of Information Technology Bhubaneswar. During my studies, I gained hands-on experience in data regression, sentiment analysis, and SQL optimization through various internships and projects. I am a fast learner, a great team player, and motivated to succeed in my career.
						</p>
						
					</div>
				</div>

				
			</section>
		</LazyMotion>
	);
}
