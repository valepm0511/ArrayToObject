//ARRAY A OBJETO

const car = [["brand","Ford"],["model","Mustang"],["year",1964]];
const arrayToObjets = (array2d) => {
	let newObject = {}
	for(var i = 0; i<array2d.length; i++){
		newObject[array2d[i][0]] = array2d[i][1];
	}
	return newObject;
}
console.log(arrayToObjets(car));

//OBJETO A ARRAY

const car = {
	brand : "Ford",
	model : "Mustang",
	year : 1964,
}
const objectToArray = (object) =>{
	let array2d = [];
	let properties = Object.keys(object);
	for(let i = 0; i<properties.length; i++){
		array2d.push([properties[i],object[properties[i]]]);
	}
	return array2d;
}
console.log(objectToArray(car));



