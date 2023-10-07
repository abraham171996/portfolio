

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../store/actions/projectsActions';
import styles from './projectsBanner.module.scss';
import { Link } from 'react-router-dom';

const ProjectsBanner = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.projects);

    useEffect(() => {

        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <div className={styles.ProjectsBanner}>
            <h2>My Projects</h2>
            <div className={styles.ProjectsBanner__cards}>
                {projects.map((item, index) => (
                    <div key={`${item}_${index}`} className={styles.ProjectsBanner__cards__card}>
                        <Link to={item.to} target='_blank'>
                            <figure>
                                <img src={item.image} alt="" />
                            </figure>
                            <h4>{item.name}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsBanner;
