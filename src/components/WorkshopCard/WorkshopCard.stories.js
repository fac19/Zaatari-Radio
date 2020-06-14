import WorkshopCard from './WorkshopCard';

export default {
	component: WorkshopCard,
	title: 'WorkshopCard',
};

// Need to provide data to story
export const defaultCard = () => {
	WorkshopCard();
};
