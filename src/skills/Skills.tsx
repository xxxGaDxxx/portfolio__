import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Скилы</h2>
                <div className={style.skills}>
                    <Skill title={'Ts'} description={' skills are premised on the mastery  complex thinking skills.'}/>
                    <Skill title={'React'} description={'These skills  mastery of less complex thinking skills.'}/>
                    <Skill title={'JS'} description={' on the mastery of less complex thinking skills.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;