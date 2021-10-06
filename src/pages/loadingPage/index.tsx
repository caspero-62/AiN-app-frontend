import React from 'react';

import './loadingPage.styles.scss';

const LoadingPage = (): JSX.Element => {
	return (
		<section id='loading__page'>
			<div className='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<p className='copyright__text__loading'>© Copyright AiN 2021.</p>
		</section>
	);
};

export default LoadingPage;
