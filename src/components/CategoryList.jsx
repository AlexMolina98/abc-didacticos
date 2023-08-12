import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgMatematicas,
	imgEspañol,
	/*imgFilosofia,
	imgGeografia,
	imgHistoria,
	imgLiteratura,
	imgTecnologia,*/
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			{/* Category Link Ciencia */}
			<CategoryCard
				category={categories.matematicas}
				src={imgMatematicas}
				alt={`Categoría ${categories.matematicas}`}
				gradientColor=' from-purple-500 to-pink-500'
			/>
			{/* Category Link Deportes */}
			<CategoryCard
				category={categories.español}
				src={imgEspañol}
				alt={`Categoría ${categories.español}`}
				gradientColor='from-lime-400 to-teal-700'
			/>
			{/* 
			<CategoryCard
				category={categories.filosofia}
				src={imgFilosofia}
				alt={`Categoría ${categories.filosofia}`}
				gradientColor='from-red-400 to-zinc-400'
			/>
			
			<CategoryCard
				category={categories.geografia}
				src={imgGeografia}
				alt={`Categoría ${categories.geografia}`}
				gradientColor='from-cyan-200 to-lime-200'
			/>
			
			<CategoryCard
				category={categories.historia}
				src={imgHistoria}
				alt={`Categoría ${categories.historia}`}
				gradientColor='from-sky-300 to-indigo-900'
			/>
			
			<CategoryCard
				category={categories.literatura}
				src={imgLiteratura}
				alt={`Categoría ${categories.literatura}`}
				gradientColor='from-amber-400 to-emerald-600'
			/>
			
			<CategoryCard
				category={categories.tecnologia}
				src={imgTecnologia}
				alt={`Categoría ${categories.tecnologia}`}
				gradientColor='from-violet-900 to-rose-500 '
			/> */} 
		</div>
	);
};
