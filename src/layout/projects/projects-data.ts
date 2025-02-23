import { IconType } from 'react-icons';
import { LuFolderTree, LuScrollText } from 'react-icons/lu';
import { TbFishHook, TbPrompt, TbWorldSearch } from 'react-icons/tb';

enum ProjectType {
  CLI = 'tools',
  Libraries = 'libraries',
}

interface ProjectInterface {
  name: string;
  Icon: IconType;
  url: string;
  description: string;
  projectType: ProjectType;
}

function getUrl(repo: string): string {
  return `https://github.com/LexBorisoff/${repo}`;
}

export const projects: ProjectInterface[] = [
  {
    name: 'fs-hooks',
    Icon: TbFishHook,
    url: getUrl('fs-hooks'),
    description: 'Library for working with the file system in Node.js',
    projectType: ProjectType.Libraries,
  },
  {
    name: 'search-web',
    Icon: TbWorldSearch,
    url: getUrl('search-web'),
    description: 'Customizable browser web searches from the shell',
    projectType: ProjectType.CLI,
  },
  {
    name: 'package-scripts',
    Icon: LuScrollText,
    url: getUrl('package-scripts'),
    description: 'Interactively select and run package scripts',
    projectType: ProjectType.CLI,
  },
  {
    name: 'switch-dir',
    Icon: LuFolderTree,
    url: getUrl('switch-dir'),
    description: 'Fast and interactive navigation between directories',
    projectType: ProjectType.CLI,
  },
  {
    name: 'prompts',
    Icon: TbPrompt,
    url: getUrl('prompts'),
    description: 'Interactive shell prompts with improved rendering',
    projectType: ProjectType.Libraries,
  },
];
