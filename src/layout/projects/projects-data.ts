import { IconType } from 'react-icons';
import { LuFolderTree, LuScrollText } from 'react-icons/lu';
import { SiEslint } from 'react-icons/si';
import { TbFishHook, TbPrompt, TbWorldSearch } from 'react-icons/tb';

interface ProjectInterface {
  name: string;
  Icon: IconType;
  url: string;
  description: string;
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
  },
  {
    name: 'search-web',
    Icon: TbWorldSearch,
    url: getUrl('search-web'),
    description: 'Browser web searches from the shell',
  },
  {
    name: 'package-scripts',
    Icon: LuScrollText,
    url: getUrl('package-scripts'),
    description:
      'Interactively select and run package scripts using any package manager',
  },
  {
    name: 'switch-dir',
    Icon: LuFolderTree,
    url: getUrl('switch-dir'),
    description: 'Fast and interactive navigation between directories',
  },
  {
    name: 'prompts',
    Icon: TbPrompt,
    url: getUrl('prompts'),
    description:
      'Interactive prompts with abstracted methods and improved rendering',
  },
];
