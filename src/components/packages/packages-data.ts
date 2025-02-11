import { IconType } from 'react-icons';
import { LuFolderTree, LuScrollText } from 'react-icons/lu';
import { MdOutlineWebhook } from 'react-icons/md';
import { SiEslint } from 'react-icons/si';
import { TbPrompt, TbWorldSearch } from 'react-icons/tb';

interface ProjectInterface {
  name: string;
  Icon: IconType;
  url: string;
  description: string;
}

export const nodeProjects: ProjectInterface[] = [
  {
    name: 'fs-hooks',
    Icon: MdOutlineWebhook,
    url: 'https://github.com/LexBorisoff/fs-hooks',
    description: 'Library for working with the file system in Node.js',
  },
  {
    name: 'search-web',
    Icon: TbWorldSearch,
    url: 'https://github.com/LexBorisoff/search-web',
    description: 'Browser web searches from the shell',
  },
  {
    name: 'package-scripts',
    Icon: LuScrollText,
    url: 'https://github.com/LexBorisoff/package-scripts',
    description:
      'Interactively select and run package scripts using any package manager',
  },
  {
    name: 'switch-dir',
    Icon: LuFolderTree,
    url: 'https://github.com/LexBorisoff/switch-dir',
    description: 'Fast and interactive navigation between directories',
  },
  {
    name: 'prompts',
    Icon: TbPrompt,
    url: 'https://github.com/LexBorisoff/prompts',
    description:
      'Interactive prompts with abstracted methods and improved rendering',
  },
  {
    name: 'eslint-plugin',
    Icon: SiEslint,
    url: 'https://github.com/LexBorisoff/eslint-plugin',
    description: 'ESLint plugin with my favourite config rules',
  },
];
