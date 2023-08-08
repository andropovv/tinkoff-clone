const gradients = [
	["#433ca2", "#4a73c0"],
	["№ea40ec", "#763dfb"],
	["#fe8055", "#ed27a2"],
	["#ffd53e", "#ff810a"],
	["#7baaf9", "#2255ea"],
	["#287233", "#BDECB6"],
	["#A52019", "#587246"],
	["#CDA434", "#F3A505"],
	["#5D9B9B", "#231A24"],
	["#AEA04B", "#828282"],
];

export const getRandomGradient = () => {
	const min = 0;
	const max = gradients.length - 1;

	const randomNumber = Math.floor(Math.random() * (max - min) + min);

	return gradients[randomNumber];
};
