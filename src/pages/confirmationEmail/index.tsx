import React from 'react';

import MailIcon from '../../assets/svg/MailIcon';

import './confirmationEmail.styles.scss';

const ConfirmationEmail = (): JSX.Element => {
	return (
		<section id='confirmation__email'>
			<div className='confirmation__email__container'>
				<div className='mail__icon'>
					<MailIcon />
				</div>
				<h1 className='check__mail'>Check your mail</h1>
				<h3 className='follow__up__text'>
					We have sent a password recovery instructions to your email.
				</h3>
				<button className='reset__submit__button'>RESET PASSWORD</button>
				<div className='reset__password__link'>
					<p>Did not receive the email?</p>
					<p className='forgot__password'>
						<span>Check your spam filter or &nbsp;</span>
						<button>Send mail again</button>
					</p>
				</div>
				<p className='copyright__text'>© Copyright AiN 2021.</p>
			</div>
		</section>
	);
};

export default ConfirmationEmail;
