import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Projects.module.css'
import Project from './Project/Project';

const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Мои проекты</h2>
                <div className={style.project}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

export default Projects;