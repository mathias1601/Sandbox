import { useEffect, useState } from 'react'
import ProjectModal, { ProjectRepo } from './ProjectModal';
import pawCastBanner from '../assets/pawcast_banner.jpg';
import sandboxBanner from '../assets/sandbox_banner.jpg';
import lawnmowerBanner from '../assets/lawnmower_banner.png';
import ondsperaBanner from '../assets/ondspera_banner.png';
import pomoflexBanner from '../assets/pomoflex_banner.png';
import periodleBanner from '../assets/periodle_banner.png';
import '../css/projects.css'


const extraRepos: ProjectRepo[] = [{
    name: "Ondspera",
    svn_url: "https://github.com/ka-thas/ondspera",
    description: "Ondspera er den onde versjonen av Inspera, eksamensplattformen. Det er et ragebait-puslespill laget i Next.js av meg og vennen min Ka. Spillet simulerer den virkelig onde naturen til Inspera."
}]


function GithubRepo() {
    const repoImages: Record<string, string> = {
        'PawCast': pawCastBanner, 
        'Sandbox': sandboxBanner,
        'Wild_Lawnmower': lawnmowerBanner,
        'Ondspera': ondsperaBanner,
        'PomoFlex': pomoflexBanner,
        'Periodle': periodleBanner
    }

    const [repoData, setRepoData] = useState<ProjectRepo[]>([]);
    const [selectedProject, setSelectedProject] = useState<ProjectRepo | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/users/mathias1601/repos")
        .then((res) => res.json())
        .then(
            (result) => {
                result.push(...extraRepos)

                const hasBanner = [...result].filter((item) => repoImages[item.name])
                setRepoData(hasBanner)
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const closeProjectModal = () => {
        setSelectedProject(null);
    }


  return   (
    <>
        <div style={{ textAlign: "left", fontSize: "19px" }}>
            <p>
                Her er en liste over noen av prosjektene mine. Mer kode kan bli funnet på <a href={"https://github.com/mathias1601/"}>GitHub</a>
            </p>
        </div>
        <div className='display'>
            
            <div className='banner_container'>
                {repoData.map((item) => (
                    <button
                        key={item.name}
                        className='link_container project_tile'
                        type='button'
                        onClick={() => setSelectedProject(item)}
                    >
                        <div className='display_banner'>
                            <div>
                                <div className='banner_image_wrapper'>
                                    <img className='banner' src={repoImages[item.name]} alt={`${item.name} banner`} />
                                </div>
                                <div className='banner_overlay'>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
        <ProjectModal
            project={selectedProject}
            bannerImage={selectedProject ? repoImages[selectedProject.name] : undefined}
            show={selectedProject !== null}
            onClose={closeProjectModal}
        />
    </>
  )
}

export default GithubRepo
