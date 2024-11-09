// components/MySkills.tsx

import SkillsSection from '../components/skils';
import Three from '../components/three/threeDObject';

const software = [
  { name: 'Cypress', icon: '/icon/cypress.svg' },
  { name: 'Jira', icon: '/icon/jira.svg' },
  { name: 'GitLab CI/CD', icon: '/icon/gitlab.svg' },
  { name: 'JMeter', icon: '/icon/jmeter.svg' },
  { name: 'Postman', icon: '/icon/postman.svg' },
  { name: 'Android Studio', icon: '/icon/android.svg' },
  { name: 'OWASP ZAP', icon: '/icon/zap.svg' },
  { name: 'Chrome DevTools', icon: '/icon/chrome.svg' },
  { name: 'Moodle', icon: '/icon/moodle.svg' },
];

const uisoftware = [
  { name: 'Figma', icon: '/icon/figma.svg' },
  { name: 'Adobe XD', icon: '/icon/adobe.svg' },
  { name: 'Photoshop', icon: '/icon/photoshop.svg' },
  { name: 'Illustrator', icon: '/icon/illustrator.svg' },
  { name: 'After Effects', icon: '/icon/aftereffects.svg' },
  { name: 'VSCode', icon: '/icon/vscode.svg' },
];

// Main component that uses SkillsSection
const MySkills: React.FC = () => {
  return (
    <div className="space-y-32 relative py-10">

      {/* First Skills Section */}
      <div className="relative z-10">
        <SkillsSection skills={software} />
      </div>

      {/* Three.js Object positioned in the center behind the skill sections */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-70">
        <Three opacity={0.5} />
      </div>

      {/* Second Skills Section */}
      <div className="relative z-10">
        <SkillsSection skills={uisoftware} />
      </div>
    </div>
  );
};

export default MySkills;
