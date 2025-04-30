import React from "react";
import ProjectCard from "../card/ProjectCard";
import { useNavigate } from "react-router-dom";
import "./ProjectSection.css";

const ProjectSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "1",
      title: "Next.js 기반 웹사이트 개발 및 유지보수",
      description: "코드스테이츠 홈페이지 유지보수 및 리뉴얼 업무. 5명의 프론트엔드 개발자와 협업.",
      stack: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
      ],
    },
    {
      id: "2",
      title: "Next.js App Router 활용하여 웹사이트 개발",
      description: "포트폴리오 사이트 제작. SSG 및 데이터 분리 최적화 처리.",
      stack: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      ],
    },
    {
      id: "3",
      title: "선언적 Toast 컴포넌트 만들기",
      description: "디자인 시스템 Toast 및 기타 공통 컴포넌트 개발.",
      stack: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://raw.githubusercontent.com/storybookjs/brand/main/badge/icon-storybook.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      ],
    },
    {
      id: "4",
      title: "로그인 상태 관리 개발 및 테스트 작성",
      description: "JWT 인증 처리 및 마이페이지, 로그인 상태 관리 구현.",
      stack: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      ],
    },
  ];

  return (
    <section className="project-section">
      <h2 className="project-title">PROJECTS</h2>
      <div className="card-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            onClick={(id) => navigate(`/project/${id}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
