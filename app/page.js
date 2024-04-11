"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";
import Skills from "./sections/skills";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<TechnologiesSection />
			<ProjectsSection />
			<Skills />
		</div>
	);
}
