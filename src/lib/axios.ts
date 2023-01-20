import axios from 'axios';
export const mostrarPropiedades = async (urlKey:string, UrlGetId:string) => {
	const UrlImages = import.meta.env.VITE_URL_GETIMAGES;
	await axios
		.get(UrlImages + `/${urlKey}`, {
			responseType: 'blob',
		})
		.then((response) => {
			
		});
};
