import { Button, Modal } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export interface ProjectRepo {
    name: string;
    svn_url: string;
    description?: string | null;
    language?: string | null;
    html_url?: string;
    homepage?: string | null;
}

interface ProjectModalProps {
    project: ProjectRepo | null;
    bannerImage?: string;
    show: boolean;
    onClose: () => void;
}

function ProjectModal({ project, bannerImage, show, onClose }: ProjectModalProps) {
    if (!project) {
        return null;
    }

    const githubUrl = project.html_url ?? project.svn_url;
    const homepageUrl = project.homepage ?? null;

    return (
        <Modal show={show} onHide={onClose} centered size="xl">
            <Modal.Header closeButton>
                <Modal.Title>{project.name}</Modal.Title>
            </Modal.Header>
            {bannerImage && (
                <img
                    className='project_modal_banner'
                    src={bannerImage}
                    alt={`${project.name} banner`}
                />
            )}
            <Modal.Body>
                <p className='project_modal_description'>
                    {project.description ?? null}
                </p>
                {project.language && (
                    <p className='project_modal_meta'>
                        Primærteknologi: {project.language}
                    </p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onClose}>
                    Lukk
                </Button>
                <Button
                    variant='primary'
                    href={githubUrl}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGithub className='project_modal_icon' />
                    GitHub
                </Button>
                {homepageUrl && (
                    <a className="btn btn-primary"  href={homepageUrl} target='_blank' rel='noreferrer'>
                        Demo
                    </a> 
                    )}
            </Modal.Footer>
        </Modal>
    );
}

export default ProjectModal;
