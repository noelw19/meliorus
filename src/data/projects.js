import alo from "../images/alo.png";
import tempus from "../images/tempus.png";
import docbot from "../images/docbot.png";
import pottery from "../images/pottery.png";
import minotaur from "../images/minotaur.png";
import dct from "../images/dct1.png";

/**
 * Description Content Types
 */
export const DescriptionTypes = {
  PARAGRAPH: 'paragraph',
  LIST: 'list',
  HEADING: 'heading'
};

/**
 * Project Data Factory
 * Creates a standardized project object with consistent structure
 */
class ProjectFactory {
  static create({
    id,
    identifier,
    title,
    shortDesc,
    description, // Structured description blocks
    img,
    link,
    unfinished = false,
    techStack = [],
    features = []
  }) {
    return {
      id,
      identifier,
      title,
      shortDesc,
      description: description || [],
      img,
      link,
      unfinished,
      techStack,
      features
    };
  }
}

/**
 * Projects Data
 * Centralized project data with clean, structured descriptions
 */
export const projects = [
  ProjectFactory.create({
    id: 1,
    identifier: "Alo",
    title: "A Loved One (Alo)",
    shortDesc: "A Place to store your loved ones memory",
    description: [
      {
        type: DescriptionTypes.PARAGRAPH,
        content: "An app to store information about loved ones that have passed, includes QR code that can be placed on gravestone and points to the individuals digital resting point."
      }
    ],
    img: alo,
    link: "https://alo.meliorus.co.nz"
  }),
  ProjectFactory.create({
    id: 5,
    identifier: "Minotaur",
    title: "Minotaur",
    shortDesc: "Minotaur is a lightweight command-line tool for managing multiple servers. It lets you connect to servers via SSH, copy files to one or many machines using tags, and manage environments through simple JSON configs—all in one streamlined workflow powered by tmux.",
    description: [
      {
        type: DescriptionTypes.PARAGRAPH,
        content: "Minotaur is a command-line tool designed to streamline multi-server management and file deployment, built for developers and system administrators who need to manage multiple machines efficiently. Traditional tools like RDM and WinSCP can be slow and cumbersome when handling many servers, requiring repeated logins, file transfers, and context switching. Minotaur solves this by combining SSH access, file copying, and environment management into a single, cohesive workflow."
      },
      {
        type: DescriptionTypes.HEADING,
        content: "With Minotaur, you can:"
      },
      {
        type: DescriptionTypes.LIST,
        items: [
          "Connect to multiple servers simultaneously using tags and tmux, allowing parallel operations across machines.",
          "Copy single files, directories, or multiple items at once to many servers with a simple command.",
          "Define multiple environments (e.g., development, pre-production, production) with separate JSON configuration files.",
          "Use SSH key authentication for secure, passwordless logins, with the option to override usernames on a per-server basis.",
          "Quickly access servers by IP address or by the custom name you assign in your config, reducing the need to remember multiple credentials."
        ]
      },
      {
        type: DescriptionTypes.PARAGRAPH,
        content: "Minotaur is ideal for teams or individuals managing multiple servers, deploying updates, or performing batch administrative tasks. By leveraging tmux sessions, it keeps all connections organized in one terminal window."
      }
    ],
    img: minotaur,
    link: "https://github.com/noelw19/minotaur"
  }),
  ProjectFactory.create({
    id: 2,
    identifier: "DocBot",
    title: "DocBot",
    shortDesc: "AI Rag Application to upload documents and query the AI about these documents.",
    description: [
      {
        type: DescriptionTypes.PARAGRAPH,
        content: "AI Retrieval Augmented Generation application. Create an account and upload multiple documents, choose a document to chat about and ask questions regarding the document."
      }
    ],
    img: docbot,
    link: "https://rag.meliorus.co.nz"
  }),
  ProjectFactory.create({
    id: 3,
    identifier: "DCT",
    title: "Digital Certificate Tool",
    shortDesc: "Tool to create certificates, csr's and to decode pem files.",
    description: [
      {
        type: DescriptionTypes.PARAGRAPH,
        content: "A tool that allows you to create CA certificates, and subordinate certificates with provided CA certificates and key, including DNS sans, key usages and extended key usages. This small app also has the ability to create CSR's and decode pem files whether they are uploaded or pasted into the GUI. This is built using ReactJS and WASM with golang."
      }
    ],
    img: dct,
    link: "https://dct.meliorus.co.nz"
  }),
  ProjectFactory.create({
    id: 4,
    identifier: "Pottery",
    title: "Pottery",
    shortDesc: "Honey pot instance application to allow monitoring of requests sent by scanners that may be hitting your open ports.",
    description: [
      {
        type: DescriptionTypes.PARAGRAPH,
        content: "Deploys multiple honeypot instances on your server, with options to connect securely to a parent instance via MTLS."
      }
    ],
    img: pottery,
    link: "https://github.com/noelw19/Pottery"
  })
];

/**
 * Get project by identifier
 */
export const getProjectByIdentifier = (identifier) => {
  return projects.find(p => p.identifier === identifier);
};

/**
 * Get all projects
 */
export const getAllProjects = () => {
  return projects;
};

