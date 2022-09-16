import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children, useEffect } from 'react'

const ActiveLink = ({ children, activeClassName, prefetch, ...props }) => {
	const { asPath } = useRouter();
	const router = useRouter();
	const child = Children.only(children)
	const childClassName = child.props.className || ''

	useEffect(() => {
		if (prefetch) router.prefetch(props.href);
	}, [])

	// pages/index.js will be matched via props.href
	// pages/about.js will be matched via props.href
	// pages/[slug].js will be matched via props.as

	const className =
		asPath === props.href || asPath === props.as
			? `${childClassName} ${activeClassName}`.trim()
			: childClassName

	return (
		<Link {...props}>
			{React.cloneElement(child, {
				className: className || null,
			})}
		</Link>
	)
}

ActiveLink.propTypes = {
	activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink