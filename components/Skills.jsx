import React from 'react'
import Image from 'next/image'

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>

        <div className='max-w-[1400px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>My Languages:</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Begin Skill */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/javascript.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/typescript.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TypeScript</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/react.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/nextjs.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next.js</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
                {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/css.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>

                    </div>
                </div> */}
            {/* End Skill */}
            {/* Begin Skill */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/tailwind.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind CSS</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/node.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node.js</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
                {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/html.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>

                    </div>
                </div> */}
            {/* End Skill */}
            {/* Begin Skill */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/express.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Express.js</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/postgresql.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PostgreSQL</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/sequelize.svg' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Sequelize.js</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/passport.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Passport.js</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/redux.png' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Redux</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            {/* Begin Skill */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/assets/skills/solidity.svg' className='w-20 h-20' width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Solidity</h3>
                        </div>

                    </div>
                </div>
            {/* End Skill */}
            </div>
        </div>

    </div>
  )
}

export default Skills
