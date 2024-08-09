import { motion } from "framer-motion";
import React from "react";
import Loading from "../../Components/loading";
import Note from "../../Components/note";
import { getAllItems } from "../../libs/api";

const section = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects || null,
    };
    this.getProjects = this.getProjects.bind(this);
  }
  /**
   * Get projects
   * Set state.projects to list of projects
   */
  async getProjects() {
    let data = await getAllItems();
    // Sort data dec
    data = data.projects.sort((a, b) => {
      return b.id - a.id;
    });
    this.setState({ projects: data });
  }

  componentDidMount() {
    if (!this.state.projects) {
      this.getProjects();
    }
  }
  render() {
    return (
      <motion.section
        id="projects-page"
        data-testid="projects-page"
        className="min-h-screen items-center justify-center py-4 sm:ml-40"
      >
        {this.state.projects ? (
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            id="projects-container"
            variants={section}
            initial="hidden"
            animate="visible"
          >
            {this.state.projects.map((project) => {
              return (
                <Note className="shadow-lg" key={project.id} data={project} />
              );
            })}
          </motion.ul>
        ) : (
          <Loading />
        )}
      </motion.section>
    );
  }
}

export default Projects;
