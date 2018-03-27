import React from 'react';
import PagingButton from './PagingButton';

const Paging = ({currentPage, onPageClicked}) => {

	const getPageButtons = () => {
		const reactElements = [];
		const lastPageIndex = 10;

		if(currentPage>1){
			reactElements.push(
				<PagingButton key="pageButtonPrev" buttonText="prev" page={currentPage-1} onPageClicked={onPageClicked}/>
			);
		}

		let buttonIndex = currentPage - 2;
		while (buttonIndex<=currentPage+2 && buttonIndex<=lastPageIndex){
			if(buttonIndex>0){
				reactElements.push(
					<PagingButton
						key={`pageButton${buttonIndex}`}
						buttonText={buttonIndex}
						page={buttonIndex}
						onPageClicked={onPageClicked}
						isCurrentPage={buttonIndex===currentPage}
					/>
				);
			}
			buttonIndex++;
		}

		if(currentPage<lastPageIndex){
			reactElements.push(
				<PagingButton key="pageButtonNext" buttonText="next" page={currentPage+1} onPageClicked={onPageClicked}/>
			);
		}

		return reactElements;
	};

	return(
		<div className="paging">
			{getPageButtons()}
		</div>
	);
}

export default Paging;
