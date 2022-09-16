import React, { useState, useEffect } from 'react'
import styles from './ReadMore.module.scss';

const ReadMore = ({ text, limit }) => {
	const [currText, setCurrText] = useState(text);
	const [readMore, setReadMore] = useState(false);
	const [readLess, setReadLess] = useState(false);

	useEffect(() => {
		if (text?.length > limit) {
			decreaseText();
		} else {
			setCurrText(text);
		}
	}, [])

	const decreaseText = () => {
		setCurrText(text.substring(0, limit) + "...")
		setReadMore(true);
		setReadLess(false);
	}

	const increaseText = () => {
		setCurrText(text);
		setReadMore(false);
		setReadLess(true);
	}

	return (
		<div className={styles.Read_more}>
			<span>{currText}</span>
			{readMore ? <span onClick={increaseText} className={styles.read_more}>read more</span> : ""}
			{readLess ? <span onClick={decreaseText} className={styles.read_more}>read less</span> : ""}
		</div>
	)
}

export default ReadMore