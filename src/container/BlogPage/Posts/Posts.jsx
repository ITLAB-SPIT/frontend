import React from 'react'
import styles from './Posts.module.scss'
import PostCard from '../../../components/UI/Cards/PostCard/PostCard';

const Posts = () => {
	return (
		<div className={styles.Posts}>
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
		</div>
	)
}

export default Posts