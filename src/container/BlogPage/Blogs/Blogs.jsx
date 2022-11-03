import React from 'react'
import styles from './Blogs.module.scss'
import BlogCard from '../../../components/UI/Cards/BlogCard/BlogCard';

const Blogs = () => {
	return (
		<div className={styles.Blogs}>
			<BlogCard />
			<BlogCard />
			<BlogCard />
			<BlogCard />
			<BlogCard />
			<BlogCard />
			<BlogCard />
		</div>
	)
}

export default Blogs