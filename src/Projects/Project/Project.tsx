import React from 'react';
import style from './Project.module.css'

const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.imgProject}>
                <a className={style.urlProject} href="">Смотреть</a>
            </div>
            <div className={style.wrapper}>
                <div className={style.title}>Название проекта</div>
                <span className={style.description}>Краткое описание</span>
            </div>
        </div>
    );
};

export default Project;