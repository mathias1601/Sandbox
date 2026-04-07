import { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import pawCastBanner from '../assets/pawcast_banner.jpg';
import sandboxBanner from '../assets/sandbox_banner.jpg';
import '../css/projects.css'


function GithubRepo() {
    const repoImages: Record<string, string> = {
        'PawCast': pawCastBanner, 
        'Sandbox': sandboxBanner
    }

    const [avatarUrl, setAvatarURL] = useState();
    const [githubName, setGithubName] = useState();
    const [githubLink, setGithubLink] = useState();
    const [repoData, setRepoData] = useState();

    useEffect(() => {
        fetch("https://api.github.com/users/mathias1601/repos")
        .then((res) => res.json())
        .then(
            (result) => {
                const list = result.map((item: any) => (
                    <div key={item.name}>
                        {repoImages[item.name] ? (
                            <div  className='display_banner' >
                                <img className='banner' src={repoImages[item.name]} alt="No banner" />
                                <a className='github_btn' href={item.svn_url}>
                                    <FaGithub />
                                </a>
                            </div>
                        ) : (
                            <a href={item.svn_url}>{item.name}</a>
                        )}
                       
                    </div>
                ))
                setRepoData(list)
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);


    useEffect(() => {
        fetch("https://api.github.com/users/mathias1601")
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result);
                setAvatarURL(result.avatar_url);
                setGithubName(result.login);
                setGithubLink(result.html_url)
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);


  return   (
    <>
    <div className='display'>
        <div className='github_card'>
            <Card style= {{width: "75%"}} >
                <Card.Img variant="top" src={avatarUrl}/>
                <h1>{githubName}</h1>
                <Card.Text>
                    Du kan se på prosjektene mine her!
                </Card.Text>
                <a className='btn btn-primary' href={githubLink}><FaGithub /></a>
            </Card>
        </div>
        <div className='repo'>
            {repoData}
        </div>
    </div>
    </>
  )
}

export default GithubRepo