import React from 'react';

const PagingButton = ({buttonText, page, onPageClicked, isCurrentPage}) => {

	const onButtonClicked = (e) => {
		e.preventDefault();
		if(!isCurrentPage){
			onPageClicked(page);
		}
	};

	return(
		<a
			className={`paging__button ${ isCurrentPage ? 'paging__button--current':''}`}
			onClick={onButtonClicked}>
			{buttonText}
		</a>
	);
}

export default PagingButton;
