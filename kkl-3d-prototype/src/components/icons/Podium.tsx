import React from 'react';

const Podium = ({ ...props }) => {
	return (
		<svg
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
			viewBox='0 0 97 97'
			preserveAspectRatio='xMidYMid meet'
			{...props}
		>
			<g transform='translate(0,97) scale(0.1,-0.1)' fill='#000000' stroke='none'>
				<path
					d='M208 920 c-36 -37 -48 -58 -48 -80 0 -17 -8 -45 -17 -63 -9 -18 -19
					-50 -22 -72 l-6 -40 -55 -5 -55 -5 -3 -70 c-3 -63 -1 -72 20 -88 20 -17 25
					-38 45 -205 28 -234 28 -225 1 -237 -13 -6 -23 -19 -23 -30 0 -20 7 -20 440
					-20 433 0 440 0 440 20 0 11 -10 24 -22 30 -28 12 -28 3 0 237 20 167 25 188
					45 205 21 16 23 25 20 88 l-3 70 -55 5 -55 5 -6 40 c-3 22 -13 54 -22 72 -9
					18 -17 46 -17 63 0 41 -84 130 -124 130 -56 0 -97 -78 -63 -123 26 -35 91 -77
					118 -77 32 0 44 -16 54 -73 l7 -38 -143 3 -144 3 -3 36 c-2 29 3 42 27 67 58
					58 26 142 -54 142 -80 0 -112 -84 -54 -142 24 -25 29 -38 27 -67 l-3 -36 -144
					-3 -143 -3 7 38 c10 57 22 73 54 73 27 0 92 42 119 77 20 27 14 72 -13 98 -38
					39 -71 33 -127 -25z m92 -27 c0 -23 -68 -79 -81 -66 -11 11 47 83 67 83 8 0
					14 -8 14 -17z m429 -20 c18 -22 27 -41 22 -46 -13 -13 -81 43 -81 66 0 28 27
					19 59 -20z m-221 -47 c-2 -13 -10 -21 -23 -21 -23 0 -33 34 -14 45 20 13 40
					-1 37 -24z m402 -246 l0 -30 -425 0 -425 0 0 30 0 30 425 0 425 0 0 -30z m-44
					-127 c-3 -21 -13 -101 -21 -178 -9 -77 -18 -157 -21 -177 l-6 -38 -333 0 -333
					0 -6 38 c-3 20 -12 100 -21 177 -8 77 -18 157 -21 178 l-6 37 387 0 387 0 -6
					-37z'
				/>
				<path
					d='M180 431 c-12 -8 -12 -29 3 -157 10 -91 22 -151 29 -156 17 -10 529
					-10 546 0 7 5 19 65 29 156 15 128 15 149 3 157 -19 11 -591 11 -610 0z m560
					-68 c0 -9 -5 -56 -11 -105 l-12 -88 -232 0 -232 0 -12 88 c-6 49 -11 96 -11
					105 0 16 23 17 255 17 232 0 255 -1 255 -17z'
				/>
			</g>
		</svg>
	);
};

export default Podium;
