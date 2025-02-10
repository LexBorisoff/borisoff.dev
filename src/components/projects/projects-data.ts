import { IconType } from 'react-icons';
import { LuFolderTree, LuScrollText } from 'react-icons/lu';
import { MdOutlineWebhook } from 'react-icons/md';
import { TbPrompt, TbWorldSearch } from 'react-icons/tb';

interface ProjectInterface {
  name: string;
  Icon: IconType;
  url: string;
  description: string;
}

export const projects: ProjectInterface[] = [
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
    description: 'Interactive prompts',
  },
];
