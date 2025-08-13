
import { Globe } from '@/components/ui/globe';
import { Boxes } from '@/components/ui/background-boxes';
import { IconCloud } from "@/components/ui/icon-cloud";
import NextImage from 'next/image';
import CopyEmailButton from '@/components/ui/copy-email-button';

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];


export default function Tech() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );
    return (
        <div className='c-space container mx-auto max-w-7xl grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[14rem] mt-12'>
            <div className='border border-slate-900 rounded-3xl bg-primary grid-1 flex justify-center items-center flex-col'>
                <Boxes />
                <div className='absolute z-40'>
                    <h1 className="text-3xl font-bold text-center">
                        Powerful Team
                    </h1>
                    <p className="subtext">
                        Our team is capable of implementing anything.
                    </p>
                </div>
            </div>
            <div className='border border-slate-900 rounded-3xl bg-primary grid-2'>
                <div className='w-full h-full absolute left-0 top-0 bg-gradient-to-b from-primary z-40'></div>
                <h1 className='text-3xl font-bold p-8 z-50 absolute'>I’m very flexible with time zone communications</h1>
                <Globe />
            </div>
            <div className='border border-slate-900 rounded-3xl bg-primary grid-3'>
                <div className='absolute right-0 top-[-35]'>
                    <IconCloud images={images} />
                </div>
                <div className='px-8 flex items-start justify-center flex-col h-full absolute z-40'>
                    <p className='subtext'>I constantly try to improve</p>
                    <h1 className='text-3xl font-bold'>My Team Stack</h1>
                </div>
            </div>
            <div className='border border-slate-900 rounded-3xl bg-primary grid-4'>
                <NextImage className='absolute right-0 bottom-0' src="/assets/images/page.png" height="300" width="400" alt="" />

                <div className='p-8 flex items-start flex-col h-full absolute z-40'>
                    <h1 className='text-3xl font-bold'>Tech enthusiast with a passion for development.</h1>
                </div>
            </div>
            <div className='border border-slate-900 rounded-3xl bg-primary grid-6'>
                <NextImage className='absolute right-0 bottom-0 w-[250px] md:w-[450px] md:bottom-8' src="/assets/images/code.png" height="300" width="400" alt="" />

                <div className='p-8 flex items-start flex-col h-full absolute z-40'>
                    <p className='subtext'>I constantly try to improve</p>
                    <h1 className='text-3xl font-bold'>My Team Stack</h1>
                </div>
            </div>
            <div className='border border-slate-900 rounded-3xl bg-primary grid-5 '>
                <NextImage className='absolute left-0 bottom-0' src="/assets/images/background.png" height="300" width="400" alt="" />

                <div className='absolute flex w-full h-full justify-center items-center flex-col p-4'>
                    <h1 className='text-3xl font-bold text-center mb-8'>Do you want to start a project together?</h1>
                    <CopyEmailButton />
                </div>
            </div>
        </div>
    )
}
