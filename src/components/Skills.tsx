import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  const { frontend, ...otherCategories } = SKILL_CATEGORIES;
  const otherSkillCategories = Object.values(otherCategories);

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Moje Dovednosti
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-12">
          Baví mě tvořit nejen krásné, ale i funkční weby – od návrhu po implementaci.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {frontend.skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="flex flex-col items-center gap-4 p-6 bg-secondary rounded-lg shadow-md border border-border-color w-36 h-36 justify-center transition-transform transform hover:-translate-y-2 duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill.icon}
              <span className="font-medium text-text-primary">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-24 animate-fade-in-up max-w-4xl mx-auto" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-text-primary">
            Další technologie a nástroje
          </h3>
          <div className="space-y-8">
            {otherSkillCategories.map((category) => (
              <div key={category.title}>
                <h4 className="text-xl font-semibold text-accent-start mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-secondary text-text-secondary text-base rounded-md border border-border-color">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;