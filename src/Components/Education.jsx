import React from 'react';
import Slider from './Slider';
import EducationCard from './EducationCard';

export default function Education() {
    const educationData = [
        {
          school: 'Chas Academy',
          degree: 'Fullstack Javascript developer',
          year: '2022 - 2024',
          description: 'Skills in front och back-end frameworks',
        },
        {
          school: 'Complejo Educativo Catolico San Jose',
          degree: 'Business and administration program',
          year: '2013-2015',
          description: 'Focused on the foundations of business skills, sales strategies and business administration.',
        },
      ];

      return (
        <section>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl text-cyan-400 font-bold text-center mb-8 md:text-6xl md:mb-16">Education</h2>
            <Slider
              items={educationData}
              renderItem={(item) => (
                <EducationCard
                  school={item.school}
                  degree={item.degree}
                  year={item.year}
                  description={item.description}
                />
              )}
            />
          </div>
        </section>
      );
} 