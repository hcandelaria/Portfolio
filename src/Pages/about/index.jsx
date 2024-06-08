import { motion } from 'framer-motion';
import React from 'react';
import Thumbnail from '../../Components/thumbnail';

const section = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};
const paragraph = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

class About extends React.Component {
  render() {
    return (
      <motion.section
        className='min-h-screen items-center justify-center p-2 text-white sm:ml-40 sm:space-y-6'
        id='about-page'
        data-testid='about-page'
        variants={section}
        initial='hidden'
        animate='visible'
      >
        {/* Profile image */}
        <motion.div className='mt-10 px-20 sm:hidden' variants={paragraph}>
          <Thumbnail className='mx-20' />
        </motion.div>
        {/* Paragraph 1 */}
        <motion.div variants={paragraph}>
          <h1>Hello there!</h1>
          <p className='flow-text'>
            My name is Hector. I am an enthusiastic software engineer from New
            Jersey.
          </p>
        </motion.div>
        {/* Paragraph 2 */}
        <motion.div variants={paragraph}>
          <p className='flow-text'>
            Since a very young age, I have developed a passion for technology,
            solving complex problems and data analyzes.
          </p>
        </motion.div>
        {/* Paragraph 3 */}
        <motion.div variants={paragraph}>
          <p className='flow-text'>I’ve experience within:</p>
          <ul className='px-4'>
            <li className='flow-text'>
              The Health sector, as an Application Analyzes at Atlantic
              Health System. Utilizing my skills for troubleshooting systems,
              networks, automation and data entry.
            </li>
            <li className='flow-text'>
              The Education sector, as an Teacher Assistant at Rutgers
              university. Teaching, mentoring, helping and inspiring youth and
              veteran developers learn new technologies.
            </li>
          </ul>
        </motion.div>
        {/* Paragraph 4 */}
        <motion.div variants={paragraph}>
          <p className='flow-text'>
            I enjoy developing software, learning new technologies, mentoring
            and helping others. I've continuously learned new technologies to
            pursuit my passion and consider myself a jack-of-all-trades.
          </p>
        </motion.div>
        {/* Paragraph 5*/}
        <motion.div variants={paragraph}>
          <p>
            <span>"</span>Jack of all trades, Master of None, Though Oftentimes
            better Than master of one.<span>"</span>
          </p>
        </motion.div>
      </motion.section>
    );
  }
}

export default About;
